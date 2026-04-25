import { getAccessories } from "@/app/_lib/api-products";
import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";
import ListSkeleton from "@/app/_components/ListSkeleton";
import ProductCard from "@/app/_components/ProductCard";

export default async function Page() {
  return (
    <Suspense fallback={<ListSkeleton />}>
      <AccessoriesComp />
    </Suspense>
  );
}

async function AccessoriesComp() {
  "use cache";
  cacheLife("minutes");
  cacheTag("accessories");

  const products = await getAccessories();
  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-500 text-2xl md:text-4xl min-h-[90vh] ">
        No accessories available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-10 mt-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
