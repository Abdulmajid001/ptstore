import Link from "next/link";

function Button({ text, href }) {
  return (
    <Link
      href={href}
      className={`ml-auto px-8 py-4 sm:px-8 sm:py-5 text-4xl md:text-5xl text-brand-light bg-brand-dark hover:bg-brand-blue shadow hover:shadow-md transition shadow cursor-pointer`}
    >
      {text}
    </Link>
  );
}

export default Button;
