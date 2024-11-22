import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import DateInput from "@/Components/DateInput";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import SelectInput from "@/Components/SelectInput";

export default function ModalTambahTps() {
    const [openingModal, setopeningModal] = useState(false);
    // const navigate = useNavigate();
    const [file, setFileData] = useState(null);
    const { data, setData, errors, post, get } = useForm({
        no_tps: "",
        kelurahan: "",
        kecamatan: "",
        file: null,
    });

    const handleFileChange = (e) => {
        setData("file", e.target.files[0]); // Pastikan file di-set dengan benar
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        // Proses unggah file ke server
        post(route("import.tps"));
    };
    //     e.preventDefault();
    //     if (fileData) {
    //         const formData = new FormData();
    //         formData.append("file", fileData);

    //         fetch(route("import.tps"), {
    //             method: "POST",
    //             body: formData,
    //             headers: {
    //                 "X-CSRF-TOKEN": document
    //                     .querySelector('meta[name="csrf-token"]')
    //                     .getAttribute("content"),
    //             },
    //         })
    //             .then((response) => {
    //                 if (response.ok) {
    //                     alert("Data berhasil diimpor!");
    //                     get(route("tps")); // Refresh data TPS
    //                     closeModal();
    //                 } else {
    //                     alert("Gagal mengimpor data. Coba lagi.");
    //                 }
    //             })
    //             .catch((error) => console.error("Error:", error));
    //     } else {
    //         alert("Silakan pilih file CSV atau Excel.");
    //     }
    // };

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        setData("tanggal", formattedDate);
    };

    const openModal = () => {
        setopeningModal(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("create.tps"));
        setData({
            no_tps: "",
            kelurahan: "",
            kecamatan: "",
        });
        get(route("tps"));
    }

    const closeModal = () => {
        setopeningModal(false);
        setData({
            no_tps: "",
            kelurahan: "",
            kecamatan: "",
        });
    };
    return (
        <>
            <DangerButton onClick={openModal}>Tambah Tps</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="h-100">
                    <form onSubmit={handleSubmit} className="p-6">
                        <h2 className="text-lg font-bold mb-6 text-gray-900">
                            Tambah Tps Baru
                        </h2>
                        <div className="mb-4">
                            <InputLabel htmlFor="no_tps" value="Nomor Tps" />

                            <TextInput
                                id="no_tps"
                                className="mt-1 block w-full"
                                value={data.no_tps}
                                name="no_tps"
                                onChange={(e) =>
                                    setData("no_tps", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.no_tps}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="kelurahan" value="Kelurahan" />

                            <TextInput
                                id="kelurahan"
                                className="mt-1 block w-full"
                                value={data.kelurahan}
                                name="kelurahan"
                                onChange={(e) =>
                                    setData("kelurahan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.kelurahan}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="kecamatan" value="Kecamatan" />

                            <TextInput
                                id="kecamatan"
                                className="mt-1 block w-full"
                                value={data.kecamatan}
                                name="kecamatan"
                                onChange={(e) =>
                                    setData("kecamatan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.kecamatan}
                                className="mt-2"
                            />
                        </div>

                        <DangerButton type="submit" className="mt-5">
                            Simpan
                        </DangerButton>
                        <SecondaryButton
                            className="flex items-center gap-2 mx-3"
                            onClick={closeModal}
                        >
                            Tutup
                        </SecondaryButton>
                    </form>

                    <div className="px-6 py-2">
                        <form
                            onSubmit={handleFileUpload}
                            className="p-3 px-0 mt-2 border-t"
                        >
                            <h2 className="text-lg font-bold mb-6 text-gray-900">
                                Unggah Data dari CSV/Excel
                            </h2>
                            <div className="mb-4">
                                <input
                                    type="file"
                                    accept=".csv, .xlsx, .xls"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                <InputError
                                    message={errors.file}
                                    className="mt-2"
                                />
                            </div>
                            <DangerButton type="submit" className="mt-5">
                                Unggah CSV/Excel
                            </DangerButton>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
