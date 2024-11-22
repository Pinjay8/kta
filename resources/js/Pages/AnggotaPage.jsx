import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "flowbite";
import "@babel/polyfill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrimaryButton from "@/Components/PrimaryButton";
import Table, { ModalAnggota } from "@/Components/TableData";
import ModalTambahAnggota from "@/Pages/Modal/ModalTambahAnggota";

export default function AnggotaPage({ auth, data }) {
    const header = React.useMemo(() => [
        {
            Header: "Nomor Anggota",
            accessor: "no_anggota",
        },
        {
            Header: "Nama",
            accessor: "nama",
        },
        {
            Header: "Nomor Wa",
            accessor: "no_hp",
        },
        {
            Header: "NIK",
            accessor: "nik",
        },
        {
            Header: "Tps",
            accessor: "id_tps",
        },
        {
            Header: "Alamat",
            accessor: "alamat",
        },
        {
            Header: "Kecamatan",
            accessor: "kecamatan",
        },
        {
            Header: "Kelurahan",
            accessor: "kelurahan",
        },
        {
            Header: "RT",
            accessor: "rt",
        },
        {
            Header: "Rw",
            accessor: "rw",
        },
        // {
        //     Header: "Password",
        //     accessor: "password",
        //     Cell: ({ cell }) => "*******",
        // },
        {
            Header: "Aksi",
            Cell: ModalAnggota,
        },
    ]);

    const datavalue = React.useMemo(() => data, [data]);

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Data Anggota
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl  px-5 mx-auto sm:px-0 lg:px-0">
                <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen  text-gray-900">
                        <main className=" sm:px-6 lg:px-8">
                            <div className="mt-4">
                                <div className="pb-6">
                                    {/* <ModalTambahAnggota /> */}
                                </div>
                                <div className="overflow-x-auto lg:overflow-x-hidden">
                                    <Table
                                        columns={header}
                                        data={datavalue}
                                        type="anggota"
                                    />
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}
