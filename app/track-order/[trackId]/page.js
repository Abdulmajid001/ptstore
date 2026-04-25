// import ListSkeleton from "@/app/_components/ListSkeleton";
// import StatusBadge from "@/app/_components/StatusBadge";
// import { getOrderById } from "@/app/_lib/api-orders";
// import { cacheLife } from "next/cache";
// import { Suspense } from "react";
// import {
//   formatCurrency,
//   formatDate,
//   maskEmail,
//   maskMobile,
//   maskName,
// } from "@/app/_lib/utils/helpers";

// export const metadata = {
//   title: "Order Details - SneakHub",
// };

// export default async function OrderDetailsPage(props) {
//   return (
//     <Suspense fallback={<ListSkeleton length={1} />}>
//       <OrderDetails params={props.params} />
//     </Suspense>
//   );
// }

// async function OrderDetails({ params }) {
//   "use cache";
//   cacheLife("minutes");
//   // trackId-eg = "slp-2209566972"
//   const { trackId } = await params;

//   const order = await getOrderById(trackId);

//   const {
//     order_id,
//     created_at,
//     status,
//     orderPrice,
//     customerName,
//     gmail,
//     mobile,
//     cart,
//   } = order.data;

//   if (!order.success)
//     return (
//       <div className="max-w-[130rem] min-h-screen mx-auto py-[9.6rem] text-center px-[2rem] md:px-[4.6rem]">
//         <h1 className="text-3xl font-bold mb-6">Order Details</h1>
//         <p> Could not find order, check your order-ID and try again</p>
//       </div>
//     );

//   return (
//     <div className="max-w-[130rem] mx-auto py-[9.6rem] px-[2rem] md:px-[4.6rem]">
//       <p className="max-w-7xl mx-auto text-center mb-8 px-3 py-1 rounded-full text-lg font-semibold border bg-gray-100 text-gray-800 border-gray-300">
//         We recommend you screenshot or save your Order ID, so you can easily
//         track or reference your order later.
//       </p>
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
//         <h1 className="text-3xl font-bold mb-6">Order Details</h1>

//         {/* Order Info */}
//         <div className="space-y-3 text-xl text-gray-700 mb-8">
//           <p>
//             <strong>Order ID:</strong> {order_id}
//           </p>
//           <p>
//             <strong>Date:</strong> {created_at && formatDate(created_at)}
//           </p>
//           <p>
//             <strong>Status:</strong> <StatusBadge status={status} />
//           </p>
//           <p>
//             <strong>Total:</strong> {orderPrice && formatCurrency(orderPrice)}
//           </p>
//         </div>

//         {/* Customer Info */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-3">Customer Information</h2>
//           <div className="text-lg text-gray-700 space-y-1">
//             <p>
//               <strong>Name:</strong> {maskName(customerName)}
//             </p>
//             <p>
//               <strong>Email:</strong> {maskEmail(gmail)}
//             </p>
//             <p>
//               <strong>Mobile:</strong> {maskMobile(mobile)}
//             </p>
//           </div>
//         </div>

//         {/* Cart Items */}
//         <div>
//           <h2 className="text-2xl font-semibold mb-4">Items</h2>

//           <div className="space-y-4">
//             {cart &&
//               cart.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-4 bg-gray-50 p-4 rounded-xl"
//                 >
//                   {/* Product Image */}
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-24 h-24 object-cover rounded-lg"
//                   />

//                   {/* Product Info */}
//                   <div className="flex-1">
//                     <p className="text-xl font-semibold">{item.name}</p>
//                     <p className="text-gray-600 text-lg">
//                       Size: {item.selectedSize} • Color: {item.selectedColor}
//                     </p>
//                     <p className="text-gray-600 text-lg">
//                       Qty: {item.quantity}
//                     </p>
//                   </div>

//                   {/* Price */}
//                   <p className="text-xl font-semibold mt-auto">
//                     {formatCurrency(item.price * item.quantity)}
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
