import Head from "next/head";
import Link from "next/link";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <div className="cursor1" id="cursor1"></div>
      <div className="cursor" id="cursor"></div>
    </>
  );
}
