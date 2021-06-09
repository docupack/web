import { API } from "aws-amplify";
import { listPacks } from "../../../graphql/queries";
import { ListPacksQuery } from "../../../API";
import { useEffect, useState } from "react";
import { Pack } from "../types";

export const usePackages = (): [
  Pack[],
  { error: Error | null; loading: boolean }
] => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchPackages = async () => {
    const packagesData = (await API.graphql({
      query: listPacks,
    })) as { data: ListPacksQuery };

    try {
      setPackages(packagesData.data.listPacks.items);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return [packages, { error, loading }];
};
