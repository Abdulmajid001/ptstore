import Hero from "./_sections/Hero";
import Categories from "./_sections/Categories";
import BestSeller from "./_sections/BestSeller";
import FeaturedProducts from "./_sections/FeaturedProducts";
import Newsletter from "./_sections/Newsletter";

function page() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSeller />
      <FeaturedProducts />
      <Newsletter />
    </>
  );
}

export default page;
