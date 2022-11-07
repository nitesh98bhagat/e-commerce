import Link from "next/link";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <div className="fixed w-screen h-screen flex flex-col items-center justify-center backdrop-brightness-50  z-10  ">
        <div className="w-full sm:w-2/3 lg:w-1/3 px-5 ">
          {/* log in */}
          <div className="bg-white  shadow-lg rounded-xl  flex flex-col items-start p-5">
            <h1 className="text-3xl w-full font-bold text-center  flex flex-row items-center justify-between">
              <p></p>
              <p>Login</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={() => router.back()}
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </h1>
            <p className="text-md font-semibold text-slate-600 my-2">Email</p>
            <input
              type="text"
              className="bg-slate-100 p-2 w-full rounded-md"
              placeholder="some@email.com"
            />
            <p className="text-md font-semibold text-slate-600  my-2">
              Password
            </p>
            <input
              type="password"
              className="bg-slate-100 p-2 w-full rounded-md"
              placeholder="******"
            />
            <h1 className="p-3 text-center w-full">Or</h1>

            <button className=" w-full font-bold rounded-xl  text-gray-800 text-xl p-2 border flex flex-row justify-center ">
              <img
                src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
                alt="google"
                className="w-8  p-1"
              />

              <p className="px-3 text-lg">Continue with Google</p>
            </button>

            <div className="flex flex-row  m-4 text-lg font-base">
              <p>Don't have an account, just</p>
              <Link href={"/auth/signup"}>
                <p className=" font-semibold text-pink-500  cursor-pointer mx-1">
                  {"Sign up "}
                </p>
              </Link>
              <p> here</p>
            </div>

            <button className="bg-pink-500 w-full font-bold rounded-xl  text-white text-xl p-3 ">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
