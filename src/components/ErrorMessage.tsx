import React from "react";
import { Box, Alert, AlertIcon, AlertDescription } from "@chakra-ui/react";

interface IErrorMessage {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessage> = ({ message }) => {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
};

export default ErrorMessage;
