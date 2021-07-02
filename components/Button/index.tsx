import React, { FC } from "react";
import { cx } from "../../utils/cx";

export const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const classNames = cx(
    "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    props.className
  );

  return (
    <button {...props} className={classNames}>
      {props.children}
    </button>
  );
};
