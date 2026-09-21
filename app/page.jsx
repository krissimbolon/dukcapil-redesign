"use client";

import { useMemo, useState } from "react";
import {
  Search, Menu, X, ChevronRight, ArrowLeft, MapPin, FileText, Users,
  Building2, Globe2, CircleHelp, ExternalLink, CheckCircle2, Clock3,
  ShieldCheck, Landmark, Megaphone, BookOpen, Phone, Mail
} from "lucide-react";

const official = "https://kependudukancapil.jakarta.go.id/";

const services = [
  { id:"KEL-001", title:"Kartu Tanda Penduduk Elektronik (E-KTP)", category:"Pendaftaran Penduduk", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEL-002", title:"Kartu Keluarga (KK)", category:"Pendaftaran Penduduk", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEL-003", title:"Kartu Identitas Anak (KIA)", category:"Pendaftaran Penduduk", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEL-004", title:"Akta Kelahiran", category:"Pencatatan Sipil", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEL-005", title:"Akta Kematian", category:"Pencatatan Sipil", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEL-006", title:"Pindah Datang", category:"Pendaftaran Penduduk", location:"Kelurahan", channel:"Kelurahan / Online", group:"Kelurahan" },
  { id:"KEC-001", title:"Pencatatan Kelahiran WNI Terintegrasi dengan Fasilitas Kesehatan", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-002", title:"Pencatatan Kematian WNI Terintegrasi dengan Fasilitas Kesehatan", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-003", title:"Pencatatan Perkawinan WNI Terintegrasi dengan Rumah Ibadah", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-004", title:"Pencatatan Perkawinan WNI", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-005", title:"Pencatatan Perceraian WNI", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-006", title:"Perpindahan Penduduk WNI ke Luar Daerah", category:"Pendaftaran Penduduk", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-007", title:"Pendataan Penduduk Nonpermanen", category:"Pendaftaran Penduduk", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-008", title:"Penerbitan Kembali Kutipan Akta Pencatatan Sipil Karena Rusak/Hilang", category:"Pencatatan Sipil", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"KEC-009", title:"Legalisasi Dokumen Kependudukan Non Digital / Belum TTE", category:"Dokumen Kependudukan", location:"Kecamatan", channel:"Kecamatan / Online", group:"Kecamatan" },
  { id:"SUD-001", title:"Pencatatan Biodata WNI dalam Wilayah NKRI/Dari Luar Wilayah NKRI", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-002", title:"Penerbitan Kartu Keluarga Baru WNI", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-003", title:"Penerbitan KTP-el Baru WNI", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-004", title:"Penerbitan Kartu Identitas Anak WNI", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-005", title:"Perpindahan Penduduk WNI Dalam NKRI", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-006", title:"Pembatalan Dokumen Pendaftaran Penduduk Tanpa Melalui Penetapan Pengadilan/Contrarius Actus", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-007", title:"Perekaman KTP-el bagi Penduduk yang Tidak Mampu Melaporkan Sendiri", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-008", title:"Dokumen Kependudukan Terintegrasi dengan Kantor Urusan Agama (KUA)", category:"Pendaftaran Penduduk", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-009", title:"Pencatatan Kelahiran bagi Anak yang Tidak Diketahui Asal-Usulnya atau Keberadaan Orang Tuanya", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-010", title:"Pencatatan Perkawinan Penduduk WNI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-011", title:"Pencatatan Perkawinan Penduduk WNI yang Salah Satu atau Kedua Suami Isteri Meninggal Dunia Sebelum Pencatatan Perkawinan", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-012", title:"Pencatatan Pembatalan Perkawinan WNI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-013", title:"Pencatatan Perceraian WNI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-014", title:"Pencatatan Pembatalan Perceraian WNI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-015", title:"Pencatatan Kematian dalam Wilayah NKRI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-016", title:"Pencatatan Pengangkatan Anak WNI di Wilayah NKRI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-017", title:"Pencatatan Pengakuan Anak di Wilayah NKRI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-018", title:"Pencatatan Pengesahan Anak di Wilayah NKRI", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-019", title:"Pencatatan Perubahan Nama Penduduk WNI", category:"Perubahan Dokumen", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-020", title:"Pencatatan Perubahan Akta Pencatatan Sipil", category:"Perubahan Dokumen", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-021", title:"Pembetulan Akta Pencatatan Sipil dengan Permohonan dari Subjek Akta di Wilayah NKRI", category:"Perubahan Dokumen", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-022", title:"Pencatatan Pembatalan Akta Pencatatan Sipil Berdasarkan Putusan Pengadilan", category:"Perubahan Dokumen", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-023", title:"Pencatatan Pembatalan Akta Pencatatan Sipil Tanpa Putusan Pengadilan/Contrarius Actus", category:"Perubahan Dokumen", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-024", title:"Penerbitan Kembali Kutipan Akta Pencatatan Sipil Karena Rusak, Hilang, atau Penguasaan Salah Satu Pihak Yang Bersengketa", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-025", title:"Pencatatan Pelaporan Perjanjian Perkawinan yang Dibuat pada Waktu atau Sebelum Dilangsungkan Perkawinan", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-026", title:"Pencatatan Pelaporan Perjanjian Perkawinan yang Dibuat Selama Perkawinan", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-027", title:"Pencatatan Pelaporan Perubahan atau Pencabutan Perjanjian Perkawinan", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-028", title:"Pencatatan Peristiwa Penting Lainnya bagi Penduduk", category:"Pencatatan Sipil", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-029", title:"Legalisasi Dokumen Kependudukan yang Belum dengan Format Digital/Belum di Tanda Tangani secara Elektronik (TTE)", category:"Dokumen Kependudukan", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
  { id:"SUD-030", title:"Konfirmasi Dokumen Kependudukan", category:"Dokumen Kependudukan", location:"Suku Dinas", channel:"Sudin / Online", group:"Suku Dinas" },
];

const quick = [
  {title:"KTP-el", desc:"Cari layanan KTP-el dan lihat kanal pelayanan.", query:"KTP"},
  {title:"Kartu Keluarga", desc:"Temukan layanan penerbitan atau perubahan KK.", query:"Kartu Keluarga"},
  {title:"Akta Kelahiran", desc:"Cari layanan pencatatan kelahiran.", query:"kelahiran"},
  {title:"Akta Kematian", desc:"Cari layanan pencatatan kematian.", query:"kematian"},
  {title:"Pindah Penduduk", desc:"Temukan layanan perpindahan penduduk.", query:"Perpindahan"},
  {title:"Semua Layanan", desc:"Jelajahi seluruh service entry yang dipetakan.", query:""}
];

export default function DukcapilRedesign() {
  const [view,setView] = useState<"home"|"services"|"detail"|"ppid"|"status"|"info">("home");
  const [menu,setMenu] = useState(false);
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("Semua");
  const [group,setGroup] = useState("Semua");
  const [selected,setSelected] = useState<null>(null);
  const [status,setStatus] = useState("");
  const [searched,setSearched] = useState(false);

  const filtered = useMemo(() => {
    const q=query.trim().toLowerCase();
    return services.filter(s =>
      (category==="Semua" || s.category===category) &&
      (group==="Semua" || s.group===group) &&
      (!q || [s.title,s.category,s.location,s.id].join(" ").toLowerCase().includes(q))
    );
  },[query,category,group]);

  const openService = (s) => {
    setSelected(s); setView("detail"); window.scrollTo({top:0,behavior:"smooth"});
  };

  const goServices = (q="") => {
    setQuery(q); setView("services"); window.scrollTo({top:0,behavior:"smooth"});
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={()=>setView("home")} className="flex items-center gap-3 text-left">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#0b3b72] text-sm font-black text-white">DKI</div>
            <div><div className="font-bold leading-tight text-[#0b3b72]">Dukcapil DKI Jakarta</div><div className="text-xs text-slate-500">Portal layanan kependudukan</div></div>
          </button>
          <nav className="hidden items-center gap-7 md:flex">
            <button onClick={()=>setView("home")} className="text-sm font-semibold hover:text-[#0b3b72]">Beranda</button>
            <button onClick={()=>goServices()} className="text-sm font-semibold hover:text-[#0b3b72]">Layanan</button>
            <button onClick={()=>setView("status")} className="text-sm font-semibold hover:text-[#0b3b72]">Cek Status</button>
            <button onClick={()=>setView("ppid")} className="text-sm font-semibold hover:text-[#0b3b72]">PPID</button>
            <a href={official} target="_blank" rel="noreferrer" className="rounded-lg bg-[#f2b705] px-4 py-2 text-sm font-bold text-[#13233a]">Situs Existing ↗</a>
          </nav>
          <button onClick={()=>setMenu(!menu)} className="rounded-lg p-2 md:hidden" aria-label="Buka menu">{menu?<X/>:<Menu/>}</button>
        </div>
        {menu && <div className="border-t bg-white p-4 md:hidden">
          <div className="grid gap-2">
            <button className="rounded-lg p-3 text-left hover:bg-slate-50" onClick={()=>{setView("home");setMenu(false)}}>Beranda</button>
            <button className="rounded-lg p-3 text-left hover:bg-slate-50" onClick={()=>{goServices();setMenu(false)}}>Layanan</button>
            <button className="rounded-lg p-3 text-left hover:bg-slate-50" onClick={()=>{setView("status");setMenu(false)}}>Cek Status</button>
            <button className="rounded-lg p-3 text-left hover:bg-slate-50" onClick={()=>{setView("ppid");setMenu(false)}}>PPID</button>
          </div>
        </div>}
      </header>

      <main>
        {view==="home" && <section>
          <div className="bg-[#0b3b72] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:py-24">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold">Redesign konsep — berbasis kebutuhan warga</span>
                <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">Cari layanan berdasarkan kebutuhan, bukan struktur kantor.</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">Satu pintu untuk menemukan layanan kependudukan, memahami kanal pelayanan, dan melanjutkan ke sumber resmi tanpa kehilangan konteks.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button onClick={()=>goServices()} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f2b705] px-6 py-3 font-bold text-[#13233a]">Cari layanan <ChevronRight/></button>
                  <button onClick={()=>setView("status")} className="rounded-xl border border-white/30 px-6 py-3 font-bold hover:bg-white/10">Cek status layanan</button>
                </div>
              </div>
              <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-2xl">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-bold text-[#0b3b72]">Mulai dari kebutuhan Anda</p>
                  <div className="mt-4 flex items-center gap-3 rounded-xl border bg-white p-3"><Search className="text-slate-400"/><input aria-label="Cari layanan" value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&goServices(query)} placeholder="Contoh: KTP, kelahiran, pindah..." className="w-full outline-none"/></div>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {quick.slice(0,4).map(q=><button key={q.title} onClick={()=>goServices(q.query)} className="rounded-xl border bg-white p-3 text-left hover:border-[#0b3b72]"><div className="font-bold">{q.title}</div><div className="mt-1 text-xs text-slate-500">{q.desc}</div></button>)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div><p className="text-sm font-bold uppercase tracking-wider text-[#0b3b72]">Alur utama</p><h2 className="mt-1 text-3xl font-black">Dari kebutuhan sampai kanal layanan</h2></div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">Redesign memisahkan informasi tentang <b>apa</b> layanan, <b>di mana</b> dilayani, dan <b>bagaimana</b> melanjutkannya.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                ["01","Temukan","Cari berdasarkan dokumen/peristiwa."],
                ["02","Pahami","Lihat persyaratan dan prosedur resmi."],
                ["03","Pilih kanal","Website, kelurahan, kecamatan, Sudin, atau kanal resmi terkait."],
                ["04","Lanjutkan","Handoff jelas ke kanal resmi tanpa membuat layanan palsu."]
              ].map(([n,t,d])=><div key={n} className="rounded-2xl border bg-white p-5"><span className="text-sm font-black text-[#f2b705]">{n}</span><h3 className="mt-3 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{d}</p></div>)}
            </div>
          </section>

          <section className="bg-white border-y">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
              <div className="grid gap-5 md:grid-cols-4">
                {[
                  [services.length+"+","service entry yang dipetakan","Layanan Kelurahan, Kecamatan, dan Suku Dinas"],
                  ["6","layanan Kelurahan","Kelompok layanan utama existing"],
                  ["9","layanan Kecamatan","Standar pelayanan existing"],
                  ["30","layanan Suku Dinas","Standar pelayanan existing"]
                ].map(([a,b,c])=><div key={a} className="rounded-2xl bg-slate-50 p-5"><div className="text-3xl font-black text-[#0b3b72]">{a}</div><div className="mt-1 font-bold">{b}</div><div className="mt-2 text-xs text-slate-500">{c}</div></div>)}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#13233a] p-7 text-white sm:p-10">
              <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
                <div><p className="text-sm font-bold text-[#f2b705]">Transparansi sumber</p><h2 className="mt-2 text-2xl font-black">Informasi resmi tetap menjadi sumber kebenaran.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Prototype ini tidak menggantikan sistem pemerintah dan tidak mengarang persyaratan. Detail yang belum dimigrasikan diarahkan ke halaman resmi.</p></div>
                <a href={official} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-[#13233a]">Buka situs resmi <ExternalLink size={18}/></a>
              </div>
            </div>
          </section>
        </section>}

        {view==="services" && <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <button onClick={()=>setView("home")} className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#0b3b72]"><ArrowLeft size={18}/> Beranda</button>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-2xl border bg-white p-5 lg:sticky lg:top-24">
              <h1 className="text-xl font-black">Cari layanan</h1>
              <div className="mt-4 flex items-center gap-2 rounded-xl border p-3"><Search size={18} className="text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Ketik kata kunci..." className="w-full outline-none text-sm"/></div>
              <label className="mt-5 block text-xs font-bold uppercase text-slate-500">Kategori</label>
              <select value={category} onChange={e=>setCategory(e.target.value)} className="mt-2 w-full rounded-xl border p-3 text-sm"><option>Semua</option>{[...new Set(services.map(s=>s.category))].map(x=><option key={x}>{x}</option>)}</select>
              <label className="mt-4 block text-xs font-bold uppercase text-slate-500">Lokasi existing</label>
              <select value={group} onChange={e=>setGroup(e.target.value)} className="mt-2 w-full rounded-xl border p-3 text-sm"><option>Semua</option><option>Kelurahan</option><option>Kecamatan</option><option>Suku Dinas</option></select>
              <div className="mt-5 rounded-xl bg-blue-50 p-4 text-xs leading-5 text-blue-900">Hasil di bawah mempertahankan service entry existing. Redesign hanya mengubah cara menemukannya.</div>
            </aside>
            <div>
              <div className="mb-5 flex items-end justify-between gap-4"><div><p className="text-sm font-bold text-[#0b3b72]">{filtered.length} hasil</p><h2 className="text-3xl font-black">Semua layanan</h2></div></div>
              <div className="grid gap-4">
                {filtered.map(s=><button key={s.id} onClick={()=>openService(s)} className="group rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#0b3b72] hover:shadow-lg">
                  <div className="flex items-start justify-between gap-5"><div><div className="mb-2 flex flex-wrap gap-2"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-[#0b3b72]">{s.group}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">{s.category}</span></div><h3 className="text-lg font-bold leading-7">{s.title}</h3><div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500"><span className="inline-flex items-center gap-1"><MapPin size={14}/>{s.location}</span><span className="inline-flex items-center gap-1"><Globe2 size={14}/>{s.channel}</span><span className="font-mono">{s.id}</span></div></div><ChevronRight className="mt-1 shrink-0 text-slate-300 transition group-hover:text-[#0b3b72]"/></div>
                </button>)}
              </div>
            </div>
          </div>
        </section>}

        {view==="detail" && selected && <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <button onClick={()=>setView("services")} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={18}/> Kembali ke daftar layanan</button>
          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
            <div className="bg-[#0b3b72] p-7 text-white sm:p-10"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">{selected.group}</span><span className="rounded-full bg-[#f2b705] px-3 py-1 text-xs font-bold text-[#13233a]">{selected.category}</span></div><h1 className="mt-5 text-3xl font-black leading-tight">{selected.title}</h1><p className="mt-3 text-blue-100">ID inventory: {selected.id}</p></div>
            <div className="grid gap-6 p-7 sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5"><div className="text-xs font-bold uppercase text-slate-500">Di mana?</div><div className="mt-2 flex items-center gap-2 font-bold"><MapPin size={18} className="text-[#0b3b72]"/>{selected.location}</div></div>
                <div className="rounded-2xl bg-slate-50 p-5"><div className="text-xs font-bold uppercase text-slate-500">Kanal existing</div><div className="mt-2 flex items-center gap-2 font-bold"><Globe2 size={18} className="text-[#0b3b72]"/>{selected.channel}</div></div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 text-amber-700"/><div><h2 className="font-bold text-amber-950">Persyaratan & prosedur</h2><p className="mt-1 text-sm leading-6 text-amber-900">Untuk menjaga akurasi, prototype ini tidak menyalin atau mengarang persyaratan. Gunakan sumber resmi berikut untuk persyaratan terbaru layanan ini.</p></div></div></div>
              <div className="grid gap-3 sm:grid-cols-2"><a href={official} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b3b72] px-5 py-3 font-bold text-white">Buka sumber resmi <ExternalLink size={17}/></a><button onClick={()=>setView("status")} className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-bold">Cek status <Clock3 size={17}/></button></div>
            </div>
          </div>
        </section>}

        {view==="status" && <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <button onClick={()=>setView("home")} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={18}/> Beranda</button>
          <div className="rounded-3xl border bg-white p-7 shadow-sm sm:p-10">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0b3b72]"><Search/></div>
            <h1 className="mt-5 text-center text-3xl font-black">Cek status layanan</h1>
            <p className="mx-auto mt-3 max-w-xl text-center text-slate-500">Masukkan nomor resi atau informasi yang diberikan kanal layanan resmi.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row"><input value={status} onChange={e=>{setStatus(e.target.value);setSearched(false)}} placeholder="Contoh nomor resi..." className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-[#0b3b72]"/><button onClick={()=>setSearched(true)} className="rounded-xl bg-[#0b3b72] px-6 py-3 font-bold text-white">Lacak</button></div>
            {searched && <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5"><div className="flex gap-3"><CheckCircle2 className="text-blue-700"/><div><b>Prototype interaksi</b><p className="mt-1 text-sm text-blue-900">Nomor <span className="font-mono">{status || "—"}</span> diterima. Integrasi status nyata belum diaktifkan karena membutuhkan API resmi.</p></div></div></div>}
          </div>
        </section>}

        {view==="ppid" && <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <button onClick={()=>setView("home")} className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-slate-500"><ArrowLeft size={18}/> Beranda</button>
          <div className="rounded-3xl border bg-white p-7 sm:p-10">
            <div className="flex items-start gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0b3b72]"><ShieldCheck/></div><div><p className="text-sm font-bold text-[#0b3b72]">Informasi Publik</p><h1 className="mt-1 text-3xl font-black">PPID</h1><p className="mt-3 max-w-3xl leading-7 text-slate-600">Pada redesign, PPID tetap dipertahankan sebagai area informasi publik yang terpisah dari pencarian layanan warga.</p></div></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Permohonan Informasi Publik Online","Pengajuan Keberatan Online","Daftar Informasi Publik","Informasi Berkala","Informasi Setiap Saat","Informasi Serta Merta","Standar Pelayanan Informasi Publik","Formulir Permohonan","Jadwal Pelayanan Informasi Publik","Laporan Tahunan","Maklumat Pelayanan","Daftar Informasi Dikecualikan"].map(x=><div key={x} className="rounded-2xl border p-5"><h3 className="font-bold">{x}</h3><p className="mt-2 text-xs leading-5 text-slate-500">Tetap tersedia dalam struktur informasi publik; detail diarahkan ke sumber resmi.</p></div>)}</div>
            <a href={official} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b3b72] px-5 py-3 font-bold text-white">Buka PPID di situs resmi <ExternalLink size={17}/></a>
          </div>
        </section>}

        {view==="info" && <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6"><div className="rounded-3xl bg-white p-10 text-center border"><BookOpen className="mx-auto text-[#0b3b72]"/><h1 className="mt-4 text-3xl font-black">Informasi Dukcapil</h1><p className="mx-auto mt-3 max-w-2xl text-slate-500">Profil, lokasi Sudin, publikasi, nomor layanan, penghargaan, standar pelayanan, SOP, dan formulir tetap menjadi bagian dari konten redesign.</p><a href={official} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-xl bg-[#0b3b72] px-5 py-3 font-bold text-white">Buka sumber resmi</a></div></section>}
      </main>

      <footer className="border-t bg-[#13233a] text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-lg bg-white font-black text-[#0b3b72]">DKI</div><b className="text-white">Dukcapil DKI Jakarta</b></div><p className="mt-4 text-sm leading-6">Prototype redesign untuk proyek IMK. Informasi layanan harus diverifikasi terhadap sumber resmi sebelum digunakan sebagai informasi operasional.</p></div>
          <div><h3 className="font-bold text-white">Navigasi</h3><div className="mt-3 grid gap-2 text-sm"><button className="text-left hover:text-white" onClick={()=>setView("home")}>Beranda</button><button className="text-left hover:text-white" onClick={()=>goServices()}>Layanan</button><button className="text-left hover:text-white" onClick={()=>setView("ppid")}>PPID</button><button className="text-left hover:text-white" onClick={()=>setView("status")}>Cek Status</button></div></div>
          <div><h3 className="font-bold text-white">Sumber</h3><a href={official} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm hover:text-white"><ExternalLink size={16}/> Website resmi Disdukcapil DKI</a><p className="mt-3 text-xs text-slate-500">Versi prototype akademik — bukan sistem pelayanan pemerintah.</p></div>
        </div>
      </footer>
    </div>
  );
}
