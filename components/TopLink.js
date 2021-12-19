/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NextLink from 'next/link';
import { useDisclosure } from '@chakra-ui/hooks';
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';

const TopLink = ({ children, href, currentPath, ...props }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <NextLink href={href} passHref>
            <ChakraLink
                //  bg={href === currentPath && useColorModeValue("gray.100", "gray.700")}
                //  _hover={{
                //    textDecoration: "none",
                //    bg: useColorModeValue("gray.200", "gray.700"),
                //  }}
                //  fontSize={"1em"}
                //  rounded={"md"}
                //  onClick={isOpen ? onClose : onOpen}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.900")
                }}
                _activeLink={{
                    color: useColorModeValue("blue.500", "blue.200")
                }}
                onClick={() => onClose}
                {...props}
            >
                {children}
            </ChakraLink>
        </NextLink>
    )
}

export default TopLink;
