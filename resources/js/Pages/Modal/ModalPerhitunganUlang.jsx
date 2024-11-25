import React from "react";
import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import { useForm } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

export default function ModalPerhitunganUlang({ data_perhitungan }) {
    const [openingModal, setopeningModal] = useState(false);

    // Inisialisasi form dengan nilai default dari data yang diterima
    const { data, setData, errors, post } = useForm({
        id_anggota: data_perhitungan.id_anggota || "",
        id_kegiatan: data_perhitungan.id_kegiatan || "",
        reason: data_perhitungan.reason || "",
        is_accepted: data_perhitungan.is_accepted || "",
    });

    // Fungsi untuk membuka modal
    const openModal = () => {
        setopeningModal(true);
    };

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setopeningModal(false);
    };

    // Fungsi untuk submit data ketika "Terima" atau "Tolak" ditekan
    const handleSubmit = (isAccepted) => {
        // Set nilai is_accepted berdasarkan aksi
        setData("is_accepted", isAccepted);

        // Kirim data ke server dengan nilai is_accepted yang benar
        Inertia.post(`/perhitungan-ulang/update/${data_perhitungan.id}`, {
            is_accepted: isAccepted,
        });

        // Tutup modal setelah pengiriman
        setopeningModal(false);
    };

    return (
        <div className="flex gap-2">
            <DangerButton onClick={() => handleSubmit(true)}>
                Terima
            </DangerButton>
            <DangerButton onClick={() => handleSubmit(false)}>
                Tolak
            </DangerButton>
        </div>
    );
}
