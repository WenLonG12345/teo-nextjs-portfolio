import React from 'react';
import { SlideFade, Box, Heading, Avatar, Image, Link, Flex, LightMode, ButtonGroup, Button } from '@chakra-ui/react';
import Paragraph from '../Paragraph';
import { FaLinkedin, FaStackOverflow, FaMedium } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { socialButtons } from '../../constant';
import SocialButton from '../SocialButton';

const ProfileSection = () => {
    return (
        <SlideFade in offsetX={80}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        fontSize={{ base: '28px', md: '40px', lg: '48px' }}
                        mb={3}
                    >
                        Hey, I am Wen LonG! <span className="waving-hand">👋</span>
                    </Heading>
                    <Flex alignItems={"flex-end"}>
                        <Avatar
                            name="Teo Wen Long"
                            src="/profile1.png"
                            mb={5}
                            size='lg'
                        />
                    </Flex>
                </Flex>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Mobile Application Developer - {" "}
                    <Link color="blue.500" href="https://www.android.com/" fontWeight="500" isExternal>
                        Android,
                    </Link>{" "}
                    <Link color="blue.500" href="https://reactnative.dev/" fontWeight="500" isExternal>
                        React Native
                    </Link>.
                    {"\n"}Passion in beautiful UI / UX & Tech Writter on {" "}
                    <Link color="blue.500" href="https://skynight1996.medium.com/" fontWeight="500" isExternal>
                        Medium
                    </Link>.
                </Paragraph>

                <Box mt={10}>
                    <LightMode>
                        <ButtonGroup>
                            {socialButtons.map((social) => (
                                <SocialButton social={social} key={social.name}/>
                            ))}
                        </ButtonGroup>
                    </LightMode>
                </Box>
            </Box>
        </SlideFade >
    )
}

export default ProfileSection;
