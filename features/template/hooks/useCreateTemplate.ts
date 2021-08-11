import { v4 as uuidv4 } from "uuid";
import { CreateTemplateInput, CreateTemplateMutation } from "../../../API";
import { ApolloError, gql, useMutation } from "@apollo/client";

type UseCreateTemplateResponse = [
  (
    template: CreateTemplateInput
  ) => Promise<CreateTemplateMutation["createTemplate"]>,
  { error?: ApolloError; loading: boolean }
];

export const useCreateTemplate = (): UseCreateTemplateResponse => {
  const [mutate, { error, loading }] = useMutation(mutation);

  const createTemplate = async (template: CreateTemplateInput) => {
    const result = await mutate({
      variables: {
        input: { ...template, id: uuidv4() } as CreateTemplateInput,
      },
    });
    return result.data?.createTemplate;
  };

  return [createTemplate, { error, loading }];
};

const mutation = gql`
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
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
