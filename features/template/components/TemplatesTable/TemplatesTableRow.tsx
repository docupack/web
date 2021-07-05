import cx from "classnames";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Badge } from "../../../../components";
import { Template } from "../../types";
import { TemplateRowMenu } from "./TemplateRowMenu";
import { parseISOTime } from "../../../../utils/parseISOTime";
import { Color } from "../../../../utils/color";
import useInterval from "../../../useInterval";

type Props = {
  template: Template;
  onDelete: () => void;
};

export const TemplatesTableRow: FC<Props> = ({ template, onDelete }) => {
  const [updatedAt, setUpdatedAt] = useState(parseISOTime(template.updatedAt));

  useInterval(() => {
    setUpdatedAt(parseISOTime(template.updatedAt));
  }, 1000);
  const documentTypes = template?.documentTypes.filter(
    (docType) => docType !== ""
  );

  return (
    <tr>
      <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 w-5/12">
        <div className="flex items-center space-x-3 lg:pl-2">
          <div
            className={cx(
              "flex-shrink-0 w-2.5 h-2.5 rounded-full bg-purple-600"
            )}
            aria-hidden="true"
          />
          <Link href={`/templates/${template.id}`}>
            <a className="truncate hover:text-gray-600">
              <span>{template.name}</span>
              <div className="text-sm text-gray-500">
                {template.description}
              </div>
            </a>
          </Link>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium max-w-md w-5/12">
        {documentTypes.map((docType, index) => (
          <Badge
            size="sm"
            bgColor={Color.Purple}
            textColor={Color.Gray}
            key={index}
          >
            {docType}
          </Badge>
        ))}
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium w-2/12 text-right">
        {updatedAt}
      </td>
      <td className="pr-6">
        <TemplateRowMenu template={template} onDelete={onDelete} />
      </td>
    </tr>
  );
};
