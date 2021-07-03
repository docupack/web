import { EmptyState, MainColumn } from "../components";
import { TemplatesTable } from "../features/template";
import { DocumentsTable } from "../features/document";
import { PackagesTable } from "../features/package";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withSSRContext } from "aws-amplify";
import { fetchTemplates } from "../features/template/hooks/useFetchTemplates";
import { fetchDocuments } from "../features/document/hooks/useFetchDocuments";
import { fetchPackages } from "../features/package/hooks/useFetchPackages";
import Image from "next/image";
import React from "react";

const HomePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (
    data.documents.length === 0 &&
    data.templates.length === 0 &&
    data.packs.length === 0
  ) {
    return (
      <MainColumn pageTitle="Home">
        <EmptyState
          message="Onboarding will be here"
          icon={<Image src="/setup.svg" height="450" width="500" />}
        />
      </MainColumn>
    );
  }

  return (
    <MainColumn pageTitle="Home">
      {/*<PinnedDocuments />*/}

      {/* Projects list (only on smallest breakpoint) */}
      {/*<DocumentsList documents={data.documents} />*/}
      {/* Projects table (small breakpoint and up) */}
      {data.documents.length != 0 && (
        <DocumentsTable documents={data.documents} />
      )}
      {data.templates.length != 0 && (
        <TemplatesTable templates={data.templates} />
      )}
      {data.packs.length != 0 && <PackagesTable packages={data.packs} />}
    </MainColumn>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API, Auth } = withSSRContext(context);
  try {
    await Auth.currentAuthenticatedUser();
  } catch (err) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const [documents, templates, packs] = await Promise.all([
    fetchDocuments(API),
    fetchTemplates(API),
    fetchPackages(API),
  ]);
  return {
    props: {
      data: {
        documents,
        templates,
        packs,
      },
    },
  };
};
