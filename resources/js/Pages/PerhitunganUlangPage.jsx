import React from "react";
import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "flowbite";
import "@babel/polyfill";
import "react-toastify/dist/ReactToastify.css";
import { Head } from "@inertiajs/react";

import Table, { ModalTps } from "@/Components/TableData";
import ModalPerhitunganUlang from "./Modal/ModalPerhitunganUlang";

export default function PerhitunganUlangPage({ auth, data }) {
    const header = React.useMemo(() => [
        {
            Header: "Nama Anggota",
            accessor: "id_anggota",
        },

        {
            Header: "TPS",
            accessor: "tps_name", // Nama kolom untuk TPS yang ditambahkan di controller
        },

        {
            Header: "Kegiatan",
            accessor: "id_kegiatan",
        },

        {
            Header: "Alasan",
            accessor: "reason",
        },

        {
            Header: "Status (Diterima/Ditolak)",
            accessor: "is_accepted",
            Cell: ({ value }) => (
                <span>
                    {value === 1 && "Sudah Diterima"}
                    {value === 0 && "Ditolak"}
                    {value == null && "Menunggu Persetujuan"}
                </span>
            ),
        },

        {
            Header: "Aksi",
            Cell: ({ row }) => (
                <ModalPerhitunganUlang data_perhitungan={row.original} />
            ),
        },
    ]);

    const datavalue = React.useMemo(() => data, [data]);

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Perhitungan Ulang
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="max-w-7xl  px-5 mx-auto sm:px-0 lg:px-0">
                <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen  text-gray-900">
                        <main className=" sm:px-6 lg:px-8">
                            <div className="mt-4">
                                <div className="pb-6"></div>
                                <div className="overflow-x-auto lg:overflow-x-hidden">
                                    <Table
                                        columns={header}
                                        data={datavalue}
                                        type="pengajuan_perhitungan_ulangs"
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
