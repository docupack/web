import { useDropzone, DropzoneOptions } from "react-dropzone";
import { FC } from "react";
import { returnFileSize } from "../../../../utils/helpers";

type Props = {
  onDrop: DropzoneOptions["onDrop"];
  progress: { loaded: number; total: number };
};

const DocumentUpload: FC<Props> = ({ onDrop, progress }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
  });

  const progressRatio = progress
    ? Math.floor((progress.loaded / progress.total) * 100)
    : 0;

  const files = acceptedFiles.map((file) => {
    const filesize = returnFileSize(file.size);
    return (
      <li key={file.name}>
        {file.name} - {filesize}
      </li>
    );
  });

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 sm:pb-2">
        Your document
      </label>
      <div
        className="mt-1 sm:mt-0 sm:col-span-2"
        {...getRootProps({ className: "dropzone" })}
      >
        <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload document</span>
              </label>
              <p className="pl-1">or drag and drop</p>
              <input
                {...getInputProps()}
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      {files.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 sm:pb-2">
            File
          </label>
          <p className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
            {files}
          </p>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-xs font-medium inline-block text-pink-600">
                  {progressRatio}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
              <div
                style={{ width: `${progressRatio}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-800"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
