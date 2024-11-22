import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import EditButton from "@/Pages/Modal/ModalEditCalon";
import { DateFormat } from "@/Components/TableData";

export default function ModalCalon({ data }) {
    const [openingModal, setopeningModal] = useState(false);
    const openModal = () => {
        setopeningModal(true);
    };

    const closeModal = () => {
        setopeningModal(false);
    };

    async function hapus() {
        Inertia.post(`/calon/delete/${data.id}`);
        setopeningModal(false);
    }

    return (
        <>
            <DangerButton onClick={openModal}>Aksi</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="p-6">
                    <div className=" flex justify-between items-center">
                        <h2 className="font-bold  text-xl ">Detail Calon</h2>
                        <DangerButton onClick={closeModal}>x</DangerButton>
                    </div>
                    <div className="grid grid-cols-10 gap-3 mb-3 mt-3 text-sm text-black">
                        <p className="font-medium col-span-2">Nama</p>
                        <p className="col-span-8">: {data.nama}</p>
                        <p className="font-medium col-span-2">Nomor Urut</p>
                        <p className="col-span-8">: {data.no_urut}</p>
                        <p className="font-medium col-span-2">Status</p>
                        <p className="col-span-8">
                            :{" "}
                            {data.status == "Walikota"
                                ? "Walikota"
                                : "Gubernur"}
                        </p>
                    </div>
                    <div className="mt-5 mb-3 flex justify-end">
                        <EditButton data_calon={data} />
                        <DangerButton className="ml-2" onClick={hapus}>
                            {" "}
                            Hapus{" "}
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </>
    );
}
