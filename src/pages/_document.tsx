import { Html, Main, NextScript, Head } from "next/document";
import React from "react";

const NextDocument = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href={"/profile_picture.png"} />

        <meta
          name="description"
          content="Teo | Frontend Engineer - Web and Mobile"
        ></meta>
        <meta
          name="keywords"
          content="React, Android, Javascript, Typescript ,Kotlin, Java"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default NextDocument;
