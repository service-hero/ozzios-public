/**
 * Terms of Service Page
 *
 * Public page required for Google OAuth compliance.
 * Accessible at /tos
 */
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/tos')({
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: {lastUpdated}
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using OzziOs ("Service"), you agree to be bound by these Terms of
                Service ("Terms"). If you disagree with any part of these terms, you may not
                access the Service. These Terms apply to all visitors, users, and others who
                access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                OzziOs is a business management platform that provides tools for team
                collaboration, project management, workflow automation, and coordination.
                We reserve the right to modify, suspend, or discontinue the Service at any time
                without notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. User Accounts
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you create an account with us, you must provide accurate, complete, and
                current information. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Safeguarding your password and account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your account information remains accurate</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful, offensive, or illegal content</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Upload viruses or malicious code</li>
                <li>Collect user information without consent</li>
                <li>Engage in any activity that could damage our reputation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service and its original content, features, and functionality are owned by
                OzziOs and are protected by international copyright, trademark, patent, trade
                secret, and other intellectual property laws. You may not copy, modify,
                distribute, sell, or lease any part of our Service without our express written
                permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. User Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of content you create, upload, or share through the Service.
                By posting content, you grant us a non-exclusive, worldwide, royalty-free license
                to use, store, and display that content solely for the purpose of providing the
                Service. You represent that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>You own or have the right to use the content</li>
                <li>The content does not violate any third-party rights</li>
                <li>The content complies with these Terms and applicable laws</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Third-Party Integrations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Service may integrate with third-party services (such as Google). Your use of
                these integrations is subject to the respective third-party terms and privacy
                policies. We are not responsible for the content, privacy practices, or policies
                of third-party services. You acknowledge and agree that we shall not be liable
                for any damage or loss caused by your use of third-party services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                8. Payment and Billing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features of the Service may require payment. By subscribing to a paid
                plan, you agree to pay all applicable fees. Fees are non-refundable except as
                required by law or as explicitly stated in these Terms. We reserve the right to
                change our pricing with reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                9. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice, for
                any reason, including breach of these Terms. Upon termination, your right to use
                the Service will cease immediately. You may terminate your account at any time by
                contacting us or using the account deletion feature in your settings.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO
                NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, OZZIOS SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
                LOSS OF PROFITS, DATA, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR
                INABILITY TO USE THE SERVICE.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                12. Indemnification
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless OzziOs and its officers,
                directors, employees, and agents from any claims, damages, losses, or expenses
                (including reasonable attorney fees) arising from your use of the Service or
                violation of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                13. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the
                United States, without regard to conflict of law principles. Any disputes arising
                from these Terms shall be resolved in the courts located in our jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                14. Changes to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of
                significant changes by posting the new Terms on this page and updating the "Last
                updated" date. Your continued use of the Service after changes constitutes
                acceptance of the modified Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                15. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{' '}
                <a
                  href="mailto:legal@ozzios.com"
                  className="text-primary hover:underline"
                >
                  legal@ozzios.com
                </a>
              </p>
            </div>
          </section>
        </article>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} OzziOs. All rights reserved.</p>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
