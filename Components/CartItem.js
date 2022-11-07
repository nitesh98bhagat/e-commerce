import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../app/cartSlice";

export default function CartItem({ props }) {
  const { id, title, description, thumbnail, price, discountPercentage } =
    props;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  return (
    <div className="grid-cols-5 grid items-center lg:px-10 border-b justify-center">
      <img
        src={
          thumbnail ??
          "https://www.intlmag.org/global_graphics/default-store-350x350.jpg"
        }
        alt="product_image"
        className=" object-contain h-40"
      />
      <div className="col-span-2 md:col-span-3 mx-5  space-y-2 ">
        <p className="text-xl line-clamp-1">{title ?? "Title"}</p>
        <p className="text-sm line-clamp-2">
          {description ??
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum sapiente expedita laudantium, debitis quisquam est, quae optio fugiat rem eos temporibus quis accusantium distinctio? Blanditiis eius possimus error suscipit beatae exercitationem fugit, velit libero. Quam, sit incidunt dolore at minus consequuntur tempore veritatis vel, pariatur ab vero magni unde."}{" "}
        </p>
        <h1 className="text-2xl font-semibold py-2">
          ${price} {/* $699 */}
          <span className="line-through text-xl text-slate-500 font-normal mx-3">
            {/* {(data.price + data.price * 0.36).toFixed(2)} */}
            $875
          </span>
          <span className=" text-base text-red-500 font-medium ">
            {/* {(data.price + data.price * 0.36).toFixed(2)} */}
            {/* 27% OFF */}
            {discountPercentage}%OFF
          </span>
        </h1>
      </div>
      <div className="flex flex-col w-40 space-y-2 ">
        {/* <div className="flex  text-white text-3xl bg-pink-500">
          <button
            className=" px-3 font-semibold "
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
          <h1 className="px-5 py bg-white text-pink-500 border flex-1 text-center">
            {quantity}
          </h1>
          <button
            disabled={quantity == 1}
            className={` px-3 font-semibold ${
              quantity == 1 && "bg-slate-200 cursor-not-allowed"
            } `}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </button>
        </div> */}
        <button
          className="bg-slate-800 p-2 font-semibold text-white"
          onClick={() => dispatch(removeFromCart({ id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
