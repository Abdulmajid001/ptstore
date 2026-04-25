import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with our customer support team. We're here to help with any questions or concerns.",
};

export default function ContactUs() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Have questions or feedback? Our dedicated support team is here to help. Whether you need assistance with an order, product recommendations, or technical support, we're just a message away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
            <h3 className="text-2xl font-semibold mb-4 text-slate-950">Email Support</h3>
            <p className="text-slate-600 mb-4">
              For detailed inquiries, email us and we'll respond within 24 hours.
            </p>
            <a
              href="mailto:support@ptstore.com"
              className="text-brand-blue font-semibold hover:underline"
            >
              support@ptstore.com
            </a>
          </div>

          <div className="border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
            <h3 className="text-2xl font-semibold mb-4 text-slate-950">Live Chat</h3>
            <p className="text-slate-600 mb-4">
              Chat with our support team in real-time. Available 9 AM - 6 PM EST.
            </p>
            <button className="text-brand-blue font-semibold hover:underline">
              Start Chat
            </button>
          </div>
        </div>

        <div className="border border-slate-200 rounded-3xl p-8 bg-gradient-to-br from-brand-blue/5 to-slate-50/50">
          <h3 className="text-2xl font-semibold mb-4 text-slate-950">Contact Form</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-semibold py-3 rounded-xl hover:bg-brand-blue/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">
            Prefer to browse our knowledge base?
          </p>
          <Link
            href="/faqs"
            className="inline-block px-6 py-3 rounded-xl border border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition"
          >
            Visit FAQs
          </Link>
        </div>
      </div>
    </main>
  );
}
