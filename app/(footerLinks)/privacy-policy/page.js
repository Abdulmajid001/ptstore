export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how PT Store collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Privacy Policy
          </h1>
          <p className="text-slate-600 mb-4">Last updated: April 25, 2026</p>
          <p className="text-xl text-slate-600 leading-relaxed">
            At PT Store, we respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and protect your data.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">1. Information We Collect</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                <p>
                  When you create an account or make a purchase, we collect your name, email address, phone number, shipping address, and payment information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Automatically Collected Data</h3>
                <p>
                  We automatically collect information about your device, browser type, IP address, and browsing behavior through cookies and similar technologies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Communication Data</h3>
                <p>
                  If you contact our support team, we may keep records of your communications to improve our service and resolve your issues.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">2. How We Use Your Information</h2>
            <div className="space-y-3 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <ul className="list-disc list-inside space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send transactional emails about your account and purchases</li>
                <li>Improve our website and services based on user behavior</li>
                <li>Send promotional emails and marketing communications (with your consent)</li>
                <li>Detect and prevent fraud and security issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">3. Data Security</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                We use industry-standard SSL encryption to protect your personal information during transmission. All payment information is securely processed through PCI-compliant payment gateways.
              </p>
              <p>
                However, no data transmission over the internet is 100% secure. While we implement strong security measures, we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">4. Cookies and Tracking</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                We use cookies to enhance your browsing experience, remember your preferences, and analyze site usage. You can control cookie preferences through your browser settings.
              </p>
              <p>
                We also use Google Analytics to understand how visitors use our site. This data is anonymized and does not identify you personally.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">5. Third-Party Sharing</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                We do not sell or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Payment processors to process transactions</li>
                <li>Shipping partners to deliver your orders</li>
                <li>Service providers who assist our operations (under confidentiality agreements)</li>
                <li>Law enforcement when legally required</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">6. Your Rights</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (right to be forgotten)</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability (receive your data in a standard format)</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at privacy@ptstore.com.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">7. Changes to This Policy</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                We may update this privacy policy from time to time. We'll notify you of any significant changes by email or by posting the updated policy on our website.
              </p>
            </div>
          </section>

          <section className="border border-brand-blue/20 rounded-3xl p-8 bg-brand-blue/5">
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Questions?</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about our privacy practices, please contact us.
            </p>
            <p className="text-slate-600">
              Email: <span className="font-semibold text-slate-900">privacy@ptstore.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
