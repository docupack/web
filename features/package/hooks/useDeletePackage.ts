import { DeletePackInput, DeletePackMutation } from "../../../API";
import { ApolloError, gql, useMutation } from "@apollo/client";

type UseDeletePackResponse = [
  (id: string) => Promise<DeletePackMutation["deletePack"] | null>,
  { error?: ApolloError; loading: boolean }
];

export const useDeletePack = (): UseDeletePackResponse => {
  const [mutate, { error, loading }] = useMutation(DELETE_PACK_MUTATION);

  const deletePack = async (id: string) => {
    const result = await mutate({
      variables: {
        input: {
          id,
        } as DeletePackInput,
      },
    });
    return result.data?.deletePack;
  };

  return [deletePack, { error, loading }];
};

const DELETE_PACK_MUTATION = gql`
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
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
