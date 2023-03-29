/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import {
  Container,
  SlideFade,
  Box,
  FormControl,
  FormLabel,
  CircularProgress,
  Flex,
  Button,
  Input,
  Heading,
  Textarea,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import ErrorMessage from "../components/ErrorMessage";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";

const Contact = () => {
  init("user_CraRkhplYuq6PLLiXeFjw");

  const toast = useToast();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clearInput = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .send("service_a2q7dpb", "teo_email_template", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(
        (result) => {
          clearInput();

          toast({
            title: "Email sent.",
            description:
              "You had successfully sent the email. I will reply your email ASAP. Thank you!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        },
        (error) => {
          clearInput();

          toast({
            title: "Email not sent.",
            description: error.text,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Teo | Contact</title>
        <meta name="description" content="Teo | Mobile Application Developer" />
        <link rel="icon" href="/profile_picture.jpg" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
          <SlideFade in offsetY={80}>
            <Flex width="full" align="center" justifyContent="center">
              <Box
                p={8}
                maxWidth="container.lg"
                borderWidth={1}
                borderRadius={8}
                boxShadow="lg"
              >
                <Heading size={"lg"}>
                  Let's get in touch. Leave me your message. 💬
                </Heading>
                <Text fontSize={"lg"} my={2}>
                  Do not hesitate to contact me!
                </Text>
                <Box my={4} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <FormControl isRequired>
                      <FormLabel key={"name"}>Name</FormLabel>
                      <Input
                        id="name"
                        type={"text"}
                        value={name}
                        placeholder="Your Name"
                        size="lg"
                        onChange={(event) => setName(event.currentTarget.value)}
                        bg={useColorModeValue("gray.100", "gray.900")}
                      />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                      <FormLabel key={"email"}>Email</FormLabel>
                      <Input
                        id="email"
                        type={"email"}
                        value={email}
                        placeholder="Email"
                        size="lg"
                        onChange={(event) =>
                          setEmail(event.currentTarget.value)
                        }
                        bg={useColorModeValue("gray.100", "gray.900")}
                      />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                      <FormLabel key={"message"}>Message</FormLabel>
                      <Textarea
                        id="message"
                        value={message}
                        placeholder="Type your message..."
                        size="lg"
                        onChange={(event) =>
                          setMessage(event.currentTarget.value)
                        }
                        bg={useColorModeValue("gray.100", "gray.900")}
                      />
                    </FormControl>
                    <Button
                      variant="solid"
                      type="submit"
                      width="full"
                      // bg={useColorModeValue('gray.200', 'gray.900')}
                      mt={4}
                      isLoading={isLoading}
                      loadingText="Submitting"
                      colorScheme={"blue"}
                    >
                      Send Message
                    </Button>
                  </form>
                </Box>
              </Box>
            </Flex>
          </SlideFade>
        </Container>
      </main>
    </div>
  );
};

export default Contact;
