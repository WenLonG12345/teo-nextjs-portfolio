import React from 'react';
import { useRouter } from "next/router";
import { useDisclosure } from '@chakra-ui/hooks';
import { useColorMode } from '@chakra-ui/color-mode';
import { Text, Container, Flex, IconButton, HStack, Box, Button, Stack, Link } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import TopLink from './TopLink';

const Links = [
    { name: "Home", route: "/" },
    { name: "About Me", route: "/about" },
    { name: "Experience", route: "/experience" },
    { name: "Projects", route: "/projects" },
    { name: "Contact", route: "/contact" },
]

const NavBar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    let router = useRouter();
    let { asPath } = router;

    const navItem = (
        <>
            {Links.map((link) => (
                <TopLink
                    href={link.route}
                    key={link.name}
                    p={2}
                    rounded={"md"}
                    currentPath={asPath}
                >
                    {link.name}
                </TopLink>
            ))}
        </>
    )

    return (
        <>
            <Box py={5} borderTop="2px" borderTopColor="blue.600">
                <Container maxW="container.lg">
                    <Flex h={16} alignItems="center" justifyContent="space-between">
                        <IconButton
                            size="md"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Open Menu"
                            display={{ md: !isOpen ? "none" : "inherit" }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <HStack spacing={8} alignItems="center">
                            <HStack as="nav" spacing="4" display={{ base: 'none', md: 'flex' }}>
                                {navItem}
                            </HStack>
                        </HStack>
                        <Flex alignItems={"center"}>
                            <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Flex>
                    </Flex>
                    {isOpen && (
                        <Box pb={4} mt={3}>
                            <Stack as={"nav"} spacing={3}>
                                {navItem}
                            </Stack>
                        </Box>
                    )}
                </Container>
            </Box>
        </>
    )
}

export default NavBar
