import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import DateInput from '@/Components/DateInput';

export default function ModalEditKegiatan({ data_kegiatan }) {
  // Initialize a state variable to manage the modal's visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize the form data and error handling with useForm
  const { data, setData, errors, post } = useForm({
    nama: data_kegiatan.nama_kegiatan || '', // Initialize with the provided data
    lokasi: data_kegiatan.lokasi || '',
    jam: data_kegiatan.jam || '',
    tanggal: data_kegiatan.tanggal || '',
    pic: data_kegiatan.pic || '',
    notulensi: data_kegiatan.notulensi || '',
  });

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle date changes and format the date
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    setData('tanggal', formattedDate);
  };

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    post(route("update.kegiatan", data_kegiatan.id));
    setIsModalOpen(false);
}

  return (
    <>
      <PrimaryButton onClick={openModal}>Edit</PrimaryButton>

      <Modal show={isModalOpen} onClose={closeModal} className='h-70'>
        
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-lg font-bold mb-6 text-gray-900">
            Edit Kegiatan
          </h2>

          <div className="mb-4">
            <InputLabel htmlFor="nama" value="Nama Kegiatan" />

            <TextInput
              id="nama"
              className="mt-1 block w-full"
              value={data.nama}
              name="nama"
              onChange={(e) => setData('nama', e.target.value)}
            />
            <InputError message={errors.nama} className="mt-2" />
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


          {/* Add similar blocks for other form fields (lokasi, jam, tanggal, pic, notulensi) */}

          <div className="mb-4">
            <InputLabel htmlFor="tanggal" value="Tanggal" />
            <DateInput
              name="tanggal"
              id="tanggal"
              selectedDate={data.tanggal ? new Date(data.tanggal) : null}
              onDateChange={handleDateChange}
              maxDate={new Date()}
              className="mt-1 block w-full"
              dateFormat="dd/MM/yyyy"
            />
            <InputError message={errors.tanggal} className="mt-2" />
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
