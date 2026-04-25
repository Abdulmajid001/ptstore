"use client";

import { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import gsap from "gsap";

export default function WhatsAppButton() {
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  const phoneNumber = "2348143524819"; // International format
  const message = "Hello! I'm interested in your sneakers.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  useEffect(() => {
    // Subtle pulse (attention without movement)
    gsap.fromTo(
      btnRef.current,
      { boxShadow: "0 0 0 0 rgba(34,197,94,0.6)" },
      {
        boxShadow: "0 0 0 18px rgba(34,197,94,0)",
        duration: 2,
        repeat: -1,
        ease: "power1.out",
      },
    );
  }, []);

  const handleHover = () => {
    gsap.to(iconRef.current, {
      scale: 1.15,
      rotate: 6,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(iconRef.current, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <a
      ref={btnRef}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className="
        fixed bottom-32 right-8 md:right-10 z-50
        flex items-center justify-center
        w-16 h-16 md:w-18 md:h-18
        rounded-full bg-green-500 text-white
        shadow-xl
      "
    >
      <FaWhatsapp ref={iconRef} className="text-4xl md:text-5xl" />
    </a>
  );
}

// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsAppButton() {
//   const phoneNumber = "08143528787"; // Your WhatsApp number (no '+' or spaces)
//   const message = "Hello ! I'm interested in your sneakers.";
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
//     message
//   )}`;

//   return (
//     <a
//       href={whatsappUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Chat on WhatsApp"
//       className="fixed bottom-[9rem] right-[3rem] z-50 flex items-center justify-center w-16 h-16 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 group"
//     >
//       <FaWhatsapp className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300" />
//     </a>
//   );
// }
