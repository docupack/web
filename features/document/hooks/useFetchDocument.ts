import React, { Dispatch, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getDocument as getDocumentQuery } from "../../../graphql/queries";
import { GetDocumentQuery } from "../../../API";
import { Docu } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchDocument = async (
  api: typeof API,
  id: string | string[]
): Promise<Docu> => {
  const docData = (await api.graphql({
    query: getDocumentQuery,
    variables: { id },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetDocumentQuery };

  return docData.data.getDocument;
};

export const useFetchDocument = (
  id: string | string[]
): [
  Docu,
  Dispatch<React.SetStateAction<Docu>>,
  { error: Error | null; loading: boolean }
] => {
  const [document, setDocument] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getDocument = async (id: string | string[]) => {
    setLoading(true);
    try {
      const result = await fetchDocument(API, id);
      setDocument(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getDocument(id);
  }, [id]);

  return [document, setDocument, { error, loading }];
};
