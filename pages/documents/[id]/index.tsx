import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { useRouter } from "next/router";
import MainColumn from "../../../components/MainColumn";
import { Badge } from "../../../components/Badge";
import { useFetchDocument } from "../../../features/document/hooks/useFetchDocument";

const Document = () => {
  const router = useRouter();
  const { id } = router.query;
  const [doc] = useFetchDocument(id);

  return (
    <MainColumn pageTitle="View Your Document">
      <div className="divide-y divide-gray-200 lg:col-span-9">
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
                  Description
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
              {/*Document Type*/}
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

// export const getStaticPaths = async () => {
//   const documentData = (await API.graphql({ query: listDocuments })) as {
//     data: ListDocumentsQuery;
//   };
//   const paths = documentData.data.listDocuments.items.map((doc) => ({
//     params: { id: doc.id },
//   }));
//   return { paths, fallback: true };
// };

// export const getServerSideProps = async (context) => {
//   const { Auth } = withSSRContext(context);
//   const user = await Auth.currentAuthenticatedUser();
//   console.log(user, "user");
//   const { id } = context.params;
//   return {
//     props: {
//       doc: documentData.data.getDocument,
//     },
//   };
// };

export default withAuthenticator(Document);
