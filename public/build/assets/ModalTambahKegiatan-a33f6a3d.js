import{r as b,W as f,j as a}from"./app-803e1986.js";import{D as r}from"./DangerButton-3ad15cb1.js";import{I as n}from"./InputError-79b6be1a.js";import{I as m}from"./InputLabel-4e4cb6c2.js";import{D as k}from"./DateInput-6c1c7670.js";import{M as v,S as N}from"./Modal-3aab370e.js";import{T as g}from"./TextInput-d8b9bfcd.js";import{S as c}from"./SelectInput-7d21a438.js";import"./transition-22dd5ea2.js";function F(){const[u,i]=b.useState(!1),{data:t,setData:s,errors:l,post:d}=f({nama_kegiatan:"",jam:"",tanggal:"",status:!1,jenis_pemilihan:""}),h=e=>{const p=e.toISOString().slice(0,10);s("tanggal",p)},j=()=>{i(!0)};function x(e){e.preventDefault(),d(route("create.kegiatan")),s({nama_kegiatan:"",jam:"",tanggal:"",status:"",jenis_pemilihan:""})}const o=()=>{i(!1),s({nama_kegiatan:"",jam:"",tanggal:"",status:"",jenis_pemilihan:""})};return a.jsxs(a.Fragment,{children:[a.jsx(r,{onClick:j,children:"Tambah Kegiatan"}),a.jsx(v,{show:u,onClose:o,children:a.jsx("div",{className:"h-100",children:a.jsxs("form",{onSubmit:x,className:"p-6",children:[a.jsx("h2",{className:"text-lg font-bold mb-6 text-gray-900",children:"Tambah Kegiatan Baru"}),a.jsxs("div",{className:"mb-4",children:[a.jsx(m,{htmlFor:"nama_kegiatan",value:"Nama Kegiatan"}),a.jsx(g,{id:"nama_kegiatan",className:"mt-1 block w-full",value:t.nama_kegiatan,name:"nama_kegiatan",onChange:e=>s("nama_kegiatan",e.target.value)}),a.jsx(n,{message:l.nama_kegiatan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(m,{htmlFor:"tanggal",value:"Tangggal"}),a.jsx(k,{name:"tanggal",id:"tanggal",selectedDate:t.tanggal?new Date(t.tanggal):null,onDateChange:h,maxDate:new Date,className:"mt-1 block w-full",dateFormat:"dd/MM/yyyy"}),a.jsx(n,{message:l.tanggal,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(m,{htmlFor:"jam",value:"Jam"}),a.jsx(g,{id:"jam",className:"mt-1 block w-full",value:t.jam,type:"time",name:"jam",placeholder:"00.00",onChange:e=>s("jam",e.target.value)}),a.jsx(n,{message:l.jam,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"status",className:"block text-sm font-medium text-gray-700",children:"Status"}),a.jsx(c,{id:"status",name:"status",value:t.status,onChange:e=>s("status",e.target.value),options:[{value:"",label:"Pilih Status"},{value:"1",label:"Aktif"},{value:"0",label:"Tidak Aktif"}],className:"mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"}),a.jsx(n,{message:l.status,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"jenis_pemilihan",className:"block text-sm font-medium text-gray-700",children:"Jenis Pemilihan"}),a.jsx(c,{id:"jenis_pemilihan",name:"jenis_pemilihan",value:t.jenis_pemilihan,onChange:e=>s("jenis_pemilihan",e.target.value),options:[{value:"",label:"Pilih Jenis Pemilihan"},{value:"Walikota",label:"Walikota"},{value:"Gubernur",label:"Gubernur"}],className:"mt-1 block w-full"}),a.jsx(n,{message:l.jenis_pemilihan,className:"mt-2"})]}),a.jsx(r,{type:"submit",className:"mt-5",children:"Simpan"}),a.jsx(N,{className:"flex items-center gap-2 mx-3",onClick:o,children:"Tutup"})]})})})]})}export{F as default};