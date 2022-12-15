import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import Layout from "../Components/Layout";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { fetchProduct } from "../app/productSlice";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });

   
  });

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
          <title>BuyZone · Get What You Want </title>
          <meta name="description" content="Get What You Want" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Layout>
          <LoadingBar
            color="#ec4899"
            waitingTime={400}
            loaderSpeed={600}
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;

