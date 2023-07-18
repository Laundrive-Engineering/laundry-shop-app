import React, { useEffect, useState } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

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
    <ChakraLink href={href} {...rest}>
      {children}
    </ChakraLink>
  );
};

export default CustomLink;
