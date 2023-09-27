import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function ModalTambahAnggota() {

    const [openingModal, setopeningModal] = useState(false);


    const { data, setData, errors, post } = useForm({
        nama: "",
        alamat: "",
        ktp: "",
        pekerjaan: "",
        telepon: "",
        email: "",
        nama_kuasa: "",
        alamat_kuasa: "",
        telepon_kuasa: "",
        email_kuasa: "",
        alasan: "",
        kasus: "",
    });

    const openModal = () => {
        setopeningModal(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        // post(route("store.pengajuan"));
    }



    const closeModal = () => {
        setopeningModal(false);
        setData({
            nama: "",
            alamat: "",
            ktp: "",
            pekerjaan: "",
            telepon: "",
            email: "",
            nama_kuasa: "",
            alamat_kuasa: "",
            telepon_kuasa: "",
            email_kuasa: "",
            alasan: "",
            kasus: "",
          });
    };

    

    return (
        <>
            <DangerButton onClick={openModal}>Tambah Anggota</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <form onSubmit={handleSubmit} className="p-6">
                
                    
                    
                        <div>
                            <InputLabel htmlFor="nama" value="Nama Kegiatan" />

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

                        <div>
                            <InputLabel htmlFor="alamat" value="Lokasi" />

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

                        <div>
                            <InputLabel htmlFor="jam" value="Jam" />

                            <TextInput
                                id="jam"
                                type="number"
                                className="mt-1 block w-full"
                                value={data.ktp}
                                name="ktp"
                                onChange={(e) => setData("ktp", e.target.value)}
                            />
                            <InputError message={errors.ktp} className="mt-2" />
                            {/* {errors.tahun && <div>{errors.tahun}</div>} */}
                        </div>

                        <div>
                            <InputLabel htmlFor="tanggal" value="Tanggal" />

                            <TextInput
                                id="tanggal"
                                className="mt-1 block w-full"
                                value={data.pekerjaan}
                                name="pekerjaan"
                                onChange={(e) =>
                                    setData("pekerjaan", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.pekerjaan}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="telepon" value="Telepon" />

                            <TextInput
                                id="telepon"
                                className="mt-1 block w-full"
                                value={data.telepon}
                                name="telepon"
                                onChange={(e) =>
                                    setData("telepon", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.telepon}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="E-mail" />

                            <TextInput
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                name="email"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>



                      
                <PrimaryButton type="submit" className='mt-5'>Simpan</PrimaryButton>
                <SecondaryButton
                                className="flex items-center gap-4 mx-4"
                                onClick={closeModal}
                            >
                                Back
                            </SecondaryButton>
                </form>



            </Modal>
        </>
    );
}
