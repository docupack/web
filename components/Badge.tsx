import { FC } from "react";

type Props = {
  size: Size;
  bgColor: Color;
  textColor: Color;
  children: React.ReactNode;
};

type Color = "gray" | "red" | "purple" | "yellow" | "green" | "blue" | "indigo";
type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

export const Badge: FC<Props> = ({ size, bgColor, textColor, children }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-full text-${size} font-medium bg-${bgColor}-100 text-${textColor}-800`}
    >
      {children}
    </span>
  );
};
