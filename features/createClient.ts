import AwsConfig from "../aws-exports";
import { Auth as AmplifyAuth } from "aws-amplify";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

export const createClient = () => {
  const url = AwsConfig.aws_appsync_graphqlEndpoint;
  // const url = localGQL;
  const region = AwsConfig.aws_appsync_region;

  let auth: MixedAuth | null;

  try {
    auth = {
      jwtToken: async () =>
        (await AmplifyAuth.currentSession()).getIdToken().getJwtToken(),
      type: AwsConfig.aws_appsync_authenticationType as AuthType.Cognito,
    };
  } catch (error) {
    console.log(error);
  }

  const httpLink = createHttpLink({ uri: url });

  const link = ApolloLink.from([
    createAuthLink({ url, region, auth }),
    createSubscriptionHandshakeLink(url, httpLink),
  ]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};

enum AuthType {
  Cognito = "AMAZON_COGNITO_USER_POOLS",
  ApiKey = "API_KEY",
}

interface CognitoAuth {
  jwtToken: () => Promise<string>;
  type: AuthType.Cognito;
}

interface ApiKeyAuth {
  apiKey: string;
  type: AuthType.ApiKey;
}

type MixedAuth = CognitoAuth | ApiKeyAuth;
