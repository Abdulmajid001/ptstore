import ListSkeleton from "../_components/ListSkeleton";
import { Suspense } from "react";
// import AllProductComp from "../_components/AllProductComp";

export const metadata = {
  title: "Shop",
};

function Page() {
  return (
    <section>
      <Suspense fallback={<ListSkeleton />}>
        {/* <AllProductComp /> */}
        <ListSkeleton length={8} />
      </Suspense>
    </section>
  );
}

export default Page;
