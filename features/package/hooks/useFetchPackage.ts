import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getPack } from "../../../graphql/queries";
import { GetPackQuery } from "../../../API";
import { Pack } from "../types";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api-graphql";

export const fetchPack = async (
  api: typeof API,
  id: string | string[]
): Promise<Pack> => {
  const packData = (await api.graphql({
    query: getPack,
    variables: { id },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
  })) as { data: GetPackQuery };

  return packData.data.getPack;
};
export const useFetchPackage = (
  id: string | string[]
): [Pack, { error: Error | null; loading: boolean }] => {
  const [pack, setPack] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const getPack = async (id: string | string[]) => {
    try {
      const pack = await fetchPack(API, id);
      setPack(pack);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getPack(id);
  }, [id]);

  return [pack, { error, loading }];
};
