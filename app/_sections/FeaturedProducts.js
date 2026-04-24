import Link from "next/link";
import { featuredProducts } from "../_constants/data";
import Heading from "../_components/Heading";
import ProductCard from "../_components/ProductCard";

export default function FeaturedSection() {
  return (
    <section className="max-w-[130rem] m-auto py-[9.6rem] px-[2rem] md:px-[9rem]">
      {/* Header */}
      <Heading label="Featured Products" />
      {/* Products */}
      <div className="mt-[3.2rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2.4rem]">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* See more link */}
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

// import Image from "next/image";
// import Link from "next/link";
// import { featuredProducts } from "../_constants/data";
// import Heading from "../_components/Heading";

// export default function FeaturedProducts() {
//   return (
//     <section className="max-w-[130rem] m-auto py-[9.6rem] px-[2rem] md:px-[9rem]">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <Heading h="Featured Products" hClass="" />

//         <Link
//           href="/shop"
//           className="text-[1.4rem] text-[var(--color-brand-blue)] hover:underline"
//         >
//           See more
//         </Link>
//       </div>

//       {/* Products */}
//       <div className="mt-[3.2rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[2.4rem]">
//         {featuredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-[1.6rem] p-[1.6rem] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
//           >
//             {/* Image */}
//             <div className="w-full h-[16rem] flex items-center justify-center mb-[1.6rem]">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={160}
//                 height={160}
//                 className="object-contain group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Name */}
//             <p className="text-[1.5rem] font-medium mb-[0.6rem] line-clamp-2">
//               {product.name}
//             </p>

//             {/* Price */}
//             <p className="text-[1.5rem] text-[var(--color-brand-blue)] font-semibold">
//               ₦{product.price.toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
