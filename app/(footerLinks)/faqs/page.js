import Link from "next/link";

export const metadata = {
  title: "FAQs",
  description:
    "Find answers to frequently asked questions about PT Store products, shipping, returns, and more.",
};

export default function FAQs() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All payments are secure and encrypted.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery. International orders may take 2-4 weeks depending on destination.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 150 countries worldwide. Shipping costs and delivery times vary by location. You can calculate your shipping cost at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "You'll receive a tracking number via email as soon as your order ships. You can also track your order in your account under 'My Orders'.",
    },
    {
      question: "What's your warranty policy?",
      answer:
        "Most products come with a manufacturer's warranty. Electronics typically have 1-2 year coverage against defects. Details are provided with each purchase.",
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 2 hours of purchase. After that, the order enters fulfillment and cannot be changed. Contact support for urgent requests.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No hidden fees. The price you see at checkout is the final price you pay, including all taxes and shipping charges (displayed before purchase).",
    },
    {
      question: "What if I receive a damaged item?",
      answer:
        "Report damage within 48 hours of delivery. We'll send a replacement immediately or process a full refund at no cost to you.",
    },
    {
      question: "Do you price match?",
      answer:
        "We regularly monitor market prices to offer competitive rates. If you find a lower price elsewhere, contact us and we'll match it.",
    },
    {
      question: "How do I apply a discount code?",
      answer:
        "Enter your discount code in the 'Promo Code' field at checkout. The discount will be applied automatically. Codes may have terms and expiration dates.",
    },
  ];

  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Find quick answers to common questions about ordering, shipping, returns, and more. Can't find what you're looking for?
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-brand-blue/30 hover:shadow-lg"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 bg-slate-50/50 hover:bg-slate-100/50 transition">
                <h3 className="text-lg font-semibold text-slate-950 group-open:text-brand-blue transition">
                  {faq.question}
                </h3>
                <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <div className="px-6 py-4 bg-white border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <section className="mt-12 border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
          <h2 className="text-2xl font-bold mb-4 text-slate-950">
            Still Have Questions?
          </h2>
          <p className="text-slate-600 mb-6">
            Our support team is ready to help with anything else you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition text-center"
            >
              Contact Support
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-xl border border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue/5 transition text-center"
            >
              Live Chat
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
