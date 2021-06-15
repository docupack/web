import React, { useState } from "react";
import MainColumn from "../../components/MainColumn";
import { API } from "aws-amplify";
import { CreatePackInput, CreatePackMutation } from "../../API";
import { createPack } from "../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import { useTemplates } from "../../features/template/hooks/useTemplates";
import { changeURLto } from "../../utils/changeURLto";

const NewPackagePage = () => {
  const [templates] = useTemplates();
  const [template, setTemplate] = useState("");
  const [pack, setPack] = useState({ name: "" });
  const router = useRouter();

  const createNewPack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const item = templates.filter((blueprint) => {
      return blueprint.name === template;
    });

    const result = (await API.graphql({
      query: createPack,
      variables: {
        input: {
          id: uuidv4(),
          templateID: item[0].id,
          name: pack.name,
        } as CreatePackInput,
      },
    })) as { data: CreatePackMutation };
    await changeURLto(router, `/packages/${result.data.createPack.id}`);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTemplate(e.target.value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPack(() => ({ ...pack, [e.target.name]: e.target.value }));
  };

  return (
    <MainColumn pageTitle="Create a package from blueprint">
      <form className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Docu Name*/}
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
                  {templates.map((template) => {
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
                    onClick={createNewPack}
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
