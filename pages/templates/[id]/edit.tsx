import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API, withSSRContext } from "aws-amplify";
import { UpdateTemplateMutation } from "../../../API";
import { updateTemplate } from "../../../graphql/mutations";
import { fetchTemplate } from "../../../features/template/hooks/useFetchTemplate";
import { InputList, MainColumn } from "../../../components";
import { changeURLto } from "../../../utils/changeURLto";
import { GetServerSideProps } from "next";
import { Template } from "../../../features/template";

type Props = {
  template: Template;
};

const EditTemplatePage = ({ template }: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const [updatedTemplate, setUpdatedTemplate] = useState(null);
  const [documentTypes, setDocumentTypes] = useState([]);

  useEffect(() => {
    setUpdatedTemplate(template);
    setDocumentTypes(template.documentTypes);
  }, [template]);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUpdatedTemplate(() => ({
      ...updatedTemplate,
      [e.target.name]: e.target.value,
    }));
  };

  const { name, description } = updatedTemplate || {};
  const editCurrentTemplate = async (e: FormEvent) => {
    e.preventDefault();
    if (!name) return;

    const updatedTemplate = {
      id,
      name,
      description,
      documentTypes,
    };

    const result = (await API.graphql({
      query: updateTemplate,
      variables: { input: updatedTemplate },
    })) as { data: UpdateTemplateMutation };

    await changeURLto(router, `/templates/${result.data.updateTemplate.id}`);
  };

  return (
    <MainColumn pageTitle="Edit Your Template">
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        onSubmit={editCurrentTemplate}
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
                    name="name"
                    id="templateName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="Passport, visa..."
                    value={name}
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
              <InputList onChange={setDocumentTypes} inputs={documentTypes} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  //
  const { API } = withSSRContext(context);
  const { id } = context.params;

  const template = await fetchTemplate(API, id);

  return {
    props: {
      template,
    },
  };
};
