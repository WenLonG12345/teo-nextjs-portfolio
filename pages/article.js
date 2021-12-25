import React from 'react';
import { Container, Divider } from '@chakra-ui/react';
import Head from 'next/head';
import MediumSection from '../section/MediumSection';
import styles from '../styles/Home.module.css'
import getMediumArticles from '../constant/getMediumArticles';

const Article = ({articles}) => {
    return (
        <div className={styles.container}>
        <Head>
            <title>Teo | Articles</title>
            <meta name="description" content="Teo | Mobile Application Developer" />
            <link rel="icon" href="/profile_picture.png" />
        </Head>

        <main>
            <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                <MediumSection articles={articles} />
            </Container>
        </main>
    </div>
    )
}

export default Article;

export async function getStaticProps() {
    const articles = await getMediumArticles({ username: process.env.MEDIUM_USERNAME })

    return {
        props: {
            articles: articles || null
        },
    };
}