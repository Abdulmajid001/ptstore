import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="max-w-[130rem] m-auto mb-[4rem] px-[2rem] md:px-[9rem]">
      <div className="bg-[#0f3d3a] rounded-[2rem] px-[2rem] sm:px-[3rem] md:px-[6rem] py-[3rem] sm:py-[4rem] md:py-[5rem] lg:py-[7rem] flex flex-col md:flex-row md:items-center md:justify-between gap-[2rem] md:gap-[4rem] shadow-lg">
        {/* Left */}
        <div className="max-w-[45rem] text-center md:text-left">
          <h2 className="text-white text-[2rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.2rem] font-semibold mb-[1rem] sm:mb-[1.5rem] md:mb-[2rem] leading-[1.2] sm:leading-[1.3]">
            Subscribe to our Newsletter
          </h2>
          <p className="text-2xl sm:text-3xl md:text-[1.4rem] text-white/80 leading-[1.6] sm:leading-[1.7] md:leading-[1.8] mb-[1rem]">
            Get exclusive deals, new arrivals, and tech updates delivered to
            your inbox.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:max-w-[40rem]">
          {/* <p className="text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] text-white/80 mb-[1.5rem] sm:mb-[2rem] leading-[1.5] sm:leading-[1.6] text-center md:text-left">
            Latest gadgets. Best deals. Straight to your inbox.
          </p> */}

          <div className="flex flex-row items-stretch sm:items-center bg-white rounded-full p-[0.4rem] sm:p-[0.6rem] mb-[1.5rem] sm:mb-[2rem] gap-[0.5rem] sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-[1.2rem] sm:px-[1.6rem] py-[0.8rem] sm:py-[1rem] text-[1.2rem] sm:text-[1.3rem] outline-none rounded-full sm:rounded-full focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-brand-blue text-white text-[1.2rem] sm:text-[1.3rem] px-[1.5rem] sm:px-[2rem] py-[0.8rem] sm:py-[1rem] rounded-full hover:opacity-90 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>

          <p className="text-xl sm:text-2xl text-white/60 mt-[0.5rem] sm:mt-[1rem] leading-[1.4] sm:leading-[1.5] text-center md:text-left">
            By subscribing you agree to our{" "}
            <Link
              href="/privacy"
              className="underline hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
