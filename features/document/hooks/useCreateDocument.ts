import { API } from "aws-amplify";
import { createDocument as createDocumentMutation } from "../../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import { CreateDocumentInput, CreateDocumentMutation } from "../../../API";
import { useState } from "react";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const createDocument = async (api: typeof API, doc: CreateDocumentInput) => {
  if (!doc.name || !doc.type) return;

  const result = (await api.graphql({
    query: createDocumentMutation,
    variables: { input: { ...doc, id: uuidv4() } as CreateDocumentInput },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreateDocumentMutation };

  return result.data.createDocument;
};

export const useCreateDocument = (): [
  (
    doc: CreateDocumentInput
  ) => Promise<CreateDocumentMutation["createDocument"] | null>,
  { error: Error; loading: boolean }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const createDoc = async (doc: CreateDocumentInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await createDocument(API, doc);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      setError(error);
      return null;
    }
  };

  return [createDoc, { error, loading }];
};
