import { Menu } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

type Props = {
  link: string;
  text: string;
};

export const MenuItem: FC<Props> = ({ link, text }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={link}>
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {text}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};
