import React from 'react';
import { LinkBox, Flex, Heading, Image, Text, LinkOverlay, HStack, Tag, useColorModeValue } from '@chakra-ui/react';
import { MotionBox } from '../utils/motion';
import { FaMedium } from 'react-icons/fa';

const MediumCard = ({ article }) => {
    return (
        <MotionBox whileHover={{ y: -5 }}>
            <LinkBox
                as="article"
                w="100%"
                p={5}
                my='10px'
                borderColor={useColorModeValue("gray.300", "gray.700")}
                borderRadius={5}
                borderWidth="1px"
                transition=".5s"
                cursor="pointer"
                _hover={{ borderColor: "blue.500" }}
            >
                <LinkOverlay href={article.url} rel="noopener" isExternal>
                    <Flex
                        alignItems="center"
                        justifyContent="space-around"
                        direction={{ base: 'column', md: 'row' }}
                    >
                        <Image
                            src={article.thumbnail}
                            alt={article.title}
                            width='200px'
                        />

                        <Flex flexDirection="column" ml={[0, 5, 5]} mt={[5, 5, 0, 0]}>
                            <Heading as="h2" fontSize="md" fontWeight="600" color={"blue.400"}>{article.title}</Heading>
                            <Text fontSize='sm'>{article.description}</Text>
                            <HStack spacing={1} alignItems="center" d={["flex", "flex", "none"]} my='5px'>
                                {article.categories.map(tag => (
                                    <Tag
                                        size="sm"
                                        padding="0 5px"
                                        key={tag}
                                        // colorScheme={getTagColor(tag)}
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </HStack>
                            <Text fontSize='sm' color={useColorModeValue('grey.300', 'grey')}>{article.date}</Text>
                        </Flex>
                    </Flex>

                </LinkOverlay>

            </LinkBox>
        </MotionBox>


    )
}

export default MediumCard
