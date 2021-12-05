import React from 'react';
import { Link, Button } from '@chakra-ui/react';

const SocialButton = ({social}) => {
    return (
        <Link href={social.url} isExternal>
        <Button
            colorScheme="blue"
            size='sm'
            leftIcon={social.icon}
        >{social.name}</Button>
    </Link> )
}

export default SocialButton;
