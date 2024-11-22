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

const ModalTambahCalon = () => {
    const [openingModal, setopeningModal] = useState(false);
    // const navigate = useNavigate();
    const { data, setData, errors, post, get } = useForm({
        nama: "",
        no_urut: "",
        status: "",
    });

    const handleDateChange = (date) => {
        const formattedDate = date.toISOString().slice(0, 10);
        setData("tanggal", formattedDate);
    };

    const openModal = () => {
        setopeningModal(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("create.calon"));
        setData({
            nama: "",
            no_urut: "",
            status: "",
        });
        get(route("calon"));
    }

    const closeModal = () => {
        setopeningModal(false);
        setData({
            nama: "",
            no_urut: "",
            status: "",
        });
    };

    return (
        <div>
            <DangerButton onClick={openModal}>Tambah Calon</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="h-100">
                    <form onSubmit={handleSubmit} className="p-6">
                        <h2 className="text-lg font-bold mb-6 text-gray-900">
                            Tambah Calon Baru
                        </h2>
                        <div className="mb-4">
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

                        <div className="mb-4">
                            <InputLabel htmlFor="no_urut" value="Nomor Urut" />

                            <TextInput
                                id="no_urut"
                                className="mt-1 block w-full"
                                value={data.no_urut}
                                name="no_urut"
                                onChange={(e) =>
                                    setData("no_urut", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.no_urut}
                                className="mt-2"
                            />
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
                                onChange={(e) =>
                                    setData("status", e.target.value)
                                }
                                options={[
                                    { value: "", label: "Pilih Status" },
                                    { value: "Walikota", label: "Walikota" },
                                    { value: "Gubernur", label: "Gubernur" },
                                ]}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />

                            <InputError
                                message={errors.status}
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
                </div>
            </Modal>
        </div>
    );
};

export default ModalTambahCalon;
