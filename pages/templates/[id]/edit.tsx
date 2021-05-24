import React from "react";
import MainColumn from "../../../components/MainColumn";
import { useRouter } from "next/router";
import { documents, templates } from "../../index";
import { MinusCircleIcon } from "@heroicons/react/solid";

const EditTemplatePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const template = templates.find((template) => {
    return template.id === id;
  });

  return (
    <MainColumn pageTitle={"Edit Your Template"}>
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        action="#"
        method="POST"
      >
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              <div>
                <label
                  htmlFor="templateName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Template Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="templateName"
                    id="templateName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Passport, visa..."
                    value={template.name}
                  />
                </div>
                <label
                  htmlFor="templateDocumentList"
                  className="block text-sm font-medium text-gray-700 mt-6"
                >
                  Required Documents
                </label>
                {template.documentList.map((doc) => {
                  return (
                    <div
                      className="mt-3 rounded-md shadow-sm flex"
                      key={doc.id}
                    >
                      <input
                        type="text"
                        name="templateDocumentList"
                        id="templateDocumentList"
                        className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        value={doc.name}
                      />{" "}
                      <MinusCircleIcon className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer" />
                    </div>
                  );
                })}
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
                  <button
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

export default EditTemplatePage;
