// src/pages/_app.tsx

import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import "@/styles/globals.css";
import { ThemeProvider } from 'styled-components'; //
import theme from '../styles/theme';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        this is _app in pages
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;

// MyApp.getInitialProps = async (
//     context: AppContext
//   ): Promise<AppProps & AppInitialProps> => {
//     const ctx = await App.getInitialProps(context)
   
//     // return { ...ctx, example: 'data' }
//     return {  }
//   }
