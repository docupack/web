import { withSSRContext } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useRouter } from "next/router";
import MainColumn from "../../../components/MainColumn";
import { Badge } from "../../../components/Badge";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { fetchTemplate } from "../../../features/template/hooks/useFetchTemplate";
import { changeURLto } from "../../../utils/changeURLto";

const TemplatePage = ({
  template,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainColumn pageTitle="View Your Template">
      <div className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Docu Name*/}
              <div>
                <label
                  htmlFor="templateName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Template Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <p
                    id="templateName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  >
                    {template?.name}
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
                    {template?.description}
                  </p>
                </div>
              </div>
              {/*Docu Type*/}
              <div>
                <label
                  htmlFor="documentType"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Type
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  {template?.documentTypes.map((docType: string) => {
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
                        router.push(`/templates/${id}/edit`);
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  const { id } = context.params;
  const template = await fetchTemplate(API, id);
  if (!template) return { notFound: true };

  return {
    props: {
      template,
    },
  };
};

export default withAuthenticator(TemplatePage);
