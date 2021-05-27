import classNames from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { Badge } from "../../../../components/Badge";
import { Document } from "../../types";
import { DocumentRowMenu } from "./DocumentRowMenu";

type Props = {
  document: Document;
};

export const DocumentsTableRow: FC<Props> = ({ document }) => {
  return (
    <tr key={document.id}>
      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className={classNames(
              "flex-shrink-0 w-2.5 h-2.5 rounded-full bg-purple-600"
            )}
            aria-hidden="true"
          />
          <Link href={`/documents/${document.id}`}>
            <a className="truncate hover:text-gray-600">
              <span>{document.name}</span>
            </a>
          </Link>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium">
        <div className="flex items-center space-x-2">
          <Badge size="sm" bgColor="blue" textColor="blue">
            {document.type}
          </Badge>
        </div>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {document.updatedAt}
      </td>
      <td className="pr-6">
        <DocumentRowMenu document={document} />
      </td>
    </tr>
  );
};
