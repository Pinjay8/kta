import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { useForm } from '@inertiajs/react';

export default function ModalTambahAnggota() {

    const [openingModal, setopeningModal] = useState(false);


    const { data, setData, errors, post } = useForm({
        nama: "",
        no_telp: "",
        nik: "",
        tempat_lahir: "",
        tgl_lahir: "",
        jk: "",
        jabatan: "",
        pekerjaan: "",
        alamat: "",
        rt: "",
        rw: "",
        foto_profil: null,
    });

    const options=[
      {label: 'Pilih Paket', value: '', disabled: true},
      {label: 'Cacaban', value: 'cacaban'},
      {label: 'Gelangan', value: 'gelangan'},
      {label: 'Kemirirejo', value: 'Kemirirejo'},
      {label: 'Magelang', value: 'magelang'},
      {label: 'Panjang', value: 'panjang'},
      {label: 'Rejo Utara', value: 'rejo_utara'},
  ]

    const openModal = () => {
        setopeningModal(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        post(route("create.anggota"));
    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    //     setData("foto_profil", file); // Update the file state
    //   };


        


    const closeModal = () => {
        setopeningModal(false);
        setData({
            nama: "",
            no_telp: "",
            nik: "",
            tempat_lahir: "",
            tgl_lahir: "",
            jk: "",
            jabatan: "",
            pekerjaan: "",
            alamat: "",
            rt: "",
            rw: "",
            foto_profil: null,
          });
    };

    

    return (
        <>
            <DangerButton onClick={openModal}>Tambah Anggota</DangerButton>

            <Modal show={openingModal} onClose={closeModal}>
                <div className=" h-70">
                    
                <form onSubmit={handleSubmit} className="p-6">
                
                <h2 className="text-lg font-bold mb-6 text-gray-900">
                    Tambah Anggota Baru
                    </h2>
                    
                <div className='mb-4'>
                            <InputLabel htmlFor="nama" value="Nama Lengkap" />

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
                            <InputLabel htmlFor="no_telp" value="No Telepon" />

                            <TextInput
                                id="no_telp"
                                className="mt-1 block w-full"
                                value={data.no_telp}
                                name="no_telp"
                                onChange={(e) =>
                                    setData("no_telp", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.no_telp}
                                className="mt-2"
                            />
                        </div>
                        <div className='mb-4'>
                            <InputLabel htmlFor="nik" value="NIK" />

                            <TextInput
                                id="nik"
                                className="mt-1 block w-full"
                                value={data.nik}
                                name="nik"
                                onChange={(e) =>
                                    setData("nik", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.nik}
                                className="mt-2"
                            />
                        </div>


                        <div className="flex mb-4">
  <div className="w-1/2 mr-4">
    <InputLabel htmlFor="tempat_lahir" value="Tempat Lahir" />
    <TextInput
      id="tempat_lahir"
      className="mt-1 block w-full"
      value={data.tempat_lahir}
      name="tempat_lahir"
      onChange={(e) => setData("tempat_lahir", e.target.value)}
    />
    <InputError message={errors.ktp} className="mt-2" />
  </div>
  <div className="w-1/2">
    <InputLabel htmlFor="tgl_lahir" value="Tanggal Lahir"/>
    <TextInput
      id="tgl_lahir"
      className="mt-1 block w-full"
      value={data.tgl_lahir}
      name="tgl_lahir"
      onChange={(e) => setData("tgl_lahir", e.target.value)}
    />
    <InputError message={errors.tgl_lahir} className="mt-2" />
  </div>
</div>

<div className="flex">
  <div className="w-1/4 pr-2">
    <div className="mb-4">
      <InputLabel htmlFor="jk" value="Jenis Kelamin" />
      <TextInput
        id="jk"
        className="mt-1 block w-full"
        value={data.jk}
        name="jk"
        onChange={(e) => setData("jk", e.target.value)}
      />
      <InputError message={errors.jk} className="mt-2" />
    </div>
  </div>
</div>
<div className="flex">
  <div className="w-1/2 pr-2">
    <div className="mb-4">
      <InputLabel htmlFor="jabatan" value="Jabatan" />
      <TextInput
        id="jabatan"
        className="mt-1 block w-full"
        value={data.jabatan}
        name="jabatan"
        onChange={(e) => setData("jabatan", e.target.value)}
      />
      <InputError message={errors.jabatan} className="mt-2" />
    </div>
  </div>
  <div className="w-1/2 pl-2">
    <div className="mb-4">
      <InputLabel htmlFor="pekerjaan" value="Pekerjaan" />
      <TextInput
        id="pekerjaan"
        className="mt-1 block w-full"
        value={data.pekerjaan}
        name="pekerjaan"
        onChange={(e) => setData("pekerjaan", e.target.value)}
      />
      <InputError message={errors.pekerjaan} className="mt-2" />
    </div>
  </div>
</div>

                        <div className="flex">
                        <div className="mb-4">
                        <InputLabel htmlFor="alamat" value="Alamat" />

                        <SelectInput 
                    options={options} 
                    id="alamat" 
                    name="alamat"
                    onChange={(e) => setData("alamat", e.target.value)}
                    defaultValue=""
                />
                </div>
  <div className="w-1/4 px-2">
    <div className="mb-4">
      <InputLabel htmlFor="rt" value="RT" />
      <TextInput
        id="rt"
        className="mt-1 block w-full"
        value={data.rt}
        name="rt"
        onChange={(e) => setData("rt", e.target.value)}
      />
      <InputError message={errors.rt} className="mt-2" />
    </div>
  </div>
  <div className="w-1/4 pl-2">
    <div className="mb-4">
      <InputLabel htmlFor="rw" value="RW" />
      <TextInput
        id="rw"
        className="mt-1 block w-full"
        value={data.rw}
        name="rw"
        onChange={(e) => setData("rw", e.target.value)}
      />
      <InputError message={errors.rw} className="mt-2" />
    </div>
  </div>
</div>




                      
                <PrimaryButton type="submit" className='mt-5'>Simpan</PrimaryButton>
                <SecondaryButton
                                className="flex items-center gap-4 mx-4"
                                onClick={closeModal}
                            >
                                Back
                            </SecondaryButton>
                </form>
                </div>


            </Modal>
        </>
    );
}
