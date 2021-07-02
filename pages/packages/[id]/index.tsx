import { withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import MainColumn from "../../../components/MainColumn";
import { Badge } from "../../../components/Badge";
import { useFetchPackage } from "../../../features/package/hooks/useFetchPackage";
import { changeURLto } from "../../../utils/changeURLto";

const Pack = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pack] = useFetchPackage(id);

  return (
    <MainColumn pageTitle="View Your Package">
      <div className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Pack Name*/}
              <div>
                <label
                  htmlFor="packName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pack Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <p
                    id="packName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  >
                    {pack?.name}
                  </p>
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
                  <p
                    id="description"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="This document is from 5 years ago - Feb 14 2016..."
                  >
                    {pack?.description}
                  </p>
                </div>
              </div>
              {/*Pack Type*/}
              <div>
                <label
                  htmlFor="documentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Type
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  {pack?.template.documentTypes.map((docType: string) => {
                    return (
                      <Badge
                        size="sm"
                        bgColor="purple"
                        textColor="gray"
                        key={docType}
                      >
                        {docType}
                      </Badge>
                    );
                  })}
                </div>

                <div className="pt-5">
                  <div className="flex justify-start">
                    <button
                      onClick={() => {
                        changeURLto(router, `/packages/${id}/edit`);
                      }}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainColumn>
  );
};

export default withAuthenticator(Pack);
