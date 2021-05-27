import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";
import MainColumn from "../components/MainColumn";
import { TemplatesTable } from "../features/template";
import { withAuthenticator } from "@aws-amplify/ui-react";

function Example() {
  return (
    <MainColumn pageTitle="Home">
      {/* Pinned projects */}
      <PinnedDocuments />

      {/* Projects list (only on smallest breakpoint) */}
      {/*<DocumentsList documents={documents} />*/}
      {/* Projects table (small breakpoint and up) */}
      <DocumentsTable />
      <TemplatesTable />
    </MainColumn>
  );
}

export default withAuthenticator(Example);
