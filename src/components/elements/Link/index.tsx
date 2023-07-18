import React, { useEffect, useState } from 'react';
import {
  Box,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import Link from 'next/link';

interface CustomLinkProps extends ChakraLinkProps {
  href: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...rest }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box py={1}>
      <Link href={href} passHref>
        <ChakraLink {...rest}>{children}</ChakraLink>
      </Link>
    </Box>
  );
};

export default CustomLink;
