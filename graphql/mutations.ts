/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDocument = /* GraphQL */ `
  mutation CreateDocument(
    $input: CreateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    createDocument(input: $input, condition: $condition) {
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
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument(
    $input: UpdateDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    updateDocument(input: $input, condition: $condition) {
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
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument(
    $input: DeleteDocumentInput!
    $condition: ModelDocumentConditionInput
  ) {
    deleteDocument(input: $input, condition: $condition) {
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
export const createPackDocument = /* GraphQL */ `
  mutation CreatePackDocument(
    $input: CreatePackDocumentInput!
    $condition: ModelPackDocumentConditionInput
  ) {
    createPackDocument(input: $input, condition: $condition) {
      id
      documentID
      packID
      document {
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
      pack {
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
      createdAt
      updatedAt
    }
  }
`;
export const updatePackDocument = /* GraphQL */ `
  mutation UpdatePackDocument(
    $input: UpdatePackDocumentInput!
    $condition: ModelPackDocumentConditionInput
  ) {
    updatePackDocument(input: $input, condition: $condition) {
      id
      documentID
      packID
      document {
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
      pack {
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
      createdAt
      updatedAt
    }
  }
`;
export const deletePackDocument = /* GraphQL */ `
  mutation DeletePackDocument(
    $input: DeletePackDocumentInput!
    $condition: ModelPackDocumentConditionInput
  ) {
    deletePackDocument(input: $input, condition: $condition) {
      id
      documentID
      packID
      document {
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
      pack {
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
      createdAt
      updatedAt
    }
  }
`;
export const createPack = /* GraphQL */ `
  mutation CreatePack(
    $input: CreatePackInput!
    $condition: ModelPackConditionInput
  ) {
    createPack(input: $input, condition: $condition) {
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
export const updatePack = /* GraphQL */ `
  mutation UpdatePack(
    $input: UpdatePackInput!
    $condition: ModelPackConditionInput
  ) {
    updatePack(input: $input, condition: $condition) {
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
export const deletePack = /* GraphQL */ `
  mutation DeletePack(
    $input: DeletePackInput!
    $condition: ModelPackConditionInput
  ) {
    deletePack(input: $input, condition: $condition) {
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
export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
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
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
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
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
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
