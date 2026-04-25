"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  HiOutlineHome,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineUser,
} from "react-icons/hi";

const menuItems = [
  { label: "Home", href: "/", Icon: HiOutlineHome },
  { label: "Store", href: "/shop", Icon: HiOutlineShoppingBag },
  { label: "Collections", href: "/collections", Icon: HiOutlineSparkles },
  { label: "Account", href: "/account", Icon: HiOutlineUser },
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
        .to(overlay, { autoAlpha: 1, duration: 0.3 })
        .fromTo(
          items,
          { y: 36, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.45 },
          "<0.1",
        );
    } else {
      timeline
        .to(items, { y: 20, opacity: 0, duration: 0.18, stagger: 0.06 })
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
      <div className="absolute inset-0 backdrop-blur-xl" onClick={onClose} />

      <section className="relative mx-auto mt-20 max-w-[92vw] rounded-4xl border border-white/10 bg-slate-950/95 p-7 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.9)] backdrop-blur-2xl md:max-w-2xl">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl bg-slate-900/80 px-5 py-4 shadow-lg ring-1 ring-white/10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Navigation
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Fast access menu
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-200 transition hover:border-brand-blue/50 hover:text-white"
          >
            close
          </button>
        </div>

        <div className="grid gap-4">
          {menuItems.map(({ href, label, Icon }, index) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/85 px-5 py-5 text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800/95 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.45)]"
              onClick={onClose}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue/15">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-lg font-semibold">{label}</p>
                <p className="text-sm text-slate-400">
                  Explore premium sections
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
