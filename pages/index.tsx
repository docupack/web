import { PinnedDocuments } from "../components/PinnedDocuments";
import { TemplatesTable } from "../features/template";
import { DocumentsTable } from "../features/document";
import { PackagesTable } from "../features/package";
import MainColumn from "../components/MainColumn";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withSSRContext } from "aws-amplify";
import { fetchTemplates } from "../features/template/hooks/useTemplates";
import { fetchDocuments } from "../features/document/hooks/useFetchDocuments";
import { fetchPackages } from "../features/package/hooks/useFetchPackages";

const HomePage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainColumn pageTitle="Home">
      <PinnedDocuments />

      {/* Projects list (only on smallest breakpoint) */}
      {/*<DocumentsList documents={documents} />*/}
      {/* Projects table (small breakpoint and up) */}
      <DocumentsTable documents={data.documents} />
      <TemplatesTable templates={data.templates} />
      <PackagesTable packages={data.packs} />
    </MainColumn>
  );
};

export default withAuthenticator(HomePage);

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { API, Auth } = withSSRContext({ req });
  try {
    const [documents, templates, packs, user] = await Promise.all([
      fetchDocuments(API),
      fetchTemplates(API),
      fetchPackages(API),
      Auth.currentAuthenticatedUser(),
    ]);

    return {
      props: {
        data: {
          documents,
          templates,
          packs,
          user: user.username,
        },
      },
    };
  } catch (err) {
    res.writeHead(302, { Location: "/auth/login" });
    res.end();
  }
  return { props: {} };
};
