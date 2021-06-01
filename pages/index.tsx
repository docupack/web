import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";
import MainColumn from "../components/MainColumn";
import { TemplatesTable } from "../features/template";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { PackagesTable } from "../features/package";

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
      <PackagesTable />
    </MainColumn>
  );
}

export default withAuthenticator(Example);
