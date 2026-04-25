import { Urbanist, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import MobileNav from "./_components/MobileNav";
import Footer from "./_sections/Footer";
import WhatsAppButton from "./_components/WhatsAppButton";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Ptstore",
    template: "%s – Ptstore",
  },
  description: "Ptstore ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${urbanist.className}`}>
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
