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

export default function ModalEditCalon({ data_calon }) {
    // Initialize a state variable to manage the modal's visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initialize the form data and error handling with useForm
    const { data, setData, errors, post } = useForm({
        nama: data_calon.nama || "", // Initialize with the provided data
        no_urut: data_calon.no_urut || "",
        status: data_calon.status || "",
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
        post(route("update.calon", data_calon.id));
        setIsModalOpen(false);
    }
    return (
        <>
            <PrimaryButton onClick={openModal}>Edit</PrimaryButton>
            <Modal show={isModalOpen} onClose={closeModal} className="h-70">
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-lg font-bold mb-6 text-gray-900">
                        Edit Calon
                    </h2>

                    <div className="mb-4">
                        <InputLabel htmlFor="nama" value="Nama" />

                        <TextInput
                            id="nama"
                            className="mt-1 block w-full"
                            value={data.nama}
                            name="nama"
                            onChange={(e) => setData("nama", e.target.value)}
                        />
                        <InputError message={errors.nama} className="mt-2" />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="no_urut" value="Nomor Urut" />

                        <TextInput
                            id="no_urut"
                            className="mt-1 block w-full"
                            value={data.no_urut}
                            name="no_urut"
                            onChange={(e) => setData("no_urut", e.target.value)}
                        />
                        <InputError message={errors.no_urut} className="mt-2" />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="status" value="Status" />

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

                        <InputError message={errors.status} className="mt-2" />
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
