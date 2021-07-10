import { API } from "aws-amplify";
import { listPacks } from "../../../graphql/queries";
import { ListPacksQuery } from "../../../API";
import { Pack } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { ApolloError, gql, useQuery } from "@apollo/client";

export const fetchPackages = async (api: typeof API): Promise<Pack[]> => {
  const packagesData = (await api.graphql({
    query: listPacks,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListPacksQuery };

  return packagesData.data.listPacks.items;
};

type UseFetchPacksResponse = [
  Pack[],
  { error?: ApolloError; loading: boolean }
];

export const useFetchPacks = (): UseFetchPacksResponse => {
  const { loading, error, data } = useQuery(FETCH_PACKS);
  const packs = data?.listPacks.items;

  return [packs, { error, loading }];
};

const FETCH_PACKS = gql`
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        templateID
        template {
          id
          name
          description
          documentTypes
          createdAt
          updatedAt
          owner
        }
        documents {
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
