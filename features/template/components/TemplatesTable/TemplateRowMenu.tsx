import { Menu, Transition } from "@headlessui/react";
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import { FC, Fragment } from "react";
import { API } from "aws-amplify";
import { Template } from "../../types";
import { deleteTemplate as deleteTemplateMutation } from "../../../../graphql/mutations";
import { OpenMenuTransition } from "../../../../components/OpenMenuTransition";

type Props = {
  template: Template;
};

export const TemplateRowMenu: FC<Props> = ({ template }) => {
  const deleteTemplate = (id) => {
    API.graphql({
      query: deleteTemplateMutation,
      variables: { input: { id } },
    });
  };

  return (
    <Menu as="div" className="relative flex justify-end items-center">
      {({ open }) => (
        <>
          <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
          </Menu.Button>
          <OpenMenuTransition open={open}>
            <Menu.Items
              static
              className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href={`/templates/${template.id}/edit`}>
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "group flex items-center px-4 py-2 text-sm"
                        )}
                      >
                        <PencilAltIcon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        Edit
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      onClick={() => deleteTemplate(template.id)}
                      className={classNames(
                        active ? "text-gray-900" : "text-gray-700",
                        "group flex items-center px-4 py-2 text-sm"
                      )}
                    >
                      <TrashIcon
                        className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </OpenMenuTransition>
        </>
      )}
    </Menu>
  );
};
