import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import EditButton from "@/Pages/Modal/ModalEditAnggota";
import { DateFormat } from "@/Components/TableData";

export default function ModalAnggota({ data }) {
    const [openingModal, setopeningModal] = useState(false);

    const openModal = () => {
        setopeningModal(true);
    };
    const closeModal = () => {
        setopeningModal(false);
    };

    async function hapus() {
        Inertia.post(`/anggota/delete/${data.id}`);
        setopeningModal(false);
    }
    return (
        <>
            <DangerButton onClick={openModal}>Aksi</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="p-6">
                    <div className=" flex justify-between items-center">
                        <h2 className="font-bold  text-xl ">Detail Anggota</h2>
                        <DangerButton onClick={closeModal}>x</DangerButton>
                    </div>
                    <div className="grid grid-cols-10 gap-4 mt-6 mb-4 text-sm text-black">
                        <p className="font-medium col-span-2">Nama</p>
                        <p className="col-span-8">: {data.nama}</p>
                        <p className="font-medium col-span-2">KTA</p>
                        <p className="col-span-8">: {data.no_anggota}</p>
                        <p className="font-medium col-span-2">No HP</p>
                        <p className="col-span-8">: {data.no_hp}</p>
                        <p className="font-medium col-span-2">NIK</p>
                        <p className="col-span-8">: {data.nik}</p>
                        <p className="font-medium col-span-2">Tps</p>
                        <p className="col-span-8">: {data.id_tps}</p>
                        <p className="font-medium col-span-2">Alamat</p>
                        <p className="col-span-8 text-capitalize">
                            : {data.alamat}, {data.kelurahan}, {data.kecamatan}
                        </p>
                        <p className="font-medium col-span-2">Status</p>
                        <p className="col-span-8 text-capitalize">
                            : {data.status}
                        </p>
                    </div>
                    <div className="mt-5 mb-3 flex justify-end">
                        <EditButton data_anggota={data} />
                        <DangerButton className="ml-2" onClick={hapus}>
                            {" "}
                            Hapus{" "}
                        </DangerButton>
                        {/* <SecondaryButton onClick={closeModal}>
                            Kembali
                        </SecondaryButton> */}
                    </div>
                </div>
            </Modal>
        </>
    );
}
