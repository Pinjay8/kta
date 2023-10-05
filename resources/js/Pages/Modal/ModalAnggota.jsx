import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function ModalAnggota({userdata}) {

    const [openingModal, setopeningModal] = useState(false);




    const openModal = () => {
        setopeningModal(true);
    };



    const closeModal = () => {
        setopeningModal(false);

        // reset();
    };

    return (
        <>
            <DangerButton onClick={openModal}>Detail Anggota</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className='p-6'>
                    <h2 className='font-bold'>Detail Anggota</h2>
                    <div className="grid grid-cols-10 gap-4 mt-6 mb-4 text-sm text-black">
                            <p className="font-medium col-span-2">Nama Lengkap</p>
                            <p className="col-span-8">: {userdata.nama}</p>
                            <p className="font-medium col-span-2">ID Anggota</p>
                            <p className="col-span-8">: {userdata.no_anggota}</p>
                            <p className="font-medium col-span-2">No HP</p>
                            <p className="col-span-8">: 0{userdata.no_hp}</p>
                            <p className="font-medium col-span-2">Jabatan</p>
                            <p className="col-span-8">: {userdata.jabatan}</p>
                            <p className="font-medium col-span-2">Jenis Kelamin</p>
                            <p className="col-span-8">: {userdata.jk === 1 ? 'laki laki' : 'perempuan'}</p>
                            <p className="font-medium col-span-2"> TTL </p>
                            <p className="col-span-8">: {userdata.tempat_lahir},{userdata.tgl_lahir}</p>
                            <p className="font-medium col-span-2">Alamat</p>
                            <p className="col-span-8">: Kelurahan {userdata.kelurahan} RT{userdata.rt} RW{userdata.rw}</p>
                            <p className="font-medium col-span-2">Detail KTA</p>
                            {userdata.kta ? (
                                <div style={{ width: '400px', height: '300px' }}>
                                <img src={`http://localhost:8000/storage/KTA/${userdata.kta}`}  alt="KTA" />
                                </div>
                            ):(
                                <p>invalid</p>
                            )}
                            


                           
                            
                        </div>
                <SecondaryButton onClick={closeModal}>Kembali</SecondaryButton>
                </div>

            </Modal>
            

        </>
    );
}
