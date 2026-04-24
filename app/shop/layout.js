import React from "react";
import BrandNav from "../_components/BrandNav";

function layout({ children }) {
  return (
    <section className="max-w-[130rem] items-center mx-auto text-center py-[9.6rem] px-8 md:px-[4.6rem]">
      <div className="text-center mb-5">
        <p className="max-w-2xl mx-auto text-2xl">
          Explore our exclusive collection of top-tier tech products, handpicked
          for quality and value. Shop with confidence and stay ahead with our
          trusted gadgets.
        </p>
      </div>
      <BrandNav />
      <div>{children}</div>
    </section>
  );
}

export default layout;
