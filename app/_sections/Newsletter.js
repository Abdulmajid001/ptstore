export default function Newsletter() {
  return (
    <section className="max-w-[130rem] m-auto mb-[4rem] px-[2rem] md:px-[9rem]">
      <div className="bg-[#0f3d3a] rounded-[2rem] px-[2.4rem] md:px-[4.8rem] py-[4rem] md:py-[5.6rem] flex flex-col md:flex-row md:items-center md:justify-between gap-[3.2rem] shadow-lg">
        {/* Left */}
        <div className="max-w-[45rem]">
          <h2 className="text-white text-[2.4rem] md:text-[3.2rem] font-semibold mb-[1.2rem]">
            Subscribe our newsletter
          </h2>
          <p className="text-[1.4rem] text-white/80 leading-[1.6]">
            Get the latest tech updates, exclusive deals, and new arrivals.
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:max-w-[40rem]">
          <p className="text-[1.3rem] text-white/80 mb-[0.8rem]">
            Stay up to date
          </p>

          <div className="flex items-center bg-white rounded-full p-[0.4rem]">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-[1.2rem] py-[0.8rem] text-[1.3rem] outline-none rounded-full focus:ring-2 focus:ring-[var(--color-brand-blue)]"
            />
            <button className="bg-[var(--color-brand-blue)] text-white text-[1.3rem] px-[1.6rem] py-[0.8rem] rounded-full hover:opacity-90 transition">
              Subscribe
            </button>
          </div>

          <p className="text-[1.1rem] text-white/60 mt-[0.8rem]">
            By subscribing you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}
