import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

type IMeta = {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const Meta: React.FC<IMeta> = ({
  title,
  description = "A ReactJS/React Native developer, Android developer, UI / UX designer and tech enthusiast.",
  keywords = "React, Android, Javascript, Typescript ,Kotlin, Java",
  image,
}) => {
  const router = useRouter();

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <title>
        {title.includes("Teo") ? title : `Teo | ${title}`}
      </title>
    </Head>
  );
};

export default Meta;
