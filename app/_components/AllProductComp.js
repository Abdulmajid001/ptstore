import { cacheLife, cacheTag } from "next/cache";
import { getAllProducts } from "../_lib/api-products";
import ProductCard from "./ProductCard";

export default async function AllProductComp() {
  "use cache";
  cacheLife("minutes"); // Cache for 60 seconds
  cacheTag("all-products");

  const products = await getAllProducts();

  if (!products || products.length === 0) {
    return (
      <p className="text-center text-gray-500 text-2xl md:text-4xl min-h-[90vh] ">
        No products found.
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
