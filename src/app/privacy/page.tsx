import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - Peeky Task",
  description: "Peeky Task collects zero user data. Your tasks stay 100% on your local PC.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[820px] px-5 py-32 text-ink">
        <div className="mb-10">
          <Link
            href="/"
            className="text-ink-muted hover:text-ink text-[13px] font-medium transition-colors"
          >
            ← Back to Peeky Task
          </Link>
          <h1 className="type-headline mt-4 text-[clamp(2rem,4vw,2.8rem)]">
            Privacy Policy
          </h1>
          <p className="text-ink-muted mt-2 text-[14px]">
            Last updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/90">
          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">1. The Short Version</h2>
            <p className="text-ink-muted">
              Peeky Task is built from the ground up to respect your privacy. We do not collect, store, transmit, or sell any of your task data, notes, keystrokes, or personal information. Everything you write stays strictly on your local PC.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">2. Local Data Storage</h2>
            <p className="text-ink-muted">
              All your to-dos, priorities, completion dates, and color assignments are stored in a local JSON file on your machine (typically in <code className="bg-smoke px-1.5 py-0.5 rounded text-ink font-mono text-[13px]">Documents\Peeky Task\tasks.json</code>). We operate zero sync servers and have no access to this file.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">3. Purchases & License Verification</h2>
            <p className="text-ink-muted">
              When you purchase a Lifetime License, payments are processed by Dodo Payments (our Merchant of Record). Dodo collects your billing details to process your transaction and email your license key. When you enter your license key into the desktop app, a secure HTTPS call is made to verify validity. No task content or private data is included in this call.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">4. Telemetry & Analytics</h2>
            <p className="text-ink-muted">
              The Peeky Task Windows desktop application contains zero telemetry, zero analytics SDKs, and zero background tracking beacons.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">5. Contact Us</h2>
            <p className="text-ink-muted">
              If you have any questions about this Privacy Policy, please email us directly at <a href="mailto:support@peekytask.in" className="text-ink underline">support@peekytask.in</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
