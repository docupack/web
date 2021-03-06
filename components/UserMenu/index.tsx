import { Menu } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/outline";
import { Auth } from "aws-amplify";
import React, { FC, useEffect, useState } from "react";
import { OpenMenuTransition } from "../OpenMenuTransition";
import { MenuItem } from "../MenuItem";
import Avatar from "boring-avatars";

export const UserMenu: FC = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser();
    setUser(user);
  };

  return (
    <Menu as="div" className="px-3 mt-6 relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500">
              <span className="flex w-full justify-between items-center">
                <span className="flex min-w-0 items-center justify-between space-x-3">
                  <Avatar
                    size={40}
                    name=""
                    variant="beam"
                    colors={["#92A1C6", "#146A7C"]}
                  />
                  <span className="flex-1 flex flex-col min-w-0">
                    <span className="text-gray-900 text-sm font-medium truncate">
                      {user?.username}
                    </span>
                  </span>
                </span>
                <SelectorIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
          </div>
          <OpenMenuTransition open={open}>
            <Menu.Items
              static
              className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="py-1">
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="documents/new">New Document</MenuItem>
                <MenuItem href="#">Log out</MenuItem>
              </div>
            </Menu.Items>
          </OpenMenuTransition>
        </>
      )}
    </Menu>
  );
};
