import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import Link from "next/link";
import React, { FC, Fragment } from "react";
import { Docu } from "../features/document";
import { useFetchDocuments } from "../features/document/hooks/useFetchDocuments";

export const PinnedDocuments: FC = () => {
  const [documents] = useFetchDocuments();

  const pinnedDocuments = documents.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div className="px-4 mt-6 sm:px-6 lg:px-8">
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
        Pinned Documents
      </h2>
      <ul className="mt-3 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {pinnedDocuments.map((doc) => (
          <li
            key={doc.id}
            className="relative flex col-span-1 shadow-sm rounded-md"
          >
            <div
              className={classNames(
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-purple-800"
              )}
            >
              {doc.name.substring(0, 2)}
            </div>
            <div className="flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <Link href={`/documents/${doc.id}`}>
                  <a className="font-medium text-gray-900 hover:text-gray-600">
                    {doc.name}
                  </a>
                </Link>
              </div>
              <PinnedDocumentMenu document={doc} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

type PinnedDocumentMenuProps = {
  document: Docu;
};

const PinnedDocumentMenu: FC<PinnedDocumentMenuProps> = ({ document }) => {
  return (
    <Menu as="div" className="flex-shrink-0 pr-2">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex items-center justify-center w-8 h-8 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <span className="sr-only">Open options</span>
            <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
          </Menu.Button>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute z-10 w-48 mx-3 mt-1 bg-white shadow-lg origin-top-right right-10 top-3 rounded-md ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href={`/documents/${document.id}`}>
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        View
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Remove from pinned
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Share
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
