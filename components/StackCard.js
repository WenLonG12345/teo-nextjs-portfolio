import React from 'react';
import { LinkBox, Box, IconButton, LinkOverlay, Heading, useColorModeValue, Flex } from '@chakra-ui/react';
import Paragraph from './Paragraph';

const StackCard = ({ stack }) => {
    return (
        <LinkBox
            as="article"
            w="100%"
            p={4}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            borderRadius={5}
            borderWidth="1px"
            transition=".5s"
            cursor="pointer"
            display="flex"
            role="group"
            _hover={{
                borderColor: "blue.500",
            }}
        >
            <Flex alignItems="center" justifyContent="space-between">
                <IconButton
                    as="a"
                    aria-label={stack?.name}
                    mr={3}
                    _groupHover={{ color: "blue.500" }}
                    icon={stack?.icon}
                />
                <LinkOverlay href={stack?.url} rel="noopener" isExternal>
                    <Flex>
                        <Heading as="h2" size="sm" >{stack?.name}</Heading>
                    </Flex>
                </LinkOverlay>
            </Flex>

        </LinkBox>
    )
}

export default StackCard
