import { API } from "aws-amplify";
import { deleteDocument as deleteDocumentMutation } from "../../../graphql/mutations";
import { useState } from "react";
import { DeleteDocumentInput } from "../../../API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const deleteDocument = async (api: typeof API, id: string) => {
  api.graphql({
    query: deleteDocumentMutation,
    variables: { input: { id } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};

export const useDeleteDocument = (): [
  (document: DeleteDocumentInput) => Promise<void | null>,
  { error: Error; loading: boolean }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const deleteDoc = async (doc: DeleteDocumentInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await deleteDocument(API, doc.id);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      setError(error);
      return null;
    }
  };

  return [deleteDoc, { error, loading }];
};
