import { EmptyState, MainColumn } from "../../components";
import { useFetchDocuments } from "../../features/document/hooks/useFetchDocuments";
import { DocumentsTable } from "../../features/document";
import React from "react";
import { AddDocument } from "../../components/AddDocument";

const Documents = () => {
  const [documents, { loading }] = useFetchDocuments();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainColumn pageTitle="Documents">
      {documents.length === 0 ? (
        <EmptyState
          message="You don't have any document yet."
          link="/documents/new"
          icon={<AddDocument />}
        />
      ) : (
        <DocumentsTable documents={documents} />
      )}
    </MainColumn>
  );
};

export default Documents;
