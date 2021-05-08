import { Menu } from "@headlessui/react";
import classNames from "classnames";

export const MenuItem = ({ link, text }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={link}
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {text}
        </a>
      )}
    </Menu.Item>
  );
};
