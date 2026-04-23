// import {Button} from "../components/Button";
// import Stack from './Stack'

import Button from "../_components/Button";
import Image from "next/image";

function Hero() {
  return (
    <section className="max-w-[130rem] hero grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-15 items-center m-auto py-[9.6rem] px-[2rem] md:px-[4.6rem]">
      <div className="flex flex-col gap-10 text-center md:text-left lg:gap-12">
        <h2 className="text-3xl md:text-4xl tracking-widest">
          Next-Gen Gadgets
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          Fast, affordable and trusted.
        </h1>
        <p className="text-2xl md:text-3xl md:text-4xl">
          We bring you trusted tech products that combines quality and value.
          Shop with confidence and stay ahead.
        </p>
        <div className="md:block mt-4">
          <Button text="Shop now &rarr;" href="#product" />
        </div>
      </div>
      <div className="relative aspect-square w-[80%] md:w-[90%] mx-auto">
        <Image
          fill
          src="/images/alienware-slant-img.png"
          alt="Vigorware collection"
          className="object-contain"
        />
      </div>
    </section>
  );
}

export default Hero;
