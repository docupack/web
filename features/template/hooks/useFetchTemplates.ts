import { API } from "aws-amplify";
import { listTemplates } from "../../../graphql/queries";
import { ListTemplatesQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Template } from "../types";

export const useFetchTemplates = (): [
  Template[],
  { error: Error | null; loading: boolean }
] => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchTemplates = async () => {
    const templateData = (await API.graphql({
      query: listTemplates,
    })) as { data: ListTemplatesQuery };

    try {
      setTemplates(templateData.data.listTemplates.items);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return [templates, { error, loading }];
};
