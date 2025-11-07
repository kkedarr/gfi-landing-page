import React from "react";
import PrivacyIcon from "../assets/images/privacypolicyicon.png";


const PrivacyPolicy = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Header Section */}
      <div className="w-full bg-[#FFEBC7] py-20 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy policy</h1>
            <img src={PrivacyIcon} className="w-8 h-8 text-gray-900" />
          </div>

          <p className="text-sm text-gray-800 mb-6">
            Effective Date: <span className="font-semibold">August, 2025</span>
          </p>

          <p className="text-base leading-relaxed text-gray-800 max-w-3xl">
            At Global Financial Investment, your privacy is important to us. This
            Privacy Policy explains how we collect, use, and protect your
            personal information when you use our app and services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full bg-white py-16 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-20 leading-relaxed">
          {/* Information we collect */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              1. Information we collect
            </h2>
            <p className="text-sm">
              We may collect the following types of personal information:
            </p>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Full name, email address, and phone number</li>
              <li>Government–issued ID and selfie (for KYC verification)</li>
              <li>Transaction and wallet activity</li>
              <li>Device information and IP address</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-sm mb-2">We use your information to:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Create and manage your account</li>
              <li>Verify your identity (KYC)</li>
              <li>Process transactions and provide wallet services</li>
              <li>Improve app performance and security</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">3. Data Sharing</h2>
            <p className="text-sm mb-2">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Verified third-party service providers (e.g., KYC providers,
                payment processors)
              </li>
              <li>
                Regulatory or law enforcement agencies, when required by law
              </li>
            </ul>
          </section>

          {/* Security */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">4. Security</h2>
            <p className="text-sm mb-2">
              We implement strong security measures, including:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>End-to-end encryption</li>
              <li>2-Factor Authentication (2FA)</li>
              <li>Secure data storage</li>
              <li>
                Despite our efforts, no method of online transmission is 100%
                secure.
              </li>
            </ul>
          </section>

          {/* Your rights */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">5. Your rights</h2>
            <p className="text-sm mb-2">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Access the data we hold about you</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent for non-essential data processing</li>
            </ul>
          </section>

          {/* Data retention */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">6. Data retention</h2>
            <p className="text-sm text-black">
              We retain your information as long as necessary to provide
              services and comply with legal obligations.
            </p>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              7. Cookies and Tracking
            </h2>
            <p className="text-sm text-black">
              We may use cookies and analytics tools to improve app performance
              and user experience.
            </p>
          </section>

          {/* Updates to This Policy */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              8. Updates to This Policy
            </h2>
            <p className="text-sm text-black">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for operational, legal, or regulatory reasons.
            </p>
          </section>

          {/* Contact us */}
          <section>
            <h2 className="font-semibold text-lg mb-2">9. Contact us</h2>
            <p className="text-sm text-black">
              If you have any questions, contact us at:
              <br />
              <span className="font-medium">
                Email: globalfinancialinvestments@gmail.com
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

