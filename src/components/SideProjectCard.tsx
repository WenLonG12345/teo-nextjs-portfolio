import React from "react";
import {
  Box,
  Image,
  Text,
  Stack,
  Center,
  useColorModeValue,
  Tag,
  LinkBox,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { MotionBox } from "../utils/motion";
import { Project } from "../types/project";

interface ISideProjectCard {
  project: Project;
}

export const SideProjectCard: React.FC<ISideProjectCard> = ({ project }) => (
  <MotionBox whileHover={{ y: -5 }}>
    <Center py={6}>
      <LinkBox
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        px={6}
        py={3}
        mx={5}
        overflow={"hidden"}
        _hover={{ cursor: "pointer" }}
        onClick={() => {
          project.link && window.open(project.link);
        }}
      >
        <Box bg={"gray.100"} mt={-6} mx={-6} pos={"relative"}>
          <Image
            src={project.imageUrl}
            objectFit={"cover"}
            maxH={"210px"}
            h={"210px"}
            w="full"
            alt={project.name}
          />
        </Box>
        <Stack mb={3}>
          <Text
            mt={3}
            color={"blue.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
          >
            {project?.name}
          </Text>
          <Text color={"gray.500"} h={"80px"}>
            {project?.summary}
          </Text>
        </Stack>
        <HStack>
          {project.tech.map((tech) => (
            <Tag size="sm" key={tech}>
              {tech}
            </Tag>
          ))}
        </HStack>
      </LinkBox>
    </Center>
  </MotionBox>
);
