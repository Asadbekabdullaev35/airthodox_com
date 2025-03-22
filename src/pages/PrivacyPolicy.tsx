import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8 font-mono">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-8">Last Updated: March 20, 2025</p>
        
        <div className="prose prose-invert prose-purple max-w-none">
          <p className="text-gray-300 mb-8">
            Airthodox ("we," "us," or "our") is committed to protecting the privacy and security of your personal data. This Privacy Policy explains how we collect, use, and process your information when you place an order with us.
          </p>
          <p className="text-gray-300 mb-8">
            We process your personal data in compliance with the General Data Protection Regulation (GDPR) (EU) 2016/679 and other applicable data protection laws.
          </p>

          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Data Controller</h2>
              <p className="text-gray-300">The data controller responsible for processing your personal data is:</p>
              <div className="mt-4 text-gray-300">
                <p>Airthodox</p>
                <p>Eduard-Heis-Straße 22</p>
                <p>Germany</p>
                <p>📧 Email: info.airthodox@gmail.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">2.1. Personal Data</h3>
              <p className="text-gray-300 mb-4">We collect and process the following personal data when you place an order:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>Contact Information: Name, email address, phone number (if voluntarily provided).</li>
                <li>Order Details: Information about the products or services you request.</li>
                <li>Payment Information: Payment details are processed securely by external payment providers (we do not store payment information).</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">2.2. No Cookies or Tracking Technologies</h3>
              <p className="text-gray-300">We do not use cookies, tracking tools, or similar technologies to collect personal data.</p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">2.3. Legal Basis for Processing</h3>
              <p className="text-gray-300">We process your personal data based on the following legal grounds under Article 6 GDPR:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>Performance of a contract (Art. 6(1)(b) GDPR) – Processing is necessary to fulfill your order.</li>
                <li>Legitimate interests (Art. 6(1)(f) GDPR) – To ensure the proper functioning of our services.</li>
                <li>Legal obligations (Art. 6(1)(c) GDPR) – To comply with applicable laws and regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300">We use the collected data for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>To process your order – Ensuring order fulfillment and customer communication.</li>
                <li>To provide customer support – Responding to inquiries and resolving issues.</li>
                <li>To comply with legal requirements – Such as tax regulations and fraud prevention.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Processing by Third Parties</h2>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">4.1. External Service Providers</h3>
              <p className="text-gray-300">We do not store customer data on our own servers. Instead, data is processed by third-party service providers that handle order management, payment processing, and service fulfillment. These providers operate in the European Union (EU) and the United States (USA).</p>

              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">4.2. International Data Transfers</h3>
              <p className="text-gray-300">Some personal data may be transferred outside the European Economic Area (EEA) (e.g., to the USA). We ensure that adequate protection measures are in place, including:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>EU Standard Contractual Clauses (SCCs)</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Data processing agreements (DPAs) with strict privacy standards</li>
              </ul>
              <p className="text-gray-300 mt-4">A list of third-party providers and their data protection policies can be provided upon request.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention & Deletion</h2>
              <p className="text-gray-300">We do not store customer data long-term.</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>Order data: Stored only as required by third-party service providers.</li>
                <li>Payment data: Not stored by us, only by the external payment provider.</li>
                <li>Communication data: Deleted after processing, unless legally required.</li>
              </ul>
              <p className="text-gray-300 mt-4">You can request deletion of your data at any time (see Section 6).</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights under the GDPR</h2>
              <p className="text-gray-300 mb-4">Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
                <li>Right to Access – Request a copy of the personal data we store about you.</li>
                <li>Right to Rectification – Request correction of inaccurate or incomplete data.</li>
                <li>Right to Erasure ("Right to be Forgotten") – Request deletion of your personal data.</li>
                <li>Right to Restriction of Processing – Request limitation of how we use your data.</li>
                <li>Right to Data Portability – Receive your data in a structured format.</li>
                <li>Right to Object – Object to processing based on legitimate interests.</li>
                <li>Right to Withdraw Consent – If processing is based on consent, you can withdraw it at any time.</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-purple-400 mt-6 mb-2">How to Exercise Your Rights</h3>
              <p className="text-gray-300">To exercise any of these rights, please contact us at:</p>
              <p className="text-gray-300">📧 info.airthodox@gmail.com</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Complaints</h2>
              <p className="text-gray-300">If you believe that your personal data is being processed unlawfully, you have the right to file a complaint with your local data protection authority.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-300">We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised "Last Updated" date.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-300">For questions or concerns regarding this Privacy Policy, contact us at:</p>
              <p className="text-gray-300">📧 info.airthodox@gmail.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;