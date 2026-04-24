"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SiNike,
  SiAdidas,
  SiPuma,
  SiNewbalance,
  SiReebok,
} from "react-icons/si";

import { FiMonitor, FiSmartphone, FiHeadphones } from "react-icons/fi";
import { MdOutlineLaptopMac, MdOutlineSportsEsports } from "react-icons/md";

export const brands = [
  { name: "All", icon: null, href: "/shop" },

  {
    name: "Laptops",
    icon: <MdOutlineLaptopMac />,
    href: "/shop/laptops",
  },

  {
    name: "Smartphones",
    icon: <FiSmartphone />,
    href: "/shop/smartphones",
  },

  {
    name: "Accessories",
    icon: <FiHeadphones />,
    href: "/shop/accessories",
  },

  {
    name: "Gaming",
    icon: <MdOutlineSportsEsports />,
    href: "/shop/gaming",
  },

  {
    name: "Desktop",
    icon: <FiMonitor />,
    href: "/shop/desktop",
  },
];

export default function BrandNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent py-4 mb-6">
      {brands.map((brand) => {
        const isActive = pathname === brand.href;
        return (
          <Link
            href={brand.href}
            key={brand.name}
            className={`flex items-center gap-2 px-6 py-3 min-w-max transition-all duration-300 snap-center cursor-pointer hover:bg-brand-blue hover:text-white
                ${
                  isActive
                    ? "bg-brand-blue text-brand-light"
                    : "border border-brand-dark text-dark"
                }`}
          >
            {brand.icon && (
              <span
                className={`text-2xl font-semibold ${isActive && "text-white"}`}
              >
                {brand.icon}
              </span>
            )}
            <span className="font-semibold text-2xl">{brand.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
