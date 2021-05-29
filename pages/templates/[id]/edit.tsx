import { useEffect, useState } from "react";
import MainColumn from "../../../components/MainColumn";
import { useRouter } from "next/router";
import { MinusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { API } from "aws-amplify";
import { getTemplate } from "../../../graphql/queries";
import { GetTemplateQuery, UpdateTemplateMutation } from "../../../API";
import { v4 as uuidv4 } from "uuid";
import { updateTemplate } from "../../../graphql/mutations";

const EditTemplatePage = () => {
  const [template, setTemplate] = useState(null);
  const [documentTypes, setDocumentTypes] = useState(
    template?.documentTypes ?? []
  );
  const router = useRouter();
  const { id } = router.query;

  const fetchTemplate = async () => {
    const templateData = (await API.graphql({
      query: getTemplate,
      variables: { id },
    })) as { data: GetTemplateQuery };

    setTemplate(templateData.data.getTemplate);
    setDocumentTypes(
      templateData.data.getTemplate.documentTypes.map((documentType) => {
        return { id: uuidv4(), type: documentType };
      })
    );
  };

  const addMoreDocumentTypes = () => {
    setDocumentTypes(
      documentTypes.concat({
        id: uuidv4(),
        type: "",
      })
    );
  };

  const removeDocumentType = (id) => {
    const list = documentTypes.filter((doc) => doc.id !== id);
    setDocumentTypes(list);
  };

  const onChange = (e) => {
    setTemplate(() => ({
      ...template,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputChange = (e, id) => {
    const { value } = e.target;
    const list = documentTypes.map((doc) => {
      if (doc.id === id) {
        return { ...doc, type: value };
      }
      return doc;
    });

    setDocumentTypes(list);
  };

  useEffect(() => {
    fetchTemplate();
  }, []);

  const { name, description } = template || {};
  const editCurrentTemplate = async (e) => {
    e.preventDefault();
    if (!name) return;

    const documentTypeList = documentTypes.map((doc) => {
      return doc.type;
    });

    const updatedTemplate = {
      id,
      name,
      description,
      documentTypes: documentTypeList,
    };

    const result = (await API.graphql({
      query: updateTemplate,
      variables: { input: updatedTemplate },
    })) as { data: UpdateTemplateMutation };

    await router.push(`/templates/${result.data.updateTemplate.id}`);
  };

  return (
    <MainColumn pageTitle="Edit Your Template">
      <form className="divide-y divide-gray-200 lg:col-span-9" method="POST">
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
                    name="name"
                    id="templateName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Passport, visa..."
                    value={template?.name}
                    onChange={onChange}
                  />
                </div>
              </div>
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
              <div>
                <label
                  htmlFor="documentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Type
                  <PlusIcon
                    className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
                    onClick={addMoreDocumentTypes}
                  />
                  {documentTypes?.length} document(s)
                </label>
                {documentTypes?.map((docType) => {
                  return (
                    <div
                      className="mt-3 rounded-md shadow-sm flex"
                      key={docType.id}
                    >
                      <MinusCircleIcon
                        className="inline-block mr-2 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
                        onClick={() => removeDocumentType(docType.id)}
                      />
                      <input
                        type="text"
                        name="documentType"
                        id="documentType"
                        value={docType.type}
                        className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Passport, visa..."
                        onChange={(event) => {
                          handleInputChange(event, docType.id);
                        }}
                      />{" "}
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
                    onClick={editCurrentTemplate}
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
