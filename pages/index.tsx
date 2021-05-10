import { ChevronRightIcon } from "@heroicons/react/solid";
import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";
import DocumentsList from "../features/document/components/DocumentsTable/DocumentsList";
import MainColumn from "../components/MainColumn";

const documents = [
  {
    id: "1",
    name: "Passport",
    type: "Passport",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "2",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "3",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "4",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  // More projects...
  {
    id: "5",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "6",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
];

export default function Example() {
  return (
    <MainColumn pageTitle={"Home"}>
      {/* Pinned projects */}
      <PinnedDocuments documents={documents} />

      {/* Projects list (only on smallest breakpoint) */}
      <DocumentsList documents={documents} />
      {/* Projects table (small breakpoint and up) */}
      <DocumentsTable documents={documents} />
    </MainColumn>
  );
}
