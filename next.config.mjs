/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      // new URL(
      //   "https://pztmqhebaevengyfzwbb.supabase.co/storage/v1/object/public/nike/**",
      // ),
      new URL("https://images.unsplash.com/**"),
    ],
  },
};

export default nextConfig;
