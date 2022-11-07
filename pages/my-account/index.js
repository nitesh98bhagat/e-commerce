import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

export default function MyAccount() {
  const { data: session } = useSession();

  return (
    <div className="border mx-14 ">
      {/* Account Details */}
      <div className="flex items-center p-5 border-b ">
        <img
          src={session.user.image}
          alt="user_image"
          className="w-14 h-14 rounded-full"
        />
        {/* name and email */}
        <div className="px-5 -space-y-1">
          <h1 className="font-semibold text-lg">{session.user.name}</h1>
          <h1>{session.user.email}</h1>
        </div>
        {/* sigout button */}
        <button className="ml-auto p-5 flex items-center space-x-2">
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
          <p>Sign out</p>
        </button>
      </div>

      <div className="grid grid-cols-4">
        {/* menu list */}
        <div className="flex flex-col col-span-1 border-r">
          {[
            "My Account",
            "Login & Security",
            "Manage Addresses",
            "Manage Cards",
            "Settings",
            "Get Help",
            "Change Theme",
          ].map((e) => (
            <p
              key={e}
              className="text-lg cursor-pointer hover:bg-slate-50 py-3 px-10"
            >
              {e}
            </p>
          ))}
        </div>

        {/* left pane */}
        <div className="col-span-3 "></div>
      </div>
    </div>
  );
}
