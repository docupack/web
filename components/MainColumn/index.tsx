import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

export const MainColumn: FC<Props> = ({ children, pageTitle }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
          <div className="px-4 py-4 border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-medium text-gray-900 leading-6 sm:truncate">
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
