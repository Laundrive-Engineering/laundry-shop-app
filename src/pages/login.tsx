import React from 'react';
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useBreakpointValue,
  Card,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react';
import CustomLink from '@/components/elements/Link';
import CustomButton from '@/components/elements/Button';

const LoginPage: React.FC = () => {
  const imageWidth = useBreakpointValue({ base: '100%', md: '50%' });
  const formWidth = useBreakpointValue({ base: '100%', md: '50%' });

  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      {/* Left side - Image */}
      <Box w={imageWidth} maxHeight="100vh">
        <Image
          src="/images/login_img.png"
          alt="Image"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      {/* Right side - Login Form */}
      <Box w={formWidth} p={8} alignItems="center">
        <Card margin="auto" mt={20} width="70%">
          <CardHeader>
            <Heading size="md">Laundrive</Heading>
          </CardHeader>

          <CardBody textAlign="left">
            <form>
              <FormControl>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  mb={4}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  mb={4}
                />
              </FormControl>
              <CustomLink href="/" color="blue.500" textDecoration="none">
                Forgot Password?
              </CustomLink>

              <CustomButton
                width="100%"
                type="submit"
                bg="#00A8E1"
                mt="10px"
                color="white"
                _hover={{ bg: '#00A8E1' }}
              >
                Login
              </CustomButton>
            </form>
          </CardBody>
        </Card>
      </Box>
    </Stack>
  );
};

export default LoginPage;
