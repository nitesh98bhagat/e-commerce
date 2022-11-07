import { useRouter } from "next/router";
import React from "react";

export default function ItemCard({ props }) {
  const router = useRouter();

  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props;

  return (
    <div
      onClick={() => router.push(`/product-details/${id}`)}
      className="flex flex-col border hover:scale-105 bg-white hover:bg-slate-50 cursor-pointer  justify-center items-start    border-slate-100 "
    >
      <img
        src={
          thumbnail ??
          "https://www.intlmag.org/global_graphics/default-store-350x350.jpg"
        }
        alt="product image"
        className="w-full object-cover h-60 "
      />
      <div className="p-3">
        <h1 className="text-xl font-base ">{title ?? "Item name"}</h1>
        <h1 className="text-sm line-clamp-2 py-1 font-base ">
          {description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam          incidunt ullam quos est voluptatem, hic necessitatibus nam corporis          dolor animi quod tenetur earum eligendi nemo suscipit sapiente modi          obcaecati illo quasi, omnis reiciendis accusamus consequuntur harum          tempora? Iste unde adipisci debitis molestiae ratione. Laudantium          cumque, molestiae eveniet aspernatur perspiciatis recusandae."}
        </h1>
        <h1 className="text-sm font-semibold flex flex-row text-blue-500">
          {[...Array(Math.floor(rating))].map((e, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
          <span className="text-yellow-600 pr-5 ">{rating} </span>( {154})
        </h1>
        <div className="my-auto"></div>

        <h1 className="text-2xl font-semibold py-2">
          {/* ${e.price}{" "} */}${price}
          <span className="line-through text-base text-slate-500 font-normal px-3">
            {((price / 100) * 12.96 + price).toFixed(2)}
            {/* 879 */}
          </span>
          <span className=" text-base text-red-500 font-medium">
            {/* {(e.price + e.price * 0.36).toFixed(2)} */}
            {discountPercentage}%OFF
          </span>
        </h1>

        <h1 className="text-sm text-slate-400">10% Off on Select Cards</h1>
        <h1 className="text-xs text-slate-800 font-semibold">
          Delivery within 2 days
        </h1>
      </div>
    </div>
  );
}

export function SearchItemCard({ props }) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = props;

  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/product-details/${id}`)}
      className="grid-cols-5 grid items-center lg:px-10 border-b justify-center cursor-pointer hover:bg-slate-50 p-3"
    >
      <img
        src={
          thumbnail ??
          "https://www.intlmag.org/global_graphics/default-store-350x350.jpg"
        }
        alt="product_image"
        className=" object-contain"
      />
      <div className="col-span-2 md:col-span-3 mx-5   ">
        <p className="text-2xl line-clamp-1">
          {title ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        </p>
        <p className="text-base line-clamp-2">
          {description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum sapiente expedita laudantium, debitis quisquam est, quae optio fugiat rem eos temporibus quis accusantium distinctio? Blanditiis eius possimus error suscipit beatae exercitationem fugit, velit libero. Quam, sit incidunt dolore at minus consequuntur tempore veritatis vel, pariatur ab vero magni unde."}
        </p>
        <h1 className="text-base font-semibold flex flex-row items-center text-blue-500">
          {[...Array(Math.floor(rating))].map((e, i) => (
            <svg
              key={e}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-yellow-400"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}{" "}
          {/* ( {data.rating.count}) */}548
        </h1>

        <h1 className="text-2xl font-semibold py-2">
          {/* ${e.price}{" "} */}${price}
          <span className="line-through text-base text-slate-500 font-normal px-3">
            {((price / 100) * 12.96 + price).toFixed(2)}
            {/* 879 */}
          </span>
          <span className=" text-base text-red-500 font-medium">
            {/* {(e.price + e.price * 0.36).toFixed(2)} */}
            {discountPercentage}%OFF
          </span>
        </h1>

        <h1 className="text-sm text-slate-400">10% Off on Select Cards</h1>
        <h1 className="text-sm text-slate-800 font-semibold">
          Delivery within 2 days
        </h1>
      </div>
    </div>
  );
}
