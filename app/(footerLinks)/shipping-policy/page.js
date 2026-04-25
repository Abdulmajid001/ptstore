import Link from "next/link";

export const metadata = {
  title: "Shipping Policy",
  description:
    "Learn about PT Store's shipping options, delivery times, costs, and tracking information.",
};

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen pt-40 pb-20 px-6 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-950">
            Shipping Policy
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            We're committed to getting your orders to you quickly and safely. Here's everything you need to know about shipping with PT Store.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-slate-950">Shipping Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <h3 className="text-xl font-semibold mb-3 text-slate-950">Standard Shipping</h3>
                <p className="text-slate-600 mb-3">
                  Reliable and affordable delivery for most items.
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Delivery Time:</strong> 5-7 business days</p>
                  <p><strong>Cost:</strong> Free on orders over $50</p>
                  <p><strong>Coverage:</strong> Continental US</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <h3 className="text-xl font-semibold mb-3 text-slate-950">Express Shipping</h3>
                <p className="text-slate-600 mb-3">
                  Fast delivery when you need it urgently.
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Delivery Time:</strong> 2-3 business days</p>
                  <p><strong>Cost:</strong> $14.99</p>
                  <p><strong>Coverage:</strong> Continental US</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <h3 className="text-xl font-semibold mb-3 text-slate-950">Overnight Shipping</h3>
                <p className="text-slate-600 mb-3">
                  Get your order tomorrow morning.
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Delivery Time:</strong> Next business day</p>
                  <p><strong>Cost:</strong> $24.99</p>
                  <p><strong>Coverage:</strong> Major US cities</p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50/50">
                <h3 className="text-xl font-semibold mb-3 text-slate-950">International Shipping</h3>
                <p className="text-slate-600 mb-3">
                  We ship worldwide with competitive rates.
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <p><strong>Delivery Time:</strong> 2-4 weeks</p>
                  <p><strong>Cost:</strong> Varies by destination</p>
                  <p><strong>Coverage:</strong> 150+ countries</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Processing Time</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Most orders are processed within 24 hours (excluding weekends and holidays). During high-volume periods, processing may take up to 48 hours.
              </p>
              <p>
                Once your order ships, you'll receive a tracking number via email. Processing time does not include delivery time.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Shipping Costs</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Shipping costs are calculated at checkout based on your location and selected shipping method. You can see the exact cost before completing your purchase.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Standard shipping is free on orders over $50</li>
                <li>Orders under $50 have a standard shipping fee of $4.99</li>
                <li>Expedited options are available for an additional fee</li>
                <li>International shipping costs vary by destination</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Tracking Your Order</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Once your order ships, you'll receive an email with a tracking number and a link to track your package in real-time.
              </p>
              <p>
                You can also track your order by logging into your account and viewing your order history. Most carriers provide updates every 24 hours.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Delivery Issues</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Late Delivery</h3>
                <p>
                  If your package doesn't arrive by the estimated delivery date, contact us and we'll investigate with the carrier.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Lost Package</h3>
                <p>
                  If your package is lost, we'll file a claim with the carrier and send you a replacement or issue a refund.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Damaged Package</h3>
                <p>
                  If your package arrives damaged, report it within 48 hours. We'll arrange a replacement or refund at no cost.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-slate-950">Restrictions</h2>
            <div className="space-y-4 text-slate-700 bg-slate-50/50 rounded-2xl p-6">
              <p>
                Certain items cannot be shipped to specific locations due to regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Lithium batteries: Limited to ground shipping only</li>
                <li>Hazardous materials: May have restricted areas</li>
                <li>Large items: May not qualify for certain shipping methods</li>
              </ul>
              <p>
                These restrictions will be noted during checkout. For questions, contact our support team.
              </p>
            </div>
          </section>

          <section className="border border-brand-blue/20 rounded-3xl p-8 bg-brand-blue/5">
            <h2 className="text-2xl font-bold mb-4 text-slate-950">Need Shipping Help?</h2>
            <p className="text-slate-600 mb-6">
              Have questions about shipping? Our support team is here to assist you.
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
