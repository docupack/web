import { API } from "aws-amplify";

export const request: typeof API.graphql = (options) => {
  return API.graphql(options);
};
