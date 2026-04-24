import { Urbanist, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import MobileNav from "./_components/MobileNav";
import Footer from "./_sections/Footer";

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
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Header />
        <main>{children}</main>
        <MobileNav />
        <Footer />
      </body>
    </html>
  );
}
