import React, { ChangeEvent, useState } from "react";
import MainColumn from "../../components/MainColumn";
import { MinusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
import { createTemplate } from "../../graphql/mutations";
import { API } from "aws-amplify";
import { useRouter } from "next/router";
import { CreateTemplateInput, CreateTemplateMutation } from "../../API";

const initialValue = {
  id: "",
  name: "",
  description: "",
  documentTypes: [{ id: "", type: "" }],
};

const NewTemplatePage = () => {
  const [template, setTemplate] = useState(initialValue);
  const [documentTypes, setDocumentTypes] = useState([]);
  const router = useRouter();

  const addMoreDocument = () => {
    setDocumentTypes(documentTypes.concat({ type: "", id: uuidv4() }));
  };

  const removeDocumentType = (id: string) => {
    const list = documentTypes.filter((doc) => doc.id !== id);
    setDocumentTypes(list);
  };

  const handleListChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target;
    const list = documentTypes.map((doc) => {
      if (doc.id === id) {
        return { ...doc, type: value };
      }
      return doc;
    });
    setDocumentTypes(list);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTemplate(() => ({ ...template, [e.target.name]: e.target.value }));
  };

  const createNewTemplate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name) return;

    const documentTypeList = documentTypes.map((doc) => {
      return doc.type;
    });

    const result = (await API.graphql({
      query: createTemplate,
      variables: {
        input: {
          ...template,
          id: uuidv4(),
          documentTypes: documentTypeList,
        } as CreateTemplateInput,
      },
    })) as { data: CreateTemplateMutation };
    router.push(`/templates/${result.data.createTemplate.id}`);
  };

  const { name, description } = template;
  return (
    <MainColumn pageTitle="Create a template">
      <form className="divide-y divide-gray-200 lg:col-span-9" method="POST">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Document Name*/}
              <div>
                <label
                  htmlFor="templateName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Template Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    onChange={onChange}
                    type="text"
                    name="name"
                    id="templateName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="H1B Template, Student Loan Template..."
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
                    placeholder="I am creating this template for H1B visa applications..."
                    value={description}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description about the template.
                </p>
              </div>
              {/*Document Type*/}
              <div>
                <label
                  htmlFor="documentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Type
                  <PlusIcon
                    className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
                    onClick={addMoreDocument}
                  />
                  {documentTypes.length} document(s)
                </label>
                {documentTypes.map((doc) => {
                  return (
                    <div
                      className="mt-3 rounded-md shadow-sm flex"
                      key={doc.id}
                    >
                      <input
                        type="text"
                        name="documentType"
                        id="documentType"
                        className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Passport, visa..."
                        onChange={(event) => {
                          handleListChange(event, doc.id);
                        }}
                      />{" "}
                      <MinusCircleIcon
                        className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
                        onClick={() => removeDocumentType(doc.id)}
                      />
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
                    onClick={createNewTemplate}
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

export default NewTemplatePage;
