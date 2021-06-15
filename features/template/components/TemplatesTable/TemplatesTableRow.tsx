import cx from "classnames";
import Link from "next/link";
import React, { FC } from "react";
import { Badge } from "../../../../components/Badge";
import { Template } from "../../types";
import { TemplateRowMenu } from "./TemplateRowMenu";

type Props = {
  template: Template;
};

export const TemplatesTableRow: FC<Props> = ({ template }) => {
  return (
    <tr>
      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
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
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {template?.documentTypes.map((docType) => (
          <Badge size="sm" bgColor="purple" textColor="gray" key={docType}>
            {docType}
          </Badge>
        ))}
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
        {template.updatedAt}
      </td>
      <td className="pr-6">
        <TemplateRowMenu template={template} />
      </td>
    </tr>
  );
};
