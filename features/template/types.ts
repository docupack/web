import { Document } from "../document";

export type Template = {
  id: string;
  name: string;
  documentList: Document[];
  updatedAt: string;
  createdAt: string;
};
