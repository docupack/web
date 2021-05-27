/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument($owner: String!) {
    onCreateDocument(owner: $owner) {
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
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument($owner: String!) {
    onUpdateDocument(owner: $owner) {
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
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument($owner: String!) {
    onDeleteDocument(owner: $owner) {
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
export const onCreatePackDocument = /* GraphQL */ `
  subscription OnCreatePackDocument {
    onCreatePackDocument {
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
export const onUpdatePackDocument = /* GraphQL */ `
  subscription OnUpdatePackDocument {
    onUpdatePackDocument {
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
export const onDeletePackDocument = /* GraphQL */ `
  subscription OnDeletePackDocument {
    onDeletePackDocument {
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
export const onCreatePack = /* GraphQL */ `
  subscription OnCreatePack($owner: String!) {
    onCreatePack(owner: $owner) {
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
export const onUpdatePack = /* GraphQL */ `
  subscription OnUpdatePack($owner: String!) {
    onUpdatePack(owner: $owner) {
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
export const onDeletePack = /* GraphQL */ `
  subscription OnDeletePack($owner: String!) {
    onDeletePack(owner: $owner) {
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
export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate($owner: String!) {
    onCreateTemplate(owner: $owner) {
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate($owner: String!) {
    onUpdateTemplate(owner: $owner) {
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate($owner: String!) {
    onDeleteTemplate(owner: $owner) {
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
