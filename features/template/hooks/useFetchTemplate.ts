import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getTemplate } from "../../../graphql/queries";
import { GetTemplateQuery } from "../../../API";
import { Template } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchTemplate = async (
  api: typeof API,
  id: string | string[]
): Promise<Template> => {
  const templateData = (await api.graphql({
    query: getTemplate,
    variables: { id },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetTemplateQuery };

  return templateData.data.getTemplate;
};

export const useFetchTemplate = (
  id: string | string[]
): [Template, { error: Error | null; loading: boolean }] => {
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getDocument = async (id: string | string[]) => {
    setLoading(true);
    try {
      const templateData = await fetchTemplate(API, id);
      setTemplate(templateData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getDocument(id);
  }, [id]);

  return [template, { error, loading }];
};
