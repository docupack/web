import { FC } from "react";
import { TemplatesTableRow } from "./TemplatesTableRow";
import { useFetchTemplates } from "../../hooks/useFetchTemplates";

export const TemplatesTable: FC = () => {
  const [templates, templatesState] = useFetchTemplates();

  return (
    <div className="hidden mt-8 sm:block">
      <div className="align-middle inline-block min-w-full border-b border-blue-200">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Templates</span>
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Required Document Types
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last updated
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {templates.map((template) => (
              <TemplatesTableRow template={template} key={template.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
