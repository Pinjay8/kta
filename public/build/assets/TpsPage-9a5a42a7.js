import{R as s,j as e,a as m}from"./app-2357e9aa.js";import{A as i}from"./AuthenticatedLayout-5cfcb5ba.js";import"./ReactToastify-c5e820de.js";import"./index-932ae146.js";import{c as p,T as l}from"./TableData-58a0cc62.js";import"./index.esm-c790ecfb.js";import"./transition-b62f9e9b.js";import"./ApplicationLogo-a1a0b9c9.js";import"./DateInput-2aa83f36.js";import"./index-ab567e1e.js";import"./TextInput-43a2c7ad.js";import"./Tooltip-3eb88b48.js";import"./ModalAnggota-f04db918.js";import"./DangerButton-ce690960.js";import"./Modal-0a3bc0e9.js";import"./ModalEditAnggota-37a480a4.js";import"./PrimaryButton-4eff62b6.js";import"./InputLabel-10d1f24d.js";import"./InputError-79abc355.js";import"./SelectInput-57fefecc.js";import"./ModalEditKegiatan-58e1893d.js";import"./ModalTambahAnggota-4c7a7189.js";import"./ModalTambahKegiatan-dc1e56d3.js";import"./ModalCalon-1dd4bd81.js";import"./ModalEditCalon-aeb62055.js";import"./ModalTambahCalon-4c8091ed.js";import"./ModalTps-a98a2910.js";import"./ModalEditTps-b1e5c533.js";import"./ModalTambahTps-0fccb789.js";function F({auth:a,data:r}){const t=s.useMemo(()=>[{Header:"Nomor Tps",accessor:"no_tps"},{Header:"Kelurahan",accessor:"kelurahan"},{Header:"Kecamatan",accessor:"kecamatan"},{Header:"Aksi",Cell:p}]),o=s.useMemo(()=>r,[r]);return e.jsxs(i,{user:a.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Tps"}),children:[e.jsx(m,{title:"Dashboard"}),e.jsx("div",{className:"max-w-7xl  px-5 mx-auto sm:px-0 lg:px-0",children:e.jsx("div",{className:" bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"min-h-screen  text-gray-900",children:e.jsx("main",{className:" sm:px-6 lg:px-8",children:e.jsxs("div",{className:"mt-4",children:[e.jsx("div",{className:"pb-6"}),e.jsx("div",{className:"overflow-x-auto lg:overflow-x-hidden",children:e.jsx(l,{columns:t,data:o,type:"tps"})})]})})})})})]})}export{F as default};