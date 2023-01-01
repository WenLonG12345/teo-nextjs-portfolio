import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Meta = () => {
  const router = useRouter();

  let pageTitle;
  if (router.pathname === "/") {
    pageTitle = "Teo | Home";
  } else {
    const path = router.pathname.split("/").pop();
    pageTitle = `Teo | ${path}`;
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
      </Head>
    </>
  );
};

export default Meta;
