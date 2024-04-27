import React from "react";
import { Heading, SlideFade, Box, Text } from "@chakra-ui/react";
import MediumCard from "../MediumCard";
import Paragraph from "../Paragraph";
import { Article } from "../../types/article";
import { PageSlideFade } from "../../utils/animations/page-transitions";

interface IMediumSection {
  articles: Article[];
}

const MediumSection: React.FC<IMediumSection> = ({ articles }) => {
  return (
    <PageSlideFade>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Articles on Medium
      </Heading>
      <Paragraph>
        <Text>
          List of articles related to all my tech knowledge sharing to the
          public. 📖
        </Text>
        <Text>Stay tuned for more articles.</Text>
      </Paragraph>
      <Box my={5}>
        {articles.map((article) => (
          <MediumCard article={article} key={article.title} />
        ))}
      </Box>
    </PageSlideFade>
  );
};

export default MediumSection;
