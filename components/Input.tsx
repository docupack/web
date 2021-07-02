import React, { ChangeEvent, FC } from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string, id: string) => void;
  onRemove?: (id: string) => void;
  id?: string;
};

export const Input: FC<Props> = ({
  label,
  id,
  value,
  placeholder,
  onChange,
  onRemove,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, id);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <label
        htmlFor="templateName"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1 rounded-md shadow-sm flex">
        <input
          onChange={handleChange}
          type="text"
          className="focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded sm:text-sm border-gray-300"
          placeholder={placeholder}
          value={value}
        />
        <MinusCircleIcon
          className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
          onClick={handleRemove}
        />
      </div>
    </div>
  );
};
