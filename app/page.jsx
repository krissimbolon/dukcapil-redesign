"use client";

import React, { useState } from 'react';
import { Search, ChevronRight, X, CheckCircle2, AlertCircle, Info, Menu, ArrowLeft, FileText, Users, CreditCard, MapPin, Phone, Mail, Clock, Download } from 'lucide-react';

export default function DukcapilJakarta() { 
  const [activeSection, setActiveSection] = useState('home');
  const [searchHistory, setSearchHistory] = useState(['1234567890123456', '6543210987654321']);
  const [formStep, setFormStep] = useState(1);
  const [nikInput, setNikInput] = useState('');
  const [nikError, setNikError] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [fileUploadError, setFileUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showTooltip, setShowTooltip] = useState('');

  const handleNikChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setNikInput(value);
    if (value.length > 0 && value.length < 16) {
      setNikError('NIK harus 16 digit');
    } else {
      setNikError('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
      if (!validTypes.includes(file.type)) {
        setFileUploadError('Format file tidak valid. Gunakan JPG, PNG, atau PDF');
        setUploadSuccess(false);
      } else if (file.size > 2 * 1024 * 1024) {
        setFileUploadError('Ukuran file terlalu besar. Maksimal 2MB');
        setUploadSuccess(false);
      } else {
        setFileUploadError('');
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 3000);
      }
    }
  };

  const quickLinks = [
    { icon: <CreditCard className="w-6 h-6" />, title: "Perekaman KTP-el", desc: "Perekaman dan penerbitan KTP Elektronik untuk penduduk DKI Jakarta", time: "14 hari kerja", action: "ktp" },
    { icon: <Users className="w-6 h-6" />, title: "Penerbitan Kartu Keluarga", desc: "Pembuatan dan perubahan data Kartu Keluarga", time: "7 hari kerja", action: "kk" },
    { icon: <FileText className="w-6 h-6" />, title: "Akta Kelahiran", desc: "Penerbitan Akta Kelahiran untuk warga Jakarta", time: "14 hari kerja", action: "akta-lahir" },
    { icon: <FileText className="w-6 h-6" />, title: "Akta Kematian", desc: "Penerbitan Akta Kematian dan pencatatan kematian", time: "7 hari kerja", action: "akta-mati" },
    { icon: <MapPin className="w-6 h-6" />, title: "Surat Keterangan Pindah", desc: "Surat pindah antar kabupaten/kota atau luar negeri", time: "7 hari kerja", action: "pindah" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Identitas Kependudukan Digital", desc: "IKD - Identitas digital resmi untuk akses layanan online", time: "Instan", action: "ikd" }
  ];

  const ProgressStepper = ({ currentStep, totalSteps }) => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {[...Array(totalSteps)].map((_, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center z-10">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                i + 1 <= currentStep ? 'bg-[#f97316] text-white shadow-lg' : 'bg-gray-200 text-gray-500'
              }`}>
                {i + 1 < currentStep ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
              </div>
            </div>
            {i < totalSteps - 1 && (
              <div className={`flex-1 h-1 mx-[-10px] transition-all ${
                i + 1 < currentStep ? 'bg-[#f97316]' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f7f9] font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#1e4b85] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1e4b85] font-bold text-lg">DKI</span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold tracking-tight">Dinas Dukcapil DKI Jakarta</h1>
                <p className="text-xs text-blue-200">Layanan Kependudukan Online</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <button onClick={() => setActiveSection('home')} className={`transition hover:text-white ${activeSection === 'home' ? 'text-white border-b-2 border-[#f97316]' : 'text-gray-300'}`}>Beranda</button>
              <button onClick={() => setActiveSection('home')} className={`transition hover:text-white ${activeSection === 'services' ? 'text-white border-b-2 border-[#f97316]' : 'text-gray-300'}`}>Layanan</button>
              <button onClick={() => setActiveSection('ppid')} className={`transition hover:text-white ${activeSection === 'ppid' ? 'text-white border-b-2 border-[#f97316]' : 'text-gray-300'}`}>PPID</button>
              <button onClick={() => setActiveSection('status')} className={`transition hover:text-white ${activeSection === 'status' ? 'text-white border-b-2 border-[#f97316]' : 'text-gray-300'}`}>Cek Status</button>
              <button className="bg-[#f97316] text-white px-5 py-2 rounded-md hover:bg-orange-600 transition shadow-sm">Layanan Online</button>
            </nav>

            <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-[#153661] border-t border-blue-800">
            <div className="px-4 py-3 space-y-2">
              <button onClick={() => { setActiveSection('home'); setShowMenu(false); }} className="block w-full text-left py-2 text-white">Beranda</button>
              <button onClick={() => { setActiveSection('ppid'); setShowMenu(false); }} className="block w-full text-left py-2 text-white">PPID</button>
              <button onClick={() => { setActiveSection('status'); setShowMenu(false); }} className="block w-full text-left py-2 text-white">Cek Status</button>
            </div>
          </div>
        )}
      </header>

      <main className="pb-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-0">
            {/* Hero Banner */}
            <div className="bg-[#245b9e] text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="max-w-2xl">
                  <span className="inline-block py-1 px-3 rounded-full bg-[#1e4b85] border border-blue-400 text-sm mb-6">Portal Layanan Kependudukan</span>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Layanan Kependudukan Jakarta dalam Genggaman Anda
                  </h2>
                  <p className="text-blue-100 mb-8 text-lg font-light">
                    Akses layanan administrasi kependudukan DKI Jakarta dengan mudah, cepat, dan aman secara online.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => document.getElementById('layanan-utama').scrollIntoView({ behavior: 'smooth' })}
                      className="bg-[#f97316] text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition flex items-center justify-center shadow-lg"
                    >
                      Ajukan Layanan Sekarang
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setActiveSection('status')}
                      className="bg-transparent text-white px-8 py-3 rounded-md font-semibold hover:bg-[#1e4b85] transition border border-white flex items-center justify-center"
                    >
                      Cek Status Dokumen
                    </button>
                  </div>
                </div>

                {/* Hero Stats */}
                <div className="space-y-4 md:pl-10">
                   <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 flex flex-col justify-center transform hover:-translate-y-1 transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#245b9e]" />
                      </div>
                      <span className="text-[10px] tracking-wider text-gray-400 font-bold uppercase">Update Terbaru</span>
                    </div>
                    <h3 className="text-4xl font-extrabold text-[#113054] tracking-tight">10.881.514</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Jiwa Penduduk DKI Jakarta</p>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-gray-800 flex flex-col justify-center transform hover:-translate-y-1 transition duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-[#f97316]" />
                      </div>
                      <span className="text-[10px] tracking-wider text-gray-400 font-bold uppercase">Data Terkini</span>
                    </div>
                    <h3 className="text-4xl font-extrabold text-[#113054] tracking-tight">3.599.700</h3>
                    <p className="text-sm text-gray-500 font-medium mt-1">Kepala Keluarga</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links / Layanan Utama */}
            <div id="layanan-utama" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-[#113054] mb-3">Layanan Utama Kami</h3>
                <p className="text-gray-500 max-w-2xl mx-auto">Berbagai layanan kependudukan yang dapat Anda akses dengan mudah dan cepat tanpa harus datang ke kantor.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickLinks.map((link, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedService(link);
                      setActiveSection('form');
                      setFormStep(1);
                      window.scrollTo(0,0);
                    }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-8 text-left group border border-gray-100 relative overflow-hidden"
                  >
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-[#245b9e] group-hover:scale-110 transition duration-300">
                        {link.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-[#113054] mb-2">{link.title}</h4>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed min-h-[40px]">{link.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4">
                      <span className="flex items-center text-xs font-medium text-amber-500">
                        ⚡ {link.time}
                      </span>
                      <span className="text-sm font-semibold text-[#f97316] flex items-center group-hover:text-orange-600">
                        Selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <button className="bg-[#113054] text-white px-6 py-3 rounded-md font-medium hover:bg-blue-900 transition shadow-sm inline-flex items-center">
                  Lihat Semua Layanan <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Formulir Layanan (Loket Virtual) */}
        {activeSection === 'form' && selectedService && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <button
              onClick={() => { setActiveSection('home'); setFormStep(1); setNikInput(''); }}
              className="flex items-center text-gray-500 hover:text-[#f97316] mb-8 font-medium transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </button>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#113054] mb-3">{selectedService.title}</h2>
                <p className="text-gray-500">{selectedService.desc}</p>
              </div>

              <ProgressStepper currentStep={formStep} totalSteps={3} />

              {formStep === 1 && (
                <div className="space-y-6 mt-10">
                  <div className="bg-blue-50 p-4 rounded-lg flex items-start text-sm text-[#245b9e] mb-6 border border-blue-100">
                    <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <p>Pastikan NIK dan data diri yang dimasukkan sesuai dengan Kartu Keluarga terbaru Anda.</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">NIK (Nomor Induk Kependudukan)</label>
                    <input
                      type="text"
                      maxLength="16"
                      value={nikInput}
                      onChange={handleNikChange}
                      placeholder="Contoh: 3171234567890001"
                      className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:ring-[#f97316] focus:border-transparent transition outline-none ${
                        nikError ? 'border-red-400' : 'border-gray-200'
                      }`}
                    />
                    {nikError && <div className="flex items-center mt-2 text-red-500 text-xs font-medium"><AlertCircle className="w-3 h-3 mr-1" />{nikError}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap Sesuai KTP</label>
                    <input type="text" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97316] outline-none" />
                  </div>

                  <div className="flex justify-end pt-8 border-t border-gray-100 mt-8">
                    <button
                      onClick={() => nikInput.length === 16 && setFormStep(2)}
                      disabled={nikInput.length !== 16}
                      className="px-8 py-3 bg-[#f97316] text-white rounded-lg font-semibold hover:bg-orange-600 disabled:bg-gray-300 transition flex items-center shadow-md"
                    >
                      Lanjut ke Unggah Dokumen <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-6 mt-10">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Scan/Foto Kartu Keluarga Asli</label>
                    <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-xl p-8 text-center hover:border-[#f97316] hover:bg-orange-50 transition cursor-pointer">
                      <input type="file" accept="image/*,.pdf" onChange={handleFileUpload} className="hidden" id="upload-kk" />
                      <label htmlFor="upload-kk" className="cursor-pointer flex flex-col items-center">
                        <Download className="w-8 h-8 text-gray-400 mb-3" />
                        <span className="text-sm font-medium text-[#113054] mb-1">Klik untuk unggah atau seret file ke sini</span>
                        <span className="text-xs text-gray-400">Maksimal 2MB (JPG, PNG, PDF)</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-8 border-t border-gray-100 mt-8">
                    <button onClick={() => setFormStep(1)} className="px-6 py-3 text-gray-500 hover:text-gray-800 font-medium flex items-center">
                      <ArrowLeft className="mr-2 w-5 h-5" /> Kembali
                    </button>
                    <button onClick={() => setFormStep(3)} className="px-8 py-3 bg-[#f97316] text-white rounded-lg font-semibold hover:bg-orange-600 transition flex items-center shadow-md">
                      Lanjut Konfirmasi <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="space-y-6 mt-10">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-bold text-[#113054] mb-4 border-b border-gray-200 pb-3">Ringkasan Pengajuan</h4>
                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between items-center"><span className="text-gray-500">Layanan</span><span className="font-semibold text-gray-800">{selectedService.title}</span></div>
                      <div className="flex justify-between items-center"><span className="text-gray-500">NIK Pemohon</span><span className="font-semibold text-gray-800">{nikInput}</span></div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <input type="checkbox" id="agreement" className="mt-1 w-4 h-4 text-[#f97316] border-gray-300 rounded focus:ring-[#f97316]" />
                    <label htmlFor="agreement" className="text-sm text-gray-700 leading-relaxed">
                      Saya menyatakan bahwa dokumen yang diunggah adalah sah dan benar. Saya bersedia menerima sanksi hukum sesuai peraturan perundang-undangan jika memalsukan data.
                    </label>
                  </div>

                  <div className="flex justify-between pt-8 border-t border-gray-100 mt-8">
                    <button onClick={() => setFormStep(2)} className="px-6 py-3 text-gray-500 hover:text-gray-800 font-medium flex items-center">
                      <ArrowLeft className="mr-2 w-5 h-5" /> Kembali
                    </button>
                    <button onClick={() => {
                        alert('Permohonan diajukan! No Resi: REG-26-XYZ');
                        setActiveSection('status');
                      }} 
                      className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center shadow-md"
                    >
                      <CheckCircle2 className="mr-2 w-5 h-5" /> Kirim Permohonan
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* PPID / Permohonan Informasi Publik */}
        {activeSection === 'ppid' && (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-[#113054] mb-3">Permohonan Informasi Publik (PPID)</h2>
              <p className="text-gray-500">Formulir pengajuan permintaan informasi publik ke Dinas Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta sesuai UU No. 14 Tahun 2008.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Permintaan informasi berhasil dikirim ke petugas PPID."); setActiveSection('home'); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">NIK Pemohon</label>
                    <input required type="text" maxLength="16" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97316] outline-none" placeholder="16 Digit NIK" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97316] outline-none" placeholder="Sesuai KTP" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rincian Informasi yang Dibutuhkan</label>
                  <textarea required rows="4" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97316] outline-none" placeholder="Sebutkan secara spesifik data atau dokumen informasi publik yang Anda butuhkan..."></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tujuan Penggunaan Informasi</label>
                  <input required type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#f97316] outline-none" placeholder="Misal: Keperluan penelitian akademik, pelaporan jurnalistik, dll." />
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100 mt-8">
                  <button type="submit" className="px-8 py-3 bg-[#113054] text-white rounded-lg font-semibold hover:bg-blue-900 transition shadow-md">
                    Kirim Permohonan Informasi
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Cek Status Layanan */}
        {activeSection === 'status' && (
          <div className="max-w-3xl mx-auto px-4 py-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-[#245b9e]" />
              </div>
              <h2 className="text-3xl font-bold text-[#113054] mb-2">Lacak Status Dokumen</h2>
              <p className="text-gray-500 mb-8">Masukkan Nomor Resi Registrasi atau NIK Anda untuk mengetahui progres layanan kependudukan.</p>
              
              <div className="relative max-w-lg mx-auto">
                <input
                  type="text"
                  placeholder="Contoh: REG-26-XYZ atau 3171..."
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-[#f97316] outline-none text-center text-lg font-medium tracking-wide"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-[#f97316] text-white px-6 rounded-full font-semibold hover:bg-orange-600 transition">
                  Lacak
                </button>
              </div>

              {/* Riwayat Pencarian (Heuristik #6: Recognition over recall) */}
              <div className="mt-8">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">Pencarian Terakhir Anda</p>
                <div className="flex justify-center gap-3">
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-600 transition">REG-26-XYZ</button>
                  <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-600 transition">3171200030004000</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#113054] text-gray-300 pt-16 pb-8 border-t-4 border-[#f97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-[#113054] font-bold">DKI</div>
                <div>
                  <h3 className="text-lg font-bold text-white">Dinas Dukcapil</h3>
                  <p className="text-xs text-blue-300">DKI Jakarta</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6">Dinas Kependudukan dan Pencatatan Sipil Provinsi DKI Jakarta melayani administrasi kependudukan untuk seluruh warga ibukota dengan cepat, akurat, dan gratis.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Navigasi Cepat</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#f97316] transition">Profil Dinas</a></li>
                <li><a href="#" className="hover:text-[#f97316] transition">Layanan Online</a></li>
                <li><a href="#" className="hover:text-[#f97316] transition">PPID & Informasi Publik</a></li>
                <li><a href="#" className="hover:text-[#f97316] transition">Cek Status Laporan</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-white mb-4">Kontak Kami</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start"><MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" /> Jl. Letjen S. Parman No.7, Jakarta Barat</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> 1500-717</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> dukcapil@jakarta.go.id</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2026 Dinas Dukcapil Provinsi DKI Jakarta. Hak Cipta Dilindungi.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Kebijakan Privasi</a>
              <a href="#" className="hover:text-white">Syarat Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}