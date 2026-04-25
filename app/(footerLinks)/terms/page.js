export const metadata = {
  title: "Terms of Service",
  description:
    "Read PT Store's terms of service, including user agreements, policies, and legal information.",
};

export default function Terms() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Terms of Service
          </h1>
          <p className="text-slate-600 mb-4">Last updated: April 25, 2026</p>
          <p className="text-xl text-slate-600 leading-relaxed">
            These terms govern your use of PT Store and our services. By accessing or purchasing from our platform, you agree to these terms.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">1. Use License</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Permission is granted to temporarily download one copy of materials (information or software) from PT Store for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">2. Product Information</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, or error-free.
              </p>
              <p>
                We reserve the right to limit quantities, cancel orders, or modify product information at any time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">3. Pricing and Availability</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Prices are subject to change without notice. Products are available while supplies last. We reserve the right to discontinue any product or service at any time.
              </p>
              <p>
                If there is a pricing error, we may cancel your order and refund your payment without liability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">4. User Accounts</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                If you create an account, you are responsible for maintaining the confidentiality of your login credentials. You agree to accept responsibility for all activities that occur under your account.
              </p>
              <p>
                You must provide accurate, complete, and current information. You agree not to share your account with others or use another person's account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">5. Prohibited Activities</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Engage in fraudulent or illegal activities</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit harmful code, malware, or viruses</li>
                <li>Harass, abuse, or threaten other users or staff</li>
                <li>Engage in spam or phishing</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">6. Limitation of Liability</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                PT Store is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of our platform or products.
              </p>
              <p>
                Our total liability shall not exceed the amount you paid for the product or service in question.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">7. Dispute Resolution</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Any disputes shall be governed by applicable local laws. You agree to attempt to resolve disputes through our customer support before pursuing legal action.
              </p>
              <p>
                For any disputes, you agree to binding arbitration rather than court proceedings, except for claims involving intellectual property rights.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">8. Intellectual Property</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                All content on PT Store, including logos, text, graphics, and images, is the property of PT Store or our content suppliers and is protected by copyright laws.
              </p>
              <p>
                You may not reproduce, distribute, or transmit any content without our explicit permission.
              </p>
            </div>
          </section>

          <section className="border border-brand-blue/20 rounded-3xl p-8 bg-brand-blue/5">
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Questions About Our Terms?</h2>
            <p className="text-slate-600">
              Contact us at: <span className="font-semibold text-slate-900">legal@ptstore.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
