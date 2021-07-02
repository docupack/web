import React, { FC, useEffect, useState } from "react";
import { UserMenu } from "../UserMenu";
import { Nav } from "../Nav";
import { fetchUser } from "../../features/useFetchUser";
import { Auth } from "aws-amplify";

const authenticated = [
  {
    name: "Home",
    href: "/",
    current: true,
  },
  {
    name: "Documents",
    href: "/documents",
    current: false,
  },
  { name: "Templates", href: "/templates", current: false },
  { name: "Packs", href: "/packages", current: false },
  { name: "Settings", href: "/profile-settings", current: false },
];

export const Sidebar: FC = () => {
  const [user, setUser] = useState(null);
  const navItems = authenticated;
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await fetchUser(Auth);
    setUser(user);
  };
  if (!user) return null;

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
