/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Heading, SlideFade, Box, SimpleGrid, Text } from "@chakra-ui/react";
import GithubCard from "../GithubCard";
import Paragraph from "../Paragraph";
import { GitRepo } from "../../types/gitRepo";
import { PageSlideFade } from "../../utils/animations/page-transitions";

interface IGithubSection {
  repos: GitRepo[];
}

const GithubSection: React.FC<IGithubSection> = ({ repos }) => {
  if (!repos) return <></>;

  return (
    <PageSlideFade>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Github
      </Heading>
      <Paragraph>
        <Text>List of my top featured github repositories. 🔖</Text>
        <Text>
          Feel free to pay a visit and don't forget to leave me a star! ⭐{" "}
        </Text>
      </Paragraph>
      <Box my={5}>
        <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={4}>
          {repos.map((repo) => (
            <GithubCard gitRepo={repo} key={repo.name} />
          ))}
        </SimpleGrid>
      </Box>
    </PageSlideFade>
  );
};

export default GithubSection;
