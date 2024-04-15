import React from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import getMediumArticles from "../constant/getMediumArticles";
import MediumSection from "../components/section/MediumSection";
import { Article } from "../types/article";

interface IArticlePage {
  articles: Article[];
}

const ArticlePage: React.FC<IArticlePage> = ({ articles }) => {
  return (
    <div className={styles.container}>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default ArticlePage;

export async function getStaticProps() {
  const articles = await getMediumArticles(process.env.MEDIUM_USERNAME || "");

  return {
    props: {
      articles: articles || null,
    },
  };
}
