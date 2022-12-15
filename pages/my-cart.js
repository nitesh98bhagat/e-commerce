import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { cartTotal } from "../app/cartSlice";
import CartItem from "../Components/CartItem";

export default function MyCart() {
  const cartItems = useSelector((state) => state.cart.value);
  const cartTotal2 = useSelector(cartTotal);

  const { data: session } = useSession();

  return (
    <div className="flex flex-col  lg:flex-row  justify-center min-h-screen  ">
      {/* checkoutlist */}
      <div className="w-full lg:w-2/3  lg:overflow-y-auto   border ">
        <h1 className="text-2xl font-semibold p-5 bg-slate-50 ">My Cart</h1>

        {cartItems.length == 0 && (
          <Image
            width={500}
            height={500}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwT4o-X8qXXCd_ddwWI5q2cFU9eXVN1JPtFRQlBr3BHKOzwBR8Ydjf7KHtrhdZknv4q5U&usqp=CAU"
            className="mx-auto w-1/3 my-40"
            alt="="
          />
        )}

        {cartItems.map((e) => (
          <CartItem key={e.id} props={e} />
        ))}
      </div>
      <div className=" w-full lg:w-1/4  text-2xl  ">
        <div className="flex flex-col px-5 text-slate-800 py-3 space-y-3 fixed bottom-0 lg:sticky lg:top-24  shadow-sm bg-white w-full border-t">
          <h1 className="text-2xl font-semibold text-black  ">Total</h1>
          <p className="text-lg flex justify-between">
            <p>Cart total</p> <span>${cartTotal2}</span>
          </p>
          <p className="text-lg flex justify-between">
            <p>Discount</p> <span>12%</span>
          </p>
          <p className="text-lg flex justify-between">
            <p>Delivery</p> <span>$00.0</span>
          </p>

          <button
            disabled={session ? false : true}
            onClick={() => console.log("hhhh")}
            className={` p-2  font-semibold text-white ${
              session
                ? "cursor- bg-pink-500"
                : "cursor-not-allowed bg-slate-300"
            } `}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
