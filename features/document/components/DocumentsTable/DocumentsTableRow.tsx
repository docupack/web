import classNames from "classnames";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Badge } from "../../../../components";
import { Document } from "../../types";
import { DocumentRowMenu } from "./DocumentRowMenu";
import { parseISOTime } from "../../../../utils/parseISOTime";
import { Color } from "../../../../utils/color";
import useInterval from "../../../useInterval";

type Props = {
  document: Document;
  onDelete: () => void;
};

export const DocumentsTableRow: FC<Props> = ({ document, onDelete }) => {
  const [updatedAt, setUpdatedAt] = useState(parseISOTime(document.updatedAt));

  useInterval(() => {
    setUpdatedAt(parseISOTime(document.updatedAt));
  }, 1000);

  return (
    <tr key={document.id}>
      <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 w-5/12">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className={classNames(
              `flex-shrink-0 w-2.5 h-2.5 rounded-full bg-purple-600`
            )}
            aria-hidden="true"
          />
          <Link href={`/documents/${document.id}`}>
            <a className="truncate hover:text-gray-800">
              <span>{document.name}</span>
              <div className="text-sm text-gray-500">
                {document.description}
              </div>
            </a>
          </Link>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium w-5/12 ">
        <div className="flex items-center space-x-2">
          <Badge size="sm" bgColor={Color.Purple} textColor={Color.Gray}>
            {document.type}
          </Badge>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium w-2/12 text-right">
        {updatedAt}
      </td>
      <td className="pr-6 ">
        <DocumentRowMenu document={document} onDelete={onDelete} />
      </td>
    </tr>
  );
};
