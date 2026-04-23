import Hero from "./_sections/Hero";
import Categories from "./_sections/Categories";
import BestSeller from "./_sections/BestSeller";
import FeaturedProducts from "./_sections/FeaturedProducts";

function page() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSeller />
      <FeaturedProducts />
    </>
  );
}

export default page;
