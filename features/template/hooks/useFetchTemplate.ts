import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getTemplate } from "../../../graphql/queries";
import { GetTemplateQuery } from "../../../API";
import { Template } from "../types";

export const useFetchTemplate = (
  id: string | string[]
): [Template, { error: Error | null; loading: boolean }] => {
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTemplate = async (id: string | string[]) => {
      const templateData = (await API.graphql({
        query: getTemplate,
        variables: { id },
      })) as { data: GetTemplateQuery };

      try {
        setTemplate(templateData.data.getTemplate);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e);
      }
    };
    if (id) {
      fetchTemplate(id);
    }
  }, [id]);

  return [template, { error, loading }];
};
