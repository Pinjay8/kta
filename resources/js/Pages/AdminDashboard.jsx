import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Tabs } from "flowbite-react";
import BarChart from "@/Components/BarChart";
import {FiSmile} from "react-icons/fi";
import {RiFileEditLine} from "react-icons/ri";

export default function AdminDashboard({
    auth,
    sum_fpi,
    sum_fpki,
    sum_survey,
    user_record,
    avg,
    fpi_terkabulkan,
    fpi_ditolak,
    fpi_menunggu,
    fpki_terkabulkan,
    fpki_ditolak,
    fpki_menunggu,

}) {

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
                    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                                {/* <svg
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
                                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                    />
                                </svg> */}
                                <RiFileEditLine size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {sum_fpi}
                                </span>
                                <span className="leading-none text-sm text-gray-500">
                                    Jumlah Permohonan Informasi
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
                                <RiFileEditLine size={30} />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {sum_fpki}
                                </span>
                                <span className="leading-none text-sm text-gray-500">
                                    Jumlah Pengajuan Keberatan Informasi
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
                                    {sum_survey}
                                </span>
                                <span className="text-sm  text-gray-500">
                                    Jumlah Survey Pelayanan Informasi
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="grid md:grid-cols-1 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                        <div className="flex md:col-span-2 items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
                               
                                <FiSmile size={30}/>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">
                                    {avg}%
                                </span>
                                <span className="block text-gray-500">
                                    Pengguna merasa puas
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
                            {/* <div className="px-6 py-5 font-semibold border-b border-gray-100">
                                Grafik Layanan PPID Bulan Mei
                            </div> */}
                            {/* <div className="p-4 flex-grow">
                                <div className="flex items-center justify-center h-full px-4 py-16 text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                                    Chart
                                </div>
                            </div> */}

                            <Tabs.Group
                                aria-label="Full width tabs"
                                style="fullWidth"
                            >
                                <Tabs.Item title=" Permohonan Informasi">
                                   <BarChart data1={fpi_terkabulkan} data2={fpi_menunggu} data3={fpi_ditolak} header='Permohonan Informasi'/>
                                </Tabs.Item>
                                <Tabs.Item title=" Pengajuan Keberatan Informasi">
                                   <BarChart data1={fpki_terkabulkan} data2={fpki_menunggu} data3={fpki_ditolak} header='Pengajuan Keberatan Informasi'/>
                                </Tabs.Item>
                            </Tabs.Group>
                        </div>
                        <div className="row-span-3 md:col-span-2 bg-white shadow rounded-lg">
                            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                                <span>Aktifitas terbaru</span>
                            </div>
                            <div
                                className="overflow-y-auto"
                                style={{ maxHeight: "29rem" }}
                            >
                                <ul className="p-6 space-y-6">
                                    {user_record && user_record.length > 0 ? (
                                        user_record.map((item, i) => {
                                            const createdDate = new Date(
                                                item.created_at
                                            ).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                                second: "numeric",
                                                hour12: true,
                                            });
                                            return (
                                                <div key={i}>
                                                    <li className="flex items-center">
                                                        <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
                                                                alt="profile picture"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <div className="text-gray-700">
                                                                {item.nama}
                                                            </div>
                                                            <div className="text-gray-500 text-sm ">
                                                                {item.source}
                                                            </div>
                                                        </div>
                                                        <span className="ml-auto text-xs font-semibold">
                                                            {createdDate}
                                                        </span>
                                                    </li>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <li> Data masih kosong</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        </AuthenticatedLayout>
    );
}
