import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main id="main" className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="font-tandem-mono-medium uppercase text-3xl font-bold text-center mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-500 text-center">
        Last Updated: 21 February 2025
      </p>

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            1. Introduction
          </h2>
          <p>
            Welcome to <strong>Tandem</strong> (“we,” “us,” or “our”). We are
            committed to protecting your privacy and ensuring that your personal
            information is handled securely. This Privacy Policy explains how we
            collect, use, and protect any information submitted through our
            contact form.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            2. What Information We Collect
          </h2>
          <p>
            When you submit an inquiry through our contact form, we collect the
            following details:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Name:</strong> First and last name
            </li>
            <li>
              <strong>Company Name:</strong> (if provided)
            </li>
            <li>
              <strong>Email Address</strong>
            </li>
            <li>
              <strong>Phone Number:</strong> (if provided)
            </li>
            <li>
              <strong>Message Content</strong>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>
            We use the information you provide **solely for the purpose of
            responding to your inquiry** and communicating with you regarding
            your request. Specifically, we:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Process your message and send it to our team via email.</li>
            <li>Use your contact details to respond to your inquiry.</li>
          </ul>
          <p className="mt-2">
            <strong>
              We do not store your information in a database, use it for
              marketing, or share it with third parties.
            </strong>
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            4. How We Protect Your Data
          </h2>
          <p>
            We take appropriate security measures to protect your personal
            information, including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Secure email transmission with industry-standard encryption.
            </li>
            <li>
              Limiting access to received inquiries to authorized personnel
              only.
            </li>
            <li>
              Not storing or retaining submitted data beyond the scope of
              communication.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            5. Legal Basis for Processing (GDPR)
          </h2>
          <p>
            Under the <strong>General Data Protection Regulation (GDPR)</strong>
            , our legal basis for processing your data is **legitimate
            interest**—we process your information solely to respond to your
            inquiry.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            6. Your Data Protection Rights
          </h2>
          <p>If you are a resident of the UK or EU, you have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Request access to the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal data.</li>
            <li>
              Object to processing if you believe your data is being used
              unlawfully.
            </li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact us at{" "}
            <Link
              href="mailto:hello@runintandem.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email us"
              role="link"
              className="text-blue-600 hover:underline"
            >
              hello@runintandem.com
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            7. Cookies and Tracking
          </h2>
          <p>
            Our website does not use cookies to track or store personal
            information related to contact form submissions.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the revised date.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your information, please contact us at:
          </p>
          <div className="mt-4">
            <p>
              📧 <strong>Email:</strong>{" "}
              <Link
                href="mailto:hello@runintandem.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                role="link"
                className="text-blue-600 hover:underline"
              >
                hello@runintandem.com
              </Link>
            </p>
            <p>
              📍 <strong>Address:</strong> 2nd Floor, 113-115 Fonthill Rd,
              London N4 3HH
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
