import cx from "classnames";
import Link from "next/link";
import React, { FC, useState } from "react";
import { Badge } from "../../../../components";
import { Pack } from "../../types";
import { PackageRowMenu } from "./PackageRowMenu";
import { parseISOTime } from "../../../../utils/parseISOTime";
import { Color } from "../../../../utils/color";
import useInterval from "../../../useInterval";

type Props = {
  pack: Pack;
  onDelete: () => void;
};

export const PackagesTableRow: FC<Props> = ({ pack, onDelete }) => {
  const [updatedAt, setUpdatedAt] = useState(parseISOTime(pack.updatedAt));

  useInterval(() => {
    setUpdatedAt(parseISOTime(pack.updatedAt));
  }, 1000);

  const documentTypes = pack.template.documentTypes.filter(
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
          <Link href={`/packages/${pack.id}`}>
            <a className="truncate hover:text-gray-600">
              <span>{pack.name}</span>
              <div className="text-sm text-gray-500">{pack.description}</div>
            </a>
          </Link>
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium w-3/12">
        <div className="flex items-center space-x-2">
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
        </div>
      </td>
      <td className="px-6 py-3 text-sm text-gray-500 whitespace-nowrap font-medium w-3/12">
        <Link href={`/templates/${pack.template.id}`}>
          <span>{pack?.template.name}</span>
        </Link>
      </td>
      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right w-1/12">
        {updatedAt}
      </td>
      <td className="pr-6">
        <PackageRowMenu pack={pack} onDelete={onDelete} />
      </td>
    </tr>
  );
};
