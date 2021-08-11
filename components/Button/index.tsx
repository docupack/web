import React, { FC } from "react";
import { cx } from "../../utils/cx";
import { Color } from "../../utils/color";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: Color;
};

export const Button: FC<Props> = (props) => {
  const classNames = cx(
    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    props.className,
    variants[props.variant]
  );

  return (
    <button {...props} className={classNames}>
      {props.children}
    </button>
  );
};

const variants: Record<Color, string> = {
  [Color.Red]: "bg-red-600 hover:bg-red-700 text-white",
  [Color.Yellow]: "bg-yellow-600 hover:bg-yellow-700 text-black",
  [Color.Green]: "bg-green-600 hover:bg-green-700 text-white",
  [Color.Blue]: "bg-blue-600 hover:bg-blue-700 text-white",
  [Color.Pink]: "bg-pink-600 hover:bg-pink-700 text-white",
  [Color.Purple]: "bg-indigo-600 hover:bg-indigo-700 text-white",
  [Color.Gray]: "bg-gray-600 hover:bg-gray-700 text-black",
};
