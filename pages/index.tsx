import { ChevronRightIcon } from "@heroicons/react/solid";
import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";
import DocumentsList from "../features/document/components/DocumentsTable/DocumentsList";
import MainColumn from "../components/MainColumn";
import { TemplatesTable } from "../features/template";

export const documents = [
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
  {
    id: "5",
    name: "Visa",
    type: "Visa",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "6",
    name: "Graduation Certificate",
    type: "Graduation Certificate",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
];

const pinnedDocuments = [
  {
    id: "1",
    name: "Passport",
    type: "Passport",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
  },
  {
    id: "2",
    name: "Graduation Certificate",
    type: "Graduation Certificate",
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
];

export const templates = [
  {
    id: "1",
    name: "H1B template",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
    documentList: [
      {
        id: "1",
        name: "Passport",
        type: "Passport",
        createdAt: "March 17, 2020",
        updatedAt: "March 17, 2020",
      },
      {
        id: "2",
        name: "Graduation Certificate",
        type: "Graduation Certificate",
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
    ],
  },
  {
    id: "2",
    name: "Green Card template",
    createdAt: "March 17, 2020",
    updatedAt: "March 17, 2020",
    documentList: [
      {
        id: "1",
        name: "Passport",
        type: "Passport",
        createdAt: "March 17, 2020",
        updatedAt: "March 17, 2020",
      },
      {
        id: "2",
        name: "Graduation Certificate",
        type: "Graduation Certificate",
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
    ],
  },
];

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
