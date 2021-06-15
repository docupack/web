import { API } from "aws-amplify";
import { listPacks } from "../../../graphql/queries";
import { ListPacksQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Pack } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchPackages = async (api: typeof API): Promise<Pack[]> => {
  const packagesData = (await api.graphql({
    query: listPacks,
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: ListPacksQuery };

  return packagesData.data.listPacks.items;
};

export const usePackages = (): [
  Pack[],
  { error: Error | null; loading: boolean }
] => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getPackages = async () => {
    try {
      const packagesData = await fetchPackages(API);
      setPackages(packagesData);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  return [packages, { error, loading }];
};
