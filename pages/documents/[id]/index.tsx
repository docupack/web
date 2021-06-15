import { withAuthenticator } from "@aws-amplify/ui-react";
import React, { FC } from "react";
import MainColumn from "../../../components/MainColumn";
import { Badge } from "../../../components/Badge";
import { fetchDocument } from "../../../features/document/hooks/useFetchDocument";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";
import { Docu } from "../../../features/document";

type Props = {
  doc: Docu;
};

const SingularDocument: FC<Props> = ({ doc }) => {
  return (
    <MainColumn pageTitle="View Your Document">
      <div className="divide-y divide-gray-200 lg:col-span-9">
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              {/*Docu Name*/}
              <div>
                <label
                  htmlFor="documentName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Name
                </label>
                <div className="mt-1 rounded-md shadow-sm flex">
                  <p
                    id="documentName"
                    className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  >
                    {doc?.name}
                  </p>
                </div>
              </div>

              {/*Description*/}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Document Description
                </label>
                <div className="mt-1">
                  <p
                    id="description"
                    className="shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="This document is from 5 years ago - Feb 14 2016..."
                  >
                    {doc?.description}
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
                  <Badge size="sm" bgColor="red" textColor="gray">
                    {doc?.type}
                  </Badge>
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
  const doc = await fetchDocument(API, id);

  return {
    props: {
      doc,
    },
  };
};

export default withAuthenticator(SingularDocument);
