import Link from "next/link";

export const metadata = {
  title: "Returns & Refunds",
  description:
    "Learn about our hassle-free return and refund policy. We want you to be completely satisfied with your purchase.",
};

export default function ReturnRefund() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Returns & Refunds
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            We stand behind every product we sell. If you're not completely satisfied with your purchase, we make returns and refunds easy and hassle-free.
          </p>
        </div>

        <div className="space-y-8">
          <section className="border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
            <h2 className="text-3xl font-bold mb-6 text-slate-950">Return Policy</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">30-Day Return Window</h3>
                <p>
                  You have 30 days from the date of purchase to return any item. The product must be in original condition with all packaging and accessories included.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Condition Requirements</h3>
                <p>
                  Items must be unused, undamaged, and in resalable condition. For opened or used items, a restocking fee of 15% may apply.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Return Shipping</h3>
                <p>
                  We provide a free return label for all eligible returns. Simply print the label, pack your item securely, and drop it off at any carrier location.
                </p>
              </div>
            </div>
          </section>

          <section className="border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
            <h2 className="text-3xl font-bold mb-6 text-slate-950">Refund Process</h2>
            <div className="space-y-4 text-slate-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">Refund Timeline</h3>
                <p>
                  Once we receive and inspect your return, we'll process your refund within 5-7 business days. The refund will be credited to your original payment method.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">What's Refunded</h3>
                <p>
                  You'll receive a full refund of the product price and original shipping cost (less any applicable restocking fees).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Damaged or Defective Items</h3>
                <p>
                  If your item arrives damaged or is defective, we'll provide a replacement or full refund immediately at no cost to you.
                </p>
              </div>
            </div>
          </section>

          <section className="border border-slate-200 rounded-3xl p-8 bg-slate-50/50">
            <h2 className="text-3xl font-bold mb-6 text-slate-950">How to Initiate a Return</h2>
            <ol className="space-y-4 text-slate-700 list-decimal list-inside">
              <li>Log in to your account and navigate to "My Orders"</li>
              <li>Select the item you wish to return and click "Request Return"</li>
              <li>Choose a return reason and print your shipping label</li>
              <li>Pack your item securely and attach the label</li>
              <li>Drop off at your nearest carrier location</li>
              <li>Track your return status in your account</li>
            </ol>
          </section>

          <section className="border border-brand-blue/20 rounded-3xl p-8 bg-brand-blue/5">
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Need Help?</h2>
            <p className="text-slate-600 mb-4">
              Have questions about returns or refunds? Our support team is happy to help.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition"
            >
              Contact Support
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
