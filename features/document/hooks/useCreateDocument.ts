import { v4 as uuidv4 } from "uuid";
import { CreateDocumentInput, CreateDocumentMutation } from "../../../API";
import { ApolloError, gql, useMutation } from "@apollo/client";

type UseCreateDocumentResponse = [
  (
    doc: CreateDocumentInput
  ) => Promise<CreateDocumentMutation["createDocument"] | null>,
  { error?: ApolloError; loading: boolean }
];

export const useCreateDocument = (): UseCreateDocumentResponse => {
  const [mutate, { error, loading }] = useMutation(mutation);

  const createDocument = async (doc: CreateDocumentInput) => {
    const result = await mutate({
      variables: {
        input: {
          ...doc,
          id: uuidv4(),
        } as CreateDocumentInput,
      },
    });
    return result.data?.createDocument;
  };

  return [createDocument, { error, loading }];
};

const mutation = gql`
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
