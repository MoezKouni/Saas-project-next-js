import { AuthProvider } from '@/lib/auth';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '@/styles/globals.css';
import theme from '@/styles/theme';
// import { Global, css } from '@emotion/react';

// const GlobalStyle = ({ children }) => {
//   return (
//     <>
//       <Head>
//         <meta content="width=device-width, initial-scale=1" name="viewport" />
//       </Head>
//       <CSSReset />
//       <Global
//         styles={css`
//           html {
//             scroll-behavior: smooth;
//           }
//           #__next {
//             display: flex;
//             flex-direction: column;
//             min-height: 100vh;
//           }
//         `}
//       />
//       {children}
//     </>
//   );
// };

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
