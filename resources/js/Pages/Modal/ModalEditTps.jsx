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

export default function ModalEditTps({ data_tps }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initialize the form data and error handling with useForm
    const { data, setData, errors, post } = useForm({
        no_tps: data_tps.no_tps || "", // Initialize with the provided data
        kelurahan: data_tps.kelurahan || "",
        kecamatan: data_tps.kecamatan || "",
        rw: data_tps.rw || "",
        laki_laki: data_tps.laki_laki || "",
        perempuan: data_tps.perempuan || "",
        dpt: data_tps.dpt || "",
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
        post(route("update.tps", data_tps.id));
        setIsModalOpen(false);
    }

    return (
        <>
            <PrimaryButton onClick={openModal}>Edit</PrimaryButton>
            <Modal show={isModalOpen} onClose={closeModal} className="h-70">
                <form onSubmit={handleSubmit} className="p-6">
                    <h2 className="text-lg font-bold mb-6 text-gray-900">
                        Edit Tps
                    </h2>

                    <div className="mb-4">
                        <InputLabel htmlFor="no_tps" value="Nomor Tps" />

                        <TextInput
                            id="no_tps"
                            className="mt-1 block w-full"
                            value={data.no_tps}
                            name="no_tps"
                            onChange={(e) => setData("no_tps", e.target.value)}
                        />
                        <InputError message={errors.no_tps} className="mt-2" />
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

                    <div className="mb-4">
                        <InputLabel htmlFor="rw" value="Rw" />

                        <TextInput
                            id="rw"
                            className="mt-1 block w-full"
                            value={data.rw}
                            name="rw"
                            onChange={(e) => setData("rw", e.target.value)}
                        />
                        <InputError
                            message={errors.kecamatan}
                            className="mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="laki_laki" value="Laki-Laki" />

                        <TextInput
                            id="laki_laki"
                            className="mt-1 block w-full"
                            value={data.laki_laki}
                            name="laki_laki"
                            onChange={(e) =>
                                setData("laki_laki", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.kecamatan}
                            className="mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="perempuan" value="Perempuan" />

                        <TextInput
                            id="perempuan"
                            className="mt-1 block w-full"
                            value={data.perempuan}
                            name="perempuan"
                            onChange={(e) =>
                                setData("perempuan", e.target.value)
                            }
                        />
                        <InputError
                            message={errors.kecamatan}
                            className="mt-2"
                        />
                    </div>

                    <div className="mb-4">
                        <InputLabel htmlFor="dpt" value="Dpt" />

                        <TextInput
                            id="dpt"
                            className="mt-1 block w-full"
                            value={data.dpt}
                            name="dpt"
                            onChange={(e) => setData("dpt", e.target.value)}
                        />
                        <InputError
                            message={errors.kecamatan}
                            className="mt-2"
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
