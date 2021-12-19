import React from 'react';
import { Link, Button } from '@chakra-ui/react';

const SocialButton = ({ social }) => {
    return (
        <Link href={social.url} isExternal style={{ textDecoration: 'none' }}>
            <Button
                colorScheme="blue"
                size='sm'
                margin={'5px'}
                leftIcon={social.icon}
            >
                {social.name}
            </Button>
        </Link>
    )
}

export default SocialButton;
