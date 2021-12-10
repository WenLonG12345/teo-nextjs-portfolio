import React, { useEffect } from 'react';
import { Container, Divider } from '@chakra-ui/react'
import Head from 'next/head';
import getGithubRepos from '../constant/getGithubRepos'
import styles from '../styles/Home.module.css'
import getMediumArticles from '../constant/getMediumArticles';
import MediumCard from '../components/MediumCard';
import MediumSection from '../components/section/MediumSection';

const Projects = ({ repos, articles }) => {

    console.log({ repos, articles });

    return (
        <div className={styles.container}>
            <Head>
                <title>Projects</title>
                <meta name="description" content="Teo | Mobile Application Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                    <MediumSection articles={articles} />
                </Container>
            </main>
        </div>
    )
}

export default Projects;


export const getServerSideProps = async () => {
    const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME });
    const articles = await getMediumArticles({ username: process.env.MEDIUM_USERNAME })

    return {
        props: {
            repos: repos || null,
            articles: articles || null
        },
    };
}
