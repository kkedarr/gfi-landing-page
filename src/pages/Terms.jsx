import React from "react";
import TermsIcon from "../assets/images/termsofserviceicon.png";

const TermsOfService = () => {
  return (
    <div className="w-full flex flex-col font-geist">
      {/* === Header Section === */}
      <div className="w-full bg-[#FFEBC7] py-20 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-20">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
            <img src={TermsIcon} className="w-8 h-8 text-gray-900" />
          </div>

          <p className="text-sm text-gray-800 mb-6">
            Effective Date: <span className="font-semibold">August, 2025</span>
          </p>

          <p className="text-base leading-relaxed text-gray-800 max-w-3xl">
            Welcome to Global Financial Investment (“the App”). By using our
            services, you agree to these Terms of Service. Please read them
            carefully.
          </p>
        </div>
      </div>

      {/* === Content Section === */}
      <div className="w-full bg-white py-16 text-gray-900">
        <div className="max-w-5xl mx-auto px-6 md:px-20 leading-relaxed">
          {/* 1. Eligibility */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">1. Eligibility</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>You must be at least 18 years old to use this App.</li>
              <li>
                You agree to provide accurate information during the registration
                and verification process.
              </li>
            </ul>
          </section>

          {/* 2. Account registration & security */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              2. Account registration & security
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                You are responsible for keeping your login details and wallet keys
                secure.
              </li>
              <li>
                You must immediately notify us if you suspect unauthorized access.
              </li>
            </ul>
          </section>

          {/* 3. Services */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">3. Services</h2>
            <p className="text-sm mb-2">The app provides:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Multi–currency wallet services (fiat + stablecoins)</li>
              <li>Deposits, withdrawals, and transfers</li>
              <li>Crypto staking and investment tools</li>
              <li>Cross–border payments</li>
            </ul>
          </section>

          {/* 4. Compliance & KYC */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">4. Compliance & KYC</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                You agree to complete the Know Your Customer (KYC) verification.
              </li>
              <li>
                We may request additional documents to comply with Anti–Money
                Laundering (AML) and Counter–Terrorist Financing (CFT) laws.
              </li>
              <li>Failure to comply may result in account suspension.</li>
            </ul>
          </section>

          {/* 5. Prohibited by us */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">5. Prohibited by us</h2>
            <p className="text-sm mb-2">You agree not to use the App for:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Illegal activities, including money laundering, terrorism financing,
                or fraud
              </li>
              <li>Violating sanctions or regional regulations</li>
              <li>Attempting to hack, disrupt, or misuse the platform</li>
            </ul>
          </section>

          {/* 6. Transactions */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">6. Transactions</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                All transactions are final once confirmed on the platform or blockchain.
              </li>
              <li>
                Fees and exchange rates may apply and will be displayed before
                confirmation.
              </li>
              <li>
                We are not responsible for errors caused by incorrect recipient
                details.
              </li>
            </ul>
          </section>

          {/* 7. Staking & Investments */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">
              7. Staking & Investments
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                Staking returns are not guaranteed and depend on market conditions.
              </li>
              <li>
                By staking, you accept the risk of market volatility and potential
                loss.
              </li>
            </ul>
          </section>

          {/* 8. Limitation of liability */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">8. Limitation of liability</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>The App is provided “as is.”</li>
              <li>
                We do not guarantee uninterrupted access or error–free operation.
              </li>
              <li>
                We are not liable for indirect, incidental, or financial losses
                resulting from your use of the App.
              </li>
            </ul>
          </section>

          {/* 9. Termination */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">9. Termination</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>
                We may suspend or terminate your account if you breach these Terms
                or applicable laws.
              </li>
              <li>You may close your account at any time by contacting support.</li>
            </ul>
          </section>

          {/* 10. Change of Terms */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">10. Change of Terms</h2>
            <p className="text-sm text-black">
              We may update these Terms. Updates will be posted in the App and on our
              website. Continued use means you accept the new terms.
            </p>
          </section>

          {/* 11. Governing law */}
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">11. Governing law</h2>
            <p className="text-sm text-black">
              These terms are governed by the laws of Russia. Disputes will be resolved
              following applicable regulations.
            </p>
          </section>

          {/* 12. Contact us */}
          <section>
            <h2 className="font-semibold text-lg mb-2">12. Contact us</h2>
            <p className="text-sm text-black">
              For inquiries about these Terms, please contact us at:
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

export default TermsOfService;
