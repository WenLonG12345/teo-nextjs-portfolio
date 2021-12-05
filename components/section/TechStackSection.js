import React from 'react';
import { Heading, SlideFade, Grid } from "@chakra-ui/react";
import StackCard from '../StackCard';
import { techStacks } from '../../constant';

const TechStackSection = () => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Tech Stack & Languages
            </Heading>
            <Grid
                mt={10}
                templateColumns={["1fr", "repeat(2,1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
                gap={5}
            >
                {techStacks.map((stack) => (
                    <StackCard stack={stack} key={stack?.name} />
                ))}
            </Grid>
        </SlideFade>
    )
}

export default TechStackSection;
