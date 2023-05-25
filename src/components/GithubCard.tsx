import React from "react";
import {
  Box,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Tag,
  Icon,
  Flex,
  Tooltip,
  LinkBox,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { FiGithub } from "react-icons/fi";
import { BiStar, BiGitRepoForked } from "react-icons/bi";
import { GitRepo } from "../types/gitRepo";

interface IGithubCard {
  gitRepo: GitRepo;
}

const GithubCard: React.FC<IGithubCard> = ({ gitRepo }) => {
  console.log("github", gitRepo);
  return (
    <MotionBox whileHover={{ y: -5 }}>
      <LinkBox
        py={2}
        px={[2, 4]}
        mt={2}
        rounded="xl"
        borderWidth="1px"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("gray.300", "gray.700")}
        _hover={{ borderColor: "blue.500" }}
        minH="120px"
      >
        <VStack overflow="hidden" align="start" spacing={1}>
          <VStack spacing={1} align="start" w="100%">
            <Flex
              justifyContent={"space-between"}
              width="100%"
              onClick={(e) => window.open(gitRepo.clone_url)}
            >
              <Tooltip hasArrow label={gitRepo.clone_url} placement="top">
                <HStack cursor={"pointer"}>
                  <Icon as={FiGithub} boxSize="0.9em" mt={"1px"} />
                  <Text
                    fontSize="sm"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    color={"blue.400"}
                  >
                    {gitRepo.name}
                  </Text>
                </HStack>
              </Tooltip>
              <HStack>
                <Box _hover={{ color: "blue.500" }}>
                  <Icon as={BiStar} boxSize="0.9em" mt={"1px"} />
                  <Box as="span" ml="1" fontSize="sm">
                    {gitRepo.stargazers_count}
                  </Box>
                </Box>
                {gitRepo.forks_count && (
                  <Box _hover={{ color: "blue.500" }}>
                    <Icon as={BiGitRepoForked} boxSize="0.9em" mt={"1px"} />
                    <Box as="span" ml="1" fontSize="sm">
                      {gitRepo.forks_count}
                    </Box>
                  </Box>
                )}
              </HStack>
            </Flex>
            {gitRepo.language && (
              <Flex justifyContent={"space-between"} width="100%">
                <Box>
                  <HStack spacing="1">
                    <Tag size="sm">
                      <Text fontSize={["0.55rem", "inherit", "inherit"]}>
                        {gitRepo.language}
                      </Text>
                    </Tag>
                  </HStack>
                </Box>
              </Flex>
            )}
          </VStack>
          <Box>
            <Text fontSize="sm" noOfLines={2} textAlign="left">
              {gitRepo.description}
            </Text>
          </Box>{" "}
        </VStack>
      </LinkBox>
    </MotionBox>
  );
};

export default GithubCard;
