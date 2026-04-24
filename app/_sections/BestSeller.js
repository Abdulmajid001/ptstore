import Image from "next/image";
import Link from "next/link";
import Heading from "../_components/Heading";
import { bestSellers } from "../_constants/data";
import ProductCard from "../_components/ProductCard";

export default function BestSeller() {
  return (
    <section className="max-w-[130rem] m-auto px-[2rem] md:px-[9rem]">
      {/* Header */}
      <Heading label="Best Sellers" />

      {/* Products */}
      <div className="mt-[3.2rem] grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-[1.6rem]">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex mt-20 items-center justify-center">
        <Link
          href="/shop"
          className="text-2xl text-brand-blue hover:underline border border-blue border-2 px-4 py-2"
        >
          See more &darr;
        </Link>
      </div>
    </section>
  );
}
