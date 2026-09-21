export const SERVICE_GUIDES = {
  "KEL-001":{
    summary:"KTP-el merupakan identitas resmi berbasis NIK bagi penduduk yang memenuhi ketentuan usia atau status perkawinan.",
    groups:[
      {title:"KTP-el baru — pemula 17 tahun",items:["Fotokopi Kartu Keluarga (KK)."]},
      {title:"Pemula di bawah 17 tahun dan sudah menikah",items:["KK asli.","Fotokopi buku nikah atau akta perkawinan."]},
      {title:"Perubahan biodata",items:["KK dan KTP-el asli.","Dokumen pendukung perubahan, misalnya akta kelahiran/perkawinan/perceraian/kematian, ijazah, penetapan pengadilan, atau dokumen perubahan agama."]},
      {title:"Hilang atau rusak",items:["Surat keterangan kehilangan dari kepolisian untuk KTP-el hilang.","KTP-el yang rusak untuk penggantian karena rusak.","Fotokopi KK."]}
    ],
    notes:["Untuk pendatang, KTP-el diterbitkan bersamaan dengan proses penerbitan KK.","Pelayanan tidak dipungut biaya."]
  },
  "KEL-002":{
    summary:"KK memuat susunan, hubungan, dan identitas anggota keluarga. Penerbitan meliputi KK baru, perubahan data, serta penggantian karena hilang atau rusak.",
    groups:[
      {title:"Membentuk keluarga baru",items:["Fotokopi buku nikah/akta perkawinan atau akta perceraian.","SPTJM F-1.05 jika perkawinan/perceraian belum tercatat dan kutipan akta tidak dapat dilampirkan."]},
      {title:"Penggantian kepala keluarga karena meninggal",items:["Fotokopi akta kematian.","KK lama."]},
      {title:"Pisah KK dalam satu alamat",items:["KK lama.","Pemohon sekurang-kurangnya 17 tahun atau sudah/pernah kawin, dibuktikan dengan KTP-el."]},
      {title:"Perubahan data",items:["KK lama.","Bukti peristiwa kependudukan/peristiwa penting atau dokumen pendukung perubahan."]},
      {title:"Hilang atau rusak",items:["Surat kehilangan dari kepolisian atau KK rusak.","KTP-el pemohon."]}
    ],
    notes:["Penerbitan KK akibat perubahan data dapat diproses bersamaan dengan KTP-el bila diperlukan.","Pelayanan tidak dipungut biaya."]
  },
  "KEL-003":{
    summary:"KIA diterbitkan untuk anak berusia kurang dari 17 tahun dan belum pernah kawin.",
    groups:[
      {title:"Penerbitan KIA",items:["Fotokopi kutipan akta kelahiran dan tunjukkan dokumen asli.","KK asli orang tua/wali.","KTP-el asli kedua orang tua/wali.","Foto anak berwarna ukuran 3×4 sebanyak 2 lembar untuk anak usia 5 tahun sampai kurang dari 17 tahun."]},
      {title:"Hilang, rusak, atau pindah datang",items:["Surat kehilangan dari kepolisian yang masih berlaku jika KIA hilang.","KIA rusak jika penggantian karena rusak.","Surat keterangan pindah yang sesuai jika pindah datang."]}
    ],
    notes:["Jika anak belum memiliki NIK/akta kelahiran, proses KIA dilakukan bersama proses penerbitan data kependudukan yang dibutuhkan."]
  },
  "KEL-004":{
    summary:"Akta kelahiran merupakan bukti sah status dan peristiwa kelahiran. Pelaporan kelahiran juga menjadi dasar pencantuman anak pada KK dan pemberian NIK.",
    groups:[{title:"Persyaratan pencatatan kelahiran WNI",items:["Surat keterangan kelahiran dari fasilitas kesehatan/penolong kelahiran/kelurahan atau SPTJM sesuai ketentuan.","KK orang tua dan fotokopi KTP-el orang tua.","Fotokopi buku nikah/akta perkawinan orang tua atau SPTJM sesuai ketentuan.","Fotokopi KTP-el dua orang saksi."]}],
    notes:["Hasil pelaporan kelahiran mencakup pembaruan KK dan penerbitan akta kelahiran.","Pelayanan tidak dipungut biaya."]
  },
  "KEL-005":{
    summary:"Pencatatan kematian menghasilkan akta kematian dan menjadi dasar pemutakhiran data kependudukan almarhum/almarhumah.",
    groups:[{title:"Persyaratan utama",items:["Surat keterangan kematian dari dokter atau kepala desa/lurah; untuk kondisi tertentu dapat menggunakan dokumen kepolisian, penetapan pengadilan, maskapai, atau Perwakilan RI sesuai peristiwa.","Fotokopi paspor RI bila relevan.","Fotokopi KK/KTP-el almarhum/almarhumah."]}],
    notes:["Gunakan dokumen yang sesuai dengan kondisi kematian dan lokasi peristiwa."]
  },
  "KEL-006":{
    summary:"Pindah datang adalah proses perpindahan penduduk dari luar DKI Jakarta untuk menjadi penduduk DKI Jakarta.",
    groups:[{title:"Persyaratan",items:["Surat Keterangan Pindah dari daerah asal.","Biodata penduduk.","Surat Pernyataan Jaminan Tempat Tinggal dari pemilik rumah/pengelola rusun/apartemen jika menumpang.","KK dan KTP-el penjamin jika menumpang.","Fotokopi akta kelahiran bila data biodata belum lengkap.","Fotokopi akta perkawinan/buku nikah atau akta perceraian bagi yang berstatus kawin/cerai hidup, bila data biodata belum lengkap."]}],
    process:["Serahkan berkas pada service point Dukcapil Kelurahan tujuan atau gunakan kanal daring yang tersedia.","Petugas memverifikasi berkas dan memberikan bukti permohonan.","Proses Surat Keterangan Pindah Datang diteruskan untuk pembaruan KK dan KTP-el.","Simpan bukti permohonan sampai dokumen selesai."],
    notes:["Permohonan pindah datang diproses bersama KK dan KTP-el baru sesuai kondisi pemohon.","Pelayanan tidak dipungut biaya."]
  },

  "KEC-001":{
    summary:"Pencatatan kelahiran WNI yang terintegrasi dengan fasilitas kesehatan.",
    groups:[{title:"Persyaratan",items:["Surat keterangan peristiwa kelahiran.","Fotokopi buku nikah/akta perkawinan orang tua atau SPTJM sesuai ketentuan.","Fotokopi KK dan KTP-el orang tua."]}]
  },
  "KEC-002":{
    summary:"Pencatatan kematian WNI yang terintegrasi dengan fasilitas kesehatan.",
    groups:[{title:"Persyaratan",items:["Surat keterangan peristiwa kematian.","KTP-el dan/atau KK almarhum/almarhumah."]}]
  },
  "KEC-003":{
    summary:"Pencatatan perkawinan WNI yang terintegrasi dengan rumah ibadah.",
    groups:[{title:"Persyaratan",items:["Surat keterangan telah terjadinya perkawinan dari pemuka agama/penghayat kepercayaan.","KK dan KTP-el asli suami dan istri.","Foto berwarna suami-istri berdampingan ukuran 6×4 cm sebanyak 3 lembar.","Akta perceraian atau akta kematian pasangan sebelumnya bila pernah kawin."]}]
  },
  "KEC-004":{
    summary:"Pencatatan perkawinan WNI pada sektor Dukcapil Kecamatan.",
    groups:[{title:"Persyaratan",items:["Fotokopi surat keterangan telah terjadinya perkawinan dari pemuka agama/penghayat kepercayaan.","Pas foto berwarna suami-istri berdampingan ukuran 4×6 sebanyak 2 lembar.","KTP-el dan KK asli.","Fotokopi akta perceraian/akta kematian bagi yang berstatus cerai hidup/cerai mati."]}]
  },
  "KEC-005":{
    summary:"Pencatatan perceraian WNI setelah putusan pengadilan berkekuatan hukum tetap.",
    groups:[{title:"Persyaratan",items:["Fotokopi salinan putusan pengadilan yang telah berkekuatan hukum tetap.","Kutipan akta perkawinan asli.","KTP-el asli.","KK asli."]}]
  },
  "KEC-006":{
    summary:"Perpindahan penduduk WNI ke luar daerah.",
    groups:[{title:"Persyaratan",items:["Fotokopi Kartu Keluarga."]}]
  },
  "KEC-007":{
    summary:"Pendataan penduduk nonpermanen pada sektor Dukcapil Kecamatan.",
    groups:[{title:"Persyaratan",items:["KTP-el daerah asal atau KK daerah asal.","Dokumen pendukung lain seperti pengantar RT/RW bila diperlukan."]}]
  },
  "KEC-008":{
    summary:"Penerbitan kembali kutipan akta pencatatan sipil karena rusak atau hilang.",
    groups:[{title:"Persyaratan",items:["Surat pernyataan rusak/hilang dari pemohon atau surat kehilangan dari kepolisian setempat.","Fotokopi kutipan akta yang hilang atau akta asli yang rusak.","Fotokopi KK dan KTP-el."]}]
  },
  "KEC-009":{
    summary:"Legalisasi hanya diperlukan untuk dokumen kependudukan yang belum menggunakan format digital atau belum ditandatangani secara elektronik.",
    groups:[{title:"Persyaratan",items:["Fotokopi dokumen kependudukan yang akan dilegalisasi."]}],
    notes:["Dokumen bertanda tangan elektronik (TTE) dan memiliki barcode tidak memerlukan legalisasi karena keasliannya dapat diverifikasi melalui barcode."]
  },

  "SUD-001":{
    summary:"Pencatatan biodata WNI di dalam wilayah NKRI atau bagi WNI yang datang dari luar wilayah NKRI.",
    groups:[
      {title:"Dalam wilayah NKRI",items:["Surat pengantar asli RT/RW atau pengelola apartemen/rusun.","Fotokopi KK, KTP-el/surat keterangan pindah, akta kelahiran, dan bukti pendidikan terakhir.","Surat pernyataan bila dokumen tertentu tidak dimiliki."]},
      {title:"Datang dari luar wilayah NKRI",items:["Fotokopi Paspor RI.","Surat pengantar asli RT/RW atau pengelola apartemen/rusun.","Fotokopi KK, KTP-el/surat keterangan pindah, akta kelahiran, dan bukti pendidikan terakhir; gunakan surat pernyataan bila dokumen tertentu tidak dimiliki."]}
    ]
  },
  "SUD-002":{
    summary:"Penerbitan KK baru WNI untuk pembentukan keluarga baru, penggantian kepala keluarga, pisah KK, perubahan data, atau penggantian hilang/rusak.",
    groups:[
      {title:"Membentuk keluarga baru",items:["Fotokopi buku nikah/akta perkawinan/akta perceraian.","SPTJM F-1.05 bila perkawinan/perceraian belum tercatat dan kutipan akta tidak dapat dilampirkan."]},
      {title:"Penggantian kepala keluarga",items:["Fotokopi akta kematian.","Fotokopi KK lama."]},
      {title:"Pisah KK satu alamat",items:["Fotokopi KK lama.","Berusia sekurang-kurangnya 17 tahun atau sudah/pernah kawin, dibuktikan dengan KTP-el."]},
      {title:"Perubahan data",items:["KK lama.","Bukti perubahan peristiwa kependudukan/peristiwa penting seperti paspor, surat pindah, akta kelahiran/perkawinan, atau ijazah.","Paspor dan izin tinggal tetap untuk Orang Asing bila relevan."]},
      {title:"Hilang atau rusak",items:["Surat kehilangan dari kepolisian atau KK asli yang rusak.","Fotokopi KTP-el pemohon.","Fotokopi kartu izin tinggal tetap untuk Orang Asing bila relevan."]}
    ]
  },
  "SUD-003":{
    summary:"Penerbitan KTP-el baru WNI dan penggantian karena pindah, perubahan data, rusak, atau hilang.",
    groups:[
      {title:"KTP-el baru WNI",items:["Berusia 17 tahun, sudah kawin, atau pernah kawin.","Fotokopi KK."]},
      {title:"Pindah/perubahan/rusak/hilang",items:["KTP-el lama bila tersedia.","Surat Keterangan Pindah WNI bila pindah datang.","Akta terkait bila ada perubahan data.","KTP-el rusak untuk penggantian rusak.","Surat kehilangan kepolisian yang masih berlaku untuk KTP-el hilang."]},
      {title:"Orang Asing pemegang izin tinggal tetap",items:["Memenuhi ketentuan usia/perkawinan.","Fotokopi KK, paspor, dan kartu izin tinggal tetap."]}
    ]
  },
  "SUD-004":{
    summary:"Penerbitan KIA bagi anak WNI dan kondisi penggantian hilang/rusak atau pindah datang.",
    groups:[
      {title:"KIA WNI",items:["Fotokopi kutipan akta kelahiran dan tunjukkan aslinya.","KK asli orang tua/wali.","KTP-el asli kedua orang tua/wali.","Foto anak berwarna 3×4 sebanyak 2 lembar untuk usia 5 tahun sampai kurang dari 17 tahun."]},
      {title:"Hilang/rusak/pindah",items:["Surat kehilangan kepolisian yang masih berlaku jika KIA hilang.","KIA rusak jika penggantian karena rusak.","Surat Keterangan Pindah Luar Negeri atau Surat Keterangan Pindah WNI sesuai kondisi."]}
    ]
  },
  "SUD-005":{
    summary:"Perpindahan penduduk WNI dalam wilayah NKRI.",
    groups:[{title:"Persyaratan",items:["Fotokopi Kartu Keluarga."]}]
  },
  "SUD-006":{
    summary:"Pembatalan dokumen pendaftaran penduduk tanpa penetapan pengadilan (contrarius actus).",
    groups:[{title:"Persyaratan",items:["KK.","KTP-el.","KIA dan/atau surat keterangan kependudukan sesuai dokumen yang dibatalkan.","SPTJM bahwa perkara tidak dalam sengketa hukum dengan pihak lain."]}]
  },
  "SUD-007":{
    summary:"Perekaman KTP-el bagi penduduk yang tidak mampu melaporkan sendiri.",
    groups:[{title:"Persyaratan",items:["Surat pengantar RT/RW atau surat permohonan.","Fotokopi KK/KTP-el lama."]}]
  },
  "SUD-008":{
    summary:"Penerbitan dokumen kependudukan terintegrasi dengan Kantor Urusan Agama (KUA).",
    groups:[{title:"Persyaratan",items:["Surat Keterangan Pindah/Pindah Datang jika terjadi pisah atau penyatuan KK.","KK pasangan.","KTP-el pasangan."]}]
  },
  "SUD-009":{
    summary:"Pencatatan kelahiran anak yang tidak diketahui asal-usul atau keberadaan orang tuanya.",
    groups:[{title:"Persyaratan",items:["Berita acara kepolisian untuk bayi yang baru lahir/ditemukan.","SPTJM kebenaran data kelahiran dari wali/pengasuh yang diketahui dua saksi untuk anak yang sudah dalam pengasuhan.","KK dan KTP-el pemohon.","KTP-el saksi."]}]
  },
  "SUD-010":{
    summary:"Pencatatan perkawinan penduduk WNI.",
    groups:[{title:"Persyaratan",items:["Fotokopi surat keterangan telah terjadinya perkawinan dari pemuka agama/penghayat kepercayaan.","Foto berwarna suami-istri berdampingan ukuran 4×6 sebanyak 2 lembar.","KTP-el asli.","KK asli.","Fotokopi akta perceraian/akta kematian bagi yang sebelumnya pernah kawin."]}]
  },
  "SUD-011":{
    summary:"Pencatatan perkawinan bila salah satu atau kedua pasangan meninggal sebelum perkawinan dicatatkan.",
    groups:[{title:"Persyaratan",items:["Bukti perkawinan agama/penghayat kepercayaan atau salinan penetapan pengadilan.","KTP-el pasangan yang masih hidup atau akta kematian bagi penduduk domisili DKI Jakarta.","SPTJM kebenaran data pasangan sesuai ketentuan."]}]
  },
  "SUD-012":{
    summary:"Pencatatan pembatalan perkawinan WNI.",
    groups:[{title:"Persyaratan",items:["Fotokopi putusan pengadilan yang berkekuatan hukum tetap.","Kutipan akta perkawinan.","KTP-el asli.","KK asli."]}]
  },
  "SUD-013":{
    summary:"Pencatatan perceraian WNI.",
    groups:[{title:"Persyaratan",items:["Fotokopi putusan pengadilan yang berkekuatan hukum tetap.","Kutipan akta perkawinan asli.","KTP-el asli.","KK asli."]}]
  },
  "SUD-014":{
    summary:"Pencatatan pembatalan perceraian WNI.",
    groups:[{title:"Persyaratan",items:["Fotokopi putusan pengadilan yang berkekuatan hukum tetap.","Kutipan akta perceraian asli.","KTP-el asli.","KK asli."]}]
  },
  "SUD-015":{
    summary:"Pencatatan kematian dalam wilayah NKRI.",
    groups:[{title:"Persyaratan",items:["Surat kematian dari dokter/lurah atau dokumen lain yang sesuai untuk kondisi khusus seperti dokumen kepolisian, penetapan pengadilan, maskapai, atau Perwakilan RI.","Fotokopi Paspor RI bila relevan.","Fotokopi KK/KTP-el almarhum/almarhumah."]}]
  },
  "SUD-016":{
    summary:"Pencatatan pengangkatan anak WNI di wilayah NKRI.",
    groups:[{title:"Persyaratan",items:["Fotokopi salinan penetapan pengadilan.","Kutipan akta kelahiran anak.","Fotokopi KK orang tua angkat.","Fotokopi paspor bila orang tua angkat adalah Orang Asing."]}]
  },
  "SUD-017":{
    summary:"Pencatatan pengakuan anak di wilayah NKRI.",
    groups:[{title:"Persyaratan",items:["Surat pernyataan pengakuan anak dari ayah biologis yang disetujui ibu kandung, atau penetapan pengadilan sesuai kondisi.","Bukti perkawinan agama/penghayat kepercayaan.","Kutipan akta kelahiran anak.","Fotokopi KK ayah atau ibu.","Fotokopi paspor bila ibu kandung Orang Asing."]}]
  },
  "SUD-018":{
    summary:"Pencatatan pengesahan anak di wilayah NKRI.",
    groups:[{title:"Persyaratan",items:["Kutipan akta kelahiran.","Fotokopi akta perkawinan yang menunjukkan perkawinan agama/kepercayaan terjadi sebelum kelahiran anak.","Fotokopi KK orang tua."]}]
  },
  "SUD-019":{
    summary:"Pencatatan perubahan nama penduduk WNI.",
    groups:[{title:"Persyaratan",items:["Fotokopi penetapan Pengadilan Negeri.","Kutipan akta pencatatan sipil.","Fotokopi KK.","Fotokopi paspor bila ada."]}]
  },
  "SUD-020":{
    summary:"Pencatatan perubahan akta pencatatan sipil.",
    groups:[{title:"Persyaratan",items:["Salinan penetapan pengadilan mengenai perubahan akta.","Kutipan akta pencatatan sipil terkait.","Fotokopi KK dan KTP-el."]}]
  },
  "SUD-021":{
    summary:"Pembetulan akta pencatatan sipil atas kesalahan tulis/redaksional.",
    groups:[{title:"Persyaratan",items:["Fotokopi dokumen autentik yang menjadi dasar pembuatan akta.","Kutipan akta pencatatan sipil yang memuat kesalahan tulis/redaksional."]}]
  },
  "SUD-022":{
    summary:"Pembatalan akta pencatatan sipil berdasarkan putusan pengadilan.",
    groups:[{title:"Persyaratan",items:["Fotokopi putusan pengadilan yang berkekuatan hukum tetap.","Kutipan akta pencatatan sipil yang dibatalkan.","Fotokopi KK."]}]
  },
  "SUD-023":{
    summary:"Pembatalan akta pencatatan sipil tanpa putusan pengadilan (contrarius actus).",
    groups:[{title:"Persyaratan",items:["Kutipan akta pencatatan sipil yang dibatalkan.","Fotokopi dokumen pendukung yang menguatkan pembatalan.","Fotokopi KK atau SPTJM kebenaran data sesuai kondisi."]}]
  },
  "SUD-024":{
    summary:"Penerbitan kembali kutipan akta karena rusak, hilang, atau berada dalam penguasaan salah satu pihak yang bersengketa.",
    groups:[{title:"Persyaratan",items:["Surat pernyataan rusak/hilang atau surat kehilangan dari kepolisian.","Fotokopi akta yang hilang atau akta asli yang rusak.","Fotokopi KK dan KTP-el.","SPTJM bila kutipan akta dikuasai salah satu pihak yang bersengketa."]}]
  },
  "SUD-025":{
    summary:"Pelaporan perjanjian perkawinan yang dibuat pada waktu atau sebelum perkawinan.",
    groups:[{title:"Persyaratan",items:["Fotokopi KK dan KTP-el.","Akta Notaris Perjanjian Perkawinan yang telah dilegalisasi, dengan menunjukkan dokumen asli."]}]
  },
  "SUD-026":{
    summary:"Pelaporan perjanjian perkawinan yang dibuat selama perkawinan.",
    groups:[{title:"Persyaratan",items:["KK dan KTP-el.","Kutipan akta perkawinan suami dan istri.","Akta Notaris Perjanjian Perkawinan yang telah dilegalisasi, dengan menunjukkan dokumen asli."]}]
  },
  "SUD-027":{
    summary:"Pelaporan perubahan atau pencabutan perjanjian perkawinan.",
    groups:[{title:"Persyaratan",items:["KK dan KTP-el.","Akta Notaris perubahan/pencabutan Perjanjian Perkawinan yang telah dilegalisasi, dengan menunjukkan dokumen asli.","Kutipan akta perkawinan suami dan istri."]}]
  },
  "SUD-028":{
    summary:"Pencatatan peristiwa penting lainnya bagi penduduk, termasuk perubahan jenis kelamin berdasarkan penetapan pengadilan.",
    groups:[{title:"Persyaratan",items:["Fotokopi penetapan Pengadilan Negeri mengenai peristiwa penting lainnya.","Kutipan akta pencatatan sipil.","Fotokopi KTP-el dan KK."]}]
  },
  "SUD-029":{
    summary:"Legalisasi dokumen kependudukan yang belum berformat digital atau belum ditandatangani secara elektronik.",
    groups:[{title:"Persyaratan",items:["Fotokopi dokumen kependudukan yang akan dilegalisasi."]}],
    notes:["Dokumen yang sudah menggunakan TTE dan barcode tidak perlu dilegalisasi; keaslian dapat diverifikasi melalui barcode."]
  },
  "SUD-030":{
    summary:"Konfirmasi keabsahan dokumen kependudukan.",
    groups:[{title:"Persyaratan",items:["Surat permohonan dari instansi/lembaga/badan hukum/pribadi yang bersangkutan atau kuasanya.","Fotokopi KTP-el pemohon atau pimpinan lembaga nonpemerintah."]}]
  }
};

export const DEFAULT_SERVICE_PROCESS = [
  "Periksa persyaratan yang sesuai dengan kondisi Anda.",
  "Pilih service point sesuai tingkat pelayanan atau kanal daring resmi bila tersedia.",
  "Serahkan/unggah dokumen untuk diverifikasi petugas.",
  "Simpan bukti atau nomor permohonan sampai dokumen selesai."
];
