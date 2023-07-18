import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  VStack,
  DrawerCloseButton,
  Divider,
  DrawerBody,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import UserProfile from './UserProfile';
import CustomLink from '../elements/Link';

// Array of link data
const links = [
  { title: 'Shops', url: '#' },
  { title: 'Booking', url: '#' },
  { title: 'Orders', url: '#' },
  { title: 'History', url: '#' },
];

const Sidebar: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const placement = 'left';

  const RenderLogoutLink = () => {
    return (
      <CustomLink
        letterSpacing="0.1rem"
        py={2}
        px={4}
        alignItems="flex-start"
        rounded="md"
        color="white"
        _hover={{ textDecoration: 'none' }}
        _focus={{ outline: 'none' }}
        href="/"
      >
        Logout
      </CustomLink>
    );
  };

  return (
    <Flex>
      {/* Sidebar toggle button */}
      {!isOpen && (
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<HamburgerIcon />}
          onClick={onToggle}
          display={{ base: 'block', md: 'none' }}
          ml={2}
          mt={2}
        />
      )}

      {/* Sidebar content */}
      <Box
        as="aside"
        w="216px"
        minH="100vh"
        bg="#222D32"
        p={4}
        overflowX="hidden"
        display={{ base: 'none', md: 'block' }}
      >
        {/* Sidebar links */}
        <VStack spacing={4} align="center" pt={12}>
          {/* User profile */}
          <UserProfile />
          <Divider />
          <VStack alignItems="flex-start">
            {links.map((link) => (
              <CustomLink
                letterSpacing="0.1rem"
                key={link.title}
                href={link.url}
                py={2}
                px={4}
                alignItems="flex-start"
                rounded="md"
                color="white"
                _hover={{ textDecoration: 'none' }}
                _focus={{ outline: 'none' }}
              >
                {link.title}
              </CustomLink>
            ))}
            <RenderLogoutLink />
          </VStack>
        </VStack>
      </Box>

      {/* Drawer */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody bg="#222D32">
            <VStack spacing={4} align="center" pt={12}>
              {/* User profile */}
              <UserProfile />
              <Divider />
              <VStack alignItems="flex-start">
                {links.map((link) => (
                  <CustomLink
                    letterSpacing="0.1rem"
                    key={link.title}
                    href={link.url}
                    py={2}
                    px={4}
                    rounded="md"
                    color="white"
                    _hover={{ textDecoration: 'none' }}
                    _focus={{ outline: 'none' }}
                  >
                    {link.title}
                  </CustomLink>
                ))}
                <RenderLogoutLink />
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Sidebar;
