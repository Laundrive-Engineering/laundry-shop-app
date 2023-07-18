import CustomButton from '@/components/elements/Button';
import {
  Box,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  VStack,
} from '@chakra-ui/react';

import React from 'react';

interface FormProps {
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onClose }) => {
  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {/* Left Side */}
        <GridItem>
          <VStack spacing={4} align="stretch">
            <FormControl id="shopName">
              <FormLabel>Shop Name</FormLabel>
              <Input />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <Input />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input />
            </FormControl>
          </VStack>
        </GridItem>

        {/* Right Side */}
        <GridItem>
          <VStack spacing={4} align="stretch">
            <FormControl id="owner">
              <FormLabel>Owner</FormLabel>
              <Input />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input />
            </FormControl>
          </VStack>
        </GridItem>
      </Grid>

      {/* Bottom Buttons */}
      <Box mt={4}>
        <CustomButton bg="gray.100" mr={2} onClick={onClose}>
          Cancel
        </CustomButton>
        <CustomButton colorScheme="blue" onClick={handleSave}>
          Save
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Form;
