import React from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/react';
const CustomText: React.FC<TextProps> = (props) => <ChakraText {...props} />;

export default CustomText;
