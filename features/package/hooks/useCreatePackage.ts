import { CreatePackInput, CreatePackMutation } from "../../../API";
import { v4 as uuidv4 } from "uuid";
import { gql, useMutation } from "@apollo/client";

export const useCreatePackage = (): useCreatePackageResponse => {
  const [mutate, { error, loading }] = useMutation(mutation);

  const createPack = async (pack: CreatePackInput) => {
    const result = await mutate({
      variables: {
        input: {
          ...pack,
          id: uuidv4(),
        } as CreatePackInput,
      },
    });
    return result.data?.createPack;
  };

  return [createPack, { error, loading }];
};

type useCreatePackageResponse = [
  (pack: CreatePackInput) => Promise<CreatePackMutation["createPack"] | null>,
  {
    error: Error;
    loading: boolean;
  }
];
const mutation = gql`
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
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
