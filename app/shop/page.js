import ListSkeleton from "../_components/ListSkeleton";
import { Suspense } from "react";
import AllProductComp from "../_components/AllProductComp";

export const metadata = {
  title: "Shop",
};

function Page() {
  return (
    <section>
      <Suspense fallback={<ListSkeleton />}>
        <AllProductComp />
      </Suspense>
    </section>
  );
}

export default Page;
