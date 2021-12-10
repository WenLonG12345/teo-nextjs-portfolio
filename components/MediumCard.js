import React from 'react';
import { LinkBox, Flex, Heading, Image, Text, LinkOverlay, useColorModeValue } from '@chakra-ui/react';

const MediumCard = ({ article }) => {
    return (
        <LinkBox
            as="article"
            w="100%"
            p={5}
            borderColor={useColorModeValue("gray.300", "gray.700")}
            borderRadius={5}
            borderWidth="1px"
            transition=".5s"
            cursor="pointer"
            _hover={{
                borderColor: "blue.500",
            }}
            my='5px'
        >
            <LinkOverlay href={article.url} rel="noopener" isExternal>
                <Flex
                    alignItems="center"
                    justifyContent="space-around"
                    direction={{base: 'column', md: 'row'}}
                >
                    <Image
                        src={article.thumbnail}
                        alt={article.title}
                        width='200px'
                    />

                    <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 5, 5]}>
                        <Heading as="h2" size="sm">{article.title}</Heading>
                        <Text size='sm'>{article.description}</Text>
                        <Text>{article.date}</Text>
                    </Flex>
                </Flex>

            </LinkOverlay>

        </LinkBox>

    )
}

export default MediumCard
