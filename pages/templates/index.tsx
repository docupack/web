import { EmptyState, HappyBird, MainColumn } from "../../components";
import { TemplatesTable } from "../../features/template";
import { useFetchTemplates } from "../../features/template/hooks/useFetchTemplates";
import React from "react";

const Templates = () => {
  const [templates, { loading }] = useFetchTemplates();

  if (loading) return <div>Loading...</div>;

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

export default Templates;
