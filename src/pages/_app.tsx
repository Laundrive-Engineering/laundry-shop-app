import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '@/components/layouts/Layout';
import '../styles/global.css';
import { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const excludeLayoutPages = ['/login'];

  const getLayout = (content: React.ReactNode) => {
    if (excludeLayoutPages.includes(router.pathname)) {
      return content;
    }
    return <Layout>{content}</Layout>;
  };

  const renderContent = () => {
    return getLayout(<Component {...pageProps} />);
  };

  return (
    <React.Fragment>
      <ChakraProvider>{renderContent()}</ChakraProvider>
    </React.Fragment>
  );
};

export default MyApp;
