"use client";
export default function ListSkeleton({ length = 8 }) {
  const skeletons = Array.from({ length });

  // If only one item, use full-width layout
  const gridClass =
    length === 1
      ? "grid grid-cols-1"
      : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <div className={`${gridClass} gap-6 mt-6`}>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className="bg-grey-100 overflow-hidden opacity-100 animate-fadeIn"
        >
          {/* Image shimmer */}
          <div className="relative h-48 w-full overflow-hidden bg-neutral-300">
            <div className="w-full h-full bg-stone-300 animate-pulse"></div>
          </div>

          {/* Text shimmer */}
          <div className="p-4 space-y-3">
            <div className="h-4 w-3/4 bg-gray-200 animate-pulse"></div>
            <div className="h-3 w-1/2 bg-gray-200 animate-pulse"></div>
            <div className="h-5 w-1/4 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
