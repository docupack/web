import { GetDocumentQuery } from "../../API";

export type Document = NonNullable<GetDocumentQuery["getDocument"]>;
