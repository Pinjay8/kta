import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import DateInput from "@/Components/DateInput";
import SelectInput from "@/Components/SelectInput";

export default function ModalEditAnggota({ data_anggota }) {
    // Initialize a state variable to manage the modal's visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initialize the form data and error handling with useForm
    const { data, setData, errors, post, put } = useForm({
        no_anggota: data_anggota.no_anggota || "", // Initialize with the provided data
        nama: data_anggota.nama || "",
        no_hp: data_anggota.no_hp || "",
        nik: data_anggota.nik || "",
        id_tps: data_anggota.id_tps || "",
        alamat: data_anggota.alamat || "",
        kecamatan: data_anggota.kecamatan || "",
        kelurahan: data_anggota.kelurahan || "",
        status: data_anggota.status || "",
    });

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        console.log(data);
        post(route("update.anggota", data_anggota.id));
        setIsModalOpen(false);
    }
    return (
        <>
            <PrimaryButton onClick={openModal}>Edit</PrimaryButton>
            <Modal show={isModalOpen} onClose={closeModal} className="h-70">
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-lg font-bold mb-6 text-gray-900">
                        Edit Anggota
                    </h2>

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
                                        setData("no_anggota", e.target.value)
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
                            onChange={(e) => setData("no_hp", e.target.value)}
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

                    <div className="grid grid-cols-2 gap-2">
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

                    <div className="mb-4">
                        <label
                            htmlFor="status"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Status
                        </label>

                        <SelectInput
                            id="status"
                            name="status"
                            value={data.status}
                            onChange={(e) => setData("status", e.target.value)}
                            options={[
                                { value: "", label: "Pilih Status" },
                                { value: "Walikota", label: "Walikota" },
                                { value: "Gubernur", label: "Gubernur" },
                            ]}
                            className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        />
                    </div>
                    <PrimaryButton type="submit" className="mt-5">
                        Simpan
                    </PrimaryButton>
                    <SecondaryButton
                        className="flex items-center gap-4 mx-4"
                        onClick={closeModal}
                    >
                        Tutup
                    </SecondaryButton>
                </form>
            </Modal>
        </>
    );
}
