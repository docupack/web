import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";
import DocumentsList from "../features/document/components/DocumentsTable/DocumentsList";
import MainColumn from "../components/MainColumn";
import { TemplatesTable } from "../features/template";
import { documents, pinnedDocuments, templates } from "../mocks";

export default function Example() {
  return (
    <MainColumn pageTitle={"Home"}>
      {/* Pinned projects */}
      <PinnedDocuments documents={pinnedDocuments} />

      {/* Projects list (only on smallest breakpoint) */}
      <DocumentsList documents={documents} />
      {/* Projects table (small breakpoint and up) */}
      <DocumentsTable documents={documents} />
      <TemplatesTable templates={templates} />
    </MainColumn>
  );
}
