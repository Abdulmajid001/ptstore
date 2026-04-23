import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="max-w-[130rem] bg-brand-light fixed top-0 left-0 px-[2rem] sm:px-[4.8rem] flex justify-between items-center w-full z-50 transition-all duration-300  text-xl sm:text-2xl md:text-semibold md:text-3xl h-[8rem]">
      <Link href="/">
        {/* <Image width={40} height={40  } src="/Logo-icon-light.png" alt="Abdulmajid Hope Logo" /> */}
        <span className="font-bold text-3xl">PT Store</span>
      </Link>
      <Link className={`tracking-widest`} href="/cart">
        Cart
      </Link>
    </header>
  );
}

export default Header;
