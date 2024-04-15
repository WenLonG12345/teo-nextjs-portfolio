import React, { useEffect } from "react";
import { Container, Divider } from "@chakra-ui/react";
import Head from "next/head";
import getGithubRepos from "../constant/getGithubRepos";
import styles from "../../styles/Home.module.css";
import getMediumArticles from "../constant/getMediumArticles";
import MediumCard from "../components/MediumCard";
import MediumSection from "../components/section/MediumSection";
import GithubSection from "../components/section/GithubSection";
import { GitRepo } from "../types/gitRepo";
import { Article } from "../types/article";

interface IProjectsPage {
  repos: GitRepo[];
  articles: Article[];
}

const ProjectsPage: React.FC<IProjectsPage> = ({ repos, articles }) => {
  return (
    <div className={styles.container}>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <GithubSection repos={repos} />
          <MediumSection articles={articles} />
        </Container>
      </main>
    </div>
  );
};

export default ProjectsPage;

export const getStaticProps = async () => {
  const repos = await getGithubRepos(process.env.GITHUB_USERNAME || "");
  const articles = await getMediumArticles(process.env.MEDIUM_USERNAME || "");

  return {
    props: {
      repos: repos || null,
      articles: articles || null,
    },
  };
};
