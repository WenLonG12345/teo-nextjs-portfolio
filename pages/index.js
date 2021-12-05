import { Container, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import ProfileSection from '../components/section/ProfileSection'
import TechStackSection from '../components/section/TechStackSection'
import getGithubRepos from '../constant/getGithubRepos'
import styles from '../styles/Home.module.css'

export default function Home({repositories}) {

  console.log({repositories});

  return (
    <div className={styles.container}>
      <Head>
        <title>Teo | Home</title>
        <meta name="description" content="Teo | Mobile Application Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
          <ProfileSection />
          <Divider my={10} />
          <TechStackSection/>
          <Divider my={10} />
          
        </Container>

      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  let data = {
    username: process.env.GITHUB_USERNAME
  }

  const repositories = await getGithubRepos(data, token);

  return {
    props: {
      repositories,
    },
  };
}
