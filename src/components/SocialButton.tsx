import React from "react";
import { Link, Button } from "@chakra-ui/react";
import { Social } from "../types/social";

interface ISocialButton {
  social: Social;
}

const SocialButton: React.FC<ISocialButton> = ({ social }) => {
  return (
    <Link href={social.url} isExternal style={{ textDecoration: "none" }}>
      <Button
        colorScheme="blue"
        size="sm"
        margin={"5px"}
        leftIcon={social.icon}
      >
        {social.name}
      </Button>
    </Link>
  );
};

export default SocialButton;
