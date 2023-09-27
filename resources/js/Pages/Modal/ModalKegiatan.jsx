import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function ModalKegiatan({data}) {

    const [openingModal, setopeningModal] = useState(false);




    const openModal = () => {
        setopeningModal(true);
    };



    const closeModal = () => {
        setopeningModal(false);
    };

    

    return (
        <>
            <DangerButton onClick={openModal}>Lihat Detail</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className='p-6'>
                    <h2 className='font-bold'>Detail Kegiatan</h2>
                    <div className="grid grid-cols-10 gap-4 mt-6 mb-4 text-sm text-black">
                            <p className="font-medium col-span-2">Nama Kegiatan</p>
                            <p className="col-span-8">: {data.nama_kegiatan}</p>
                            <p className="font-medium col-span-2">Lokasi</p>
                            <p className="col-span-8">: {data.lokasi}</p>
                            <p className="font-medium col-span-2">Waktu</p>
                            <p className="col-span-8">: {data.waktu} WIB,{data.tanggal}</p>
                            <p className="font-medium col-span-2">Jabatan</p>
                            <p className="col-span-8">: {data.pic}</p>
                            <p className="font-medium col-span-2"> Notulensi </p>
                            <p className="col-span-8">: {data.notulensi}</p>                            
                        </div>
                <SecondaryButton onClick={closeModal}>Kembali</SecondaryButton>
                </div>
            </Modal>
        </>
    );
}
