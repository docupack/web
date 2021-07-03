import { EmptyState, HappyBird, MainColumn } from "../../components";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { withSSRContext } from "aws-amplify";
import { TemplatesTable } from "../../features/template";
import { fetchTemplates } from "../../features/template/hooks/useFetchTemplates";
import React from "react";

const Templates = ({
  templates,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <MainColumn pageTitle="Templates">
      {templates.length === 0 ? (
        <EmptyState
          message="You don't have any template yet."
          link="/templates/new"
          icon={<HappyBird />}
        />
      ) : (
        <TemplatesTable templates={templates} />
      )}
    </MainColumn>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { API } = withSSRContext(context);
  const templates = await fetchTemplates(API);
  return {
    props: {
      templates,
    },
  };
};

export default Templates;
