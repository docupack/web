import { Layout } from "../components";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../configureAmplify";
import { FC } from "react";
import { useFetchUser } from "../features/useFetchUser";
import { UserContext } from "../features/auth/utils/user-context";
import NextNProgress from "nextjs-progressbar";
import { Color } from "../utils/color";
import { createClient } from "../features/createClient";
import { ApolloProvider } from "@apollo/client";

const DocupackApp: FC<AppProps> = ({ Component, pageProps }) => {
  const [user] = useFetchUser();
  const client = createClient();

  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={user}>
        <Layout>
          <NextNProgress color={Color.Pink} />
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </ApolloProvider>
  );
};

export default DocupackApp;
