import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "flowbite";
import "@babel/polyfill";
import "react-toastify/dist/ReactToastify.css";

import Table, { ModalTps } from "@/Components/TableData";

export default function TpsPage({ auth, data }) {
    const header = React.useMemo(() => [
        // {
        //     Header: "No",
        //     accessor: "id",
        // },
        {
            Header: "Nomor Tps",
            accessor: "no_tps",
        },
        // {
        //     Header: "Alamat",
        //     accessor: "alamat",
        // },

        {
            Header: "Kelurahan",
            accessor: "kelurahan",
        },

        // {
        //     Header: "RT",
        //     accessor: "rt",
        // },

        // {
        //     Header: "RW",
        //     accessor: "rw",
        // },

        {
            Header: "Kecamatan",
            accessor: "kecamatan",
        },

        {
            Header: "Aksi",
            Cell: ModalTps,
        },
    ]);

    const datavalue = React.useMemo(() => data, [data]);

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tps
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
                                        type="tps"
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
