import { HomeIcon } from "@heroicons/react/outline";
import type { FC, ReactNode } from "react";
import { Sidebar } from "./Sidebar";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Sidebar />
      <div className="flex-1 relative overflow-y-auto focus:outline-none">
        {children}
      </div>
    </div>
  );
};
