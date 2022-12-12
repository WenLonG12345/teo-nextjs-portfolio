import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  VStack,
  LinkOverlay,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import Paragraph from "./Paragraph";
import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import { Project } from "../types/project";

interface ILiveProjectCard {
  project: Project;
}

export const LiveProjectCard: React.FC<ILiveProjectCard> = ({ project }) => (
  <MotionBox whileHover={{ y: -5 }}>
    <Box
      p={4}
      display={{ md: "flex" }}
      borderWidth={1}
      margin={2}
      rounded={"10px"}
      _hover={{
        borderColor: "blue.500",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="space-around"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          margin="auto"
          src={project.imageUrl}
          alt={project.alt}
          objectFit={"cover"}
          boxSize={["100px", "150px", "150px", "150px"]}
        />
        <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 0, 0]}>
          <Heading as="h2" fontSize="lg" fontWeight="600" color={"blue.400"}>
            {project.name}
          </Heading>
          <Paragraph textProps={{ mt: "10px" }}>
            <Text>{project.summary}</Text>
          </Paragraph>

          <VStack my={2} p={3}>
            <Image
              src={"/playstore.png"}
              alt="playstore"
              objectFit={"cover"}
              onClick={() => window.open(project.playstore)}
            />

            <Image
              src={"/appstore.png"}
              alt="appstore"
              objectFit={"cover"}
              onClick={() => window.open(project.appstore)}
            />
          </VStack>
        </Flex>
      </Flex>
    </Box>
  </MotionBox>
);
