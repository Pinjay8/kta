import{r as c,j as s}from"./app-8d9407b8.js";import{D as i,M as t,S as m}from"./Modal-e1fbceb5.js";import"./TextInput-c83064ab.js";import"./transition-f8d1987a.js";function h({data:a}){const[n,e]=c.useState(!1),o=()=>{e(!0)},l=()=>{e(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(i,{onClick:o,children:"Lihat Detail"}),s.jsx(t,{show:n,onClose:l,children:s.jsxs("div",{className:"p-6",children:[s.jsx("h2",{className:"font-bold",children:"Detail Kegiatan"}),s.jsxs("div",{className:"grid grid-cols-10 gap-4 mt-6 mb-4 text-sm text-black",children:[s.jsx("p",{className:"font-medium col-span-2",children:"Nama Kegiatan"}),s.jsxs("p",{className:"col-span-8",children:[": ",a.nama_kegiatan]}),s.jsx("p",{className:"font-medium col-span-2",children:"Lokasi"}),s.jsxs("p",{className:"col-span-8",children:[": ",a.lokasi]}),s.jsx("p",{className:"font-medium col-span-2",children:"Waktu"}),s.jsxs("p",{className:"col-span-8",children:[": ",a.waktu," WIB,",a.tanggal]}),s.jsx("p",{className:"font-medium col-span-2",children:"Jabatan"}),s.jsxs("p",{className:"col-span-8",children:[": ",a.pic]}),s.jsx("p",{className:"font-medium col-span-2",children:" Notulensi "}),s.jsxs("p",{className:"col-span-8",children:[": ",a.notulensi]})]}),s.jsx(m,{onClick:l,children:"Kembali"})]})})]})}export{h as default};