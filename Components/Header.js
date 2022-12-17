import { Combobox } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/react";
import ProfileDropDownMenu from "./ProfileDropDownMenu";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  const { data: session } = useSession();

  const [selectedPerson, setSelectedPerson] = useState();
  const [query, setQuery] = useState("");
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.value);
  const productList = useSelector((state) => state.productList.value);

  const handleOnChangeCombobox = (e) => {
    setSelectedPerson(e);
    router.push(`/${e}`);
  };

  return (
    <div className="flex flex-col  fixed z-20 space-y-3 bg-white p-3 shadow-sm w-full ">
      <div className="flex space-x-5 items-center   justify-between md:justify-around bg-white">
        {/* Left Side Bar*/}
        <Link href={"/"}>
          <Image
            width={150}
            height={40}
            src={"/logo.png"}
            alt="logo"
            className="w-40 px-2 cursor-pointer"
          />
        </Link>

        {/* Center bar */}
        <div className="w-1/2 hidden  md:flex  border">
          <Combobox
            value={selectedPerson}
            onChange={(e) => handleOnChangeCombobox(e)}
          >
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className="w-full py-1 px-5  outline-none focus:ring-1 focus:ring-pink-500"
              placeholder="Search..."
              type="text"
              autoComplete="off"
            />
            <Combobox.Options className="absolute top-14 w-1/2 ">
              {query === ""
                ? productList.id
                : productList
                    .filter((product) => {
                      return product.title
                        .toLowerCase()
                        .includes(query.toLowerCase());
                    })
                    .splice(0, 8)
                    .map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item.title}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 bg-white shadow-lg ${
                            active
                              ? "bg-slate-200 text-slate-900"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {item.title}
                      </Combobox.Option>
                    ))}
            </Combobox.Options>
          </Combobox>
          {query === "" ? (
            <></>
          ) : (
            <button
              onClick={() => setSelectedPerson("")}
              className="text-slate-800 flex p-2 bg-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <div
            onClick={() => router.push(`/product-details/${id}`)}
            className="py-2 px-3 bg-pink-500 text-white hover:bg-pink-600 focus:ring-1 focus:ring-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* Right Side Bar */}
        <div className="flex items-center space-x-8 ">
          {/* Cart */}
          <Link href={"/my-cart"}>
            <div className="flex relative cursor-pointer hover:text-pink-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <h1 className="text-base font-semibold mx-1 hidden lg:inline">
                My Cart
              </h1>
              <h1 className="text-xs rounded-full px-1 text-white -right-2 md:ml-4 font-semibold  absolute bg-pink-500">
                {cartItems.length}
              </h1>
            </div>
          </Link>

          {/* search Icon */}
          <BsSearch size={20} />

          {/* Login */}
          {/* <Link href={"/auth/login"}> */}
          {!session && (
            <div
              onClick={session ? signOut : signIn}
              className="sm:flex hidden hover:text-pink-500 cursor-pointer"
            >
              {session ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              )}

              <h1 className={` text-base  font-semibold mx-1`}>
                {session
                  ? `Hello ${session.user.name.split(" ")[0]}`
                  : " Login"}
              </h1>
            </div>
          )}
          {/* </Link> */}

          {session && <ProfileDropDownMenu />}
        </div>
      </div>
      {/* Category */}

      <div className="text-black w-full lg:flex hidden bg-white px-10  space-x-5">
        {[
          "Home Applience",
          "Electronics",
          "Smartphone & Accesories",
          "Laptops & Computers",
          "Mens Fashion",
          "Womens Fashion",
          "Kids Collection",
          "Mens Grooming",
          "Beauty",
        ].map((e) => (
          <p key={e} className="text-sm cursor-pointer hover:text-pink-500">
            {e}
          </p>
        ))}
      </div>
    </div>
  );
}

// mkshbhgt@okaxis
