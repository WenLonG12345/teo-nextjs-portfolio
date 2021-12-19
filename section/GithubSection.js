import React from 'react';
import { Heading, SlideFade, Box, SimpleGrid } from "@chakra-ui/react";
import GithubCard from '../components/GithubCard';

const GithubSection = ({ repos }) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Github
            </Heading>
            <Box my={5}>
                <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
                    {repos.map((repo) => (
                        <GithubCard
                            name={repo.name}
                            description={repo.description}
                            language={repo.language}
                            url={repo.clone_url}
                            stargazers_count={repo.stargazers_count}
                            forks_count={repo.forks_count}
                            key={repo.title}
                        />
                    ))}
                </SimpleGrid>


            </Box>
        </SlideFade>
    )
}

export default GithubSection
