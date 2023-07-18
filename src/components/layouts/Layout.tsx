import React, { ReactNode } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';

import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box w="80%" p={6}>
        <VStack spacing={4}>{children}</VStack>
      </Box>
    </Flex>
  );
};

export default Layout;
