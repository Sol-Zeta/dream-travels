import { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import Layout from "@/components/Layout";
import { storeWrapper } from "@/store/index";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default storeWrapper.withRedux(MyApp);
