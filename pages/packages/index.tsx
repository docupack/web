import { CargoShip, EmptyState, MainColumn } from "../../components";
import { PackagesTable } from "../../features/package";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withSSRContext } from "aws-amplify";
import { fetchPackages } from "../../features/package/hooks/useFetchPackages";
import Image from "next/image";
import React from "react";

const Packages = ({
  packages,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainColumn pageTitle="Packages">
      {packages.length === 0 ? (
        <EmptyState
          message="You don't have any package yet."
          link="/packages/new"
          icon={<CargoShip />}
        />
      ) : (
        <PackagesTable packages={packages} />
      )}
    </MainColumn>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  const packages = await fetchPackages(API);
  return {
    props: {
      packages,
    },
  };
};

export default Packages;
