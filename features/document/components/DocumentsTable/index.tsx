import React, { FC, useState } from "react";
import { DocumentsTableRow } from "./DocumentsTableRow";
import { Document } from "../../types";
import { API } from "aws-amplify";
import { fetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";
import { Button, DeleteModal, EmptyState } from "../../../../components";
import Image from "next/image";
import Link from "next/link";

type Props = {
  documents?: Document[];
};

export const DocumentsTable: FC<Props> = ({ documents }) => {
  const [deleteDocument] = useDeleteDocument();
  const [allDocuments, setDocs] = useState(documents);
  const [modalState, setModalState] = useState({
    isOpen: false,
    documentId: null,
  });

  const refetch = async () => {
    const refetched = await fetchDocuments(API);
    setDocs(refetched);
  };

  const deleteAndRefetch = async (id: string) => {
    await deleteDocument({ id });
    await refetch();
  };

  const openDeleteModal = (id: string) => {
    setModalState({ isOpen: true, documentId: id });
  };

  const closeDeleteModal = () => {
    setModalState({ isOpen: false, documentId: null });
  };

  const deleteDocText = {
    title: "Deleting a document",
    message: "Do you really want to delete this document of yours?",
  };

  return (
    <div className="hidden sm:block">
      <div className="float-right pr-8 py-4">
        <Link href="/documents/new">
          <a>
            <Button>Add new document</Button>
          </a>
        </Link>
      </div>
      {modalState.isOpen && (
        <DeleteModal
          onConfirm={() => {
            deleteAndRefetch(modalState.documentId);
            closeDeleteModal();
          }}
          setShow={setModalState}
          show={modalState.isOpen}
          title={deleteDocText.title}
          message={deleteDocText.message}
        />
      )}
      <div className="align-middle inline-block min-w-full border-b border-purple-200">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/12">
                <span className="lg:pl-2">Documents</span>
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/12">
                Type
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12">
                Last updated
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {allDocuments?.map((doc: Document) => (
              <DocumentsTableRow
                key={doc.id}
                document={doc}
                onDelete={() => openDeleteModal(doc.id)}
              />
            ))}
          </tbody>
        </table>
        {allDocuments.length === 0 ? (
          <EmptyState
            message="You don't have any document yet."
            link="/documents/new"
            icon={<Image src="/add_document.svg" height="150" width="300" />}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
