import { API } from "aws-amplify";
import { getDocument as getDocumentQuery } from "../../../graphql/queries";
import { GetDocumentQuery } from "../../../API";
import { Document } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { Template } from "../../template";
import {
  ApolloError,
  gql,
  SubscribeToMoreOptions,
  useQuery,
} from "@apollo/client";

export const fetchDocument = async (
  api: typeof API,
  id: string | string[]
): Promise<Document> => {
  const docData = (await api.graphql({
    query: getDocumentQuery,
    variables: { id },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetDocumentQuery };

  return docData.data.getDocument;
};

type UseFetchDocumentResponse = [
  Document,
  {
    error: ApolloError;
    loading: boolean;
    subscribeToMore: (
      options: SubscribeToMoreOptions<GetDocumentQuery>
    ) => () => void;
  }
];

export const useFetchDocument = (
  id: string | string[]
): UseFetchDocumentResponse => {
  const { loading, error, data, subscribeToMore } = useQuery(FETCH_DOCUMENT, {
    variables: {
      id,
    },
  });
  const doc = data?.getDocument;

  return [doc, { error, loading, subscribeToMore }];
};

const FETCH_DOCUMENT = gql`
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      name
      description
      type
      url
      packs {
        items {
          id
          documentID
          packID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
