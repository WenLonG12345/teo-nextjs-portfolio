/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
// import {
//   Text,
//   Container,
//   Flex,
//   IconButton,
//   HStack,
//   Box,
//   Button,
//   Stack,
//   Link as CharkaLink,
//   useColorModeValue,
//   Avatar,
// } from "@chakra-ui/react";
// import NextLink from "next/link";
// import { useRouter } from "next/router";
// import { useDisclosure } from "@chakra-ui/hooks";
// import { useColorMode } from "@chakra-ui/color-mode";
// import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
// import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { menuLinks } from "../constant";
import { FaMoon } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // let router = useRouter();
  // let { asPath } = router;
  // const navItem = (
  //   <>
  //     {menuLinks.map((link) => (
  //       <Link href={link.route} key={link.name}>
  //         {link.name}
  //       </Link>
  //     ))}
  //   </>
  // );
  // return (
  //   <>
  //     <Box bg={useColorModeValue("white", "gray.700")} px={4} boxShadow={"lg"}>
  //       <Flex
  //         h={16}
  //         alignItems={"center"}
  //         justifyContent={"space-between"}
  //         w={["95%", "95%", "95%"]}
  //         maxW={"container.lg"}
  //         mx="auto"
  //       >
  //         <IconButton
  //           size={"md"}
  //           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
  //           aria-label={"Open Menu"}
  //           display={["inherit", "inherit", "none"]}
  //           onClick={isOpen ? onClose : onOpen}
  //         />
  //         <HStack spacing={8} alignItems={"center"}>
  //           <Avatar
  //             as={CharkaLink}
  //             size="sm"
  //             href="/"
  //             src="/profile_picture.png"
  //             _hover={{ borderColor: "blue.500" }}
  //           />
  //           <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
  //             {navItem}
  //           </HStack>
  //         </HStack>
  //         <Flex alignItems={"center"}>
  //           <ColorModeSwitcher justifySelf="flex-end" />
  //         </Flex>
  //       </Flex>
  //       {isOpen && (
  //         <Box
  //           pb={4}
  //           w={["100%", "100%", "80%"]}
  //           maxW={"container.lg"}
  //           display={["inherit", "inherit", "none"]}
  //         >
  //           <Stack as={"nav"} spacing={4}>
  //             {navItem}
  //           </Stack>
  //         </Box>
  //       )}
  //     </Box>
  //   </>
  // );

  return (
    <header className="shadow-lg">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5 my-2">
          <Image
            src="/profile_picture.png"
            width={50}
            height={50}
            alt="profile"
            style={{
              borderRadius: "50px",
            }}
          />

          <nav className="flex flex-row gap-5">
            {menuLinks.map((link) => (
              <Link href={link.route} key={link.name} className="">
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <FaMoon />
      </div>
    </header>
  );
};

export default NavBar;
