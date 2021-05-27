import { FC, useEffect, useState } from "react";
import { DocumentsTableRow } from "./DocumentsTableRow";
import { API } from "aws-amplify";
import { listDocuments } from "../../../../graphql/queries";
import { ListDocumentsQuery } from "../../../../API";

export const DocumentsTable: FC = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const docs = (await API.graphql({
      query: listDocuments,
    })) as { data: ListDocumentsQuery };

    setDocuments(docs.data.listDocuments.items);
  };

  return (
    <div className="hidden mt-8 sm:block">
      <div className="align-middle inline-block min-w-full border-b border-blue-200">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span className="lg:pl-2">Documents</span>
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last updated
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {documents.map((doc) => (
              <DocumentsTableRow key={doc.id} document={doc} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
