import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { Inertia } from "@inertiajs/inertia";
import EditButton from "@/Pages/Modal/ModalEditTps";
import { DateFormat } from "@/Components/TableData";
export default function ModalTps({ data }) {
    const [openingModal, setopeningModal] = useState(false);
    const openModal = () => {
        setopeningModal(true);
    };

    const closeModal = () => {
        setopeningModal(false);
    };

    async function hapus() {
        Inertia.post(`/tps/delete/${data.id}`);
        setopeningModal(false);
    }

    return (
        <div>
            <DangerButton onClick={openModal}>Aksi</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="p-6">
                    <div className=" flex justify-between items-center">
                        <h2 className="font-bold  text-xl ">Detail Tps</h2>
                        <DangerButton onClick={closeModal}>x</DangerButton>
                    </div>
                    <div className="grid grid-cols-10 gap-3 mb-3 mt-3 text-sm text-black">
                        <p className="font-medium col-span-2">Nomor Tps</p>
                        <p className="col-span-8">: {data.no_tps}</p>
                        <p className="font-medium col-span-2">Kelurahan</p>
                        <p className="col-span-8">: {data.kelurahan}</p>
                        <p className="font-medium col-span-2">Kecamatan</p>
                        <p className="col-span-8">: {data.kecamatan}</p>
                        <p className="font-medium col-span-2">RW</p>
                        <p className="col-span-8">: {data.rw}</p>
                        <p className="font-medium col-span-2">Laki-laki</p>
                        <p className="col-span-8">: {data.laki_laki}</p>
                        <p className="font-medium col-span-2">Perempuan</p>
                        <p className="col-span-8">: {data.perempuan}</p>
                        <p className="font-medium col-span-2">DPT</p>
                        <p className="col-span-8">: {data.dpt}</p>
                    </div>
                    <div className="mt-5 mb-3 flex justify-end">
                        <EditButton data_tps={data} />
                        <DangerButton className="ml-2" onClick={hapus}>
                            {" "}
                            Hapus{" "}
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
