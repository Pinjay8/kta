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

export default function ModalTambahKegiatan() {
    // console.log(errors);
    const [openingModal, setopeningModal] = useState(false);

    const { data, setData, errors, post } = useForm({
        nama_kegiatan: "",
        jam: "",
        tanggal: "",
        status: false,
        jenis_pemilihan: "",
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
        post(route("create.kegiatan"));
        setData({
            nama_kegiatan: "",
            jam: "",
            tanggal: "",
            status: "",
            jenis_pemilihan: "",
        });
    }

    const closeModal = () => {
        setopeningModal(false);
        setData({
            nama_kegiatan: "",
            jam: "",
            tanggal: "",
            status: "",
            jenis_pemilihan: "",
        });
    };

    return (
        <>
            <DangerButton onClick={openModal}>Tambah Kegiatan</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className="h-100">
                    <form onSubmit={handleSubmit} className="p-6">
                        <h2 className="text-lg font-bold mb-6 text-gray-900">
                            Tambah Kegiatan Baru
                        </h2>
                        <div className="mb-4">
                            <InputLabel
                                htmlFor="nama_kegiatan"
                                value="Nama Kegiatan"
                            />

                            <TextInput
                                id="nama_kegiatan"
                                className="mt-1 block w-full"
                                value={data.nama_kegiatan}
                                name="nama_kegiatan"
                                onChange={(e) =>
                                    setData("nama_kegiatan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.nama_kegiatan}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="tanggal" value="Tangggal" />
                            <DateInput
                                name="tanggal"
                                id="tanggal"
                                selectedDate={
                                    data.tanggal ? new Date(data.tanggal) : null
                                }
                                onDateChange={handleDateChange}
                                maxDate={new Date()}
                                className="mt-1 block w-full"
                                dateFormat="dd/MM/yyyy"
                            />

                            <InputError
                                message={errors.tanggal}
                                className="mt-2"
                            />
                        </div>

                        <div className="mb-4">
                            <InputLabel htmlFor="jam" value="Jam" />

                            <TextInput
                                id="jam"
                                className="mt-1 block w-full"
                                value={data.jam}
                                type="time"
                                name="jam"
                                placeholder="00.00"
                                onChange={(e) => setData("jam", e.target.value)}
                            />
                            <InputError message={errors.jam} className="mt-2" />
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
                                    { value: "1", label: "Aktif" },
                                    { value: "0", label: "Tidak Aktif" },
                                ]}
                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            />

                            {/* Contoh menampilkan pesan error jika ada */}
                            <InputError
                                message={errors.status}
                                className="mt-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="jenis_pemilihan"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Jenis Pemilihan
                            </label>

                            <SelectInput
                                id="jenis_pemilihan"
                                name="jenis_pemilihan"
                                value={data.jenis_pemilihan}
                                onChange={(e) =>
                                    setData("jenis_pemilihan", e.target.value)
                                }
                                options={[
                                    {
                                        value: "",
                                        label: "Pilih Jenis Pemilihan",
                                    },
                                    { value: "Walikota", label: "Walikota" },
                                    { value: "Gubernur", label: "Gubernur" },
                                ]}
                                className="mt-1 block w-full"
                            />

                            {/* Contoh menampilkan pesan error jika ada */}
                            <InputError
                                message={errors.jenis_pemilihan}
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
        </>
    );
}
