/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import NextLink from 'next/link';
import {Link as ChakraLink, useColorModeValue} from '@chakra-ui/react';

const TopLink = ({children, href, currentPath, ...props}) => {
    return (
        <NextLink href={href} passHref>
            <ChakraLink
                 bg={href === currentPath && useColorModeValue("gray.100", "gray.700")}
                 _hover={{
                   textDecoration: "none",
                   bg: useColorModeValue("gray.200", "gray.700"),
                 }}
                 {...props}
            >
                {children}
            </ChakraLink>
        </NextLink>
    )
}

export default TopLink;