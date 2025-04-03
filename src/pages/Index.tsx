
import React from 'react';
import PixelContainer from '@/components/PixelContainer';
import PixelHeading from '@/components/PixelHeading';
import PixelButton from '@/components/PixelButton';
import PixelNavbar from '@/components/PixelNavbar';
import PixelDivider from '@/components/PixelDivider';
import ProgressBar from '@/components/ProgressBar';
import ProjectCard from '@/components/ProjectCard';
import { Gamepad, Joystick, ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-retro-black scanlines">
      <PixelNavbar />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-pixel text-3xl md:text-5xl text-retro-yellow mb-6 leading-relaxed">
                MUHAMMAD
                <span className="block text-retro-green">RIVKY</span>
                <span className="block text-retro-red">PORTOFOLIO</span>
              </h1>
              
              <p className="font-pixel-secondary text-lg mb-8 text-retro-lightgray">
                Mahasiswa Ilmu Komputer yang fokus pada pengembangan program otomatisasi, web scraping, dan IoT. Tekan START untuk memulai perjalanan!
              </p>
              
              <div className="flex flex-wrap gap-4">
                <PixelButton onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                  START GAME
                </PixelButton>
                
                <PixelButton 
                  type="secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  CONTACT ME
                </PixelButton>
              </div>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 animate-pixel-float">
                <div className="absolute inset-0 bg-retro-purple rounded-full opacity-20 animate-pulse"></div>
                <div className="relative flex items-center justify-center h-full">
                  <div className="w-56 h-56 overflow-hidden rounded-full border-4 border-retro-yellow pixel-borders">
                    <img 
                      src="/lovable-uploads/95c3119f-be92-4545-b82f-6f6ef7240513.png" 
                      alt="Muhammad Rivky" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <ArrowDown className="w-8 h-8 text-retro-yellow animate-pixel-bounce" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">ABOUT ME</PixelHeading>
          
          <PixelContainer className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-retro-black p-6 pixel-borders mb-6">
                  <div className="flex items-center mb-4">
                    <Joystick className="w-8 h-8 text-retro-yellow mr-3" />
                    <PixelHeading level={3} className="!mb-0">CHARACTER STATS</PixelHeading>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 font-pixel-secondary">
                    <div>
                      <p className="text-retro-yellow">NAME:</p>
                      <p className="text-retro-lightgray">MUHAMMAD RIVKY</p>
                    </div>
                    <div>
                      <p className="text-retro-yellow">CLASS:</p>
                      <p className="text-retro-lightgray">COMPUTER SCIENCE</p>
                    </div>
                    <div>
                      <p className="text-retro-yellow">LEVEL:</p>
                      <p className="text-retro-lightgray">STUDENT</p>
                    </div>
                    <div>
                      <p className="text-retro-yellow">LOCATION:</p>
                      <p className="text-retro-lightgray">PAREPARE, SULAWESI</p>
                    </div>
                  </div>
                </div>
                
                <p className="font-pixel-secondary text-lg mb-4">
                  Saya adalah mahasiswa di Institut Teknologi Bacharuddin Jusuf Habibie, Program Studi Ilmu Komputer.
                  Minat saya meliputi pengembangan program otomatisasi, web scraping, web crawling, dan teknologi IoT.
                </p>
                
                <p className="font-pixel-secondary text-lg">
                  Bahasa pemrograman utama yang saya kuasai adalah Python, dan saya selalu bersemangat untuk mengembangkan
                  keterampilan baru dalam dunia pemrograman dan teknologi.
                </p>
              </div>
              
              <div className="bg-retro-black p-6 pixel-borders">
                <PixelHeading level={3}>ACHIEVEMENTS</PixelHeading>
                
                <ul className="space-y-4 font-pixel-secondary">
                  <li className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-3 bg-retro-yellow pixel-borders flex-shrink-0"></div>
                    <span>Belajar Dasar Visualisasi Data – Dicoding Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-3 bg-retro-green pixel-borders flex-shrink-0"></div>
                    <span>Memulai Pemrograman dengan Python – Dicoding Indonesia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-3 bg-retro-blue pixel-borders flex-shrink-0"></div>
                    <span>Junior Network Administrator – Digital Talent Scholarship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 mt-1 mr-3 bg-retro-red pixel-borders flex-shrink-0"></div>
                    <span>Belajar Machine Learning untuk Pemula – Dicoding Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>
          </PixelContainer>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-retro-darkblue/30">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">SKILLS & ABILITIES</PixelHeading>
          
          <PixelContainer className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <PixelHeading level={2}>TECHNICAL SKILLS</PixelHeading>
                
                <ProgressBar label="Python" value={90} color="yellow" />
                <ProgressBar label="Web Scraping" value={85} color="yellow" />
                <ProgressBar label="IoT" value={80} color="blue" />
                <ProgressBar label="Android (Flet)" value={75} color="green" />
                <ProgressBar label="Machine Learning" value={65} color="blue" />
                <ProgressBar label="Networking" value={60} color="red" />
              </div>
              
              <div>
                <PixelHeading level={2}>EQUIPMENT & TOOLS</PixelHeading>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Python", level: "ADVANCED" },
                    { name: "VS Code", level: "SKILLED" },
                    { name: "Git", level: "SKILLED" },
                    { name: "IoT Devices", level: "ADVANCED" },
                    { name: "Web Scraping", level: "EXPERT" },
                    { name: "Flet", level: "SKILLED" },
                    { name: "Machine Learning", level: "INTERMEDIATE" },
                    { name: "Network Admin", level: "SKILLED" }
                  ].map((tool, index) => (
                    <div key={index} className="bg-retro-black p-3 pixel-borders">
                      <p className="font-pixel-secondary text-retro-yellow">{tool.name}</p>
                      <p className="font-pixel-secondary text-xs text-retro-lightgray">{tool.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PixelContainer>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">MY QUESTS & PROJECTS</PixelHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Sistem Hidroponik Otomatis",
                description: "Pemanfaatan IoT dan Kecerdasan Buatan dalam Sistem Hidroponik Otomatis Berbasis Aplikasi Mobile untuk Pertanian Berkelanjutan.",
                technologies: ["IoT", "AI", "API", "Mobile App"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              },
              {
                title: "Program Web Scraping",
                description: "Pengembangan program otomatisasi untuk mengumpulkan data dari berbagai sumber web.",
                technologies: ["Python", "BeautifulSoup", "Selenium", "Data Analysis"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              },
              {
                title: "Aplikasi Android dengan Flet",
                description: "Pengembangan aplikasi Android menggunakan framework Flet dan Python.",
                technologies: ["Python", "Flet", "Android", "UI/UX"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              },
              {
                title: "Visualisasi Data",
                description: "Proyek visualisasi data untuk mempresentasikan data kompleks dalam bentuk yang mudah dipahami.",
                technologies: ["Python", "Matplotlib", "Pandas", "Data Viz"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              },
              {
                title: "Machine Learning untuk Pemula",
                description: "Implementasi algoritma machine learning dasar untuk analisis prediktif.",
                technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              },
              {
                title: "Network Administration Tools",
                description: "Pengembangan alat-alat untuk administrasi jaringan dan pemantauan.",
                technologies: ["Python", "Networking", "Monitoring", "Security"],
                imageUrl: "/placeholder.svg",
                projectUrl: "#"
              }
            ].map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
          
          <div className="text-center">
            <PixelButton type="secondary" onClick={() => window.open('https://github.com/mrivky67/', '_blank')}>
              VIEW ALL PROJECTS
            </PixelButton>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">WORK EXPERIENCE</PixelHeading>
          
          <PixelContainer className="mb-12">
            <div className="space-y-8">
              <div className="bg-retro-black p-6 pixel-borders">
                <PixelHeading level={3} className="text-retro-yellow">KAOS SABLON & BORDIR KONVEKSI</PixelHeading>
                <p className="font-pixel-secondary text-retro-green mb-2">Deng Dypro CV. Dynamic Sejahtera • April 2021 - Agustus 2021</p>
                <p className="font-pixel-secondary">Bekerja sebagai desainer, bertanggung jawab dalam pembuatan desain untuk sablon dan bordir.</p>
              </div>
              
              <div className="bg-retro-black p-6 pixel-borders">
                <PixelHeading level={3} className="text-retro-yellow">LAGO'TA CAFE & RESTO</PixelHeading>
                <p className="font-pixel-secondary text-retro-green mb-2">Security & Portal Parkir • November 2021 - Agustus 2022</p>
                <p className="font-pixel-secondary">Bekerja sebagai security dan petugas portal parkir.</p>
              </div>
              
              <div className="bg-retro-black p-6 pixel-borders">
                <PixelHeading level={3} className="text-retro-yellow">SHENIOR KURIR</PixelHeading>
                <p className="font-pixel-secondary text-retro-green mb-2">Kurir • Desember 2020 - Februari 2021</p>
                <p className="font-pixel-secondary">Bekerja sebagai kurir, bertanggung jawab atas pengiriman barang secara tepat waktu dan aman.</p>
              </div>
              
              <div className="bg-retro-black p-6 pixel-borders">
                <PixelHeading level={3} className="text-retro-yellow">PELATIHAN GADA PRATAMA SECURITY</PixelHeading>
                <p className="font-pixel-secondary text-retro-green mb-2">PT. Pallawa Barokah Nusantara • Oktober 2021</p>
                <p className="font-pixel-secondary">Mengikuti pelatihan keamanan dasar.</p>
              </div>
            </div>
          </PixelContainer>
        </div>
      </section>
      
      {/* Education & Certification Section */}
      <section id="education" className="py-20 px-4 bg-retro-darkblue/30">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">EDUCATION & CERTIFICATIONS</PixelHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <PixelContainer>
              <PixelHeading level={2}>EDUCATION</PixelHeading>
              
              <div className="bg-retro-black p-6 pixel-borders mb-6">
                <PixelHeading level={3} className="text-retro-yellow">INSTITUT TEKNOLOGI BACHARUDDIN JUSUF HABIBIE</PixelHeading>
                <p className="font-pixel-secondary text-retro-green mb-2">Jurusan: Teknik Produksi dan Industri</p>
                <p className="font-pixel-secondary">Program Studi: Ilmu Komputer</p>
              </div>
            </PixelContainer>
            
            <PixelContainer>
              <PixelHeading level={2}>CERTIFICATIONS</PixelHeading>
              
              <div className="space-y-4">
                {[
                  { name: "Belajar Dasar Visualisasi Data", source: "Dicoding Indonesia", date: "Februari 2024 - Februari 2027" },
                  { name: "Memulai Pemrograman dengan Python", source: "Dicoding Indonesia", date: "Maret 2024 - Maret 2027" },
                  { name: "Junior Network Administrator", source: "Digital Talent Scholarship", date: "Maret 2024 - Maret 2027" },
                  { name: "Belajar Machine Learning untuk Pemula", source: "Dicoding Indonesia", date: "April 2024 - April 2027" },
                  { name: "Artificial Intelligence Technology and Applications", source: "Huawei", date: "Agustus 2024" },
                  { name: "Micro Skill ElevAlte", source: "Digital Talent Scholarship", date: "Februari 2025" },
                  { name: "Micro Skill Pemrograman", source: "Digital Talent Scholarship", date: "Maret 2025" }
                ].map((cert, index) => (
                  <div key={index} className="bg-retro-black p-4 pixel-borders">
                    <p className="font-pixel-secondary text-retro-yellow">{cert.name}</p>
                    <p className="font-pixel-secondary text-xs text-retro-green">{cert.source}</p>
                    <p className="font-pixel-secondary text-xs text-retro-lightgray">{cert.date}</p>
                  </div>
                ))}
              </div>
            </PixelContainer>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-retro-darkblue/30">
        <div className="max-w-6xl mx-auto">
          <PixelHeading level={1} className="text-center mb-12">CONTACT ME</PixelHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelContainer className="h-full">
              <PixelHeading level={2}>SEND A MESSAGE</PixelHeading>
              
              <form className="space-y-4">
                <div>
                  <label className="block font-pixel-secondary mb-1">Your Name:</label>
                  <input 
                    type="text" 
                    className="w-full bg-retro-black border-2 border-retro-lightgray p-3 text-white font-pixel-secondary focus:outline-none focus:border-retro-yellow"
                  />
                </div>
                
                <div>
                  <label className="block font-pixel-secondary mb-1">Your Email:</label>
                  <input 
                    type="email" 
                    className="w-full bg-retro-black border-2 border-retro-lightgray p-3 text-white font-pixel-secondary focus:outline-none focus:border-retro-yellow"
                  />
                </div>
                
                <div>
                  <label className="block font-pixel-secondary mb-1">Your Message:</label>
                  <textarea 
                    rows={6}
                    className="w-full bg-retro-black border-2 border-retro-lightgray p-3 text-white font-pixel-secondary focus:outline-none focus:border-retro-yellow"
                  ></textarea>
                </div>
                
                <div>
                  <PixelButton className="w-full">SEND MESSAGE</PixelButton>
                </div>
              </form>
            </PixelContainer>
            
            <PixelContainer type="dialog" className="flex flex-col h-full">
              <PixelHeading level={2}>CONNECT WITH ME</PixelHeading>
              
              <div className="font-pixel-secondary space-y-6 flex-1">
                <p className="leading-relaxed">
                  Tertarik berkolaborasi dalam proyek? Saya selalu mencari kesempatan untuk mengembangkan keterampilan dan pengetahuan!
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-retro-yellow mr-3" />
                    <p>muhrivky67@gmail.com</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-retro-blue mr-3" />
                    <p>+62 85823358559</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-retro-green pixel-borders mr-3"></div>
                    <p>Parepare, Sulawesi Selatan</p>
                  </div>
                </div>
                
                <PixelDivider color="accent" className="!my-6" />
                
                <div>
                  <p className="mb-4">Temukan saya di:</p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/mrivky67/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center uppercase bg-retro-darkblue hover:bg-retro-purple transition-colors px-3 py-2"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Github
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-rivky-421a16282/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center uppercase bg-retro-darkblue hover:bg-retro-purple transition-colors px-3 py-2"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://mrivky67.github.io/Portofolio/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="uppercase bg-retro-darkblue hover:bg-retro-purple transition-colors px-3 py-2"
                    >
                      Portfolio
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="font-pixel text-xs text-center text-retro-yellow animate-pixel-blink">
                  PRESS SELECT TO CONTINUE
                </p>
              </div>
            </PixelContainer>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-6 px-4 bg-retro-black border-t-4 border-retro-darkblue">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-pixel text-sm text-retro-lightgray mb-4 sm:mb-0">
              © 2024 MUHAMMAD RIVKY
            </p>
            
            <p className="font-pixel-secondary text-retro-lightgray">
              CREATED WITH REACT & TAILWIND CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
