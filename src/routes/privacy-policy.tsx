/**
 * Privacy Policy Page
 *
 * Public page required for Google OAuth compliance.
 * Accessible at /privacy-policy
 */
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  const lastUpdated = 'November 28, 2025';

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-14 max-w-4xl items-center px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: {lastUpdated}
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to OzziOs ("we," "our," or "us"). We are committed to protecting your
                personal information and your right to privacy. This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our
                business management platform.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Account information (name, email address, password)</li>
                <li>Profile information (profile picture, job title, company name)</li>
                <li>Content you create (messages, files, workflows, project data)</li>
                <li>Communication preferences</li>
                <li>Information from third-party services you connect (Google, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and manage your account</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent security incidents</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Information Sharing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>With your consent or at your direction</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Third-Party Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our service integrates with third-party services such as Google. When you connect
                these services, you authorize us to access certain information from those accounts.
                The information we access depends on the permissions you grant. We use this
                information solely to provide and improve our services. Each third-party service
                has its own privacy policy governing the use of your information.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Google Ads API & Keyword Planner
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you choose to connect your Google Ads account to enable keyword research features,
                we access the following data through the Google Ads API:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Keyword research data (search volume, competition, cost-per-click estimates)</li>
                <li>Geographic and language targeting constants</li>
                <li>Your Google Ads customer ID(s) for API authentication</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">What we DO:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Retrieve keyword planning data on your behalf when you request it</li>
                <li>Display search volume and keyword metrics within our AI chat interface</li>
                <li>Store your OAuth tokens securely (encrypted at rest) to maintain your connection</li>
                <li>Automatically refresh access tokens to keep your connection active</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">What we DO NOT do:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Create, modify, or delete campaigns, ad groups, or ads in your account</li>
                <li>Access your billing information or payment methods</li>
                <li>Make any changes to your Google Ads account settings</li>
                <li>Share your Google Ads data with other workspaces or users</li>
                <li>Store your keyword research results beyond temporary caching (5-15 minutes)</li>
                <li>Use your data to train AI models or for any purpose other than serving you</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Your Control:</strong>
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>You can disconnect your Google Ads account at any time from workspace settings</li>
                <li>When disconnected, all stored OAuth tokens are immediately deleted</li>
                <li>You can also revoke access via your Google Account permissions page</li>
                <li>No Google Ads data is accessed without your explicit authorization</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Data Retention:</strong> We do not store keyword
                research results. All data is fetched in real-time from Google's servers when you make
                a request. OAuth tokens are stored securely until you disconnect the integration or
                delete your workspace.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">
                Other Google Services
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Similar privacy practices apply to other Google services you may connect, including
                Google Calendar, Gmail, Google Docs, and Google Business Profile. In all cases, we
                only access data you explicitly authorize and use it solely to provide the features
                you've requested.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the Internet or electronic
                storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to fulfill the
                purposes for which it was collected, including to satisfy legal, accounting, or
                reporting requirements. When you delete your account, we will delete or anonymize
                your personal information within a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                8. Your Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal
                information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                9. Cookies and Tracking
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your
                browsing activities. You can control cookies through your browser settings. Note
                that disabling cookies may affect the functionality of our service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date. Your continued use of our service after such modifications
                constitutes your acknowledgment of the modified policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices,
                please contact us at:{' '}
                <a
                  href="mailto:privacy@ozzios.com"
                  className="text-primary hover:underline"
                >
                  privacy@ozzios.com
                </a>
              </p>
            </div>
          </section>
        </article>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} OzziOs. All rights reserved.</p>
            <Link to="/tos" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
