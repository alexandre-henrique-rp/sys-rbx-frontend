// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
