import{R as s,j as a,a as t}from"./app-8d9407b8.js";import{A as o}from"./AuthenticatedLayout-5f54b5d8.js";import{k as m}from"./Tooltip-be8d4f43.js";import{a as l,T as d}from"./TableData-f8ce37d2.js";import n from"./ModalTambahKegiatan-9d7ee3c8.js";import"./transition-f8d1987a.js";import"./ApplicationLogo-00d46bb1.js";import"./TextInput-c83064ab.js";import"./ModalAnggota-00da76c2.js";import"./Modal-e1fbceb5.js";import"./ModalKegiatan-014e6513.js";import"./InputError-21a7dc8f.js";import"./InputLabel-302469a3.js";import"./PrimaryButton-2bf895cb.js";function H({auth:r,data:e}){const i=s.useMemo(()=>[{Header:"Nama Kegiatan",accessor:"nama_kegiatan"},{Header:"Lokasi",accessor:"lokasi"},{Header:"Tanggal",accessor:"tanggal"},{Header:" ",Cell:l}]);return s.useMemo(()=>e,[e]),a.jsxs(o,{user:r.user,header:a.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Kegiatan"}),children:[a.jsx(t,{title:"Dashboard"}),a.jsx("div",{className:"max-w-7xl px-5 mx-auto sm:px-0 lg:px-0",children:a.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:a.jsx("div",{className:"min-h-screen bg-white text-gray-900",children:a.jsxs("main",{className:" sm:px-6 lg:px-8 pt-4",children:[a.jsx(m,{}),a.jsxs("div",{className:"mt-4",children:[a.jsx("div",{className:"pb-6",children:a.jsx(n,{})}),a.jsx("div",{className:"overflow-x-auto lg:overflow-x-hidden",children:a.jsx(d,{columns:i,data:e})})]})]})})})})]})}export{H as default};