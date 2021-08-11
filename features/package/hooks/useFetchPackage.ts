import { GetPackQuery } from "../../../API";
import { Pack } from "../types";
import {
  ApolloError,
  gql,
  SubscribeToMoreOptions,
  useQuery,
} from "@apollo/client";

type UseFetchPackageResponse = [
  Pack,
  {
    error: ApolloError;
    loading: boolean;
    subscribeToMore: (
      options: SubscribeToMoreOptions<GetPackQuery>
    ) => () => void;
  }
];

export const useFetchPackage = (
  id: string | string[]
): UseFetchPackageResponse => {
  const { loading, error, data, subscribeToMore } = useQuery(FETCH_PACK, {
    variables: { id },
  });
  const pack = data?.getPack;

  return [pack, { error, loading, subscribeToMore }];
};

const FETCH_PACK = gql`
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      name
      description
      templateID
      template {
        id
        name
        description
        documentTypes
        packs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      documents {
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
