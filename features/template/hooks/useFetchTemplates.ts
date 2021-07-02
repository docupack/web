import { API } from "aws-amplify";
import { listTemplates } from "../../../graphql/queries";
import { ListTemplatesQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Template } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchTemplates = async (api: typeof API): Promise<Template[]> => {
  const templateData = (await api.graphql({
    query: listTemplates,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListTemplatesQuery };

  return templateData.data.listTemplates.items;
};

export const useFetchTemplates = (): [
  Template[],
  { error: Error | null; loading: boolean }
] => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getTemplates = async () => {
    setLoading(true);
    try {
      const templateData = await fetchTemplates(API);
      setTemplates(templateData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    getTemplates();
  }, []);

  return [templates, { error, loading }];
};
