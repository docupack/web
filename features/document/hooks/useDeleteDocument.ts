import { API } from "aws-amplify";
import { deleteDocument as deleteDocumentMutation } from "../../../graphql/mutations";
import { useState } from "react";
import { DeleteDocumentInput } from "../../../API";

const deleteDocument = async (id: string) => {
  API.graphql({
    query: deleteDocumentMutation,
    variables: { input: { id } },
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
      const result = await deleteDocument(doc.id);
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
