import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import DateInput from '@/Components/DateInput';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';




export default function ModalTambahKegiatan() {
// console.log(errors);
    const [openingModal, setopeningModal] = useState(false);


    const { data, setData, errors, post } = useForm({
        nama: "",
        lokasi: "",
        jam: "",
        tanggal: "",
        pic: "",
        notulensi: "",
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
            nama: "",
            lokasi: "",
            jam: "",
            tanggal: "",
            pic: "",
            notulensi: "",
          });
    }



    const closeModal = () => {
        setopeningModal(false);
        setData({
            nama: "",
            lokasi: "",
            jam: "",
            tanggal: "",
            pic: "",
            notulensi: "",
          });
    };

    

    return (
        <>
            <DangerButton onClick={openModal}>Tambah Kegiatan</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
            <div className=" h-70">

                <form onSubmit={handleSubmit} className="p-6">
                
                <h2 className="text-lg font-bold mb-6 text-gray-900">
                    Tambah Kegiatan Baru
                    </h2>
                    
                        <div className='mb-4'>
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

                        <div className='mb-4'>
                            <InputLabel htmlFor="lokasi" value="Lokasi" />

                            <TextInput
                                id="lokasi"
                                className="mt-1 block w-full"
                                value={data.lokasi}
                                name="lokasi"
                                onChange={(e) =>
                                    setData("lokasi", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.lokasi}
                                className="mt-2"
                            />
                        </div>

                        <div className='mb-4'>
                            <InputLabel htmlFor="jam" value="Jam" />

                            <TextInput
                                id="jam"
                                className="mt-1 block w-full"
                                value={data.jam}
                                type="time"
                                name="jam"
                                placeholder="00.00"
                                onChange={(e) =>
                                    setData("jam", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.jam}
                                className="mt-2"
                            />
                        </div>

                        


                        <div className='mb-4'>
                                <InputLabel
                                    htmlFor="tanggal"
                                    value="Tangggal"
                                />
                                <DateInput
                                    name="tanggal"
                                    id="tanggal"
                                    selectedDate={
                                        data.tanggal
                                            ? new Date(data.tanggal)
                                            : null
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

                            <div className='mb-4'>
                            <InputLabel htmlFor="pic" value="PIC" />

                            <TextInput
                                id="pic"
                                className="mt-1 block w-full"
                                value={data.pic}
                                name="pic"
                                onChange={(e) =>
                                    setData("pic", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.pic}
                                className="mt-2"
                            />
                        </div>

                        <div className='mb-4'>
                            <InputLabel htmlFor="notulensi" value="Notulensi" />

                            <TextInput
                                id="notulensi"
                                className="mt-1 block w-full"
                                value={data.notulensi}
                                name="email"
                                onChange={(e) =>
                                    setData("notulensi", e.target.value)
                                }
                                placeholder="https://drive.google.com/file/..."
                            />
                            <InputError
                                message={errors.notulensi}
                                className="mt-2"
                            />
                        </div>



                      
                <PrimaryButton type="submit" className='mt-5'>Simpan</PrimaryButton>
                <SecondaryButton
                                className="flex items-center gap-4 mx-4"
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
