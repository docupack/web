import { FC } from "react";
import { UserMenu } from "./UserMenu";

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
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* User account dropdown */}
            <UserMenu name={"Can Sirin"} />
          </div>
        </div>
      </div>
    </div>
  );
};
