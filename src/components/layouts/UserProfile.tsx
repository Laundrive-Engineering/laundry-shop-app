import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const UserProfile: React.FC = () => {
  return (
    <Flex align="center" mb={6}>
      <Avatar size="md" name="John Doe" src="https://via.placeholder.com/150" />
      <Text ml={3} fontWeight="bold" color="white">
        John Doe
      </Text>
    </Flex>
  );
};

export default UserProfile;
