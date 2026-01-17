
import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  Activity,
  Database,
  User,
  Mail,
  Phone,
  MapPin,
  History,
  ShieldCheck,
  ChevronRight,
  Monitor,
  HardDrive,
  GraduationCap,
  Briefcase,
  Calendar
} from 'lucide-react';

const DATA = {
  profile: {
    name: "FARIZ JEFRI",
    fullName: "MUHAMMAD FARIZ BIN JEFRI",
    modelNo: "MUHAMMAD FARIZ BIN JEFRI",
    serialNo: "SBZR-7274.CA3C ID",
    birthday: "26 MARCH 1992",
    about: "I am a punctual, self-motivated person, who is excellent at multitasking, extremely adaptive to work under pressure, a professional team player who values teamwork, but also enjoys working independently.",
    contact: {
      phone: "017 684 9067",
      email: "farizjefri6871@gmail.com",
      address: "DI ANTARA SYURGA DAN NERAKA"
    }
  },
  experience: [
    {
      period: "JAN 2026 - PRESENT",
      role: "Cabin Crew",
      company: "Air Asia",
      location: "Kuala Lumpur International Airport 2"
    },
    {
      period: "JAN 2025 - DEC 2025",
      role: "Customer Service",
      company: "ROYCE' Chocolate",
      location: "One Utama Shopping Centre"
    },
    {
      period: "AUG 2023 - DEC 2024",
      role: "Entrepreneur | Art / Bakery",
      company: "Self-Employed",
      location: "Shah Alam, Selangor"
    },
    {
      period: "JUL - AUG 2023",
      role: "Guest Service Assistant",
      company: "Stay With Bintang",
      location: "Bukit Bintang, Kuala Lumpur"
    },
    {
      period: "JUN 2022 - JAN 2023",
      role: "Guest Service Assistant",
      company: "Avantee Hotel",
      location: "Bandar Utama, Petaling Jaya"
    },
    {
      period: "SEP 2020 - APR 2021",
      role: "Sales Assistant",
      company: "Krispy Kreme",
      location: "Central I-City Shah Alam"
    },
    {
      period: "DEC 2019 - JUL 2020",
      role: "Marshall Customer Service",
      company: "Escape Room",
      location: "e-Curve Mutiara Damansara"
    },
    {
      period: "MAR 2018 - NOV 2019",
      role: "Receptionist",
      company: "Royale Chulan The Curve",
      location: "Mutiara Damansara"
    }
  ],
  education: [
    {
      period: "2012 - 2016",
      school: "Sek. Men. Keb. Bandar Utama (4)",
      location: "Petaling Jaya, Selangor",
      cert: "Sijil Pelajaran Malaysia 2016 (SPM)"
    },
    {
      period: "2006 - 2011",
      school: "Sek Keb Bandar Utama (4)",
      location: "Petaling Jaya, Selangor",
      cert: "Ujian Pencapaian Sekolah Rendah 2011 (UPSR)"
    }
  ],
  skills: [
    { name: "MICROSOFT WORDS", level: 90 },
    { name: "POWER POINT", level: 75 },
    { name: "CUSTOMER SERVICE", level: 95 },
    { name: "TEAMWORK", level: 98 }
  ],
  references: [
    {
      name: "ZAHIR",
      role: "CHIEF OPERATIONS / STAY WITH BINTANG",
      phone: "010 432 6047",
      email: "farizjefri6871@gmail.com"
    }
  ]
};

const SkillMeter: React.FC<{ name: string, level: number }> = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="mono text-[10px] md:text-xs font-bold uppercase">{name}</span>
      <span className="mono text-[10px] md:text-xs vhs-text-orange font-bold">{level}%</span>
    </div>
    <div className="h-4 bg-black/10 flex p-0.5 border border-black/20">
      <div
        className="h-full vhs-bg-orange transition-all duration-1000"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'profile' | 'education' | 'experience' | 'reference'>('profile');

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0a0a0a]">
      <div className="vhs-container w-full h-full md:w-[96vw] md:h-[94vh] flex flex-col md:flex-row shadow-2xl relative overflow-hidden">

        {/* Left Section: Cassette Mechanical Detail */}
        <div className="hidden lg:flex w-64 bg-[#141414] p-8 flex-col justify-between border-r border-[#2a2a2a] relative shrink-0">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="w-4 h-4 rounded-full vhs-bg-orange shadow-[0_0_15px_#ff4d00]"></div>
              <div className="mono text-[10px] text-zinc-600 font-bold uppercase">REC</div>
            </div>
            <div className="mono text-[10px] text-zinc-500 uppercase tracking-widest text-right leading-relaxed">
              SIGNAL: STABLE<br />PWR: 100%
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow space-y-12 py-6">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-zinc-800 flex items-center justify-center bg-black/40 shadow-inner overflow-hidden">
                <div className="w-24 h-24 rounded-full border border-zinc-700/50 border-dashed animate-spin flex items-center justify-center" style={{ animationDuration: '20s' }}>
                  <div className="w-6 h-1 bg-zinc-700"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 w-full text-center mono text-[8px] text-zinc-600 font-bold uppercase">REEL_01</div>
            </div>
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-zinc-800 flex items-center justify-center bg-black/40 shadow-inner overflow-hidden">
                <div className="w-24 h-24 rounded-full border border-zinc-700/50 border-dashed animate-spin flex items-center justify-center" style={{ animationDuration: '30s' }}>
                  <div className="w-6 h-1 bg-zinc-700"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 w-full text-center mono text-[8px] text-zinc-600 font-bold uppercase">REEL_02</div>
            </div>
          </div>

          <div className="flex items-end gap-4">
            <div className="vhs-vertical-text mono text-zinc-600 text-[10px] tracking-[0.5em] font-black py-4 uppercase border-r border-zinc-800 pr-4">
              VH_SYSTEM
            </div>
            <div className="flex-1 flex flex-col justify-end">
              <div className="text-[8px] mono text-zinc-700 font-bold">MFJ_v4.0</div>
            </div>
          </div>
        </div>

        {/* Right Section: The Label (Main Content) */}
        <div className="flex-1 vhs-label flex flex-col relative overflow-hidden">

          <header className="px-6 py-4 md:px-8 md:py-6 border-b-[6px] border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="bg-orange-600 text-white px-4 py-1.5 text-[10px] md:text-xs font-black mono tracking-widest shadow-md">MFJ_CORP</div>
              <h1 className="text-xl md:text-3xl lg:text-4xl font-black stencil leading-none tracking-tighter uppercase whitespace-nowrap">
                {DATA.profile.modelNo}
              </h1>
            </div>

            <div className="hidden md:flex gap-2 items-center">
              {[...Array(8)].map((_, i) => <div key={i} className="w-6 h-1 bg-black/10"></div>)}
              <div className="mono text-[10px] font-black text-black/30 uppercase ml-4">SYSTEM_READY</div>
            </div>
          </header>

          <nav className="flex w-full border-b border-black/10 bg-black/5 overflow-x-auto">
            {[
              { id: 'profile', label: 'PROFILE BACKGROUND', icon: User },
              { id: 'education', label: 'ACADEMIC ARCHIVES', icon: GraduationCap },
              { id: 'experience', label: 'WORKING HISTORY', icon: Briefcase },
              { id: 'reference', label: 'REFERENCES', icon: ShieldCheck }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id as any)}
                className={`flex-1 min-w-[80px] flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 py-3 md:py-6 mono text-[9px] md:text-sm font-black transition-all border-b-[4px] md:border-b-[6px] ${activeSection === tab.id
                  ? 'border-orange-600 text-orange-600 bg-white'
                  : 'border-transparent text-black/40 hover:text-black/70'
                  }`}
              >
                <tab.icon size={window.innerWidth < 768 ? 20 : 18} />
                <span className="hidden lg:inline">{tab.label}</span>
                <span className="lg:hidden">{tab.id === 'profile' ? 'PROFILE' : (tab.id === 'education' ? 'EDU' : (tab.id === 'experience' ? 'WORK' : 'REFS'))}</span>
              </button>
            ))}
          </nav>

          <div className="flex-1 overflow-y-auto vhs-label-scroll p-6 md:p-12">
            {activeSection === 'profile' && (
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-12">
                  <section>
                    <h3 className="mono text-sm md:text-base font-black mb-6 border-l-8 border-orange-600 pl-4 uppercase tracking-widest">Profile Abstract</h3>

                    {/* Profile Photo */}
                    <div className="mb-10 relative group px-1">
                      <div className="aspect-[4/5] w-full max-w-[320px] mx-auto md:mx-0 border-8 border-black/10 bg-black/5 relative overflow-hidden shadow-2xl">
                        <img
                          src="/profile photo.JPG"
                          alt="FARIZ JEFRI"
                          className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 pointer-events-none border-2 border-orange-600/30 m-1"></div>
                        <div className="absolute top-2 right-2 bg-orange-600 px-2 py-0.5 text-[8px] mono text-white font-black">MFJ_ORIGINAL_RENDER</div>
                      </div>
                      <div className="mt-2 mono text-[10px] text-black/30 font-bold uppercase tracking-widest text-center md:text-left">VISUAL_ENTRY_01.JPG</div>
                    </div>

                    <div className="space-y-4 mb-10">
                      <div className="bg-black/5 p-5 border-l-4 border-orange-600">
                        <div className="mono text-[10px] opacity-40 font-black mb-2 uppercase tracking-widest">ABOUT_MISSION</div>
                        <p className="mono text-sm tracking-tight opacity-90 leading-relaxed font-bold">
                          {DATA.profile.about}
                        </p>
                      </div>
                      <div className="bg-black/5 p-5 border-l-4 border-orange-600">
                        <div className="mono text-[10px] opacity-40 font-black mb-2 uppercase tracking-widest">UNIT_IDENTIFIER</div>
                        <p className="mono text-sm font-black uppercase tracking-widest">
                          {DATA.profile.serialNo}
                        </p>
                      </div>
                    </div>

                    <h3 className="mono text-sm md:text-base font-black mb-6 border-l-8 border-orange-600 pl-4 uppercase tracking-widest">Skills</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {DATA.skills.map((skill, idx) => (
                        <SkillMeter key={idx} name={skill.name} level={skill.level} />
                      ))}
                    </div>
                  </section>

                  <section className="p-8 bg-black text-white relative overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 p-2 opacity-20"><Activity size={48} /></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <Database size={24} className="vhs-text-orange" />
                        <span className="mono text-sm font-black tracking-[0.3em]">SYSTEM METADATA</span>
                      </div>
                      <div className="grid grid-cols-1 gap-y-4">
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="mono text-[10px] opacity-40 uppercase">DATA_STREAM_01</span>
                          <span className="mono text-xs font-black vhs-text-orange">BAHASA [EXCELLENT]</span>
                        </div>
                        <div className="flex justify-between border-b border-white/10 pb-2">
                          <span className="mono text-[10px] opacity-40 uppercase">DATA_STREAM_02</span>
                          <span className="mono text-xs font-black vhs-text-orange">ENGLISH [ADVANCED]</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="mono text-[10px] opacity-40 uppercase">UPLINK_STABILITY</span>
                          <span className="mono text-[10px] font-bold text-green-400">OPTIMAL</span>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="space-y-12">
                  <section>
                    <h3 className="mono text-sm md:text-base font-black mb-6 border-l-8 border-orange-600 pl-4 uppercase tracking-widest">Identification Data</h3>
                    <div className="space-y-4">
                      <div className="bg-black/5 p-6 border border-black/10 relative group">
                        <Calendar className="absolute top-4 right-4 text-black/10 group-hover:vhs-text-orange transition-colors" size={24} />
                        <div className="mono text-[10px] opacity-40 font-black mb-1 uppercase tracking-widest">BIRTHDAY</div>
                        <div className="michroma text-sm md:text-base font-black uppercase">{DATA.profile.birthday}</div>
                      </div>

                      <div className="bg-black/5 p-6 border border-black/10 relative group">
                        <Phone className="absolute top-4 right-4 text-black/10 group-hover:vhs-text-orange transition-colors" size={24} />
                        <div className="mono text-[10px] opacity-40 font-black mb-1 uppercase tracking-widest">COMMS_LINK</div>
                        <div className="mono text-sm md:text-lg font-black">{DATA.profile.contact.phone}</div>
                      </div>

                      <div className="bg-black/5 p-6 border border-black/10 relative group">
                        <Mail className="absolute top-4 right-4 text-black/10 group-hover:vhs-text-orange transition-colors" size={24} />
                        <div className="mono text-[10px] opacity-40 font-black mb-1 uppercase tracking-widest">UPLINK_PROTOCOL</div>
                        <div className="mono text-sm md:text-lg font-black lowercase">{DATA.profile.contact.email}</div>
                      </div>

                      <div className="bg-black/5 p-6 border border-black/10 relative group">
                        <MapPin className="absolute top-4 right-4 text-black/10 group-hover:vhs-text-orange transition-colors" size={24} />
                        <div className="mono text-[10px] opacity-40 font-black mb-1 uppercase tracking-widest">STATION_COORD</div>
                        <div className="michroma text-xs md:text-sm font-black uppercase leading-relaxed">
                          {DATA.profile.contact.address}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            )}

            {activeSection === 'education' && (
              <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="vhs-text-orange" size={24} />
                    <h2 className="mono text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-black/10 flex-1">
                      Academic Archives
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {DATA.education.map((edu, idx) => (
                      <div key={idx} className="flex gap-6 group relative">
                        <div className="w-24 shrink-0 mono text-xs md:text-sm font-black vhs-text-orange pt-1 tracking-tighter">{edu.period}</div>
                        <div className="flex-1 pb-6 border-b border-black/10 group-last:border-0">
                          <h3 className="michroma text-base md:text-xl font-black uppercase leading-tight mb-2">
                            {edu.school}
                          </h3>
                          <div className="space-y-1">
                            <p className="mono text-xs text-black/60 uppercase font-bold flex items-center gap-2">
                              <MapPin size={12} /> {edu.location}
                            </p>
                            <p className="mono text-sm font-black tracking-tight vhs-text-orange">
                              {edu.cert}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Briefcase className="vhs-text-orange" size={24} />
                    <h2 className="mono text-xl md:text-2xl font-black uppercase tracking-widest border-b-2 border-black/10 flex-1">
                      Field Operations
                    </h2>
                  </div>
                  <div className="space-y-8">
                    {DATA.experience.map((exp, idx) => (
                      <div key={idx} className="flex gap-6 group relative">
                        <div className="w-24 shrink-0 mono text-xs md:text-sm font-black vhs-text-orange pt-1 tracking-tighter">{exp.period}</div>
                        <div className="flex-1 pb-6 border-b border-black/10 group-last:border-0">
                          <h3 className="michroma text-base md:text-xl font-black uppercase leading-tight mb-2 group-hover:vhs-text-orange transition-colors">
                            {exp.role}
                          </h3>
                          <div className="space-y-1">
                            <p className="mono text-sm text-black/60 uppercase font-bold tracking-widest bg-black/5 px-2 py-0.5 inline-block">
                              {exp.company}
                            </p>
                            <p className="mono text-xs text-black/40 uppercase font-bold flex items-center gap-2">
                              <MapPin size={12} /> {exp.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeSection === 'reference' && (
              <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {DATA.references.map((ref, idx) => (
                  <div key={idx} className="bg-[#141414] text-white p-12 md:p-20 relative overflow-hidden border-2 border-orange-600/30 text-center">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid.png')]"></div>

                    <div className="relative z-10 space-y-8">
                      <div className="inline-block mono text-[10px] md:text-xs vhs-text-orange font-black tracking-[0.5em] border border-orange-600 px-4 py-2 mb-4">
                        AUTHORIZED_SUPERVISOR
                      </div>

                      <div className="space-y-4">
                        <h3 className="michroma text-4xl md:text-6xl font-black uppercase tracking-tight">{ref.name}</h3>
                        <p className="mono text-sm md:text-lg opacity-60 uppercase font-bold tracking-[0.3em]">{ref.role}</p>
                      </div>

                      <div className="flex justify-center mt-12">
                        <a
                          href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                          className="group flex items-center gap-6 mono text-2xl md:text-4xl border-2 border-white/10 px-10 py-6 hover:border-orange-600 hover:vhs-text-orange transition-all font-black bg-white/5"
                        >
                          <Phone size={32} />
                          {ref.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <footer className="p-6 md:p-8 bg-black/5 border-t border-black/10 flex justify-between items-center">
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full vhs-bg-orange animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
              ))}
            </div>
            <div className="mono text-[10px] md:text-xs font-black opacity-30 flex flex-wrap gap-x-8 gap-y-2 uppercase tracking-[0.1em] justify-end flex-1 px-4">
              <span className="hidden sm:inline">PAL_STANDARD_SYSTEM_ACTIVE</span>
              <span>EST_1999_FARIZ_REDACTED</span>
              <span className="italic lowercase opacity-60">-create by yeatz2025</span>
            </div>
            <div className="w-12 h-6 border-2 border-black/15 flex items-center justify-center p-1">
              <div className="w-2 h-full vhs-bg-orange"></div>
            </div>
          </footer>
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_100%)]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-zinc-900/40 rounded-full blur-[150px]"></div>
      </div>
    </div>
  );
};

export default App;
