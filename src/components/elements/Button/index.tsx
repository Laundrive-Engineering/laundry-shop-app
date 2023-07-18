import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
const CustomButton: React.FC<ButtonProps> = (props) => (
  <ChakraButton bg="#00A8E1" {...props} />
);

export default CustomButton;
