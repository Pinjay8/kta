import{r,j as s}from"./app-6dcb2f87.js";import{d as c}from"./index-b122f809.js";import{M as m}from"./Modal-d448ef4b.js";import{D as a}from"./DangerButton-7276c046.js";import d from"./ModalEditCalon-a06d1aed.js";import"./TextInput-95c1b305.js";import"./Tooltip-e486f2fd.js";import"./DateInput-5ddf290d.js";import"./SelectInput-88e905b0.js";import"./transition-ef7b5821.js";import"./PrimaryButton-a348cfe5.js";import"./InputLabel-c63b6ea2.js";import"./InputError-da816dff.js";import"./index.esm-2ebb5685.js";function D({data:e}){const[t,o]=r.useState(!1),n=()=>{o(!0)},l=()=>{o(!1)};async function i(){c.Inertia.post(`/calon/delete/${e.id}`),o(!1)}return s.jsxs(s.Fragment,{children:[s.jsx(a,{onClick:n,children:"Aksi"}),s.jsx(m,{show:t,onClose:l,children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:" flex justify-between items-center",children:[s.jsx("h2",{className:"font-bold  text-xl ",children:"Detail Calon"}),s.jsx(a,{onClick:l,children:"x"})]}),s.jsxs("div",{className:"grid grid-cols-10 gap-3 mb-3 mt-3 text-sm text-black",children:[s.jsx("p",{className:"font-medium col-span-2",children:"Nama"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.nama]}),s.jsx("p",{className:"font-medium col-span-2",children:"Nomor Urut"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.no_urut]}),s.jsx("p",{className:"font-medium col-span-2",children:"Status"}),s.jsxs("p",{className:"col-span-8",children:[":"," ",e.status=="Walikota"?"Walikota":"Gubernur"]})]}),s.jsxs("div",{className:"mt-5 mb-3 flex justify-end",children:[s.jsx(d,{data_calon:e}),s.jsxs(a,{className:"ml-2",onClick:i,children:[" ","Hapus"," "]})]})]})})]})}export{D as default};