import{r as p,W as v,j as a}from"./app-6dcb2f87.js";import{D as d}from"./DangerButton-7276c046.js";import{I as m}from"./InputError-da816dff.js";import{I as n}from"./InputLabel-c63b6ea2.js";import{M as N,S as f}from"./Modal-d448ef4b.js";import{P as b}from"./PrimaryButton-a348cfe5.js";import{T as r}from"./TextInput-95c1b305.js";import"./SelectInput-88e905b0.js";import"./transition-ef7b5821.js";function D(){const[x,o]=p.useState(!1),{data:t,setData:s,errors:l,post:c}=v({no_anggota:"",nama:"",no_hp:"",nik:"",id_tps:"",alamat:"",kecamatan:"",kelurahan:"",rt:"",rw:"",password:"",file:null}),h=e=>{s("file",e.target.files[0])},u=e=>{e.preventDefault(),c(route("import.anggota"))},g=()=>{o(!0)};function j(e){e.preventDefault(),c(route("create.anggota"))}const i=()=>{o(!1),s({no_anggota:"",nama:"",no_hp:"",nik:"",id_tps:"",alamat:"",kecamatan:"",kelurahan:"",rt:"",rw:"",password:""})};return a.jsxs(a.Fragment,{children:[a.jsx(d,{onClick:g,children:"Tambah Anggota"}),a.jsx(N,{show:x,onClose:i,children:a.jsxs("div",{className:" h-70",children:[a.jsxs("form",{onSubmit:j,className:"p-6",children:[a.jsx("div",{className:" flex justify-between items-center",children:a.jsx("h2",{className:"text-lg font-bold mb-6 text-gray-900",children:"Tambah Anggota Baru"})}),a.jsxs("div",{className:"flex mb-4",children:[a.jsx("div",{className:"w-1/2 mr-4",children:a.jsxs("div",{className:"",children:[a.jsx(n,{htmlFor:"nama",value:"Nama"}),a.jsx(r,{id:"nama",className:"mt-1 block w-full",value:t.nama,name:"nama",onChange:e=>s("nama",e.target.value)}),a.jsx(m,{message:l.nama,className:"mt-2"})]})}),a.jsx("div",{className:"w-1/2",children:a.jsxs("div",{className:"",children:[a.jsx(n,{htmlFor:"no_anggota",value:"Nomor Anggota"}),a.jsx(r,{id:"no_anggota",className:"mt-1 block w-full",value:t.no_anggota,name:"no_anggota",onChange:e=>s("no_anggota",e.target.value)}),a.jsx(m,{message:l.no_anggota,className:"mt-2"})]})})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"no_hp",value:"Nomor Hp"}),a.jsx(r,{id:"no_hp",className:"mt-1 block w-full",value:t.no_hp,name:"no_hp",onChange:e=>s("no_hp",e.target.value)}),a.jsx(m,{message:l.nik,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"nik",value:"NIK"}),a.jsx(r,{id:"nik",className:"mt-1 block w-full",value:t.nik,name:"nik",onChange:e=>s("nik",e.target.value)}),a.jsx(m,{message:l.nik,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"id_tps",value:"Tps"}),a.jsx(r,{id:"id_tps",className:"mt-1 block w-full",value:t.id_tps,name:"id_tps",onChange:e=>s("id_tps",e.target.value)}),a.jsx(m,{message:l.ktp,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"alamat",value:"Alamat"}),a.jsx(r,{id:"alamat",className:"mt-1 block w-full",value:t.alamat,name:"alamat",onChange:e=>s("alamat",e.target.value)}),a.jsx(m,{message:l.alamat,className:"mt-2"})]}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"w-1/2",children:a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"kecamatan",value:"Kecamatan"}),a.jsx(r,{id:"kecamatan",className:"mt-1 block w-full",value:t.kecamatan,name:"kecamatan",onChange:e=>s("kecamatan",e.target.value)}),a.jsx(m,{message:l.kecamatan,className:"mt-2"})]})}),a.jsx("div",{className:"w-1/2 ml-3",children:a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"kelurahan",value:"Kelurahan"}),a.jsx(r,{id:"kelurahan",className:"mt-1 block w-full",value:t.kelurahan,name:"kelurahan",onChange:e=>s("kelurahan",e.target.value)}),a.jsx(m,{message:l.kelurahan,className:"mt-2"})]})})]}),a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"w-1/2",children:a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"rt",value:"RT"}),a.jsx(r,{id:"rt",className:"mt-1 block w-full",value:t.rt,name:"rt",onChange:e=>s("rt",e.target.value)}),a.jsx(m,{message:l.rt,className:"mt-2"})]})}),a.jsx("div",{className:"w-1/2 ml-3",children:a.jsxs("div",{className:"mb-4",children:[a.jsx(n,{htmlFor:"rw",value:"RW"}),a.jsx(r,{id:"rw",className:"mt-1 block w-full",value:t.rw,name:"rw",onChange:e=>s("rw",e.target.value)}),a.jsx(m,{message:l.rw,className:"mt-2"})]})})]}),a.jsxs("div",{className:"mb-2",children:[a.jsx(n,{htmlFor:"password",value:"Password"}),a.jsx(r,{id:"password",type:"password",className:"mt-1 block w-full",value:t.password,name:"password",onChange:e=>s("password",e.target.value)}),a.jsx(m,{message:l.password,className:"mt-2"})]}),a.jsx(b,{type:"submit",className:"mt-5",children:"Simpan"}),a.jsx(f,{className:"flex items-center gap-4 mx-2",onClick:i,children:"Back"})]}),a.jsx("div",{className:"px-6 py-2",children:a.jsxs("form",{onSubmit:u,className:"p-3 px-0  border-t",children:[a.jsx("h2",{className:"text-lg font-bold  mb-2 text-gray-900",children:"Unggah Data dari CSV/Excel"}),a.jsx("div",{className:"mb-4",children:a.jsxs("div",{className:"flex items-center",children:[a.jsx("input",{type:"file",accept:".csv, .xlsx, .xls",onChange:h,className:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"}),a.jsx(m,{message:l.file,className:"mt-2"}),a.jsx(d,{type:"submit",className:"mt-1 w-[150px]",children:"Unggah CSV/Excel"})]})})]})})]})})]})}export{D as default};