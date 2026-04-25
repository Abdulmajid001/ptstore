"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Account", href: "/account" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function HamburgerMenuModal({ open, onClose }) {
  const overlayRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const overlay = overlayRef.current;
    const items = itemRefs.current.filter(Boolean);
    if (!overlay) return;

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (open) {
      timeline
        .set(overlay, { visibility: "visible" })
        .to(overlay, { autoAlpha: 1, duration: 0.25 })
        .fromTo(
          overlay.querySelector("aside"),
          { x: "-100%" },
          { x: "0%", duration: 0.4, ease: "power3.out" },
          "<",
        )
        .fromTo(
          items,
          { x: -16, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.08, duration: 0.38 },
          "<0.1",
        );
    } else {
      timeline
        .to(items, { x: -12, opacity: 0, duration: 0.18, stagger: 0.06 })
        .to(
          overlay.querySelector("aside"),
          { x: "-100%", duration: 0.3 },
          "<0.05",
        )
        .to(overlay, { autoAlpha: 0, duration: 0.25 }, "<0.05")
        .set(overlay, { visibility: "hidden" });
    }

    return () => timeline.kill();
  }, [open]);

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-40 transition-opacity duration-300 ${
        open
          ? "pointer-events-auto opacity-100 visible"
          : "pointer-events-none opacity-0 invisible"
      }`}
    >
      <div className="absolute inset-0" onClick={onClose} />

      <aside className="pt-[9.6rem] relative flex h-full w-[min(80vw,40rem)] max-w-[70vw] flex-col gap-8  p-8 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
        <div className="grid gap-3">
          {menuItems.map(({ href, label }, index) => (
            <Link
              key={label}
              href={href}
              className="block rounded-4xl px-6 py-3 text-2xl font-semibold  transition duration-300 hover:-translate-x-1 hover:bg-brand-blue/95 hover:text-brand-light"
              onClick={onClose}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              {label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}
