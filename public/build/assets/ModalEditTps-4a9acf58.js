import{r as h,W as j,j as a}from"./app-ed1955b2.js";import{M as v,S as N}from"./Modal-b8aea4b1.js";import{T as n}from"./TextInput-5d67a091.js";import{P as u}from"./PrimaryButton-0aec1305.js";import{I as r}from"./InputLabel-84ea0db8.js";import{I as o}from"./InputError-0123740d.js";import"./DateInput-c693a3f7.js";import"./SelectInput-ddc9a77e.js";import"./transition-dd67513c.js";function I({data_tps:s}){const[p,c]=h.useState(!1),{data:l,setData:m,errors:t,post:k}=j({no_tps:s.no_tps||"",kelurahan:s.kelurahan||"",kecamatan:s.kecamatan||"",rw:s.rw||"",laki_laki:s.laki_laki||"",perempuan:s.perempuan||"",dpt:s.dpt||""}),d=()=>{c(!0)},i=()=>{c(!1)};function x(e){e.preventDefault(),k(route("update.tps",s.id)),c(!1)}return a.jsxs(a.Fragment,{children:[a.jsx(u,{onClick:d,children:"Edit"}),a.jsx(v,{show:p,onClose:i,className:"h-70",children:a.jsxs("form",{onSubmit:x,className:"p-6",children:[a.jsx("h2",{className:"text-lg font-bold mb-6 text-gray-900",children:"Edit Tps"}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"no_tps",value:"Nomor Tps"}),a.jsx(n,{id:"no_tps",className:"mt-1 block w-full",value:l.no_tps,name:"no_tps",onChange:e=>m("no_tps",e.target.value)}),a.jsx(o,{message:t.no_tps,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"kelurahan",value:"Kelurahan"}),a.jsx(n,{id:"kelurahan",className:"mt-1 block w-full",value:l.kelurahan,name:"kelurahan",onChange:e=>m("kelurahan",e.target.value)}),a.jsx(o,{message:t.kelurahan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"kecamatan",value:"Kecamatan"}),a.jsx(n,{id:"kecamatan",className:"mt-1 block w-full",value:l.kecamatan,name:"kecamatan",onChange:e=>m("kecamatan",e.target.value)}),a.jsx(o,{message:t.kecamatan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"rw",value:"Rw"}),a.jsx(n,{id:"rw",className:"mt-1 block w-full",value:l.rw,name:"rw",onChange:e=>m("rw",e.target.value)}),a.jsx(o,{message:t.kecamatan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"laki_laki",value:"Laki-Laki"}),a.jsx(n,{id:"laki_laki",className:"mt-1 block w-full",value:l.laki_laki,name:"laki_laki",onChange:e=>m("laki_laki",e.target.value)}),a.jsx(o,{message:t.kecamatan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"perempuan",value:"Perempuan"}),a.jsx(n,{id:"perempuan",className:"mt-1 block w-full",value:l.perempuan,name:"perempuan",onChange:e=>m("perempuan",e.target.value)}),a.jsx(o,{message:t.kecamatan,className:"mt-2"})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx(r,{htmlFor:"dpt",value:"Dpt"}),a.jsx(n,{id:"dpt",className:"mt-1 block w-full",value:l.dpt,name:"dpt",onChange:e=>m("dpt",e.target.value)}),a.jsx(o,{message:t.kecamatan,className:"mt-2"})]}),a.jsx(u,{type:"submit",className:"mt-5",children:"Simpan"}),a.jsx(N,{className:"flex items-center gap-4 mx-4",onClick:i,children:"Tutup"})]})})]})}export{I as default};