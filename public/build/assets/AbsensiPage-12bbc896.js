import{R as s,j as e,a as l}from"./app-94055713.js";import{A as p}from"./AuthenticatedLayout-59ebc8dd.js";import"./ReactToastify-9d8cdc4a.js";import"./index-e0fe360f.js";import"./react-toastify.esm-a1167914.js";import{T as d}from"./TableData-743ef3e4.js";import{D as c}from"./DangerButton-ce96bd2f.js";import"./TextInput-1d0ab54f.js";import"./SelectInput-dc16def1.js";import"./index.esm-6996809e.js";import"./transition-4b1ef61e.js";import"./ApplicationLogo-ab250977.js";import"./DateInput-a6a675f5.js";import"./index-e77be42f.js";import"./index-e18d2b3a.js";import"./Tooltip-ac7e7f97.js";import"./ModalAnggota-51bcfc7a.js";import"./Modal-670bd12c.js";import"./ModalEditAnggota-3f87482d.js";import"./PrimaryButton-d8e98289.js";import"./InputLabel-c2a60a47.js";import"./InputError-06bb12aa.js";import"./ModalEditKegiatan-7a7ca6bf.js";import"./ModalTambahAnggota-45f8dda5.js";import"./ModalTambahKegiatan-0a44a005.js";import"./ModalCalon-6fc61d59.js";import"./ModalEditCalon-021d18cd.js";import"./ModalTambahCalon-5118cba8.js";import"./ModalTps-87f0bdea.js";import"./ModalEditTps-6cd95ca2.js";import"./ModalTambahTps-88a19a11.js";function q({auth:o,data:t,nama_kegiatan:i}){console.log("data =",t);const m=s.useMemo(()=>[{Header:"ID Anggota",accessor:"no_anggota"},{Header:"Nama Lengkap",accessor:"nama"},{Header:"Jenis Kelamin",accessor:"jk",Cell:({value:r})=>r===1?"laki-laki":"perempuan"},{Header:"Jabatan",accessor:"jabatan"},{Header:"Waktu Absensi",accessor:"created_at",Cell:({value:r})=>{const a=new Date(r);return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()} ${a.getHours()}:${a.getMinutes()}`}}]),n=s.useMemo(()=>t,[t]);return e.jsxs(p,{user:o.user,header:e.jsxs("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:["Data Absensi ",i]}),children:[e.jsx(l,{title:"Dashboard"}),e.jsx("div",{className:"max-w-7xl  px-5 mx-auto sm:px-0 lg:px-0",children:e.jsx("div",{className:" bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"min-h-screen  text-gray-900",children:e.jsx("main",{className:" sm:px-6 lg:px-8 pt-4",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"pb-6",children:e.jsx(c,{children:"Download Data"})}),e.jsx("div",{className:"overflow-x-auto lg:overflow-x-hidden",children:e.jsx(d,{columns:m,data:n})})]})})})})})]})}export{q as default};