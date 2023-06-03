import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="/assets/css/plugin.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </Head>
      <body style={{ backgroundColor: "#000" }}>
        <Main />
        <NextScript />
        <Script src="/assets/js/plugin.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
