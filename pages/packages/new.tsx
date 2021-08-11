import React, { FormEvent, useEffect, useState } from "react";
import { MainColumn } from "../../components";
import { Template } from "../../API";
import { useRouter } from "next/router";
import { useFetchTemplates } from "../../features/template/hooks/useFetchTemplates";
import { changeURLto } from "../../utils/changeURLto";
import { useCreatePackage } from "../../features/package/hooks/useCreatePackage";

const NewPackagePage = () => {
  const [templates] = useFetchTemplates();
  const [template, setTemplate] = useState(null);
  const [pack, setPack] = useState({ name: "", description: "" });
  const [createPack] = useCreatePackage();
  const router = useRouter();

  // if user don't have any template ready, show "Create template first" message
  // a pack can't be created without a template
  useEffect(() => {
    setTemplate(templates[0]);
  }, [templates]);

  const createNewPack = async (e: FormEvent) => {
    e.preventDefault();
    const item = templates.find((blueprint: Template) => {
      return blueprint.name === template.name;
    });

    const result = await createPack({ ...pack, templateID: item.id });
    await changeURLto(router, `/packages/${result.id}`);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemplate(e.target.value);
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPack(() => ({ ...pack, [e.target.name]: e.target.value }));
  };

  return (
    <MainColumn pageTitle="Create a package from a template">
      <form
        className="divide-y divide-gray-200 lg:col-span-9"
        onSubmit={createNewPack}
      >
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Document Name*/}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Package Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="H1B Package, Student Loan Package..."
                    value={pack.name}
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
                    placeholder="This package is for educational usage only."
                    value={pack.description}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description about your package.
                </p>
              </div>
              <div>
                <label
                  htmlFor="templateName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Template name
                </label>
                <select
                  onChange={onOptionChange}
                  id="templateName"
                  name="templateName"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  defaultValue={templates[0]?.name}
                >
                  {templates.map((template: Template) => {
                    return <option key={template.id}>{template.name}</option>;
                  })}
                </select>
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

export default NewPackagePage;
