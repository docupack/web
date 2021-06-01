import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import MainColumn from "../../components/MainColumn";
import DocumentUpload from "../../features/document/components/DocumentUpload";
import { useRouter } from "next/router";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useCreateDocument } from "../../features/document/hooks/useCreateDocument";
import { useUploadDocument } from "../../features/document/hooks/useUploadDocument";

const initialValue = { id: "", name: "", type: "", description: "" };

const NewDocumentPage = () => {
  const [doc, setDoc] = useState(initialValue);
  const { name, type, description } = doc;
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [createDocument, createDocumentState] = useCreateDocument();
  const [uploadDocument, uploadState] = useUploadDocument();

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDoc(() => ({ ...doc, [e.target.name]: e.target.value }));
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const createNewDocument = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await createDocument(doc);
      await uploadDocument(file);
      router.push(`/documents/${result.id}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainColumn pageTitle="Add New Document">
      <form className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Document Name*/}
              <div>
                <label
                  htmlFor="documentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    onChange={onChange}
                    type="text"
                    name="name"
                    id="documentName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Passport, visa..."
                    value={name}
                  />
                </div>
              </div>

              {/*Description*/}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    onChange={onChange}
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="This document is from 5 years ago - Feb 14 2016..."
                    value={description}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description about your document.
                </p>
              </div>
              {/*Document Type*/}
              <div>
                <label
                  htmlFor="documentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Type
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    onChange={onChange}
                    type="text"
                    name="type"
                    id="documentType"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Passport, visa..."
                    value={type}
                  />
                </div>
              </div>

              {/*Upload document*/}
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
                <DocumentUpload
                  onDrop={onDrop}
                  progress={uploadState.progress}
                />
              </div>
              {createDocumentState.error && (
                <div>{createDocumentState.error}</div>
              )}
              {/*Action buttons*/}
              <div className="pt-5">
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={createNewDocument}
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainColumn>
  );
};

export default withAuthenticator(NewDocumentPage);
