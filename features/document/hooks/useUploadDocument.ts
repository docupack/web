import { Storage } from "aws-amplify";
import { useCallback, useState } from "react";

type Progress = {
  loaded: number;
  total: number;
};

const uploadDocument = (
  doc: File,
  progressCallback: (progress: { loaded: number; total: number }) => void
) => {
  if (!doc) return;
  try {
    return Storage.put(doc.name, doc, {
      progressCallback,
    });
  } catch (error) {
    console.log("Error on uploading a document:", error);
  }
};

export const useUploadDocument = (): [
  (file: File) => Promise<void>,
  { progress: Progress; error: Error; loading: boolean }
] => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<Progress | null>(null);

  const uploadDoc = useCallback(async (file: File) => {
    setLoading(true);
    setError(null);
    setProgress(null);

    try {
      await uploadDocument(file, setProgress);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return [uploadDoc, { progress, error, loading }];
};
