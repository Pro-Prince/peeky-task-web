import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - Peeky Task",
  description: "Terms of service and license terms for Peeky Task.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-ink-muted mt-2 text-[14px]">
            Last updated: October 2026
          </p>
        </div>

        <div className="space-y-8 text-[15px] leading-relaxed text-ink/90">
          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">1. License Grant</h2>
            <p className="text-ink-muted">
              By downloading Peeky Task or purchasing a Lifetime License, you are granted a non-exclusive, non-transferable perpetual license to install and run Peeky Task on up to two (2) personal computers owned or controlled by you.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">2. Free Trial</h2>
            <p className="text-ink-muted">
              The free trial allows full use of all features for seven (7) days following installation. Upon trial completion, the application enters read-only mode until unlocked with a valid license key.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">3. Disclaimer & Limitation of Liability</h2>
            <p className="text-ink-muted">
              Peeky Task is provided &ldquo;as is&rdquo;, without warranty of any kind. In no event shall the authors or developers be liable for any claim, damages, or other liability arising from the use of the software.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-semibold text-ink mb-2">4. Support & Inquiries</h2>
            <p className="text-ink-muted">
              For any licensing issues, device transfers, or general support, please reach out to <a href="mailto:support@peekytask.in" className="text-ink underline">support@peekytask.in</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
