import React from "react";
import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

interface IParagraph {
  children: React.ReactNode;
  textProps?: TextProps;
}

const Paragraph: React.FC<IParagraph> = ({ children, textProps }) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Text color={textColor} {...textProps}>
      {children}
    </Text>
  );
};

export default Paragraph;
