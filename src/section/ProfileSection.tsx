import React from "react";
import {
  SlideFade,
  Box,
  Heading,
  Avatar,
  Image,
  Link,
  Flex,
  LightMode,
  ButtonGroup,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import { resume } from "../constant";
import SocialButton from "../components/SocialButton";
import { BiPhoneCall } from "react-icons/bi";
import SpotifySection from "./SpotifySection";
import { SpotifySong } from "../types/spotify";

interface IProfileSection {
  song: SpotifySong;
}

const ProfileSection: React.FC<IProfileSection> = ({ song }) => {
  return (
    <SlideFade in offsetX={80}>
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={3}
          >
            Hey, I am Wen LonG! <span className="waving-hand">👋</span>
          </Heading>
          <Flex alignItems={"flex-end"}>
            <Avatar
              name="Teo Wen Long"
              src="/profile_picture.png"
              mb={5}
              size="lg"
            />
          </Flex>
        </Flex>
        <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
          Mobile Application Developer from Malaysia 🇲🇾
        </Paragraph>
        <Paragraph textProps={{ fontSize: "2xl", lineHeight: 1.6 }}>
          Focused on{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://www.android.com/"
            fontWeight="500"
            isExternal
          >
            Android,
          </Link>{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://www.apple.com/my/ios"
            fontWeight="500"
            isExternal
          >
            iOS &
          </Link>{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://reactnative.dev/"
            fontWeight="500"
            isExternal
          >
            React Native
          </Link>
          .{"\n"}Passion in beautiful UI / UX & Tech Writter on{" "}
          <Link
            color={useColorModeValue("blue.500", "blue.400")}
            href="https://skynight1996.medium.com/"
            fontWeight="500"
            isExternal
          >
            Medium
          </Link>
          . 🔥
        </Paragraph>

        <Box mt={5}>
          <ButtonGroup>
            <SocialButton social={resume} />
            <Link href={"/contact"} style={{ textDecoration: "none" }}>
              <Button
                colorScheme="blue"
                size="sm"
                margin={"5px"}
                leftIcon={<BiPhoneCall color="white" />}
              >
                Contact Me
              </Button>
            </Link>
          </ButtonGroup>
        </Box>

        <SpotifySection song={song} />
      </Box>
    </SlideFade>
  );
};

export default ProfileSection;
