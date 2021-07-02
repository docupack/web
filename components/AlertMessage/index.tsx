import { InformationCircleIcon } from "@heroicons/react/solid";
import { Color } from "../../utils/color";
import React, { FC } from "react";
import Link from "next/link";

type Props = {
  message: string;
  goTo?: string;
  color: Color;
};

export const AlertMessage: FC<Props> = ({ message, goTo, color }) => {
  return (
    <div className={`rounded-md bg-${color}-50 p-4 w-full`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon
            className={`h-5 w-5 text-${color}-400`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className={`text-sm text-${color}-700`}>{message}</p>
          {goTo && (
            <p className="mt-3 text-sm md:mt-0 md:ml-6">
              <Link href={goTo}>
                <a
                  className={`whitespace-nowrap font-medium text-${color}-700 hover:text-${color}-600`}
                >
                  Go and create from here <span aria-hidden="true">&rarr;</span>
                </a>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
