import { FC, ReactNode } from "react";
import { random } from "../utils/helpers";

type Props = {
  size: Size;
  bgColor?: Color;
  textColor?: Color;
  children: ReactNode;
};

type Color = "gray" | "red" | "purple" | "yellow" | "green" | "blue" | "indigo";
type Size = "xs" | "sm" | "base" | "lg" | "xl" | "2xl";

export const Badge: FC<Props> = ({ size, bgColor, textColor, children }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 mx-1 rounded-full text-${size} font-medium bg-${
        bgColor || getRandomColor()
      }-100 text-${textColor || getRandomColor()}-800`}
    >
      {children}
    </span>
  );
};

const getRandomColor = () => {
  const colors: Color[] = [
    "gray",
    "green",
    "blue",
    "red",
    "purple",
    "yellow",
    "indigo",
  ];
  return colors[random(0, colors.length)];
};
