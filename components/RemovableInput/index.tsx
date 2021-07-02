import React, { ChangeEvent, FC } from "react";
import { MinusCircleIcon } from "@heroicons/react/solid";
import { Input } from "../Input";

type Props = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string, id: string) => void;
  onRemove?: (id: string) => void;
  id?: string;
};

export const RemovableInput: FC<Props> = ({
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
        <Input
          onChange={handleChange}
          type="text"
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
