import React from "react";
import { motion } from 'framer-motion';
import Meta from "../components/Meta";

interface IPageLayout {
  children: React.ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const PageLayout: React.FC<IPageLayout> = ({
  children,
  title,
  description,
  keywords,
  image,
}) => {
  return (
    <>
      <Meta
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default PageLayout;
