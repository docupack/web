import { Layout } from "../components/Layout";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../configureAmplify";
import { FC } from "react";

const DocupackApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default DocupackApp;
