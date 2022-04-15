import "antd/dist/antd.css";
import "../styles/globals.css";
import { AppProps } from "next/app";
import ApolloSetting from "./src/commons/apollo";
import Layout from "./src/commons/Layout";
import { globalStyles } from "./src/styles/globalStyles";
import { Global } from "@emotion/react";





function MyApp({ Component, pageProps }: AppProps) {

  return (
        <ApolloSetting>
          <Global styles={globalStyles} />
            <Layout>
              <Component {...pageProps} />
            </Layout>
      </ApolloSetting>
  );
}

export default MyApp;
