import { API } from "aws-amplify";
import { listTemplates } from "../../../graphql/queries";
import { ListTemplatesQuery } from "../../../API";
import { Template } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";
import { ApolloError, gql, useQuery } from "@apollo/client";

export const fetchTemplates = async (api: typeof API): Promise<Template[]> => {
  const templateData = (await api.graphql({
    query: listTemplates,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListTemplatesQuery };

  return templateData.data.listTemplates.items;
};

type UseFetchTemplatesResponse = [
  Template[],
  { error?: ApolloError; loading: boolean }
];

export const useFetchTemplates = (): UseFetchTemplatesResponse => {
  const { loading, error, data } = useQuery(FETCH_TEMPLATES);
  const templates = data?.listTemplates.items;

  return [templates, { error, loading }];
};

const FETCH_TEMPLATES = gql`
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
