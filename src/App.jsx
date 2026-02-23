import React, { useState } from "react";
import { Leaf, Droplets, Users, Globe, Menu, X, ChevronRight, Sprout, Shield, MapPin, Mail, Phone } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-2xl text-green-800 tracking-tight">
                Bakau<span className="text-teal-600">Nusantara</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#beranda" className="text-slate-600 hover:text-green-600 font-medium transition-colors">
                Beranda
              </a>
              <a href="#tentang" className="text-slate-600 hover:text-green-600 font-medium transition-colors">
                Tentang Kami
              </a>
              <a href="#program" className="text-slate-600 hover:text-green-600 font-medium transition-colors">
                Program
              </a>
              <a href="#dampak" className="text-slate-600 hover:text-green-600 font-medium transition-colors">
                Dampak
              </a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">Dukung Kami</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-green-600 focus:outline-none">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#beranda" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                Beranda
              </a>
              <a href="#tentang" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                Tentang Kami
              </a>
              <a href="#program" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                Program
              </a>
              <a href="#dampak" className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50" onClick={toggleMenu}>
                Dampak
              </a>
              <div className="pt-4">
                <button className="w-full bg-green-600 text-white px-5 py-3 rounded-lg font-medium shadow-md">Dukung Kami</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative pt-20">
        <div className="absolute inset-0 z-0 h-[600px] lg:h-[700px]">
          <img src="https://images.unsplash.com/photo-1628103131602-5813f8c87ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Hutan Bakau Indonesia dari Udara" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/70 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] lg:h-[700px] flex items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-100 text-sm font-semibold mb-6 backdrop-blur-sm">Inisiatif Hijau Indonesia</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Membangun Sabuk Hijau <br /> Pesisir Nusantara
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed">
              Kami memulihkan ekosistem mangrove di seluruh garis pantai Indonesia untuk melindungi daratan, menyejahterakan masyarakat pesisir, dan melawan perubahan iklim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg flex items-center justify-center">
                Mulai Berdonasi <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center">Pelajari Program</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <Sprout className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">5.2 Juta</h3>
            <p className="text-slate-500 font-medium">Pohon Bakau Ditanam</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">24</h3>
            <p className="text-slate-500 font-medium">Provinsi Terjangkau</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">15.000+</h3>
            <p className="text-slate-500 font-medium">Relawan & Petani Lokal</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
              <Shield className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">12K Ha</h3>
            <p className="text-slate-500 font-medium">Area Terestorasi</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-green-200/50 rounded-3xl transform -rotate-3 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Akar Pohon Bakau yang Kuat"
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden sm:block">
                <p className="text-green-700 font-bold text-lg">Misi Kami</p>
                <p className="text-slate-600 text-sm mt-2">Mengembalikan ekosistem karbon biru untuk keseimbangan alam Nusantara.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-green-500"></span>
                <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">Tentang Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">Penjaga Garda Terdepan Garis Pantai Indonesia</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                BakauNusantara lahir dari kepedulian mendalam terhadap degradasi ekosistem pesisir. Sebagai negara kepulauan terbesar, Indonesia memiliki seperempat dari total hutan mangrove dunia, sebuah aset berharga yang kini terancam.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Kami bekerja berdampingan dengan masyarakat lokal, pemerintah, dan sektor swasta untuk menanam kembali area yang gundul, mengedukasi generasi muda, dan menciptakan nilai ekonomi berkelanjutan bagi warga pesisir.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600">
                    <Droplets className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Penyerapan Karbon Maksimal</h4>
                    <p className="text-slate-600 text-sm">Mangrove menyerap karbon hingga 4x lebih banyak dari hutan tropis biasa.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Benteng Alami Pesisir</h4>
                    <p className="text-slate-600 text-sm">Melindungi daratan dari abrasi, badai, dan potensi tsunami.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Fokus Program Kami</h2>
            <p className="text-lg text-slate-600">Pendekatan holistik kami tidak hanya berhenti pada penanaman, melainkan memastikan ekosistem dan masyarakat dapat bertumbuh bersama.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Penanaman Massal"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-green-600 rounded-xl text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-slate-50 shadow-sm">
                  <Sprout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Reboisasi Masif Berbasis Sains</h3>
                <p className="text-slate-600 mb-6">Kami menganalisis jenis tanah, salinitas, dan pasang surut untuk memastikan spesies bakau yang ditanam (Rhizophora, Avicennia, dll) memiliki tingkat kelangsungan hidup tertinggi.</p>
                <a href="#" className="text-green-600 font-semibold inline-flex items-center hover:text-green-700">
                  Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pemberdayaan Warga"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-teal-600 rounded-xl text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-slate-50 shadow-sm">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Pemberdayaan Ekonomi Pesisir</h3>
                <p className="text-slate-600 mb-6">Memberikan pelatihan kepada warga lokal untuk mengolah produk turunan bakau (seperti sirup, batik mangrove, dan ekowisata) tanpa merusak ekosistem.</p>
                <a href="#" className="text-teal-600 font-semibold inline-flex items-center hover:text-teal-700">
                  Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pemantauan Digital"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-amber-500 rounded-xl text-white flex items-center justify-center mb-6 -mt-14 relative z-10 border-4 border-slate-50 shadow-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Pemantauan & Teknologi</h3>
                <p className="text-slate-600 mb-6">Menggunakan teknologi drone dan pemetaan satelit untuk memantau pertumbuhan pohon secara real-time dan transparan bagi para donatur dan mitra.</p>
                <a href="#" className="text-amber-600 font-semibold inline-flex items-center hover:text-amber-700">
                  Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="dampak" className="py-20 bg-teal-900 relative overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10">
          <Leaf className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Satu Pohon Bakau yang Anda Tanam, Menghidupkan Ribuan Nyawa.</h2>
          <p className="text-xl text-teal-100 mb-10">Jadilah bagian dari solusi. Mari wujudkan pesisir Indonesia yang tangguh dan hijau untuk generasi mendatang.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg">Donasi Sekarang</button>
            <button className="bg-transparent border-2 border-teal-500 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">Daftar Jadi Relawan</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="font-bold text-2xl text-white tracking-tight">
                  Bakau<span className="text-teal-500">Nusantara</span>
                </span>
              </div>
              <p className="text-slate-400 mb-6">Yayasan nirlaba yang berdedikasi untuk memulihkan, melindungi, dan melestarikan hutan mangrove di seluruh pesisir Indonesia.</p>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Tautan Cepat</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#beranda" className="hover:text-green-400 transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="hover:text-green-400 transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#program" className="hover:text-green-400 transition-colors">
                    Program Utama
                  </a>
                </li>
                <li>
                  <a href="#laporan" className="hover:text-green-400 transition-colors">
                    Laporan Transparansi
                  </a>
                </li>
                <li>
                  <a href="#karir" className="hover:text-green-400 transition-colors">
                    Karir & Relawan
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Program Kami</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Adopsi Pohon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Ekowisata Pesisir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    CSR Perusahaan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Edukasi Sekolah
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-6">Hubungi Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Jl. Pesisir Hijau No. 12, Jakarta Selatan, Indonesia 12950</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-400">+62 21 5555 1234</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-400">halo@bakaunusantara.org</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} BakauNusantara. Hak Cipta Dilindungi.</p>
            <div className="flex gap-4 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}