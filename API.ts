/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDocumentInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  type: string,
  url?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelDocumentConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDocumentConditionInput | null > | null,
  or?: Array< ModelDocumentConditionInput | null > | null,
  not?: ModelDocumentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Document = {
  __typename: "Document",
  id?: string,
  name?: string,
  description?: string | null,
  type?: string,
  url?: string | null,
  packs?: ModelPackDocumentConnection,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelPackDocumentConnection = {
  __typename: "ModelPackDocumentConnection",
  items?:  Array<PackDocument | null > | null,
  nextToken?: string | null,
};

export type PackDocument = {
  __typename: "PackDocument",
  id?: string,
  documentID?: string,
  packID?: string,
  document?: Document,
  pack?: Pack,
  createdAt?: string,
  updatedAt?: string,
};

export type Pack = {
  __typename: "Pack",
  id?: string,
  name?: string,
  description?: string | null,
  templateID?: string,
  template?: Template,
  documents?: ModelPackDocumentConnection,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type Template = {
  __typename: "Template",
  id?: string,
  name?: string,
  description?: string,
  documentTypes?: Array< string > | null,
  packs?: ModelPackConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelPackConnection = {
  __typename: "ModelPackConnection",
  items?:  Array<Pack | null > | null,
  nextToken?: string | null,
};

export type UpdateDocumentInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  type?: string | null,
  url?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeleteDocumentInput = {
  id: string,
};

export type CreatePackDocumentInput = {
  id?: string | null,
  documentID: string,
  packID: string,
};

export type ModelPackDocumentConditionInput = {
  documentID?: ModelIDInput | null,
  packID?: ModelIDInput | null,
  and?: Array< ModelPackDocumentConditionInput | null > | null,
  or?: Array< ModelPackDocumentConditionInput | null > | null,
  not?: ModelPackDocumentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePackDocumentInput = {
  id: string,
  documentID?: string | null,
  packID?: string | null,
};

export type DeletePackDocumentInput = {
  id: string,
};

export type CreatePackInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  templateID: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type ModelPackConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  templateID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPackConditionInput | null > | null,
  or?: Array< ModelPackConditionInput | null > | null,
  not?: ModelPackConditionInput | null,
};

export type UpdatePackInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  templateID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  owner?: string | null,
};

export type DeletePackInput = {
  id: string,
};

export type CreateTemplateInput = {
  id?: string | null,
  name: string,
  description: string,
  documentTypes?: Array< string > | null,
};

export type ModelTemplateConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  documentTypes?: ModelStringInput | null,
  and?: Array< ModelTemplateConditionInput | null > | null,
  or?: Array< ModelTemplateConditionInput | null > | null,
  not?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  documentTypes?: Array< string > | null,
};

export type DeleteTemplateInput = {
  id: string,
};

export type ModelDocumentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  type?: ModelStringInput | null,
  url?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelDocumentFilterInput | null > | null,
  or?: Array< ModelDocumentFilterInput | null > | null,
  not?: ModelDocumentFilterInput | null,
};

export type ModelDocumentConnection = {
  __typename: "ModelDocumentConnection",
  items?:  Array<Document | null > | null,
  nextToken?: string | null,
};

export type ModelPackFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  templateID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelPackFilterInput | null > | null,
  or?: Array< ModelPackFilterInput | null > | null,
  not?: ModelPackFilterInput | null,
};

export type ModelTemplateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  documentTypes?: ModelStringInput | null,
  and?: Array< ModelTemplateFilterInput | null > | null,
  or?: Array< ModelTemplateFilterInput | null > | null,
  not?: ModelTemplateFilterInput | null,
};

export type ModelTemplateConnection = {
  __typename: "ModelTemplateConnection",
  items?:  Array<Template | null > | null,
  nextToken?: string | null,
};

export type CreateDocumentMutationVariables = {
  input?: CreateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type CreateDocumentMutation = {
  createDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateDocumentMutationVariables = {
  input?: UpdateDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type UpdateDocumentMutation = {
  updateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteDocumentMutationVariables = {
  input?: DeleteDocumentInput,
  condition?: ModelDocumentConditionInput | null,
};

export type DeleteDocumentMutation = {
  deleteDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePackDocumentMutationVariables = {
  input?: CreatePackDocumentInput,
  condition?: ModelPackDocumentConditionInput | null,
};

export type CreatePackDocumentMutation = {
  createPackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePackDocumentMutationVariables = {
  input?: UpdatePackDocumentInput,
  condition?: ModelPackDocumentConditionInput | null,
};

export type UpdatePackDocumentMutation = {
  updatePackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePackDocumentMutationVariables = {
  input?: DeletePackDocumentInput,
  condition?: ModelPackDocumentConditionInput | null,
};

export type DeletePackDocumentMutation = {
  deletePackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePackMutationVariables = {
  input?: CreatePackInput,
  condition?: ModelPackConditionInput | null,
};

export type CreatePackMutation = {
  createPack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePackMutationVariables = {
  input?: UpdatePackInput,
  condition?: ModelPackConditionInput | null,
};

export type UpdatePackMutation = {
  updatePack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePackMutationVariables = {
  input?: DeletePackInput,
  condition?: ModelPackConditionInput | null,
};

export type DeletePackMutation = {
  deletePack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateTemplateMutationVariables = {
  input?: CreateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type CreateTemplateMutation = {
  createTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTemplateMutationVariables = {
  input?: UpdateTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type UpdateTemplateMutation = {
  updateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTemplateMutationVariables = {
  input?: DeleteTemplateInput,
  condition?: ModelTemplateConditionInput | null,
};

export type DeleteTemplateMutation = {
  deleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetDocumentQueryVariables = {
  id?: string,
};

export type GetDocumentQuery = {
  getDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListDocumentsQueryVariables = {
  filter?: ModelDocumentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDocumentsQuery = {
  listDocuments?:  {
    __typename: "ModelDocumentConnection",
    items?:  Array< {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPackQueryVariables = {
  id?: string,
};

export type GetPackQuery = {
  getPack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPacksQueryVariables = {
  filter?: ModelPackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPacksQuery = {
  listPacks?:  {
    __typename: "ModelPackConnection",
    items?:  Array< {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTemplateQueryVariables = {
  id?: string,
};

export type GetTemplateQuery = {
  getTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTemplatesQueryVariables = {
  filter?: ModelTemplateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTemplatesQuery = {
  listTemplates?:  {
    __typename: "ModelTemplateConnection",
    items?:  Array< {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDocumentSubscriptionVariables = {
  owner?: string,
};

export type OnCreateDocumentSubscription = {
  onCreateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateDocumentSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateDocumentSubscription = {
  onUpdateDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteDocumentSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteDocumentSubscription = {
  onDeleteDocument?:  {
    __typename: "Document",
    id: string,
    name: string,
    description?: string | null,
    type: string,
    url?: string | null,
    packs?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePackDocumentSubscription = {
  onCreatePackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePackDocumentSubscription = {
  onUpdatePackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePackDocumentSubscription = {
  onDeletePackDocument?:  {
    __typename: "PackDocument",
    id: string,
    documentID: string,
    packID: string,
    document:  {
      __typename: "Document",
      id: string,
      name: string,
      description?: string | null,
      type: string,
      url?: string | null,
      packs?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    pack:  {
      __typename: "Pack",
      id: string,
      name: string,
      description?: string | null,
      templateID: string,
      template:  {
        __typename: "Template",
        id: string,
        name: string,
        description: string,
        documentTypes?: Array< string > | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      documents?:  {
        __typename: "ModelPackDocumentConnection",
        nextToken?: string | null,
      } | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePackSubscriptionVariables = {
  owner?: string,
};

export type OnCreatePackSubscription = {
  onCreatePack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePackSubscriptionVariables = {
  owner?: string,
};

export type OnUpdatePackSubscription = {
  onUpdatePack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePackSubscriptionVariables = {
  owner?: string,
};

export type OnDeletePackSubscription = {
  onDeletePack?:  {
    __typename: "Pack",
    id: string,
    name: string,
    description?: string | null,
    templateID: string,
    template:  {
      __typename: "Template",
      id: string,
      name: string,
      description: string,
      documentTypes?: Array< string > | null,
      packs?:  {
        __typename: "ModelPackConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    documents?:  {
      __typename: "ModelPackDocumentConnection",
      items?:  Array< {
        __typename: "PackDocument",
        id: string,
        documentID: string,
        packID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateTemplateSubscriptionVariables = {
  owner?: string,
};

export type OnCreateTemplateSubscription = {
  onCreateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTemplateSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateTemplateSubscription = {
  onUpdateTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTemplateSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteTemplateSubscription = {
  onDeleteTemplate?:  {
    __typename: "Template",
    id: string,
    name: string,
    description: string,
    documentTypes?: Array< string > | null,
    packs?:  {
      __typename: "ModelPackConnection",
      items?:  Array< {
        __typename: "Pack",
        id: string,
        name: string,
        description?: string | null,
        templateID: string,
        createdAt?: string | null,
        updatedAt?: string | null,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
