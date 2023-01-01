import React from "react";
import {
  Heading,
  SlideFade,
  Grid,
  Text,
  useColorModeValue,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import StackCard from "../StackCard";
import {
  mobileTechStacks,
  otherTechStacks,
  webTechStacks,
} from "../../constant";

const TechStackSection = () => {
  return (
    <SlideFade in offsetY={80}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Tech Stack
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
      >
        A list of my favorite tools and technologies that I use on a regular
        basis.
      </Text>
      <Tabs variant="solid-rounded" mt={5}>
        <TabList>
          <Tab mx={2}>Web</Tab>
          <Tab mx={2}>Mobile</Tab>
          <Tab mx={2}>Others</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {webTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {mobileTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateColumns={[
                "1fr",
                "repeat(2,1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={[2, 5, 5, 5]}
            >
              {otherTechStacks.map((stack) => (
                <StackCard stack={stack} key={stack?.name} />
              ))}
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SlideFade>
  );
};

export default TechStackSection;
