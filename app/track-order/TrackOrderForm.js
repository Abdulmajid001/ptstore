"use client";

import { useRouter, usePathname } from "next/navigation";
import { useForm } from "react-hook-form";

export default function TrackOrderForm() {
  const router = useRouter();
  const pathname = usePathname();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      trackId: "",
    },
  });

  // Normalize input while typing
  const normalizeTrackId = (value) => {
    return value
      .toLowerCase()
      .replace(/\s+/g, "") // remove spaces
      .replace(/^slp(?!-)/, "slp-"); // ensure slp-
  };

  const onSubmit = ({ trackId }) => {
    const normalized = normalizeTrackId(trackId);

    router.push(`${pathname}/${normalized}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:flex-row gap-6 md:gap-10"
    >
      <div>
        <input
          type="text"
          placeholder="e.g slp-1078003917"
          className={`px-6 py-4 text-xl border-2 w-full rounded-full outline-none transition
          ${
            errors.trackId
              ? "border-red-500 focus:ring-red-500"
              : "border-brand-dark focus:ring-brand-blue"
          }
          focus:ring
        `}
          {...register("trackId", {
            required: "Order ID is required",
            pattern: {
              value: /^slp-\d{10}$/,
              message: "Format must be slp- followed by 10 digits",
            },
            onChange: (e) => {
              setValue("trackId", normalizeTrackId(e.target.value));
            },
          })}
        />

        {errors.trackId && (
          <p className="text-red-500 text-sm md:text-lg pt-2 px-4">
            {errors.trackId.message}
          </p>
        )}
      </div>
      <button className="h-16 bg-brand-blue text-white text-xl font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition">
        Check Order
      </button>
    </form>
  );
}
