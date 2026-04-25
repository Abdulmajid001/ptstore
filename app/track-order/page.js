import TrackOrderForm from "./TrackOrderForm";

export const metadata = {
  title: "Track Your Order | Order Status",
};

export default function Page() {
  return (
    <div className="max-w-[130rem] mx-auto py-[9.6rem] px-[2rem] md:px-[4.6rem] min-h-[90vh]">
      <h1 className="text-4xl font-bold mb-6">View Your Order Status</h1>
      <TrackOrderForm />
    </div>
  );
}
