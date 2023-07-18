import React, { ReactNode } from 'react';
import { Box, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';

import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const boxWidth = useBreakpointValue({ base: '100%', md: '80%' });
  const boxPadding = useBreakpointValue({ base: 0, md: 6 });

  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <Box w={boxWidth} p={boxPadding}>
        <VStack spacing={4} overflowX="auto">
          {children}
        </VStack>
      </Box>
    </Flex>
  );
};

export default Layout;
