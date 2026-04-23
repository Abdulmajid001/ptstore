import Image from "next/image";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white p-[1.2rem] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
      {/* Image */}
      <div className="w-full h-[12rem] flex items-center justify-center mb-[1rem]">
        <Image
          src={product.image}
          alt={product.name}
          width={120}
          height={120}
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Name */}
      <p className="text-[1.4rem] font-medium">{product.name}</p>

      {/* Price */}
      <p className="text-[1.4rem] mt-5 text-brand-blue font-semibold">
        ₦{product.price.toLocaleString()}
      </p>

      {/* Add to Cart */}
      <button
        // type="button"
        // onClick={() => onAddToCart?.(product)}
        className="mt-6 w-full bg-brand-blue px-4 py-3 text-[1.3rem] font-semibold text-white hover:bg-[#1663b1] transition-colors duration-300"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
