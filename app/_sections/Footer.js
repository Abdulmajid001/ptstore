import Link from "next/link";

const footerLinks = {
  shop: [
    { name: "Laptops", href: "/shop/laptops" },
    { name: "Smartphones", href: "/shop/phones" },
    { name: "Accessories", href: "/shop/accessories" },
    { name: "Gaming", href: "/shop/gaming" },
  ],
  support: [
    { name: "Contact Us", href: "/contact-us" },
    { name: "Order Tracking", href: "/orders" },
    { name: "Returns & Refunds", href: "/return-refund" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping-policy" },
  ],
};

const FooterLink = ({ href, children }) => (
  <Link
    href={href}
    className="relative inline-block text-[1.3rem] text-[rgba(247,248,250,0.88)] cursor-pointer transition-colors duration-300 hover:text-white group"
  >
    {children}
    <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-gradient-to-r from-brand-blue to-white group-hover:w-full transition-all duration-500 ease-out"></span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="max-w-[130rem] m-auto py-[6.4rem] px-[2rem] md:px-[9rem] bg-brand-dark text-brand-light shadow-[0_-20px_60px_-40px_rgba(0,0,0,0.6)] pb-[9rem] md:pb-[4rem]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[3.2rem]">
        {/* Brand */}
        <div>
          <h3 className="text-[2rem] font-semibold mb-[1rem]">PTStore</h3>
          <p className="text-[1.3rem] leading-[1.6] text-[rgba(247,248,250,0.88)]">
            Making your tech shopping simple, fast, and reliable.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-2xl font-bold mb-[1.2rem]">Shop</h4>
          <ul className="space-y-[0.8rem]">
            {footerLinks.shop.map((link) => (
              <li key={link.name}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-2xl font-bold mb-[1.2rem]">Support</h4>
          <ul className="space-y-[0.8rem]">
            {footerLinks.support.map((link) => (
              <li key={link.name}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-2xl font-bold mb-[1.2rem]">Legal</h4>
          <ul className="space-y-[0.8rem]">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <FooterLink href={link.href}>{link.name}</FooterLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-[4rem] border-t border-[rgba(255,255,255,0.12)] pt-8 text-[1.2rem] text-[rgba(247,248,250,0.7)] text-center">
        {/* © {new Date().getFullYear()} PTStore. All rights reserved. */}
        &copy; 2026 PT-World. All rights reserved.
      </div>
    </footer>
  );
}
