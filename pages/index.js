// slider
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ItemCard from "../Components/ItemCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../app/productSlice";

const banner = [
  "https://m.media-amazon.com/images/I/6124QhAPExL._SX1500_.jpg",
  "https://m.media-amazon.com/images/I/71NCXxTGJCL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/710xff6TncL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71cac9idZML._SX3000_.jpg",
];

export default function Home({ data }) {
  const swiper = useSwiper();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList.value);

  useEffect(() => {
    dispatch(fetchProduct(data.products));
  }, []);

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="w-full flex  justify-center items-center">
        <button
          className="p-1 cursor-pointer"
          // onClick={() => swiper.slideNext()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <Swiper
          className=""
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={5}
          slidesPerView={1}
          loop
          autoplay
          pagination={{ clickable: true }}
        >
          {banner.map((e, i) => (
            <SwiperSlide key={i}>
              <img
                src={e}
                alt="sss"
                key={e.indexOf}
                className="h-72 w-full object-cover object-left-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-1 cursor-pointer" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>

    

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-10">
        {/* {[...Array(Math.floor(84))].map((e, i) => (
          <ItemCard />
        ))} */}

        {productList.map((e) => (
          <ItemCard key={e.id} props={e} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");

  const data = await res.json();

  // console.log(data);

  return {
    props: { data },
  };
}
