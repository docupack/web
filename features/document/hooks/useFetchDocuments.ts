import { API } from "aws-amplify";
import { listDocuments } from "../../../graphql/queries";
import { ListDocumentsQuery } from "../../../API";
import { Document } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { ApolloError, gql, useQuery } from "@apollo/client";

export const fetchDocuments = async (api: typeof API): Promise<Document[]> => {
  const documentsData = (await api.graphql({
    query: listDocuments,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListDocumentsQuery };

  return documentsData.data.listDocuments.items;
};

type UseFetchDocumentsResponse = [
  Document[],
  { error?: ApolloError; loading: boolean }
];

export const useFetchDocuments = (): UseFetchDocumentsResponse => {
  const { loading, error, data } = useQuery(FETCH_DOCUMENTS);
  const documents = data?.listDocuments.items;

  return [documents, { error, loading }];
};

const FETCH_DOCUMENTS = gql`
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        url
        packs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
