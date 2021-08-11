import { DeleteTemplateInput, DeleteTemplateMutation } from "../../../API";
import { ApolloError, gql, useMutation } from "@apollo/client";

type UseDeleteTemplateResponse = [
  (id: string) => Promise<DeleteTemplateMutation["deleteTemplate"] | null>,
  { error?: ApolloError; loading: boolean }
];

export const useDeleteTemplate = (): UseDeleteTemplateResponse => {
  const [mutate, { error, loading }] = useMutation(DELETE_TEMPLATE_MUTATION);

  const deleteTemplate = async (id: string) => {
    const result = await mutate({
      variables: {
        input: {
          id,
        } as DeleteTemplateInput,
      },
    });
    return result.data?.deleteTemplate;
  };

  return [deleteTemplate, { error, loading }];
};

const DELETE_TEMPLATE_MUTATION = gql`
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
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
