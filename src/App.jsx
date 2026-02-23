import React, { useState, useEffect } from "react";
import { Leaf, Droplets, Users, Globe, Menu, X, ChevronRight, Sprout, Shield, MapPin, Mail, Phone } from "lucide-react";

// Data Default / Fallback
const defaultHome = {
  hero_title: "Membangun Sabuk Hijau Pesisir Nusantara",
  hero_description: "Kami memulihkan ekosistem mangrove di seluruh garis pantai Indonesia untuk melindungi daratan, menyejahterakan masyarakat pesisir, dan melawan perubahan iklim.",
  hero_bg: "https://images.unsplash.com/photo-1628103131602-5813f8c87ba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  stat_trees: "5.2 Juta",
  stat_volunteers: "15.000+",
};

const defaultAbout = {
  title: "Penjaga Garda Terdepan Garis Pantai Indonesia",
  image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  main_content:
    "BakauNusantara lahir dari kepedulian mendalam terhadap degradasi ekosistem pesisir. Sebagai negara kepulauan terbesar, Indonesia memiliki seperempat dari total hutan mangrove dunia, sebuah aset berharga yang kini terancam.\n\nKami bekerja berdampingan dengan masyarakat lokal, pemerintah, dan sektor swasta untuk menanam kembali area yang gundul, mengedukasi generasi muda, dan menciptakan nilai ekonomi berkelanjutan bagi warga pesisir.",
};

const defaultPrograms = [
  {
    title: "Reboisasi Masif Berbasis Sains",
    thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    summary: "Kami menganalisis jenis tanah, salinitas, dan pasang surut untuk memastikan spesies bakau yang ditanam memiliki tingkat kelangsungan hidup tertinggi.",
    status: "Berjalan",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [homeData, setHomeData] = useState(defaultHome);
  const [aboutData, setAboutData] = useState(defaultAbout);
  const [programs, setPrograms] = useState(defaultPrograms);

  useEffect(() => {
    // 1. Ambil data Beranda dari folder public hasil simpanan CMS
    fetch("/content/home.json")
      .then((res) => {
        if (!res.ok) throw new Error("File home.json belum ada");
        return res.json();
      })
      .then((data) => setHomeData({ ...defaultHome, ...data }))
      .catch((err) => console.log("Info:", err.message));

    // 2. Ambil data Tentang Kami dari folder public
    fetch("/content/about.json")
      .then((res) => {
        if (!res.ok) throw new Error("File about.json belum ada");
        return res.json();
      })
      .then((data) => setAboutData({ ...defaultAbout, ...data }))
      .catch((err) => console.log("Info:", err.message));

    // 3. Ambil data Program Kerja dari folder public
    fetch("/content/programs.json")
      .then((res) => {
        if (!res.ok) throw new Error("File programs.json belum ada");
        return res.json();
      })
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          setPrograms(data.items);
        }
      })
      .catch((err) => console.log("Info:", err.message));
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-2xl text-green-800 tracking-tight">
                Bakau<span className="text-teal-600">Nusantara</span>
              </span>
            </div>
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
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg">Dukung Kami</button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-green-600 focus:outline-none">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="beranda" className="relative pt-20">
        <div className="absolute inset-0 z-0 h-[600px] lg:h-[700px]">
          <img src={homeData.hero_bg || defaultHome.hero_bg} alt="Hutan Bakau Indonesia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[600px] lg:h-[700px] flex items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-green-500/20 border border-green-400/30 text-green-100 text-sm font-semibold mb-6 backdrop-blur-sm">Inisiatif Hijau Indonesia</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">{homeData.hero_title}</h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed">{homeData.hero_description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg flex items-center justify-center">
                Mulai Berdonasi <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
              <Sprout className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">{homeData.stat_trees}</h3>
            <p className="text-slate-500 font-medium">Pohon Bakau Ditanam</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
              <Users className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">{homeData.stat_volunteers}</h3>
            <p className="text-slate-500 font-medium">Relawan & Petani</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-14 w-14 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mb-4">
              <Globe className="h-7 w-7" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 mb-1">24</h3>
            <p className="text-slate-500 font-medium">Provinsi Terjangkau</p>
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

      <section id="tentang" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-green-200/50 rounded-3xl transform -rotate-3 z-0"></div>
              <img src={aboutData.image || defaultAbout.image} alt="Akar Pohon Bakau yang Kuat" className="relative z-10 rounded-2xl shadow-xl w-full object-cover h-[500px]" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-green-500"></span>
                <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">Tentang Kami</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">{aboutData.title}</h2>
              <div className="text-slate-600 text-lg mb-8 leading-relaxed whitespace-pre-wrap">{aboutData.main_content}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Fokus Program Kami</h2>
            <p className="text-lg text-slate-600">Pendekatan holistik kami tidak hanya berhenti pada penanaman, melainkan memastikan ekosistem dan masyarakat dapat bertumbuh bersama.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-green-700 z-10">{program.status || "Berjalan"}</span>
                  <img src={program.thumbnail || defaultPrograms[0].thumbnail} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{program.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">{program.summary}</p>
                  <a href="#" className="text-green-600 font-semibold inline-flex items-center hover:text-green-700 mt-auto">
                    Baca Selengkapnya <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Leaf className="h-8 w-8 text-green-500" />
            <span className="font-bold text-2xl text-white tracking-tight">
              Bakau<span className="text-teal-500">Nusantara</span>
            </span>
          </div>
          <p className="text-slate-500">&copy; {new Date().getFullYear()} BakauNusantara. Mengembalikan sabuk hijau pesisir Indonesia.</p>
        </div>
      </footer>
    </div>
  );
}
