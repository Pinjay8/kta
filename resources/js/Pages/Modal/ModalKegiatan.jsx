import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { Inertia } from "@inertiajs/inertia";
import EditButton from "@/Pages/Modal/ModalEditKegiatan";
import { DateFormat } from "@/Components/TableData";

export default function ModalKegiatan({ data }) {
    const [openingModal, setopeningModal] = useState(false);
    const openModal = () => {
        setopeningModal(true);
    };

    const closeModal = () => {
        setopeningModal(false);
    };

    // async function akanDatang() {
    //     Inertia.post(`/kegiatan/aksi/ubah-kegiatan/${data.id}`, {
    //         status: 0,
    //         absensi: 0,
    //     });

    //     setSelectedData(null);
    //     setopeningModal(false);
    // }
    // async function dimulai() {
    //     Inertia.post(`/kegiatan/aksi/ubah-kegiatan/${data.id}`, {
    //         status: 1,
    //         absensi: 1,
    //     });

    //     setSelectedData(null);
    //     setopeningModal(false);
    // }
    // async function selesai() {
    //     Inertia.post(`/kegiatan/aksi/ubah-kegiatan/${data.id}`, {
    //         status: 2,
    //         absensi: 0,
    //     });

    //     setSelectedData(null);
    //     setopeningModal(false);
    // }
    // async function absensi() {
    //     Inertia.get(`/absensi/${data.id}`);

    //     setSelectedData(null);
    //     setopeningModal(false);
    // }
    async function hapus() {
        Inertia.post(`/kegiatan/delete/${data.id}`);
        setopeningModal(false);
    }

    return (
        <>
            <DangerButton onClick={openModal}>Aksi</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="p-6">
                    <div className=" flex justify-between items-center">
                        <h2 className="font-bold  text-xl ">Detail Kegiatan</h2>
                        <DangerButton onClick={closeModal}>x</DangerButton>
                    </div>
                    <div className="grid grid-cols-10 gap-3 mb-3 mt-3 text-sm text-black">
                        <p className="font-medium col-span-2">Nama Kegiatan</p>
                        <p className="col-span-8">: {data.nama_kegiatan}</p>
                        <p className="font-medium col-span-2">Waktu</p>
                        <p className="col-span-8">
                            : {data.jam} WIB,{" "}
                            <DateFormat value={data.tanggal} />
                        </p>
                        {/* status */}
                        <p className="font-medium col-span-2">Status</p>
                        <p className="col-span-8">
                            : {data.status == 0 ? "Tidak Aktif" : "Aktif"}
                        </p>
                        <p className="font-medium col-span-2">
                            Jenis Pemilihan
                        </p>
                        <p className="col-span-8">: {data.jenis_pemilihan}</p>
                    </div>
                    {/* {data.status === 0 ? (
                        <DangerButton onClick={dimulai}>
                            Mulai Acara
                        </DangerButton>
                    ) : data.status == 1 ? (
                        <>
                            <div className=" flex justify-between items-center">
                                <SecondaryButton
                                    onClick={akanDatang}
                                    className="mx-2"
                                >
                                    Ubah ke Akan Datang
                                </SecondaryButton>

                                <SecondaryButton
                                    className="mx-2"
                                    onClick={selesai}
                                >
                                    Akhiri Acara
                                </SecondaryButton>
                                <SecondaryButton
                                    className="mx-2"
                                    onClick={absensi}
                                >
                                    Lihat Absensi
                                </SecondaryButton>
                            </div>
                        </>
                    ) : data.status === 2 ? (
                        <>
                            <div className=" flex justify-between">
                                <PrimaryButton
                                    onClick={dimulai}
                                    className="mx-2"
                                >
                                    Ubah ke Acara Dimulai
                                </PrimaryButton>

                                <SecondaryButton onClick={absensi}>
                                    Lihat Data Absensi
                                </SecondaryButton>
                            </div>
                        </>
                    ) : null} */}
                    <div className="mt-5 mb-3 flex justify-end">
                        <EditButton data_kegiatan={data} />
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
