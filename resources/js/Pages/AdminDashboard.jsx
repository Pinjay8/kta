import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Tabs } from "flowbite-react";
import BarChart from "@/Components/BarChart";
import { FiSmile } from "react-icons/fi";
import { RiFileEditLine } from "react-icons/ri";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { Inertia } from "@inertiajs/inertia";
import { useEffect, useState } from "react";
import { IoPeople } from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { RiNumbersFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import ImageGubernur1 from "../../../public/img/Gubernur_1.png";
import ImageGubernur2 from "../../../public/img/Gubernur_2.png";
import ImageWalikota1 from "../../../public/img/Walikota_1.png";
import ImageWalikota2 from "../../../public/img/Walikota_2.png";

export default function AdminDashboard({
    auth,
    absensi,
    perhitungan,
    tps,
    kegiatan,
    anggota,
    allCalon,
    calonFirst,
    calonSecond,
    calonGubernurFirst,
    calonGubernurSecond,
    totalInputByAnggota,
    perhitunganAnggotaPertamaGubernur,
    persentaseInputDataGubernur,
    perhitunganAnggotaKeduaGubernur,
    persentaseAnggotaKeduaGubernur,
    perhitunganAnggotaPertamaWalikota,
    persentaseAnggotaPertamaWalikota,
    perhitunganAnggotaKeduaWalikota,
    persentaseAnggotaKeduaWalikota,
    totalInputByAnggotaGubernur,
    persentaseDataAnggotaGubernur,
    countSaksiGubernur,
}) {
    const [dashboardData, setDashboardData] = useState({
        absensi,
        perhitungan,
        tps,
        kegiatan,
        anggota,
        allCalon,
        calonFirst,
        calonSecond,
        calonGubernurFirst,
        calonGubernurSecond,
        totalInputByAnggota,
        perhitunganAnggotaPertamaGubernur,
        persentaseInputDataGubernur,
        perhitunganAnggotaKeduaGubernur,
        persentaseAnggotaKeduaGubernur,
        perhitunganAnggotaPertamaWalikota,
        persentaseAnggotaPertamaWalikota,
        perhitunganAnggotaKeduaWalikota,
        persentaseAnggotaKeduaWalikota,
        totalInputByAnggotaGubernur,
        persentaseDataAnggotaGubernur,
        countSaksiGubernur,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Gunakan Inertia.get untuk memanggil ulang data
            Inertia.get("/adminDashboard", {
                onSuccess: (response) => {
                    setDashboardData(response.props); // Update state dengan data baru
                    console.log(setDashboardData);
                },
            });
        }, 60000); // Interval menjadi 5 menit

        // Hapus interval saat komponen unmount
        return () => clearInterval(interval);
    }, []); // Hanya dijalankan sekali saat komponen pertama kali di render

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <>
                <main className="p-6 sm:p-10 space-y-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Selamat Datang {auth.user.name} 👋
                    </h2>
                    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between"></div>
                    <h4 className="text-3xl font-bold">Pemilihan Walikota</h4>
                    <section className="grid md:grid-cols-2  gap-6">
                        <div className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg">
                            <div className="mb-4">
                                <img
                                    src={ImageWalikota1}
                                    alt="Gambar Walikota 1"
                                    className="w-120 h-60"
                                />
                            </div>
                            <div className="lh-lg leading-tight">
                                <h4 className="text-3xl font-bold">
                                    {dashboardData.calonFirst.nama}
                                </h4>
                                <h5 className="text-2xl font-semibold text-center">
                                    Nomor Urut :{" "}
                                    {dashboardData.calonFirst.no_urut}
                                </h5>

                                <h5 className="text-center text-2xl font-bold">
                                    <span className="text-2xl">
                                        {" "}
                                        Perolehan Suara :{" "}
                                    </span>
                                    {
                                        dashboardData.perhitunganAnggotaPertamaWalikota
                                    }{" "}
                                </h5>
                                <h5 className="text-center text-4xl font-bold">
                                    {dashboardData.persentaseAnggotaPertamaWalikota.toFixed(
                                        2
                                    )}{" "}
                                    %
                                </h5>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-white  shadow-lg  rounded-lg">
                            <div className="mb-4">
                                <img
                                    src={ImageWalikota2}
                                    alt="Gambar Walikota 2"
                                    className="w-120 h-60"
                                />
                            </div>
                            <div className="lh-lg leading-tight">
                                <h4 className="text-3xl font-bold">
                                    {dashboardData.calonSecond.nama}
                                </h4>
                                <h5 className="text-2xl font-semibold text-center">
                                    Nomor Urut :{" "}
                                    {dashboardData.calonSecond.no_urut}
                                </h5>

                                <h5 className="text-center text-2xl font-bold">
                                    <span className="text-2xl">
                                        {" "}
                                        Perolehan Suara :{" "}
                                    </span>
                                    {
                                        dashboardData.perhitunganAnggotaKeduaWalikota
                                    }{" "}
                                </h5>
                                <h5 className="text-center text-4xl font-bold">
                                    {dashboardData.persentaseAnggotaKeduaWalikota.toFixed(
                                        2
                                    )}{" "}
                                    %
                                </h5>
                            </div>
                        </div>
                    </section>

                    <h4 className="text-3xl font-bold">Pemilihan Gubernur</h4>
                    <section className="grid md:grid-cols-2  gap-6">
                        <div className="flex flex-col items-center p-8 bg-white  shadow-lg rounded-lg gap-2">
                            <div className="mb-4">
                                <img
                                    src={ImageGubernur1}
                                    alt="Gambar Gubernur 1"
                                    className="w-120 h-60"
                                />
                            </div>
                            <div className="lh-lg leading-tight">
                                <h4 className="text-3xl font-bold">
                                    {dashboardData.calonGubernurFirst.nama}
                                </h4>
                                <h5 className="text-2xl font-semibold text-center">
                                    Nomor Urut :{" "}
                                    {dashboardData.calonGubernurFirst.no_urut}
                                </h5>

                                <h5 className="text-center text-2xl font-bold">
                                    <span className="text-2xl">
                                        {" "}
                                        Perolehan Suara :
                                        {
                                            dashboardData.perhitunganAnggotaPertamaGubernur
                                        }
                                    </span>
                                </h5>

                                {/* <h5 className="text-2xl font-bold text-center">
                                    Jumlah Suara :
                                    {dashboardData.totalPerhitunganGubernur}
                                </h5> */}
                                <h5 className="text-center text-4xl font-bold">
                                    {dashboardData.persentaseInputDataGubernur.toFixed(
                                        2
                                    )}{" "}
                                    %
                                </h5>
                            </div>
                        </div>

                        <div className="flex flex-col items-center p-8 bg-white  shadow-lg  rounded-lg">
                            <div className="mb-4">
                                <img
                                    src={ImageGubernur2}
                                    alt="Gambar Gubernur 2"
                                    className="w-120 h-60"
                                />
                            </div>
                            <div className="lh-lg leading-tight">
                                <span className="block text-2xl font-bold"></span>
                                <h4 className="text-3xl font-bold">
                                    {dashboardData.calonGubernurSecond.nama}
                                </h4>
                                <h5 className="text-2xl font-semibold text-center">
                                    Nomor Urut :{" "}
                                    {dashboardData.calonGubernurSecond.no_urut}
                                </h5>

                                <h5 className="text-center text-2xl font-bold">
                                    <span className="text-2xl">
                                        {" "}
                                        Perolehan Suara :{" "}
                                    </span>
                                    {
                                        dashboardData.perhitunganAnggotaKeduaGubernur
                                    }{" "}
                                </h5>
                                <h5 className="text-center text-4xl font-bold">
                                    {dashboardData.persentaseAnggotaKeduaGubernur.toFixed(
                                        2
                                    )}{" "}
                                    %
                                </h5>
                            </div>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2  gap-6">
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className=""></div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    Proses Suara Masuk Dari Saksi :
                                </span>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.totalInputByAnggotaGubernur}{" "}
                                    dari {dashboardData.countSaksiGubernur}{" "}
                                    Saksi Gubernur
                                </span>
                                <span className="leading-none text-2xl text-gray-800 font-semibold mt-2">
                                    Total Data Masuk :{" "}
                                    {dashboardData.persentaseDataAnggotaGubernur.toFixed(
                                        2
                                    )}{" "}
                                    %
                                </span>
                            </div>
                        </div>
                    </section>

                    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                                <FaCalendarAlt size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.absensi}
                                </span>
                                <span className=" text-gray-500">
                                    Jumlah Yang Sudah Melakukan Absensi
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                                <FaHome size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.tps}
                                </span>
                                <span className=" text-gray-500">
                                    Jumlah Tps
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
                                <svg
                                    aria-hidden="true"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.anggota}
                                </span>
                                <span className=" text-gray-500">
                                    Jumlah Saksi
                                </span>
                            </div>
                        </div>

                        <div className="flex  items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-green-100 rounded-full mr-6">
                                <TbActivity size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.kegiatan}
                                </span>
                                <span className="block text-gray-500">
                                    Kegiatan
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-slate-100 rounded-full mr-6">
                                <IoPeople size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {allCalon}
                                </span>
                                <span className="block text-gray-500">
                                    Jumlah Calon
                                </span>
                            </div>
                        </div>

                        <div className="flex  items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                                <RiNumbersFill size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {dashboardData.perhitungan}
                                </span>
                                <span className="block text-gray-500">
                                    Jumlah Perhitungan
                                </span>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        </AuthenticatedLayout>
    );
}
