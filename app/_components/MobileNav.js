"use client";
import {
  HiHome,
  HiMiniMagnifyingGlass,
  HiShoppingBag,
  HiUserCircle,
} from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "/", label: "Home", icon: HiHome },
    { name: "/shop", label: "Shop", icon: HiShoppingBag },
    { name: "/track-order", label: "Track Order", icon: HiMiniMagnifyingGlass },
    { name: "/account", label: "Account", icon: HiUserCircle },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full md:hidden z-50">
      <div className="flex justify-around items-center bg-brand-dark/85 backdrop-blur-sm shadow-lg p-7 transition-all duration-300">
        {navItems.map(({ name, label, icon: Icon }) => {
          const isActive =
            pathname === name ||
            (name === "/shop" && pathname.startsWith("/shop/"));
          return (
            <Link
              key={name}
              href={name}
              className={`flex flex-col items-center transition-all duration-300 ${
                isActive ? "text-blue-600 scale-110" : "text-brand-light"
              }`}
            >
              <Icon
                className={`w-7 h-7 mb-1 transition-colors duration-300 ${
                  isActive ? "text-blue-600" : "text-brand-light"
                }`}
              />
              <span className=" text-sm">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
