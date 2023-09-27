import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "flowbite";
import "@babel/polyfill";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrimaryButton from "@/Components/PrimaryButton";
import TambahAnggota from "@/Pages/Modal/ModalTambahKegiatan";

import Table, {ModalKegiatan}from "@/Components/TableData";
import ModalTambahKegiatan from "@/Pages/Modal/ModalTambahKegiatan";

export default function KegiatanPage({ auth, data }) {

    const header = React.useMemo(() => [
        {
            Header: "Nama Kegiatan",
            accessor: "nama_kegiatan",
        },
        {
            Header: "Lokasi",
            accessor: "lokasi",
        },

        {
            Header: "Tanggal",
            accessor: "tanggal",
        },
        {
            Header: " ",
            Cell: ModalKegiatan,
        },

    ]);

    const datavalue = React.useMemo(() => data, [data]);



    // useEffect(() => {
    //     const message = flash.message;
    // const error = flash.error;

//     if (message) {
//       toast.success(message);
//     } else if (error) {
//       toast.error(error, { backgroundColor: 'red' });
//     }
//   }, [flash]);


    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Kegiatan</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl px-5 mx-auto sm:px-0 lg:px-0">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen bg-white text-gray-900">
                        <main className=" sm:px-6 lg:px-8 pt-4">
                            <ToastContainer />
                            <div className="mt-4">
                                <div className="pb-6">
                                {/* <PrimaryButton onClick={() => route('tambah.kegiatan')}>
                                        Tambah Kegiatan
                                    </PrimaryButton> */}
                                    <ModalTambahKegiatan/>

                                </div>
                                <div className="overflow-x-auto lg:overflow-x-hidden">
                                    <Table columns={header} data={data} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}