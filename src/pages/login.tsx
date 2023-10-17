import React, { useState } from 'react';
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  useToast,
} from '@chakra-ui/react';
import CustomLink from '@/components/elements/Link';
import CustomButton from '@/components/elements/Button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    let res = await signIn('credentials', {
      email,
      password,
      // callbackUrl: `${process.env.NEXT_PUBLIC_NEXTAUTH_URL}`,
      redirect: false,
    });

    if (res?.ok) {
      // toast success
      console.log('success');
      router.push('/admin/orders');
    } else {
      // Toast failed
      toast({
        title: 'Login Error',
        description: 'Failed! Check you input and try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      // return;
      console.log('Failed', res);
    }
    return res;
  };

  return (
    <Stack direction={{ base: 'column', md: 'row' }}>
      {/* Left side - Image */}
      <Box w={{ base: '100%', md: '50%' }} maxH="100vh">
        <Image
          src="/images/login_img.png"
          alt="Image"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>

      {/* Right side - Login Form */}
      <Box w={{ base: '100%', md: '50%' }} p={8} alignItems="center">
        <Card margin="auto" mt={20} width="70%">
          <CardHeader>
            <Heading size="md">Laundrive</Heading>
          </CardHeader>

          <CardBody textAlign="left">
            <form onSubmit={handleLogin}>
              <FormControl mb={4}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <CustomLink
                href="/"
                color="blue.500"
                textDecoration="none"
                mb={4}
              >
                Forgot Password?
              </CustomLink>

              <CustomButton
                type="submit"
                bg="#00A8E1"
                color="white"
                _hover={{ bg: '#00A8E1' }}
                width="100%"
                mt={2}
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
