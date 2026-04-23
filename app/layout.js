import { Urbanist, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

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
    default: "Vigorware",
    template: "%s – Vigorware",
  },
  description: "Vigorware ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
