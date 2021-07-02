import React, { FC } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Auth } from "aws-amplify";
import { changeURLto } from "../../utils/changeURLto";
import { NextRouter } from "next/dist/client/router";

type Props = {
  items: NavItem[];
};

type NavItem = {
  name: string;
  href: string;
  current: boolean;
};

const logout = async (router: NextRouter) => {
  try {
    await Auth.signOut();
    await changeURLto(router, "/auth/login");
    location.reload();
  } catch (error) {
    console.log("error signing out: ", error);
  }
};

export const Nav: FC<Props> = ({ items }) => {
  const router = useRouter();

  return (
    <nav className="px-3 mt-6">
      <div className="space-y-1">
        {items.map((item) => (
          <Link href={item.href} key={item.name}>
            <a
              className={classNames(
                router.asPath === item.href
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          </Link>
        ))}
        <a
          onClick={() => {
            logout(router);
          }}
          className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
        >
          Log out
        </a>
      </div>
    </nav>
  );
};
