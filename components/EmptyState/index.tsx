import React, { FC } from "react";
import { Color } from "../../utils/color";
import Link from "next/link";
import { ButtonLink } from "../ButtonLink";

type Props = {
  message: string;
  link?: string;
  icon: JSX.Element;
};

export const EmptyState: FC<Props> = ({ message, link, icon }) => {
  return (
    <div className="flex flex-col space-y-4 w-full py-24">
      <div className="self-center">{icon}</div>
      <div className="self-center text-lg">{message}</div>
      {link && (
        <div className="self-center">
          <Link href={link || "#"} passHref>
            <ButtonLink color={Color.Purple}>Get started</ButtonLink>
          </Link>
        </div>
      )}
    </div>
  );
};
