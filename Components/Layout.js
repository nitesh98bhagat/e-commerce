import { useRouter } from "next/router";
import Footer from "./Footer";
// import AppBar from "./AppBar";
import Header from "./Header";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/auth/login"
      ? false
      : true && router.pathname.includes("/auth/signup")
      ? false
      : true;

  return (
    <div className="h-screen flex flex-col ">
      {showHeader && <Header />}
      {/* <h1>{showHeader}</h1> */}
      <div className={`${showHeader ? "mb-24" : "mb-0"}`}></div>
      {children}
      {showHeader && <Footer />}
    </div>
  );
}
