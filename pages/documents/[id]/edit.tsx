import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, MainColumn } from "../../../components";
import { useRouter } from "next/router";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { UpdateDocumentMutation } from "../../../API";
import { updateDocument } from "../../../graphql/mutations";
import { useFetchDocument } from "../../../features/document/hooks/useFetchDocument";
import { changeURLto } from "../../../utils/changeURLto";
import { Color } from "../../../utils/color";

const EditDocumentPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [doc, { loading }] = useFetchDocument(id);
  const [updatedDoc, setUpdatedDoc] = useState(doc);

  useEffect(() => {
    setUpdatedDoc(doc);
  }, [doc]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdatedDoc(() => ({
      ...updatedDoc,
      [e.target.name]: e.target.value,
    }));
  };

  const updateCurrentDocument = async (e: FormEvent) => {
    e.preventDefault();
    const { id, name, description, type } = updatedDoc;
    if (!name || !type) return;

    const result = (await API.graphql({
      query: updateDocument,
      variables: { input: { id, name, description, type } },
    })) as { data: UpdateDocumentMutation };

    await changeURLto(router, `/documents/${result.data.updateDocument.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <MainColumn pageTitle="Edit Your Document">
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        onSubmit={updateCurrentDocument}
      >
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
                    value={updatedDoc?.name}
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
                    value={updatedDoc?.description}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description about your document.
                </p>
              </div>
              {/*Document Type*/}
              <div>
                <label
                  htmlFor="documentType"
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
                    value={updatedDoc?.type}
                  />
                </div>
              </div>

              {/*Action buttons*/}
              <div className="pt-5">
                <div className="flex justify-start">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <Button className="ml-4" variant={Color.Pink}>
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </MainColumn>
  );
};

export default withAuthenticator(EditDocumentPage);
