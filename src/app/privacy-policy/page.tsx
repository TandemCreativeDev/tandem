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
        Last Updated: 22 July 2026
      </p>

      <div className="mt-6 space-y-6">
        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            1. About This Policy
          </h2>
          <p>
            Tandem Creative Dev Limited (&quot;Tandem&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) is a company registered in
            England and Wales under company number 16681301, with its registered
            office at 113-115 Fonthill Road, London, N4 3HH.
          </p>
          <p className="mt-4">
            We are committed to protecting personal data and handling it
            lawfully, fairly and transparently. This policy explains how we
            handle personal data under the UK General Data Protection Regulation
            (&quot;UK GDPR&quot;) and the Data Protection Act 2018 (&quot;DPA
            2018&quot;).
          </p>
          <p className="mt-4">
            We handle personal data in two distinct capacities, and different
            parts of this policy apply to each:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>As a data controller</strong>, for personal data we
              collect through our own website and in the ordinary course of
              running our business. Section 2 applies.
            </li>
            <li>
              <strong>As a data processor</strong>, for personal data we handle
              on behalf of our clients when designing, building, hosting or
              maintaining systems for them. Section 3 applies.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            2. When We Act as a Data Controller
          </h2>
          <p>
            This section covers personal data we decide the purposes and means
            for ourselves.
          </p>

          <h3 className="font-semibold mt-4 mb-2">
            2.1 Information we collect
          </h3>
          <p>
            When you submit an enquiry through our contact form or contact us
            directly, we collect:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Name:</strong> first and last name
            </li>
            <li>
              <strong>Company name:</strong> if provided
            </li>
            <li>
              <strong>Email address</strong>
            </li>
            <li>
              <strong>Phone number:</strong> if provided
            </li>
            <li>
              <strong>Message content</strong>
            </li>
          </ul>
          <p className="mt-2">
            We also hold contact details for clients, suppliers and prospective
            clients in the normal course of business correspondence.
          </p>

          <h3 className="font-semibold mt-4 mb-2">
            2.2 How we use it and our lawful basis
          </h3>
          <p>
            We use this information solely to respond to your enquiry and to
            communicate with you about your request, and to manage our
            relationships with clients and suppliers.
          </p>
          <p className="mt-2">
            Our lawful basis is legitimate interests: responding to people who
            contact us and administering our business relationships. Where you
            contact us about engaging our services, we may also rely on the need
            to take steps at your request prior to entering into a contract.
          </p>
          <p className="mt-2">
            We do not use your information for marketing, and we do not sell
            personal data or share it with third parties for their own purposes.
          </p>

          <h3 className="font-semibold mt-4 mb-2">2.3 Who we share it with</h3>
          <p>
            Enquiries are received and handled by email. We use third-party
            email and website hosting providers who act as our processors under
            written contracts and may handle this information on our behalf. We
            may also disclose information where we are required to do so by law.
          </p>

          <h3 className="font-semibold mt-4 mb-2">2.4 How long we keep it</h3>
          <p>
            We keep enquiry correspondence for no longer than is necessary.
            Where an enquiry does not lead to an engagement, we delete it within
            24 months of our last contact with you. Where an enquiry leads to an
            engagement, correspondence is retained for the duration of that
            engagement and for six years afterwards, in line with our legal and
            accounting obligations.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            3. When We Act as a Data Processor
          </h2>
          <p>
            We design, build, host and maintain software for our clients. Where
            those systems hold personal data about our clients&apos; own users,
            our client is the data controller and we act as their data
            processor. We process that data only on our client&apos;s documented
            instructions and never for our own purposes.
          </p>
          <p className="mt-2">
            If you are a user of a system we have built for a client, that
            client&apos;s own privacy notice governs how your personal data is
            handled and is the right place to look for details of what is
            collected, why, and on what lawful basis. This policy does not
            replace it.
          </p>
          <p className="mt-2">In that role we commit to the following:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              We process personal data only on the documented instructions of
              the controller, including in relation to any transfers outside the
              UK.
            </li>
            <li>
              We engage sub-processors, such as infrastructure and hosting
              providers, only with the controller&apos;s authorisation and under
              written contracts imposing equivalent obligations.
            </li>
            <li>
              We ensure that anyone authorised to process the data is subject to
              a duty of confidentiality.
            </li>
            <li>
              We implement appropriate technical and organisational security
              measures, as described in Section 4.
            </li>
            <li>
              We assist the controller in responding to requests from
              individuals exercising their rights, and in meeting their
              obligations around security, breach notification and data
              protection impact assessments.
            </li>
            <li>
              We notify the controller without undue delay on becoming aware of
              a personal data breach.
            </li>
            <li>
              At the end of an engagement, we delete or return personal data at
              the controller&apos;s choice, except where we are required by law
              to retain it.
            </li>
            <li>
              We make available the information necessary to demonstrate
              compliance with these obligations.
            </li>
          </ul>
          <p className="mt-2">
            Requests from individuals about data held in a client system are
            passed to the relevant controller, who is responsible for
            responding. If you contact us directly about such a request, we will
            tell you who the controller is and forward your request to them.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            4. How We Protect Personal Data
          </h2>
          <p>
            We apply technical and organisational measures appropriate to the
            risk, including:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Encryption of data in transit using current TLS standards, and
              encryption at rest on the managed platforms we use
            </li>
            <li>
              Multi-factor authentication on the administrative accounts and
              services we use to operate client systems
            </li>
            <li>
              Individually assigned accounts with no shared credentials, and
              access granted on a least-privilege basis
            </li>
            <li>
              Key-based authentication for server access, with password
              authentication disabled
            </li>
            <li>
              Credentials and secrets held outside version control and injected
              at runtime
            </li>
            <li>
              Automated dependency and vulnerability scanning in our development
              pipelines, with security updates applied promptly
            </li>
            <li>
              Restricting access to correspondence and client systems to those
              who need it
            </li>
          </ul>
          <p className="mt-2">
            No method of transmission or storage is completely secure, but we
            review these measures regularly and update them as our systems and
            the threat landscape change.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            5. Transfers Outside the United Kingdom
          </h2>
          <p>
            Some of the infrastructure and service providers we use operate
            outside the United Kingdom. Where personal data is transferred
            outside the UK, we rely on an appropriate safeguard, which will be
            either the UK&apos;s adequacy regulations for the destination
            country, or the International Data Transfer Agreement, or the EU
            Standard Contractual Clauses together with the UK Addendum.
          </p>
          <p className="mt-2">
            Where we act as a processor, the specific arrangements for a given
            system are set out in the relevant client&apos;s own privacy notice,
            and any transfers are made on that client&apos;s instructions.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            6. Your Data Protection Rights
          </h2>
          <p>Under the UK GDPR and DPA 2018 you have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Be informed about how we collect and use your personal data</li>
            <li>Access the personal data we hold about you</li>
            <li>Have inaccurate personal data corrected</li>
            <li>Have your personal data erased in certain circumstances</li>
            <li>
              Restrict our processing of your personal data in certain
              circumstances
            </li>
            <li>
              Receive your personal data in a structured, commonly used and
              machine-readable format, and have it transmitted to another
              organisation, in certain circumstances
            </li>
            <li>
              Object to our processing of your personal data, including at any
              time where it is processed for direct marketing
            </li>
            <li>
              Not be subject to decisions based solely on automated processing
              which produce legal or similarly significant effects
            </li>
            <li>
              Withdraw your consent at any time, where our processing is based
              on consent
            </li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights in relation to data we hold as a
            controller, contact us at{" "}
            <Link
              href="mailto:max@runintandem.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email us"
              className="text-blue-600 hover:underline"
            >
              max@runintandem.com
            </Link>
            . We will respond within one month. There is no charge, unless a
            request is manifestly unfounded or excessive.
          </p>
          <p className="mt-2">
            If your request relates to a system we operate on behalf of a
            client, please see Section 3.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            7. Cookies
          </h2>
          <p>
            Our website does not use analytics, advertising or tracking cookies.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            8. Complaints
          </h2>
          <p>
            If you have a concern about how we have handled your personal data,
            please contact us first at{" "}
            <Link
              href="mailto:max@runintandem.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email us"
              className="text-blue-600 hover:underline"
            >
              max@runintandem.com
            </Link>{" "}
            so that we can try to resolve it.
          </p>
          <p className="mt-2">
            You also have the right to lodge a complaint with the Information
            Commissioner&apos;s Office (ICO), the UK supervisory authority for
            data protection:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Website:{" "}
              <Link
                href="https://ico.org.uk/make-a-complaint"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                ico.org.uk/make-a-complaint
              </Link>
            </li>
            <li>Telephone: 0303 123 1113</li>
          </ul>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with a revised date. Where changes are
            significant, we will take reasonable steps to bring them to the
            attention of those affected.
          </p>
        </section>

        <section>
          <h2 className="font-tandem-condensed-medium uppercase text-xl font-semibold">
            10. Contact Us
          </h2>
          <p>
            For any questions about this policy or how we handle personal data:
          </p>
          <div className="mt-4">
            <p>
              <strong>Email:</strong>{" "}
              <Link
                href="mailto:max@runintandem.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email us"
                className="text-blue-600 hover:underline"
              >
                max@runintandem.com
              </Link>
            </p>
            <p>
              <strong>Address:</strong> Tandem Creative Dev Limited, 27 Dingley
              Pl, London EC1V 8BR
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
