// slider
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ItemCard from "../Components/ItemCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../app/productSlice";
import Image from "next/image";

const banner = [
  "https://m.media-amazon.com/images/I/6124QhAPExL._SX1500_.jpg",
  "https://m.media-amazon.com/images/I/71NCXxTGJCL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/710xff6TncL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71cac9idZML._SX3000_.jpg",
];

function SlideNextButton() {
  const swiper = useSwiper();

  console.log("d");

  return (
    <button>
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
  );
}

export default function Home({ data }) {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList.value);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchProduct(data.products));
  }, [dispatch]);

  const swipePrev = () => {
    console.log(currentIndex);
    if (currentIndex == 0) {
      setCurrentIndex(banner.length - 1);
    } else {
      setCurrentIndex(currentIndex--);
    }
  };

  const swipeNext = () => {
    console.log(currentIndex);

    if (currentIndex == banner.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex++);
    }
  };

  return (
    <div className="flex flex-col">
      {/* new banner */}
      {/* <div className="w-full bg-slate-50 h-72 flex flex-row">
        <button className="p-1 cursor-pointer" onClick={swipePrev}>
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
        <div className="flex-grow bg-slate-200 transition-transform">
          <Image
            src={banner[currentIndex]}
            width={1300}
            height={300}
            layout="responsive"
          />
        </div>

        <button className="p-1 cursor-pointer" onClick={swipeNext}>
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
        </button>
      </div> */}

      {/* Banner */}
      <div className="w-full hidden md:flex  justify-center items-center">
        {/* <button
          className="p-1 cursor-pointer"
          onClick={() => swiper.slideNext()}
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
        </button> */}
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
          {/* <SlideNextButton /> */}
          {banner.map((e, i) => (
            <SwiperSlide key={i}>
              <Image
                // layout="fill"
                width={1390}
                height={350}
                src={e}
                alt="sss"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="p-1 cursor-pointer">
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
        </div> */}
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-5 sm:m-10">
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

  return {
    props: { data },
  };
}
