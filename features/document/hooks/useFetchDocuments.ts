import { API } from "aws-amplify";
import { listDocuments } from "../../../graphql/queries";
import { ListDocumentsQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Document } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchDocuments = async (api: typeof API): Promise<Document[]> => {
  const documentsData = (await api.graphql({
    query: listDocuments,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListDocumentsQuery };

  return documentsData.data.listDocuments.items;
};

export const useFetchDocuments = (): [
  Document[],
  { error: Error | null; loading: boolean }
] => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getDocuments = async () => {
    try {
      const documents = await fetchDocuments(API);
      setDocuments(documents);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return [documents, { error, loading }];
};
