import { API } from "aws-amplify";
import { deleteTemplate as deleteTemplateMutation } from "../../../graphql/mutations";
import { useState } from "react";
import { DeleteTemplateInput } from "../../../API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const removeTemplate = async (id: string) => {
  API.graphql({
    query: deleteTemplateMutation,
    variables: { input: { id } },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  });
};

export const useDeleteTemplate = (): [
  (template: DeleteTemplateInput) => Promise<void | null>,
  { error: Error; loading: boolean }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const deleteTemplate = async (template: DeleteTemplateInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await removeTemplate(template.id);
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      setError(error);
      return null;
    }
  };

  return [deleteTemplate, { error, loading }];
};
