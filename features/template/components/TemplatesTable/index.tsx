import React, { FC, useState } from "react";
import { TemplatesTableRow } from "./TemplatesTableRow";
import { Template } from "../../types";
import { API } from "aws-amplify";
import { fetchTemplates } from "../../hooks/useFetchTemplates";
import { useDeleteTemplate } from "../../hooks/useDeleteTemplate";
import { Button, DeleteModal, EmptyState } from "../../../../components";
import { DocumentReportIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

type Props = {
  templates?: Template[];
};

export const TemplatesTable: FC<Props> = ({ templates }) => {
  const [deleteTemplate] = useDeleteTemplate();
  const [allTemplates, setAllTemplates] = useState(templates);
  const [deleteModalState, setDeleteModalState] = useState({
    isOpen: false,
    templateId: null,
  });

  const refetch = async () => {
    const refetched = await fetchTemplates(API);
    setAllTemplates(refetched);
  };

  const deleteAndRefetch = async (id: string) => {
    await deleteTemplate({ id });
    await refetch();
  };

  const openDeleteModal = (id: string) => {
    setDeleteModalState({ isOpen: true, templateId: id });
  };

  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, templateId: null });
  };

  const deleteTemplateText = {
    title: "Deleting a template",
    message: "Do you really want to delete this template of yours?",
  };

  return (
    <div className="hidden sm:block">
      <div className="float-right pr-8 py-4">
        <Link href="/templates/new">
          <a>
            <Button>Add new template</Button>
          </a>
        </Link>
      </div>
      {deleteModalState.isOpen && (
        <DeleteModal
          onConfirm={() => {
            deleteAndRefetch(deleteModalState.templateId);
            closeDeleteModal();
          }}
          setShow={setDeleteModalState}
          show={deleteModalState.isOpen}
          title={deleteTemplateText.title}
          message={deleteTemplateText.message}
        />
      )}
      <div className="align-middle inline-block min-w-full border-b border-purple-200">
        <table className="min-w-full table-fixed">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/12">
                <span className="lg:pl-2">Templates</span>
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/12">
                Required Document Types
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-2/12">
                Last updated
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {allTemplates.map((template) => (
              <TemplatesTableRow
                template={template}
                key={template.id}
                onDelete={() => openDeleteModal(template.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
