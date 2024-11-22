import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import { useForm } from "@inertiajs/react";

export default function ModalTambahAnggota() {
    const [openingModal, setopeningModal] = useState(false);

    const { data, setData, errors, post } = useForm({
        no_anggota: "",
        nama: "",
        no_hp: "",
        nik: "",
        id_tps: "",
        alamat: "",
        kecamatan: "",
        kelurahan: "",
        rt: "",
        rw: "",
        password: "",
        file: null,
    });

    const options = [
        { label: "Pilih Paket", value: "", disabled: true },
        { label: "Cacaban", value: "cacaban" },
        { label: "Gelangan", value: "gelangan" },
        { label: "Kemirirejo", value: "Kemirirejo" },
        { label: "Magelang", value: "magelang" },
        { label: "Panjang", value: "panjang" },
        { label: "Rejo Utara", value: "rejo_utara" },
    ];

    const handleFileChange = (e) => {
        setData("file", e.target.files[0]); // Pastikan file di-set dengan benar
    };

    const handleFileUpload = (e) => {
        e.preventDefault();
        // Proses unggah file ke server
        post(route("import.anggota"));
    };

    const openModal = () => {
        setopeningModal(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("create.anggota"));
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setData("foto_profil", file); // Update the file state
    //   };

    const closeModal = () => {
        setopeningModal(false);
        setData({
            no_anggota: "",
            nama: "",
            no_hp: "",
            nik: "",
            id_tps: "",
            alamat: "",
            kecamatan: "",
            kelurahan: "",
            rt: "",
            rw: "",
            password: "",
        });
    };

    return (
        <>
            <DangerButton onClick={openModal}>Tambah Anggota</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className=" h-70">
                    <form onSubmit={handleSubmit} className="p-6">
                        <div className=" flex justify-between items-center">
                            <h2 className="text-lg font-bold mb-6 text-gray-900">
                                Tambah Anggota Baru
                            </h2>
                        </div>
                        <div className="flex mb-4">
                            <div className="w-1/2 mr-4">
                                <div className="">
                                    <InputLabel htmlFor="nama" value="Nama" />

                                    <TextInput
                                        id="nama"
                                        className="mt-1 block w-full"
                                        value={data.nama}
                                        name="nama"
                                        onChange={(e) =>
                                            setData("nama", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.nama}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="">
                                    <InputLabel
                                        htmlFor="no_anggota"
                                        value="Nomor Anggota"
                                    />

                                    <TextInput
                                        id="no_anggota"
                                        className="mt-1 block w-full"
                                        value={data.no_anggota}
                                        name="no_anggota"
                                        onChange={(e) =>
                                            setData(
                                                "no_anggota",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.no_anggota}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="no_hp" value="Nomor Hp" />

                            <TextInput
                                id="no_hp"
                                className="mt-1 block w-full"
                                value={data.no_hp}
                                name="no_hp"
                                onChange={(e) =>
                                    setData("no_hp", e.target.value)
                                }
                            />
                            <InputError message={errors.nik} className="mt-2" />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="nik" value="NIK" />

                            <TextInput
                                id="nik"
                                className="mt-1 block w-full"
                                value={data.nik}
                                name="nik"
                                onChange={(e) => setData("nik", e.target.value)}
                            />
                            <InputError message={errors.nik} className="mt-2" />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="id_tps" value="Tps" />
                            <TextInput
                                id="id_tps"
                                className="mt-1 block w-full"
                                value={data.id_tps}
                                name="id_tps"
                                onChange={(e) =>
                                    setData("id_tps", e.target.value)
                                }
                            />
                            <InputError message={errors.ktp} className="mt-2" />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="alamat" value="Alamat" />
                            <TextInput
                                id="alamat"
                                className="mt-1 block w-full"
                                value={data.alamat}
                                name="alamat"
                                onChange={(e) =>
                                    setData("alamat", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.alamat}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex">
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="kecamatan"
                                        value="Kecamatan"
                                    />
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
                            </div>
                            <div className="w-1/2 ml-3">
                                <div className="mb-4">
                                    <InputLabel
                                        htmlFor="kelurahan"
                                        value="Kelurahan"
                                    />
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
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <InputLabel htmlFor="rt" value="RT" />
                                    <TextInput
                                        id="rt"
                                        className="mt-1 block w-full"
                                        value={data.rt}
                                        name="rt"
                                        onChange={(e) =>
                                            setData("rt", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.rt}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="w-1/2 ml-3">
                                <div className="mb-4">
                                    <InputLabel htmlFor="rw" value="RW" />
                                    <TextInput
                                        id="rw"
                                        className="mt-1 block w-full"
                                        value={data.rw}
                                        name="rw"
                                        onChange={(e) =>
                                            setData("rw", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.rw}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                className="mt-1 block w-full"
                                value={data.password}
                                name="password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <PrimaryButton type="submit" className="mt-5">
                            Simpan
                        </PrimaryButton>
                        <SecondaryButton
                            className="flex items-center gap-4 mx-2"
                            onClick={closeModal}
                        >
                            Back
                        </SecondaryButton>
                    </form>
                    <div className="px-6 py-2">
                        <form
                            onSubmit={handleFileUpload}
                            className="p-3 px-0  border-t"
                        >
                            <h2 className="text-lg font-bold  mb-2 text-gray-900">
                                Unggah Data dari CSV/Excel
                            </h2>
                            <div className="mb-4">
                                <div className="flex items-center">
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
                                    <DangerButton
                                        type="submit"
                                        className="mt-1 w-[150px]"
                                    >
                                        Unggah CSV/Excel
                                    </DangerButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
