import { FC, ReactNode } from "react";
import { Color } from "../../utils/color";

type Props = {
  size: Size;
  bgColor?: Color;
  textColor?: Color;
  children: ReactNode;
};

type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

export const Badge: FC<Props> = ({ size, bgColor, textColor, children }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 mx-1 rounded-full text-${size} font-medium bg-${bgColor}-100 text-${textColor}-800 overflow-ellipsis overflow-hidden`}
    >
      {children}
    </span>
  );
};
