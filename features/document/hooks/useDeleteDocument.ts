import { DeleteDocumentInput, DeleteDocumentMutation } from "../../../API";
import { ApolloError, gql, useMutation } from "@apollo/client";

type UseDeleteDocumentResponse = [
  (id: string) => Promise<DeleteDocumentMutation["deleteDocument"] | null>,
  { error?: ApolloError; loading: boolean }
];

export const useDeleteDocument = (): UseDeleteDocumentResponse => {
  const [mutate, { error, loading }] = useMutation(DELETE_DOCUMENT_MUTATION);

  const deleteDocument = async (id: string) => {
    const result = await mutate({
      variables: {
        input: {
          id,
        } as DeleteDocumentInput,
      },
    });
    return result.data?.deleteDocument;
  };

  return [deleteDocument, { error, loading }];
};

const DELETE_DOCUMENT_MUTATION = gql`
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
