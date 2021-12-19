import React from 'react';
import { Heading, SlideFade, Box } from "@chakra-ui/react";
import MediumCard from '../components/MediumCard';

const MediumSection = ({articles}) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Stories on Medium
            </Heading>
            <Box
                my={5}
            >
                {articles.map((article) => (
                    <MediumCard article={article} key={article.title} />
                ))}
            </Box>
        </SlideFade>
    )
}

export default MediumSection
