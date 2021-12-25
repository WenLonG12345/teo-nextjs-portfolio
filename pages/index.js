import { Container, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import { LiveProjectSection } from '../section/LiveProjectSection';
import ProfileSection from '../section/ProfileSection';
import TechStackSection from '../section/TechStackSection';
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Teo | Home</title>
        <meta property="og:title" content="Teo | Mobile Application Developer"></meta>
        <meta name="description" content="Teo | Mobile Application Developer" />
        <link rel="icon" href="/profile_picture.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
          <ProfileSection />
          <Divider my={10} />
          <TechStackSection/>
          <Divider my={10} />
          <LiveProjectSection/>
        </Container>

      </main>
    </div>
  )
}


