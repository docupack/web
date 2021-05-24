import { Menu } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

export const MenuItem: FC<Props> = ({ href, children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <Link href={href}>
          <a
            className={classNames(
              active ? "bg-gray-100 text-gray-900" : "text-gray-700",
              "block px-4 py-2 text-sm"
            )}
          >
            {children}
          </a>
        </Link>
      )}
    </Menu.Item>
  );
};
