import { ChevronRightIcon } from "@heroicons/react/solid";
import { PinnedDocuments } from "../components/PinnedDocuments";
import { DocumentsTable } from "../features/document";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                Home
              </h1>
            </div>
          </div>
          {/* Pinned projects */}
          <PinnedDocuments documents={documents} />

          {/* Projects list (only on smallest breakpoint) */}

          {/* Projects table (small breakpoint and up) */}
          <div className="hidden mt-8 sm:block">
            <div className="align-middle inline-block min-w-full border-b border-blue-200">
              <DocumentsTable documents={documents} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
