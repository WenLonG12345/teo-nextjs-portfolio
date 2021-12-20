import React from 'react';
import {
    Container,
    Divider,
    SlideFade,
    Heading,
    Flex,
    Header,
    Stack,
    Box,
    VStack,
    useColorMode,
} from '@chakra-ui/react';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MotionBox } from '../utils/motion';
import { companies, educations } from '../constant';
import CompanyCard from '../components/CompanyCard';

function About() {
    const { colorMode } = useColorMode();

    return (
        <div className={styles.container}>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Teo | Mobile Application Developer" />
                <link rel="icon" href="/profile_picture.png" />
            </Head>

            <main>
                <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
                    <SlideFade in offsetX={80}>
                        <Box>
                            <Flex alignItems="center">
                                <Stack pr={3}>
                                    <BsFillBriefcaseFill size={'30px'} />
                                </Stack>
                                <Heading>Career</Heading>
                            </Flex>

                            <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
                                {companies.map((company, index) => (
                                    <MotionBox whileHover={{ y: -5 }} key={index}>
                                        <CompanyCard
                                            key={index}
                                            title={company.title}
                                            role={company.role}
                                            skills={company.skills}
                                            period={company.period}
                                            logo={company.logo}
                                            url={company.url}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>

                            <Flex alignItems="center" my={10}>
                                <Stack pr={3}>
                                    <FaGraduationCap size={'30px'} />
                                </Stack>
                                <Heading>Education</Heading>
                            </Flex>

                            <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={5}>
                                {educations.map((education, index) => (
                                    <MotionBox whileHover={{ y: -5 }} key={index}>
                                        <CompanyCard
                                            key={index}
                                            title={education.title}
                                            role={education.role}
                                            skills={education.skills}
                                            period={education.period}
                                            logo={education.logo}
                                            url={education.url}
                                            colorMode={colorMode}
                                        />
                                    </MotionBox>
                                ))}
                            </VStack>

                        </Box>
                    </SlideFade>
                </Container>

            </main>
        </div>
    )
}

export default About;

