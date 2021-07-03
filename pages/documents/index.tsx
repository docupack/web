import { EmptyState, MainColumn } from "../../components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withSSRContext } from "aws-amplify";
import { fetchDocuments } from "../../features/document/hooks/useFetchDocuments";
import { DocumentsTable } from "../../features/document";
import Image from "next/image";
import React from "react";

const Documents = ({
  documents,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainColumn pageTitle="Documents">
      {documents.length === 0 ? (
        <EmptyState
          message="You don't have any document yet."
          link="/documents/new"
          icon={<Image src="/add_document.svg" height="350" width="400" />}
        />
      ) : (
        <DocumentsTable documents={documents} />
      )}
    </MainColumn>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  const documents = await fetchDocuments(API);
  return {
    props: {
      documents,
    },
  };
};

export default Documents;
