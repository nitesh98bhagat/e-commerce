import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";

export default function ProductDetails() {
  const [selectedImageIndex, setselectedImageIndex] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  const router = useRouter();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList.value);

  const filteredItem = productList.filter((e) => e.id == router.query.id);

  function NavPill({ title, index }) {
    return (
      <p
        onClick={() => setNavIndex(index)}
        className={`py-3   text-base font- cursor-pointer ${
          navIndex === index &&
          "text-pink-500 font-bold border-b-2 border-pink-500 "
        } hover:text-pink-700 text-slate-600`}
      >
        {title ?? "Home" + index}
      </p>
    );
  }

  console.log(filteredItem);

  return (
    <div>
      <div className="flex flex-row w-full  ">
        {/* sidebar image layout */}
        <div className="flex flex-col py-5  ">
          <div className="sticky top-28 space-y-3 ">
            {filteredItem[0].images.map((e, i) => (
              <img
                key={i}
                src={
                  e ??
                  "https://www.intlmag.org/global_graphics/default-store-350x350.jpg"
                }
                alt="image"
                onClick={() => setselectedImageIndex(i)}
                className={`w-20 object-contain mx-3 border-2 cursor-pointer   ${
                  selectedImageIndex == i && "border-pink-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* main image */}
        <div className="py-5 flex flex-col">
          <img
            src={
              filteredItem[0].images[selectedImageIndex] ??
              "https://www.intlmag.org/global_graphics/default-store-350x350.jpg"
            }
            alt="image"
            className="w-96 h-1/3 object-cover sticky top-28"
          />
        </div>

        {/* product details */}
        <div className="flex-1 px-12 space-y-3 py-5">
          {/* <div className="flex flex-row justify-start space-x-10 bg-white border-b-2 border-slate-100  sticky top-24 ">
            <NavPill title={"Overview"} index={0} />
            <NavPill title={"Information"} index={2} />
            <NavPill title={"Ratings & Reviews"} index={4} />
            <NavPill title={"About "} index={5} />
          </div> */}

          <h1 className="text-2xl  font-medium">
            {filteredItem[0].title}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            odit! */}
          </h1>
          <h1 className="text-lg text-slate-800 font-semibold">
            {filteredItem[0].brand}

            {/* Brand name */}
          </h1>
          <h1 className="text-base">
            {filteredItem[0].description ??
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti             laborum, atque pariatur doloremque cupiditate ipsa officia ab magnam            ut repellat? Aperiam, vel! Expedita assumenda pariatur consequatur            eius iure perferendis debitis quia ex nisi aliquam consectetur,            totam necessitatibus maxime accusamus tempore, sequi, eos labore            odit. Id itaque voluptate exercitationem laborum et?"}
          </h1>
          <h1 className="text-xl font-semibold flex flex-row text-blue-500">
            {[...Array(Math.floor(filteredItem[0].rating))].map((e, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}{" "}
            {/* ( {data.rating.count}) */}(548)
          </h1>
          <div className="my-auto"></div>

          <h1 className="text-4xl font-semibold py-2">
            ${filteredItem[0].price} {/* $699 */}
            <span className="line-through text-2xl text-slate-500 font-normal mx-3">
              {/* {(data.price + data.price * 0.36).toFixed(2)} */}
              $875
            </span>
            <span className=" text-2xl text-red-500 font-normal mx-3">
              {/* {(data.price + data.price * 0.36).toFixed(2)} */}
              {/* 27% OFF */}
              {filteredItem[0].discountPercentage}%OFF
            </span>
          </h1>
          <h1 className="text-lg text-slate-600 font-medium">
            Delivery within 2 days
          </h1>

          <div className="w-full border rounded-xl ">
            <h1 className="text-lg text-red-500 font-bold p-3 ">Offers</h1>

            <ul className="space-y-3 text-slate-500">
              <li className="text-base  font-normal border-t p-2">
                #Additional Flat INR 500 Instant Discount on ICICI Bank Credit
                Cards (excluding Amazon Pay ICICI Credit Card) Credit Card Full
                Payment Txn. Minimum purchase value INR 12000
              </li>
              <li className="text-base  font-normal border-t p-2">
                #10% Instant Discount up to INR 1250 on ICICI Bank Credit Card
                Non-EMI Trxn. Min purchase value INR 5000
              </li>
              <li className="text-base  font-normal border-t p-2">
                #Additional Flat INR 750 Instant Discount on Amazon Pay ICICI
                Bank Credit Card. Min purchase value INR 29999
              </li>
            </ul>
          </div>
          <h1 className="text-base font-bold">About this item</h1>
          <ul className="list-disc px-5 pb-10">
            {[
              "Processor: 12th Gen Intel Core i5-1235U | Speed: 10 Cores (2xP-core 1.3 / 4.4GHz, 8xE-core 0.9 / 3.3GHz) | 12Threads | 12MB Cache",
              `Display: 15.6" FHD (1920x1080)| TN Technology | 250Nits Brightness | Anti Glare`,
              "Memory and Storage: 8GB RAM DDR4-3200 Upgradable Up to 16GB | 512 GB SSD",
              "OS and Software: Windows 11 Home 64 | Office Home and Student 2021 | Xbox GamePass Ultimate 3-month subscription*",
              "Design: 4 side narrow bezel | 1.99 cm Thin and 1.63 kg Light || Smart Learning Features : Lenovo Aware | Whisper Voice | Eye Care",
              "Battery Life: 3-Cell 45Wh | Upto 6 Hours | Rapid Charge (Up to 80% in 1 Hour)",
              "Camera (Built-in): HD 720p with Privacy Shutter | Fixed Focus | Integrated Dual Array Microphone || Audio: 2x 1.5W Stereo Speakers | HD Audio | Dolby Audio",
              "Ports: 1x USB-A 2.0 | 1x USB-A 3.2 Gen 1 | 1x USB-C 3.2 Gen 1 (support data transfer, Power Delivery 3.0, and DisplayPort 1.2) | 1x Headphone / microphone combo jack (3.5mm) | 1x HDMI 1.4b | 1x 4-in-1 media reader (MMC, SD, SDHC, SDXC)",
              "Warranty: This genuine Lenovo laptop comes with 2 yr onsite manufacturer warranty + 1yr Accidental Damage Protection + 1 Yr Premium Care",
              "Active subscription needed;continues until cancelled-game catalog varies. Needs Windows11 & app to play PC games; see-xbox.com/pcgamesplan. Discounts exclude titles within 30 days of launch; based on Microsoft Store price. See xbox.com/game-pass.",
            ].map((e, i) => (
              <li key={i} className="text-slate-800">
                {e}
              </li>
            ))}
          </ul>
        </div>

        {/* Add to cart section */}
        <div className="flex flex-col  p-5  w-1/6">
          <div className="sticky top-28 w-full flex flex-col space-y-2">
            <button
              // onClick={handelAddToCart}
              className={`bg-pink-500 p-2 font-normal rounded-md text-white`}
              onClick={() => dispatch(addToCart(filteredItem[0]))}
            >
              {/* {isProductInTheCart ? "Add to Cart" : "Remove"} */}
              Add to cart
            </button>
            <button className="bg-slate-800 p-2 rounded-md text-white">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
    // <h1>data</h1>
  );
}
