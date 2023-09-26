import AdminAuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useEffect } from "react";
import "flowbite";
import "@babel/polyfill";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PrimaryButton from "@/Components/PrimaryButton";

import Table, {ModalAnggota} from "@/Components/TableData";

export default function AnggotaPage({ auth, data }) {

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
            Header: " ",
            Cell: ModalAnggota,
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
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Data Anggota</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <Table columns={header} data={datavalue} />

                        {/* <div className="p-6 text-gray-900">You're logged in as admin!</div> */}
                    </div>
                </div>
            </div>
        </AdminAuthenticatedLayout>
    );
}