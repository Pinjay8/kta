import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "flowbite";
import "@babel/polyfill";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrimaryButton from "@/Components/PrimaryButton";
import Table, {ModalAnggota} from "@/Components/TableData";
import ModalTambahAnggota from "@/Pages/Modal/ModalTambahAnggota";
import DangerButton from "@/Components/DangerButton";

export default function AbsensiPage({ auth, data ,nama_kegiatan}) {
console.log("data =", data);


    const header = React.useMemo(() => [
        {
            Header: "ID Anggota",
            accessor: "no_anggota",
        },
        {
            Header: "Nama Lengkap",
            accessor: "nama",
        },
        {
            Header: "Jenis Kelamin",
            accessor: "jk",
            Cell: ({ value }) => (value === 1 ? "laki-laki" : "perempuan"),
        },

        {
            Header: "Jabatan",
            accessor: "jabatan",
        },
        {
            Header: "Waktu Absensi",
            accessor: "created_at",
            Cell: ({ value }) => {
                const date = new Date(value);
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
            },
        },
        

    ]);

    const datavalue = React.useMemo(() => data, [data]);



    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data Absensi {nama_kegiatan}</h2>}
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl  px-5 mx-auto sm:px-0 lg:px-0">
                <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen  text-gray-900">
                        <main className=" sm:px-6 lg:px-8 pt-4">

                            <div className="mt-4">
                                <div className="pb-6">
                                   
                                <DangerButton>Download Data</DangerButton>
                                </div>
                                <div className="overflow-x-auto lg:overflow-x-hidden">
                                    <Table columns={header} data={datavalue} />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}