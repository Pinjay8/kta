import{r as m,j as s}from"./app-ed1955b2.js";import{D as a}from"./DangerButton-b36c52de.js";import{M as p}from"./Modal-b8aea4b1.js";import{d as r}from"./Tooltip-3dd6192a.js";import t from"./ModalEditTps-4a9acf58.js";import"./index-21edd4d7.js";import"./TextInput-5d67a091.js";import"./DateInput-c693a3f7.js";import"./SelectInput-ddc9a77e.js";import"./transition-dd67513c.js";import"./index.esm-b1143c85.js";import"./PrimaryButton-0aec1305.js";import"./InputLabel-84ea0db8.js";import"./InputError-0123740d.js";function D({data:e}){const[c,l]=m.useState(!1),i=()=>{l(!0)},n=()=>{l(!1)};async function o(){r.Inertia.post(`/tps/delete/${e.id}`),l(!1)}return s.jsxs("div",{children:[s.jsx(a,{onClick:i,children:"Aksi"}),s.jsx(p,{show:c,onClose:n,children:s.jsxs("div",{className:"p-6",children:[s.jsxs("div",{className:" flex justify-between items-center",children:[s.jsx("h2",{className:"font-bold  text-xl ",children:"Detail Tps"}),s.jsx(a,{onClick:n,children:"x"})]}),s.jsxs("div",{className:"grid grid-cols-10 gap-3 mb-3 mt-3 text-sm text-black",children:[s.jsx("p",{className:"font-medium col-span-2",children:"Nomor Tps"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.no_tps]}),s.jsx("p",{className:"font-medium col-span-2",children:"Kelurahan"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.kelurahan]}),s.jsx("p",{className:"font-medium col-span-2",children:"Kecamatan"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.kecamatan]}),s.jsx("p",{className:"font-medium col-span-2",children:"RW"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.rw]}),s.jsx("p",{className:"font-medium col-span-2",children:"Laki-laki"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.laki_laki]}),s.jsx("p",{className:"font-medium col-span-2",children:"Perempuan"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.perempuan]}),s.jsx("p",{className:"font-medium col-span-2",children:"DPT"}),s.jsxs("p",{className:"col-span-8",children:[": ",e.dpt]})]}),s.jsxs("div",{className:"mt-5 mb-3 flex justify-end",children:[s.jsx(t,{data_tps:e}),s.jsxs(a,{className:"ml-2",onClick:o,children:[" ","Hapus"," "]})]})]})})]})}export{D as default};