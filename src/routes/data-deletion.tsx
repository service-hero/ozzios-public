/**
 * Data Deletion Instructions Page
 *
 * Required by Facebook/Meta for Live apps.
 * Accessible at /data-deletion
 */
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/data-deletion')({
  component: DataDeletionPage,
});

function DataDeletionPage() {
  const lastUpdated = 'February 10, 2026';

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
            Data Deletion Instructions
          </h1>
          <p className="text-muted-foreground text-sm mb-8">
            Last updated: {lastUpdated}
          </p>

          <section className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                How to Request Data Deletion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you want to delete your data associated with OzziOs, you have the following
                options:
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Option 1: Delete from Within OzziOs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can manage and delete your data directly from your OzziOs account:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Log in to your OzziOs account</li>
                <li>Navigate to <strong className="text-foreground">Settings</strong></li>
                <li>Go to <strong className="text-foreground">Integrations</strong></li>
                <li>Click <strong className="text-foreground">Disconnect</strong> next to any connected service (Facebook, Instagram, etc.)</li>
                <li>This immediately removes all stored tokens and associated data for that integration</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To delete your entire account and all associated data, go to{' '}
                <strong className="text-foreground">Settings &gt; Account &gt; Delete Account</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Option 2: Email Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Send a deletion request to{' '}
                <a
                  href="mailto:privacy@ozzios.com"
                  className="text-primary hover:underline"
                >
                  privacy@ozzios.com
                </a>{' '}
                with the subject line "Data Deletion Request" and include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>The email address associated with your account</li>
                <li>Whether you want a full account deletion or specific data removal</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We will process your request within 30 days and confirm deletion via email.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Option 3: Remove via Facebook
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can remove OzziOs's access to your Facebook data directly from Facebook:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Go to your Facebook <strong className="text-foreground">Settings &amp; Privacy &gt; Settings</strong></li>
                <li>Click <strong className="text-foreground">Apps and Websites</strong></li>
                <li>Find <strong className="text-foreground">OzziOs</strong> and click <strong className="text-foreground">Remove</strong></li>
                <li>Check the box to delete all data OzziOs received about you</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                What Data We Delete
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you request data deletion, we remove:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>OAuth access tokens and refresh tokens</li>
                <li>Connected page information and metadata</li>
                <li>Any cached content from your connected accounts</li>
                <li>Your account profile information (for full account deletion)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Some data may be retained for a limited period to comply with legal obligations,
                resolve disputes, or enforce our agreements. Any retained data will be deleted
                once the retention period expires.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about data deletion, please contact us at:{' '}
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
            <p>&copy; {new Date().getFullYear()} OzziOs. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/tos" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
