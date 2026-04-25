import Image from "next/image";
import { categories } from "../_constants/data";
import Heading from "../_components/Heading";

export default function CategorySection() {
  return (
    <section className="max-w-[130rem] m-auto px-[2rem] md:px-[9rem] pb-[9.6rem]  ">
      {/* Header */}
      <Heading label="Categories" />
      <div className="mt-[3.2rem] relative">
        <div className="flex pb-5 md:grid md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-[1.6rem] overflow-x-auto md:overflow-visible overflow-y-hidden scroll-smooth snap-x snap-mandatory md:justify-center ">
          {categories.map((category) => (
            <div
              key={category.id}
              className=" min-w-[10rem] md:min-w-0 flex flex-col items-center cursor-pointer group snap-start"
            >
              {/* Card */}
              <div className="w-[9rem] h-[6rem] md:w-full md:h-[8rem] rounded-[1.2rem] bg-white flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-[2px]">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <p className="text-[1.3rem] mt-[1rem] text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>

        {/* Fade edges ONLY on mobile */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[4rem] bg-gradient-to-r from-[var(--color-brand-light)] to-transparent md:hidden" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[4rem] bg-gradient-to-l from-[var(--color-brand-light)] to-transparent md:hidden" />
      </div>
    </section>
  );
}

// import {
//   FaLaptop,
//   FaGamepad,
//   FaSteam,
//   FaMoneyBillWaveAlt,
//   FaHeadphonesAlt,
// } from "react-icons/fa";
// import Heading from "../_components/Heading";

// const categories = [
//   {
//     title: "Gaming Laptops",
//     icon: <FaLaptop className="text-black text-5xl" />,
//     img: "https://via.placeholder.com/400x200?text=Gaming+Laptops",
//   },
//   {
//     title: "Consoles",
//     icon: <FaGamepad className="text-black text-5xl" />,
//     img: "https://via.placeholder.com/400x200?text=Consoles",
//   },
//   {
//     title: "PC Games",
//     icon: <FaSteam className="text-black text-5xl" />,
//     img: "https://via.placeholder.com/400x200?text=PC+Games",
//   },
//   {
//     title: "Gaming Phones",
//     icon: <FaMoneyBillWaveAlt className="text-black text-5xl" />,
//     img: "https://via.placeholder.com/400x200?text=Gaming+Phones",
//   },
//   {
//     title: "Accessories",
//     icon: <FaHeadphonesAlt className="text-black text-5xl" />,
//     img: "https://via.placeholder.com/400x200?text=Accessories",
//   },
// ];

// export default function Categories() {
//   return (
//     <section className="max-w-[130rem] m-auto py-[9.6rem] px-[2rem] md:px-[9rem]">
//       <Heading h="Categories" hClass="text-brand-dark" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={cat.img}
//               alt={cat.title}
//               className="w-full h-40 object-cover group-hover:opacity-80 transition-opacity duration-300"
//             />
//             <div className="absolute top-3 left-3">{cat.icon}</div>
//             <div className="absolute inset-0 bg-black/40 flex items-end p-4">
//               <h3 className="text-white font-medium text-lg">{cat.title}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
