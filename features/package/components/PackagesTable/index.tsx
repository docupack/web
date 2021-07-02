import React, { FC, useState } from "react";
import { PackagesTableRow } from "./PackagesTableRow";
import { Pack } from "../../types";
import { fetchPackages } from "../../hooks/useFetchPackages";
import { API } from "aws-amplify";
import { Button, DeleteModal, EmptyState } from "../../../../components";
import { useDeletePackage } from "../../hooks/useDeletePackage";
import Image from "next/image";
import Link from "next/link";

type Props = {
  packages?: Pack[];
};

export const PackagesTable: FC<Props> = ({ packages }) => {
  const [deletePack] = useDeletePackage();
  const [packets, setPackets] = useState(packages);
  const [modalState, setModalState] = useState({
    isOpen: false,
    packageId: null,
  });

  const refetch = async () => {
    const refetched = await fetchPackages(API);
    setPackets(refetched);
  };

  const deleteAndRefetch = async (id: string) => {
    await deletePack({ id });
    await refetch();
  };

  const openDeleteModal = (id: string) => {
    setModalState({ isOpen: true, packageId: id });
  };
  const closeDeleteModal = () => {
    setModalState({ isOpen: false, packageId: null });
  };

  const deletePackageText = {
    title: "Deleting a package",
    message: "Do you really want to delete this package of yours?",
  };

  return (
    <div className="hidden sm:block">
      <div className="float-right pr-8 py-4">
        <Link href="/packages/new">
          <a>
            <Button>Add new package</Button>
          </a>
        </Link>
      </div>
      {modalState.isOpen && (
        <DeleteModal
          onConfirm={() => {
            deleteAndRefetch(modalState.packageId);
            closeDeleteModal();
          }}
          setShow={setModalState}
          show={modalState.isOpen}
          title={deletePackageText.title}
          message={deletePackageText.message}
        />
      )}
      <div className="align-middle inline-block min-w-full border-b border-purple-200">
        <table className="min-w-full">
          <thead>
            <tr className="border-t border-gray-200">
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-5/12">
                <span className="lg:pl-2">Packs</span>
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12">
                Required Document Types
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-3/12">
                Template
              </th>
              <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">
                Last updated
              </th>
              <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {packets.map((pack) => (
              <PackagesTableRow
                pack={pack}
                key={pack.id}
                onDelete={() => openDeleteModal(pack.id)}
              />
            ))}
          </tbody>
        </table>
        {packets.length === 0 ? (
          <EmptyState
            message="You don't have any package yet."
            link="/packages/new"
            icon={<Image src="/add_packages.svg" height="250" width="300" />}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
