import { CargoShip, EmptyState, MainColumn } from "../../components";
import { PackagesTable } from "../../features/package";
import { useFetchPacks } from "../../features/package/hooks/useFetchPackages";
import React from "react";

const Packages = () => {
  const [packs, { loading }] = useFetchPacks();

  if (loading) return <div>Loading...</div>;

  return (
    <MainColumn pageTitle="Packages">
      {packs.length === 0 ? (
        <EmptyState
          message="You don't have any package yet."
          link="/packages/new"
          icon={<CargoShip />}
        />
      ) : (
        <PackagesTable packages={packs} />
      )}
    </MainColumn>
  );
};

export default Packages;
