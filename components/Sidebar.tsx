import React, { FC } from "react";
import { UserMenu } from "./UserMenu";
import Nav from "./Nav";

const navItems = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "New Document",
    href: "/documents/new",
    current: false,
  },
  { name: "New Template", href: "/templates/new", current: false },
  { name: "New Pack", href: "/packages/new", current: false },
];

export const Sidebar: FC = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden lg:flex lg:flex-shrink-0 min-h-full">
        <div className="flex flex-col w-64 border-r border-gray-200 pt-5 pb-4 bg-gray-100">
          <div className="flex items-center flex-shrink-0 px-6">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
              alt="Workflow"
            />
          </div>
          {/* User account dropdown */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <UserMenu />
            <Nav items={navItems} />
          </div>
        </div>
      </div>
    </div>
  );
};
