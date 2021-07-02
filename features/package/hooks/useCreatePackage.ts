import { CreatePackInput, CreatePackMutation } from "../../../API";
import { useState } from "react";
import { API } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { createPack as createPackMutation } from "../../../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const createPackage = async (api: typeof API, pack: CreatePackInput) => {
  const result = (await API.graphql({
    query: createPackMutation,
    variables: {
      input: {
        ...pack,
        id: uuidv4(),
      } as CreatePackInput,
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreatePackMutation };

  return result.data.createPack;
};

export const useCreatePackage = (): [
  (pack: CreatePackInput) => Promise<CreatePackMutation["createPack"] | null>,
  {
    error: Error;
    loading: boolean;
  }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const createPack = async (pack: CreatePackInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await createPackage(API, pack);
      setLoading(false);
      return result;
    } catch (e) {
      setLoading(false);
      setError(e);
      return null;
    }
  };

  return [createPack, { error, loading }];
};
