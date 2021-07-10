import { EmptyState, MainColumn } from "../components";
import { TemplatesTable } from "../features/template";
import { DocumentsTable } from "../features/document";
import { PackagesTable } from "../features/package";
import { useFetchTemplates } from "../features/template/hooks/useFetchTemplates";
import { useFetchDocuments } from "../features/document/hooks/useFetchDocuments";
import { useFetchPacks } from "../features/package/hooks/useFetchPackages";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  const [documents, { loading: documentsLoading }] = useFetchDocuments();
  const [templates, { loading: templatesLoading }] = useFetchTemplates();
  const [packs, { loading: packsLoading }] = useFetchPacks();

  if (packsLoading || documentsLoading || templatesLoading) {
    return <div>Loading....</div>;
  }

  if (documents.length === 0 && templates.length === 0 && packs.length === 0) {
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
      {documents.length != 0 && <DocumentsTable documents={documents} />}
      {templates.length != 0 && <TemplatesTable templates={templates} />}
      {packs.length != 0 && <PackagesTable packages={packs} />}
    </MainColumn>
  );
};

export default HomePage;
