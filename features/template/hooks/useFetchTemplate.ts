import {
  ApolloError,
  gql,
  SubscribeToMoreOptions,
  useQuery,
} from "@apollo/client";
import { Template } from "../types";
import { GetTemplateQuery } from "../../../API";

type UseFetchTemplateResponse = [
  Template,
  {
    error: ApolloError;
    loading: boolean;
    subscribeToMore: (
      options: SubscribeToMoreOptions<GetTemplateQuery>
    ) => () => void;
  }
];

export const useFetchTemplate = (
  id: string | string[]
): UseFetchTemplateResponse => {
  const { loading, error, data, subscribeToMore } = useQuery(FETCH_TEMPLATE, {
    variables: {
      id,
    },
  });
  const template = data?.getTemplate;

  return [template, { error, loading, subscribeToMore }];
};

const FETCH_TEMPLATE = gql`
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      name
      description
      documentTypes
      packs {
        items {
          id
          name
          description
          templateID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
