import '../../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from 'next/app'
import MainLayout from '../components/MainLayout';
import { useState, useEffect } from 'react';
import theme from '../layout/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return <></>;

  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>

  );
}

export default MyApp
