import{r as b,W as j,j as a}from"./app-803e1986.js";import{D as m}from"./DangerButton-3ad15cb1.js";import{I as l}from"./InputError-79b6be1a.js";import{I as u}from"./InputLabel-4e4cb6c2.js";import"./DateInput-6c1c7670.js";import{M as f,S as g}from"./Modal-3aab370e.js";import{T as i}from"./TextInput-d8b9bfcd.js";import{S as v}from"./SelectInput-7d21a438.js";import"./transition-22dd5ea2.js";const y=()=>{const[c,n]=b.useState(!1),{data:e,setData:t,errors:o,post:d,get:x}=j({nama:"",no_urut:"",status:""}),h=()=>{n(!0)};function p(s){s.preventDefault(),d(route("create.calon")),t({nama:"",no_urut:"",status:""}),x(route("calon"))}const r=()=>{n(!1),t({nama:"",no_urut:"",status:""})};return a.jsxs("div",{children:[a.jsx(m,{onClick:h,children:"Tambah Calon"}),a.jsx(f,{show:c,onClose:r,children:a.jsx("div",{className:"h-100",children:a.jsxs("form",{onSubmit:p,className:"p-6",children:[a.jsx("h2",{className:"text-lg font-bold mb-6 text-gray-900",children:"Tambah Calon Baru"}),a.jsxs("div",{className:"mb-4",children:[a.jsx(u,{htmlFor:"nama",value:"Nama"}),a.jsx(i,{id:"nama",className:"mt-1 block w-full",value:e.nama,name:"nama",onChange:s=>t("nama",s.target.value)}),a.jsx(l,{message:o.nama,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(u,{htmlFor:"no_urut",value:"Nomor Urut"}),a.jsx(i,{id:"no_urut",className:"mt-1 block w-full",value:e.no_urut,name:"no_urut",onChange:s=>t("no_urut",s.target.value)}),a.jsx(l,{message:o.no_urut,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),a.jsx(v,{id:"status",name:"status",value:e.status,onChange:s=>t("status",s.target.value),options:[{value:"",label:"Pilih Status"},{value:"Walikota",label:"Walikota"},{value:"Gubernur",label:"Gubernur"}],className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}),a.jsx(l,{message:o.status,className:"mt-2"})]}),a.jsx(m,{type:"submit",className:"mt-5",children:"Simpan"}),a.jsx(g,{className:"flex items-center gap-2 mx-3",onClick:r,children:"Tutup"})]})})})]})};export{y as default};