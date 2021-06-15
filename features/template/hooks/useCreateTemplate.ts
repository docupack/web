import { useState } from "react";
import { API } from "aws-amplify";
import { createTemplate as createTemplateMutation } from "../../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import { CreateTemplateInput, CreateTemplateMutation } from "../../../API";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

const create = async (template: CreateTemplateInput) => {
  if (!template.name) return;

  const result = (await API.graphql({
    query: createTemplateMutation,
    variables: {
      input: {
        ...template,
        id: uuidv4(),
      } as CreateTemplateInput,
    },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: CreateTemplateMutation };

  return result.data.createTemplate;
};

export const useCreateTemplate = (): [
  (
    template: CreateTemplateInput
  ) => Promise<CreateTemplateMutation["createTemplate"]>,
  {
    error: Error | null;
    loading: boolean;
  }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const createTemplate = async (template: CreateTemplateInput) => {
    setLoading(true);
    setError(null);

    try {
      const result = await create(template);
      setLoading(false);
      return result;
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
      return null;
    }
  };

  return [createTemplate, { error, loading }];
};
