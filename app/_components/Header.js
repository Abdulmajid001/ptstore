import Image from "next/image";
import Link from "next/link";
import { FaOpencart } from "react-icons/fa";

function Header() {
  return (
    <header className="max-w-[130rem] bg-brand-light fixed top-0 left-0 px-[2rem] sm:px-[4.8rem] flex justify-between items-center w-full z-50 transition-all duration-300  text-xl sm:text-2xl md:text-semibold md:text-3xl h-[8rem]">
      <Link href="/">
        <span className="font-bold text-3xl">PT Store</span>
      </Link>

      <Link
        className="relative p-3 rounded-full bg-brand-blue/15 backdrop-blur-lg shadow-lg"
        href="/cart"
      >
        <FaOpencart className="text-5xl" />
        {/* {cartQuantity > 0 && ( */}
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xl w-6 h-6 flex items-center justify-center">
          {/* {cartQuantity} */}6
        </span>
        {/* )} */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm flex items-center justify-center">
          cart
        </span>
      </Link>
    </header>
  );
}

export default Header;

// new menu code with gsap animation
// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaOpencart } from "react-icons/fa";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";

// const menuLinks = [
//   { name: "Home", path: "/" },
//   { name: "Shop", path: "/shop" },
//   { name: "About", path: "/about" },
//   { name: "Contact", path: "/contact" },
// ];

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuRef = useRef(null);
//   const linksRef = useRef([]);

//   useEffect(() => {
//     if (isOpen) {
//       gsap.to(menuRef.current, {
//         x: 0,
//         duration: 0.5,
//         ease: "power3.out",
//       });

//       gsap.fromTo(
//         linksRef.current,
//         { y: 50, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.1,
//           delay: 0.2,
//           duration: 0.5,
//           ease: "power3.out",
//         },
//       );
//     } else {
//       gsap.to(menuRef.current, {
//         x: "100%",
//         duration: 0.4,
//         ease: "power3.inOut",
//       });
//     }
//   }, [isOpen]);

//   return (
//     <>
//       <header className="max-w-[130rem] bg-brand-light fixed top-0 left-0 px-[2rem] sm:px-[4.8rem] flex justify-between items-center w-full z-50 h-[8rem]">
//         {/* Logo */}
//         <Link href="/">
//           <span className="font-bold text-3xl">PT Store</span>
//         </Link>

//         {/* Right Section */}
//         <div className="flex items-center gap-6">
//           {/* Cart */}
//           <Link
//             className="relative p-3 rounded-full bg-brand-blue/15 backdrop-blur-lg shadow-lg"
//             href="/cart"
//           >
//             <FaOpencart className="text-5xl" />
//             <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xl w-6 h-6 flex items-center justify-center">
//               6
//             </span>
//             <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-sm">
//               cart
//             </span>
//           </Link>

//           {/* Hamburger */}
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? (
//               <HiX className="text-5xl" />
//             ) : (
//               <HiMenuAlt3 className="text-5xl" />
//             )}
//           </button>
//         </div>
//       </header>

//       {/* Mobile Menu */}
//       <div
//         ref={menuRef}
//         className="fixed top-0 right-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-10 translate-x-full z-40"
//       >
//         {menuLinks.map((link, index) => (
//           <Link
//             key={link.name}
//             href={link.path}
//             ref={(el) => (linksRef.current[index] = el)}
//             onClick={() => setIsOpen(false)}
//             className="text-4xl font-semibold hover:text-brand-blue transition"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Header;
