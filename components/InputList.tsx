import React, { FC, useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusIcon } from "@heroicons/react/solid";
import { Input } from "./Input";

type InputConfig = {
  id: string;
  value: string;
};

type Props = {
  onChange: (input: string[]) => void;
  inputs?: string[] | null;
};

const emptyInput = (): InputConfig => ({
  id: uuidv4(),
  value: "",
});

const generateInputConfig = (values: string[]): InputConfig[] => {
  return values.map((value) => {
    return {
      id: uuidv4(),
      value,
    };
  });
};

export const InputList: FC<Props> = ({ onChange, inputs }) => {
  const [list, setList] = useState<InputConfig[] | null>([]);

  useEffect(() => {
    let initialInputs: InputConfig[];
    if (!inputs || !inputs.length) {
      initialInputs = [emptyInput()];
    } else {
      initialInputs = generateInputConfig(inputs);
    }

    setList(initialInputs);
  }, [inputs]);

  const addMoreInputField = () => {
    const inputFields = list.concat(emptyInput());
    onChange(
      inputFields.map((i) => {
        return i.value;
      })
    );
    setList(inputFields);
  };

  const removeInputField = (id: string) => {
    const inputFields = list.filter((i: InputConfig) => i.id !== id);
    onChange(
      inputFields.map((i) => {
        return i.value;
      })
    );
    setList(inputFields);
  };

  const handleListChange = (value: string, id: string) => {
    const inputFields = list.map((i) => {
      if (i.id === id) {
        return { ...i, id, value };
      }
      return i;
    });

    onChange(
      inputFields.map((i) => {
        return i.value;
      })
    );
    setList(inputFields);
  };

  return (
    <div>
      <label
        htmlFor="input"
        className="block text-sm font-medium text-gray-700"
      >
        Item
        <PlusIcon
          className="inline-block ml-1 mr-0.5 flex-shrink-0 self-center h-7 w-7 text-purple-500 cursor-pointer"
          onClick={addMoreInputField}
        />
      </label>
      {list.map((i) => {
        console.log(i, "iconfing");
        return (
          <div className="mt-3 rounded-md shadow-sm flex" key={i.id}>
            <Input
              label=""
              value={i.value || ""}
              onChange={handleListChange}
              onRemove={removeInputField}
              id={i.id}
              key={i.id}
              placeholder="Passport, visa..."
            />
          </div>
        );
      })}
    </div>
  );
};
