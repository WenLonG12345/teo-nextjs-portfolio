import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  Tag,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Company } from "../types/company";

interface ICompanyCard {
  company: Company;
  colorMode: string;
}

const CompanyCard: React.FC<ICompanyCard> = ({ company, colorMode }) => {
  return (
    <LinkBox
      px={4}
      py={5}
      borderWidth="1px"
      rounded="xl"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.100", "gray.700")}
      _hover={{ borderColor: "blue.500" }}
      position="relative"
    >
      <LinkOverlay href={company.url} rel="noopener" isExternal>
        <Flex justifyContent="space-between" direction={['column', 'column', 'row']} gap={3}>
          <Flex>
            <Image
              rounded="full"
              w={16}
              h={16}
              objectFit="cover"
              src={company.logo}
              alt={company.alt}
            />
            <Stack spacing={2} pl={3} align="left">
              <Heading
                // align="left"
                fontSize="xl"
                color={`mode.${colorMode}.career.text`}
              >
                {company.title}
              </Heading>
              <Heading
                // align="left"
                fontSize="sm"
                color={`mode.${colorMode}.career.subtext`}
              >
                {company.role}
              </Heading>
              <VStack
                spacing={1}
                mt={3}
                alignItems="center"
                isInline
                display={["none", "none", "flex", "flex"]}
              >
                {company.skills.map((skill) => (
                  <Tag size="sm" padding="0 5px" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </VStack>
            </Stack>
          </Flex>
          <Stack>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {company.period}
            </Text>
          </Stack>
        </Flex>
        <HStack
          spacing={1}
          mt={3}
          alignItems="center"
          
          display={["flex", "flex", "none", "none"]}
        >
          {company.skills.map((skill) => (
            <Tag size="sm" padding="0 5px" key={skill}>
              {skill}
            </Tag>
          ))}
        </HStack>
      </LinkOverlay>
    </LinkBox>
  );
};

export default CompanyCard;
