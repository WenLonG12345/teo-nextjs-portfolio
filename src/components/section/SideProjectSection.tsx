import React from "react";
import {
  Heading,
  SlideFade,
  Text,
  useColorModeValue,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { projects } from "../../constant";
import { SideProjectCard } from "../SideProjectCard";

export const SideProjectSection = () => {
  return (
    <SlideFade in offsetY={80}>
      <Heading
        as="h2"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Projects
      </Heading>
      <Text
        textColor={useColorModeValue("gray.600", "gray.400")}
        fontSize={"lg"}
      >
        List of projects that I involved or have made in the past.
      </Text>

      <Tabs variant="solid-rounded" mt={5}>
        <TabList>
          {Object.keys(projects).map((k) => (
            <Tab key={k} mx={2}>
              {k}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={5}>
          {Object.entries(projects).map(([k, v]) => (
            <TabPanel p={0} key={k}>
              <SimpleGrid columns={[1, 1, 2, 2]} gap={5}>
                {v.map((project) => (
                  <SideProjectCard key={project.name} project={project} />
                ))}
              </SimpleGrid>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </SlideFade>
  );
};
