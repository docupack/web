import React, { FC } from "react";
import { PinnedDocuments } from "./PinnedDocuments";
import DocumentsList from "../features/document/components/DocumentsTable/DocumentsList";
import { DocumentsTable } from "../features/document";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

const MainColumn: FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">
                {pageTitle}
              </h1>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainColumn;
