import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";
import { SearchItemCard } from "../Components/ItemCard";

export default function SearchPage() {
  const router = useRouter();
  const progressRef = useRef();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  const productList = useSelector((state) => state.productList.value);

  const handleMin = (e) => {};
  const handleMax = (e) => {};

  return (
    <div className="flex flex-row items-start ">
      {/* FILTER SECTION */}
      <div className="flex flex-col w-1/5 justify-center items-start py-5 px-5 space-y-2 accent-pink-500">
        {/* rating filter */}
        <h1 className="text-xl font-semibold">Ratings</h1>
        {[5, 4, 3, 2, 1].map((index) => (
          <div className="flex flex-row text-sm space-x-2" key={index}>
            <input
              key={index}
              type="checkbox"
              id={index}
              name={index}
              value={index}
            />
            <label for={index} className="flex">
              {[...Array(Math.floor(index))].map((e, i) => (
                <svg
                  key={e}
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
            </label>
          </div>
        ))}

     

        {/* price range */}

        <div className=" w-full py-5">
          <h1 className="text-xl font-medium">Price Range</h1>
          <h1 className="text-sm text-slate-500">Set your prefered price</h1>

          <div className="flex w-full justify-between py-3  text-base items-center space-x-2">
            <p>Min:</p>
            <input
              type="number"
              value={minValue}
              className="w-1/3 p-1 text-sm border rounded-lg"
            />
            <div className="mx-auto"></div>
            <p>Max:</p>
            <input
              type="number"
              value={maxValue}
              className="w-1/3 p-1 text-sm border rounded-lg"
            />
          </div>
          {/* slider */}
          <div className="mb-4">
            <div className="slider relative h-1 rounded-md bg-grey-300">
              <div
                className="progress absolute h-1 bg-green-300 rounded"
                ref={progressRef}
              ></div>
            </div>

            <div className="range-input relative">
              {/* min value */}
              <input
                type="range"
                value={minValue}
                min={0}
                step={10}
                max={1000}
                onChange={handleMin}
                className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
              />
              {/* max value */}
              <input
                type="range"
                min={0}
                step={10}
                max={1000}
                value={maxValue}
                onChange={handleMax}
                className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* end */}
      </div>

      {/* product list */}
      {/* <h1>{router.query.slug}</h1> */}
      <div className="flex flex-col flex-1 border-l">
        {productList
          .filter((e) => e.title === router.query.slug)
          .map((e, i) => (
            <SearchItemCard key={i} props={e} />
          ))}
      </div>
    </div>
  );
}
