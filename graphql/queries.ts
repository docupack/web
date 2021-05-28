/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      name
      description
      type
      url
      packs {
        items {
          id
          documentID
          packID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: ModelDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        url
        packs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPack = /* GraphQL */ `
  query GetPack($id: ID!) {
    getPack(id: $id) {
      id
      name
      description
      templateID
      template {
        id
        name
        description
        documentTypes
        packs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      documents {
        items {
          id
          documentID
          packID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPacks = /* GraphQL */ `
  query ListPacks(
    $filter: ModelPackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        templateID
        template {
          id
          name
          description
          documentTypes
          createdAt
          updatedAt
          owner
        }
        documents {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      name
      description
      documentTypes
      packs {
        items {
          id
          name
          description
          templateID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        documentTypes
        packs {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
