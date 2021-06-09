import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { getPack } from "../../../graphql/queries";
import { GetPackQuery } from "../../../API";
import { Pack } from "../types";

export const useFetchPackage = (
  id: string | string[]
): [Pack, { error: Error | null; loading: boolean }] => {
  const [pack, setPack] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPack = async (id: string | string[]) => {
      const packData = (await API.graphql({
        query: getPack,
        variables: { id },
      })) as { data: GetPackQuery };

      try {
        setPack(packData.data.getPack);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    fetchPack(id);
  }, [id]);

  return [pack, { error, loading }];
};
