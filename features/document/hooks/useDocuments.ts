import { API } from "aws-amplify";
import { listDocuments } from "../../../graphql/queries";
import { ListDocumentsQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Document } from "../types";

export const useDocuments = (): [
  Document[],
  { error: Error | null; loading: boolean }
] => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDocuments = async () => {
    const documentsData = (await API.graphql({
      query: listDocuments,
    })) as { data: ListDocumentsQuery };

    try {
      setDocuments(documentsData.data.listDocuments.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return [documents, { error, loading }];
};
