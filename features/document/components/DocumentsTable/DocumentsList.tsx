import { ChevronRightIcon } from "@heroicons/react/solid";

import React from "react";
import classNames from "classnames";
import { Badge } from "../../../../components/Badge";

type Props = {
  documents: Document[];
};

const DocumentsList = ({ documents }) => {
  return (
    <div className="mt-10 sm:hidden">
      <div className="px-4 sm:px-6">
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Documents
        </h2>
      </div>
      <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
        {documents.map((doc) => (
          <li key={doc.id}>
            <a
              href="#"
              className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
            >
              <span className="flex items-center truncate space-x-3">
                <span
                  className={classNames(
                    "w-2.5 h-2.5 flex-shrink-0 rounded-full bg-purple-600"
                  )}
                  aria-hidden="true"
                />
                <span className="font-medium truncate text-sm leading-6">
                  {doc.name}
                </span>
              </span>
              <Badge size="sm" bgColor="blue" textColor="blue">
                {doc.type}
              </Badge>
              <ChevronRightIcon
                className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentsList;
