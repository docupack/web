import { API } from "aws-amplify";
import { deletePack as deletePackMutation } from "../../../graphql/mutations";
import { useState } from "react";
import { DeletePackInput } from "../../../API";

const removePack = async (id: string) => {
  API.graphql({
    query: deletePackMutation,
    variables: { input: { id } },
  });
};

export const useDeletePackage = (): [
  (pack: DeletePackInput) => Promise<void | null>,
  { error: Error; loading: boolean }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const deletePack = async (doc: DeletePackInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await removePack(doc.id);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      setError(error);
      return null;
    }
  };

  return [deletePack, { error, loading }];
};
