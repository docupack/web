import React, { Dispatch, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getDocument } from "../../../graphql/queries";
import { GetDocumentQuery } from "../../../API";
import { Document } from "../types";

export const useFetchDocument = (
  id: string | string[]
): [
  Document,
  Dispatch<React.SetStateAction<Document>>,
  { error: Error | null; loading: boolean }
] => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDocument = async (id: string | string[]) => {
    const docData = (await API.graphql({
      query: getDocument,
      variables: { id },
    })) as { data: GetDocumentQuery };

    try {
      setDocument(docData.data.getDocument);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchDocument(id);
  }, [id]);

  return [document, setDocument, { error, loading }];
};
