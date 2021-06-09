import { API } from "aws-amplify";
import { deleteTemplate as deleteTemplateMutation } from "../../../graphql/mutations";
import { useState } from "react";
import { DeleteTemplateInput } from "../../../API";

const remove = async (id: string) => {
  API.graphql({
    query: deleteTemplateMutation,
    variables: { input: { id } },
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
      const result = await remove(template.id);
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
