import React from 'react';
import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';
const CustomButton: React.FC<ButtonProps> = (props) => (
  <ChakraButton {...props} />
);

export default CustomButton;
