'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Calculator,
  Building2,
  Users,
  Layers,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react';
import { useAudience } from '../contexts/AudienceContext';

// Tool data with estimated monthly costs
const tools = [
  { id: 'slack', name: 'Slack', cost: 15, icon: '💬' },
  { id: 'hubspot', name: 'HubSpot', cost: 800, icon: '🔶' },
  { id: 'mailchimp', name: 'Mailchimp', cost: 100, icon: '📧' },
  { id: 'hootsuite', name: 'Hootsuite', cost: 99, icon: '🦉' },
  { id: 'semrush', name: 'SEMrush', cost: 130, icon: '📊' },
  { id: 'asana', name: 'Asana', cost: 25, icon: '✅' },
  { id: 'zapier', name: 'Zapier', cost: 50, icon: '⚡' },
  { id: 'chatgpt', name: 'ChatGPT/Claude', cost: 20, icon: '🤖' },
];

// Animated number component with smooth transitions
function AnimatedValue({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const previousValue = useRef(value);

  useEffect(() => {
    const startValue = previousValue.current;
    const endValue = value;
    const duration = 600;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const current = startValue + (endValue - startValue) * easeOutExpo;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
        previousValue.current = endValue;
      }
    };

    requestAnimationFrame(animate);
  }, [value]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString();

  return (
    <span className="tabular-nums">
      {prefix}{formatted}{suffix}
    </span>
  );
}

// Custom slider component
function PremiumSlider({
  value,
  onChange,
  min,
  max,
  step = 1,
  formatValue,
}: {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  formatValue: (value: number) => string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative pt-4 pb-6">
      {/* Track container */}
      <div className="relative h-2">
        {/* Background track */}
        <div className="absolute inset-0 rounded-full bg-muted" />

        {/* Filled track */}
        <div
          className="absolute inset-y-0 left-0 bg-signature rounded-full transition-all duration-150"
          style={{ width: `${percentage}%` }}
        />

        {/* Thumb */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-10"
          style={{ left: `${percentage}%` }}
        >
          <div className="w-5 h-5 rounded-full bg-white shadow-md border-2 border-signature transition-transform hover:scale-110" />
        </div>
      </div>

      {/* Invisible range input for interaction */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute top-4 left-0 w-full h-2 opacity-0 cursor-pointer z-20"
      />

      {/* Min/max labels */}
      <div className="absolute top-8 left-0 text-[11px] text-muted-foreground">
        {formatValue(min)}
      </div>
      <div className="absolute top-8 right-0 text-[11px] text-muted-foreground">
        {formatValue(max)}
      </div>
    </div>
  );
}

// Tool checkbox component
function ToolCheckbox({
  tool,
  checked,
  onChange,
}: {
  tool: typeof tools[0];
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={cn(
        'group relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300',
        checked
          ? 'border-signature/40 bg-signature/5'
          : 'border-border bg-card hover:border-border'
      )}
    >
      <div className={cn(
        'flex items-center justify-center w-5 h-5 rounded-md border-2 transition-all duration-200',
        checked
          ? 'border-signature bg-signature'
          : 'border-border bg-transparent group-hover:border-border'
      )}>
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      <span className="text-lg">{tool.icon}</span>
      <div className="flex-1 text-left">
        <p className={cn(
          'text-[13px] font-medium transition-colors',
          checked ? 'text-foreground' : 'text-foreground/80'
        )}>
          {tool.name}
        </p>
        <p className="text-[11px] text-muted-foreground">
          ~${tool.cost}/mo
        </p>
      </div>
    </button>
  );
}

type TabType = 'agency' | 'employees' | 'tools';

const tabs: { id: TabType; label: string; icon: React.ElementType; description: string }[] = [
  { id: 'agency', label: 'Agency Spend', icon: Building2, description: 'See what you\'re really paying for black-box retainers' },
  { id: 'employees', label: 'Employee Costs', icon: Users, description: 'Stop the hiring treadmill' },
  { id: 'tools', label: 'Tool Consolidation', icon: Layers, description: 'Cancel 8+ subscriptions' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function SavingsCalculatorSection() {
  const { isBusinessOwner } = useAudience();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Default tab based on audience
  const defaultTab: TabType = isBusinessOwner ? 'agency' : 'employees';
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab);

  // Update active tab when audience changes
  useEffect(() => {
    setActiveTab(isBusinessOwner ? 'agency' : 'employees');
  }, [isBusinessOwner]);

  // Agency tab state
  const [agencySpend, setAgencySpend] = useState(5000);

  // Employee tab state
  const [teamSize, setTeamSize] = useState(3);
  const [avgSalary, setAvgSalary] = useState(65000);

  // Tools tab state
  const [selectedTools, setSelectedTools] = useState<string[]>(['hubspot', 'mailchimp', 'semrush', 'asana']);

  // Calculate savings for each tab
  const calculateAgencySavings = useCallback(() => {
    const annualAgencyCost = agencySpend * 12;
    const estimatedOzziOsCost = 299 * 12; // Estimated OzziOS annual cost
    const savings = annualAgencyCost - estimatedOzziOsCost;
    const percentage = Math.round((savings / annualAgencyCost) * 100);
    return { annual: savings, percentage, monthly: agencySpend - 299 };
  }, [agencySpend]);

  const calculateEmployeeSavings = useCallback(() => {
    const reductionRate = 0.65; // 65% headcount reduction possible
    const totalSalaryCost = teamSize * avgSalary;
    const salarySavings = Math.round(totalSalaryCost * reductionRate);
    const employeesReduced = Math.round(teamSize * reductionRate);
    const employeesRemaining = teamSize - employeesReduced;
    return {
      salarySavings,
      employeesReduced,
      employeesRemaining,
      currentCost: totalSalaryCost,
      newCost: Math.round(totalSalaryCost * (1 - reductionRate))
    };
  }, [teamSize, avgSalary]);

  const calculateToolSavings = useCallback(() => {
    const monthlyCost = selectedTools.reduce((acc, toolId) => {
      const tool = tools.find(t => t.id === toolId);
      return acc + (tool?.cost || 0);
    }, 0);
    const annualSavings = monthlyCost * 12;
    return { monthly: monthlyCost, annual: annualSavings, count: selectedTools.length };
  }, [selectedTools]);

  const agencySavings = calculateAgencySavings();
  const employeeSavings = calculateEmployeeSavings();
  const toolSavings = calculateToolSavings();

  // Get total savings based on active tab
  const getTotalSavings = () => {
    switch (activeTab) {
      case 'agency':
        return agencySavings.annual;
      case 'employees':
        return employeeSavings.salarySavings;
      case 'tools':
        return toolSavings.annual;
      default:
        return 0;
    }
  };

  const totalSavings = getTotalSavings();

  return (
    <section id="calculator" className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-signature/10 border border-signature/20 mb-6">
              <Calculator className="h-4 w-4 text-signature" />
              <span className="text-[11px] font-semibold text-signature uppercase tracking-wider">
                ROI Calculator
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-4">
              See what you'll save.
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Calculate your potential savings across agencies, employees, and tools.
            </p>
          </motion.div>

          {/* Calculator card */}
          <motion.div variants={itemVariants}>
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="relative z-10">
                {/* Tabs */}
                <div className="flex flex-col sm:flex-row gap-2 p-4 border-b border-border bg-muted/50">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          'flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-[14px] transition-all duration-300',
                          isActive
                            ? 'bg-card text-foreground border border-border shadow-sm'
                            : 'text-muted-foreground hover:text-foreground/80 hover:bg-card/50'
                        )}
                      >
                        <Icon className={cn(
                          'h-4 w-4 transition-colors',
                          isActive ? 'text-signature' : 'text-muted-foreground'
                        )} />
                        <span className="hidden sm:inline">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Content area */}
                <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-10">
                  {/* Input side */}
                  <div className="space-y-8">
                    <div>
                      <p className="text-[13px] text-muted-foreground mb-6">
                        {tabs.find(t => t.id === activeTab)?.description}
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      {activeTab === 'agency' && (
                        <motion.div
                          key="agency"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          <div>
                            <label className="flex items-center justify-between mb-4">
                              <span className="text-[14px] font-medium text-foreground">
                                Monthly agency retainer
                              </span>
                              <span className="text-[18px] font-semibold text-signature tabular-nums">
                                ${agencySpend.toLocaleString()}
                              </span>
                            </label>
                            <PremiumSlider
                              value={agencySpend}
                              onChange={setAgencySpend}
                              min={1000}
                              max={25000}
                              step={500}
                              formatValue={(v) => `$${(v / 1000).toFixed(0)}K`}
                            />
                          </div>

                          <div className="p-4 rounded-xl bg-muted/50 border border-border">
                            <p className="text-[12px] text-muted-foreground mb-3">What you're paying for:</p>
                            <div className="space-y-2">
                              {[
                                'Monthly reports you don\'t understand',
                                'Junior employees doing the actual work',
                                'Zero visibility into hours spent',
                                '"Strategy" meetings that go nowhere',
                              ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                  <span className="text-[13px] text-muted-foreground">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'employees' && (
                        <motion.div
                          key="employees"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-8"
                        >
                          <div>
                            <label className="flex items-center justify-between mb-4">
                              <span className="text-[14px] font-medium text-foreground">
                                Marketing team size
                              </span>
                              <span className="text-[18px] font-semibold text-signature tabular-nums">
                                {teamSize} {teamSize === 1 ? 'person' : 'people'}
                              </span>
                            </label>
                            <PremiumSlider
                              value={teamSize}
                              onChange={setTeamSize}
                              min={1}
                              max={20}
                              step={1}
                              formatValue={(v) => `${v}`}
                            />
                          </div>

                          <div>
                            <label className="flex items-center justify-between mb-4">
                              <span className="text-[14px] font-medium text-foreground">
                                Average salary
                              </span>
                              <span className="text-[18px] font-semibold text-signature tabular-nums">
                                ${(avgSalary / 1000).toFixed(0)}K
                              </span>
                            </label>
                            <PremiumSlider
                              value={avgSalary}
                              onChange={setAvgSalary}
                              min={40000}
                              max={120000}
                              step={5000}
                              formatValue={(v) => `$${(v / 1000).toFixed(0)}K`}
                            />
                          </div>

                          <div className="p-4 rounded-xl bg-signature/5 border border-signature/20">
                            <div className="flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-signature shrink-0 mt-0.5" />
                              <div>
                                <p className="text-[13px] font-medium text-signature mb-1">
                                  65% headcount reduction
                                </p>
                                <p className="text-[12px] text-muted-foreground">
                                  Run a 20-person agency with 7 people. AI handles the repetitive work—your team focuses on strategy and relationships.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'tools' && (
                        <motion.div
                          key="tools"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <p className="text-[14px] font-medium text-foreground">
                            Select the tools you're currently using:
                          </p>

                          <div className="grid grid-cols-2 gap-3">
                            {tools.map((tool) => (
                              <ToolCheckbox
                                key={tool.id}
                                tool={tool}
                                checked={selectedTools.includes(tool.id)}
                                onChange={(checked) => {
                                  setSelectedTools(
                                    checked
                                      ? [...selectedTools, tool.id]
                                      : selectedTools.filter((id) => id !== tool.id)
                                  );
                                }}
                              />
                            ))}
                          </div>

                          <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                            <div className="flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="text-[13px] font-medium text-green-700 mb-1">
                                  OzziOS replaces all of these
                                </p>
                                <p className="text-[12px] text-muted-foreground">
                                  One platform, one login, one invoice. All the features you need.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Results side */}
                  <div className="relative">
                    <div className="sticky top-8">
                      <div className="p-8 rounded-2xl bg-muted/50 border border-border">
                        <div className="relative z-10">
                          <p className="text-[12px] text-muted-foreground uppercase tracking-wider mb-2">
                            Estimated Annual Savings
                          </p>

                          <div className="mb-8">
                            <span className="text-[clamp(3rem,8vw,4.5rem)] font-bold text-foreground leading-none tracking-tight">
                              <AnimatedValue value={totalSavings} prefix="$" />
                            </span>
                            <span className="text-[24px] text-muted-foreground ml-1">/yr</span>
                          </div>

                          {/* Tab-specific breakdown */}
                          <AnimatePresence mode="wait">
                            {activeTab === 'agency' && (
                              <motion.div
                                key="agency-results"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                              >
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Current annual spend</span>
                                  <span className="text-[14px] font-medium text-foreground">
                                    ${(agencySpend * 12).toLocaleString()}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">OzziOS annual cost</span>
                                  <span className="text-[14px] font-medium text-green-600">
                                    ~$3,588
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Savings percentage</span>
                                  <span className="text-[14px] font-semibold text-signature">
                                    <AnimatedValue value={agencySavings.percentage} suffix="%" />
                                  </span>
                                </div>
                              </motion.div>
                            )}

                            {activeTab === 'employees' && (
                              <motion.div
                                key="employees-results"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                              >
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Current salary costs</span>
                                  <span className="text-[14px] font-medium text-foreground">
                                    <AnimatedValue value={employeeSavings.currentCost} prefix="$" />
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Team after AI (35%)</span>
                                  <span className="text-[14px] font-medium text-green-600">
                                    <AnimatedValue value={employeeSavings.employeesRemaining} /> people
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Headcount reduction</span>
                                  <span className="text-[14px] font-semibold text-signature">
                                    {teamSize} &rarr; <AnimatedValue value={employeeSavings.employeesRemaining} /> (65% less)
                                  </span>
                                </div>
                              </motion.div>
                            )}

                            {activeTab === 'tools' && (
                              <motion.div
                                key="tools-results"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="space-y-4"
                              >
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Tools to cancel</span>
                                  <span className="text-[14px] font-medium text-foreground">
                                    <AnimatedValue value={toolSavings.count} /> subscriptions
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Monthly savings</span>
                                  <span className="text-[14px] font-medium text-green-600">
                                    <AnimatedValue value={toolSavings.monthly} prefix="$" />/mo
                                  </span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-t border-border">
                                  <span className="text-[14px] text-muted-foreground">Fewer logins</span>
                                  <span className="text-[14px] font-semibold text-signature">
                                    <AnimatedValue value={toolSavings.count} /> &rarr; 1
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* CTA */}
                          <div className="mt-8">
                            <Button
                              size="lg"
                              asChild
                              className="w-full h-14 text-[15px] font-medium gap-3 bg-signature text-white hover:bg-signature/90 rounded-full group"
                            >
                              <a href="https://app.ozzios.com/sign-up">
                                Start saving today
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                              </a>
                            </Button>
                            <p className="text-center text-[12px] text-muted-foreground mt-3">
                              Free trial • No credit card required
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom note */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-[13px] text-muted-foreground">
              * Calculations are estimates based on industry averages. Your actual savings may vary.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
