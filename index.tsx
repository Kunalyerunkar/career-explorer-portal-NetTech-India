import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Search,
  BookOpen,
  Briefcase,
  CheckCircle,
  ArrowRight,
  XCircle,
  Code2,
  ChevronLeft,
  X,
  Sun,
  Moon
} from 'lucide-react';
import { JOB_DOMAINS } from './JOB_DOMAINS.js';

/**
 * Custom Modal Component
 */
const Modal = ({ isOpen, onClose, title, children }: {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-slate-800 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 dark:border-slate-700">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white line-clamp-1">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-500"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 scrollbar-thin scrollbar-thumb-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<any>(null);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [searchTerm, theme]);

  const filteredDomains = useMemo(() => {
    const term = searchTerm.toLowerCase();
    if (!term) return JOB_DOMAINS;

    return JOB_DOMAINS.filter(domain => {
      if (domain.title.toLowerCase().includes(term)) return true;
      if (domain.skills.some(skill => skill.toLowerCase().includes(term))) return true;
      if (domain.roles.some(role =>
        role.title.toLowerCase().includes(term) ||
        role.skills.some(skill => skill.toLowerCase().includes(term))
      )) return true;
      return false;
    });
  }, [searchTerm]);

  const relatedRoles = useMemo(() => {
    if (!selectedRole) return [];
    const related: any[] = [];
    const currentSkills = new Set(selectedRole.skills.map((s: string) => s.toLowerCase()));

    JOB_DOMAINS.forEach(domain => {
      domain.roles.forEach(role => {
        if (role.title === selectedRole.title) return;
        const overlap = role.skills.filter(s => currentSkills.has(s.toLowerCase()));
        if (overlap.length > 0) {
          related.push({
            role,
            domainTitle: domain.title,
            domainId: domain.id,
            overlapCount: overlap.length
          });
        }
      });
    });

    return related
      .sort((a, b) => b.overlapCount - a.overlapCount)
      .slice(0, 3);
  }, [selectedRole]);

  const handleOpenDomain = (domain: any) => {
    setSelectedDomain(domain);
    setSelectedRole(null);
  };

  const handleOpenRole = (role: any) => {
    setSelectedRole(role);
  };

  const closeModals = () => {
    setSelectedDomain(null);
    setSelectedRole(null);
  };

  const closeRoleModal = () => {
    setSelectedRole(null);
  };

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const handleSwitchDomain = (domainId: number, role: any) => {
    const targetDomain = JOB_DOMAINS.find(d => d.id === domainId);
    if (targetDomain) {
      setSelectedDomain(targetDomain);
      setSelectedRole(role);
    }
  };

  return (
    <div className="bg-ntbg dark:bg-slate-900 min-h-screen transition-colors duration-500 font-sans flex flex-col">

      {/* Navigation Bar - Responsive optimizations */}
      <nav className="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
          <div className="flex-shrink-0">
            <img
              src={theme === 'dark' ? 'img/NetTech India logo W.png' : 'img\NetTech India logo.png'}
              alt="NetTech India"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-500"
            />
          </div>

          <div className="hidden md:flex flex-grow justify-center px-4">
            <h1 className="text-center font-extrabold text-gray-900 dark:text-white leading-tight animate-fade-in-up md:text-xl lg:text-2xl">
              Bridging the Gap Between <span className="text-blue-700 dark:text-blue-400">Education</span> and <span className="text-blue-700 dark:text-blue-400">Employment</span>
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 sm:p-3 rounded-full transition-all duration-300 ${theme === 'light'
                ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Updated Hero Header Section - Mobile Optimized */}
        <section className="bg-ntprimary dark:bg-slate-950 text-white py-12 sm:py-20 px-4 transition-colors duration-500">
          <div className="max-w-7xl mx-auto text-center reveal">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight">
              Discover Your Career Path With NetTech India
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2">
              Explore diverse job domains, find roles that match your skills, and plan your future with NetTech India.
            </p>
            <div className="max-w-2xl mx-auto relative group px-2">
              <div className="absolute inset-y-0 left-4 sm:left-6 flex items-center pointer-events-none">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search by Job Role, Domain, or Skill..."
                className="block w-full pl-12 sm:pl-16 pr-6 py-4 sm:py-5 border-none rounded-full bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl text-sm sm:text-lg transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Main Grid with Updated Card Design - Mobile Optimized Padding */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDomains.map((domain, index) => (
              <div
                key={domain.id}
                onClick={() => handleOpenDomain(domain)}
                className="bg-white dark:bg-slate-800 rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-slate-100 dark:border-slate-700 overflow-hidden cursor-pointer group reveal"
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <div className="p-6 sm:p-10 flex-grow">
                  <div className="flex justify-between items-start mb-4 sm:mb-6 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight pr-2">
                      {domain.title}
                    </h3>
                    <span className="bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full whitespace-nowrap">
                      {domain.roles.length} Roles
                    </span>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mb-6 sm:mb-8 line-clamp-3 leading-relaxed">
                    {domain.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-[10px] sm:text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2 sm:mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {domain.skills.slice(0, 4).map((skill: string, idx: number) => (
                        <span key={idx} className="bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-[11px] sm:text-[13px] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-slate-100 dark:border-slate-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                    {domain.skills.length > 4 && (
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 font-medium mt-2 sm:mt-3">
                        +{domain.skills.length - 4} more
                      </p>
                    )}
                  </div>
                </div>

                <div className="px-6 sm:px-10 pb-6 sm:pb-10 mt-auto">
                  <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-700 mb-4 sm:mb-6 group-hover:bg-ntprimary/30 transition-colors"></div>
                  <div className="flex items-center text-ntprimary dark:text-blue-400 font-bold text-base sm:text-lg group-hover:translate-x-2 transition-transform duration-300">
                    View Career Path
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDomains.length === 0 && (
            <div className="text-center py-16 sm:py-24 bg-white dark:bg-slate-800 rounded-[2rem] sm:rounded-[3rem] shadow-sm mt-8 reveal">
              <XCircle className="w-12 h-12 sm:w-16 sm:h-16 text-slate-300 dark:text-slate-500 mx-auto mb-4 sm:mb-6" />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">No results found</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 sm:mt-3 text-sm sm:text-lg">Try searching for something else, like "React" or "Cyber".</p>
            </div>
          )}
        </section>
      </main>

      {/* --- DOMAIN MODAL --- */}
      <Modal isOpen={!!selectedDomain && !selectedRole} onClose={closeModals} title={selectedDomain?.title}>
        <div className="space-y-8 sm:space-y-10">
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-ntprimary dark:text-blue-400 uppercase tracking-widest flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Domain Summary
            </h4>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-4 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              {selectedDomain?.description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold text-ntprimary dark:text-blue-400 uppercase tracking-widest flex items-center">
              <Code2 className="w-4 h-4 mr-2" />
              Technical Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {selectedDomain?.skills.map((skill: string, idx: number) => (
                <span key={idx} className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold hover:border-ntprimary transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 pb-4">
            <h4 className="text-xs sm:text-sm font-bold text-ntprimary dark:text-blue-400 uppercase tracking-widest flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              Roles Available
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {selectedDomain?.roles.map((role: any, idx: number) => (
                <button
                  key={idx}
                  onClick={() => handleOpenRole(role)}
                  className="text-left p-4 sm:p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-700 hover:border-ntprimary dark:hover:border-blue-500 hover:shadow-xl transition-all bg-white dark:bg-slate-800 group"
                >
                  <div className="flex justify-between items-center mb-1 sm:mb-2">
                    <h5 className="font-bold text-slate-800 dark:text-slate-200 group-hover:text-ntprimary dark:group-hover:text-blue-400 transition-colors text-sm sm:text-base">{role.title}</h5>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 dark:text-slate-600 group-hover:text-ntprimary" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{role.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      {/* --- ROLE MODAL --- */}
      <Modal isOpen={!!selectedRole} onClose={closeRoleModal} title={selectedRole?.title}>
        <div className="space-y-8 sm:space-y-10">
          <button
            onClick={closeRoleModal}
            className="flex items-center text-xs sm:text-sm font-bold text-ntprimary dark:text-blue-400 hover:underline mb-2"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            Back to {selectedDomain?.title || 'Domain'}
          </button>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-blue-100 dark:border-blue-800/40">
            <h4 className="text-xs sm:text-sm font-bold text-ntprimary dark:text-blue-300 mb-2 sm:mb-4 uppercase tracking-widest">About this role</h4>
            <p className="text-base sm:text-lg text-slate-800 dark:text-blue-100 leading-relaxed">
              {selectedRole?.description}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 mr-3" />
              Key Requirements
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {selectedRole?.skills.map((skill: string, idx: number) => (
                <div key={idx} className="flex items-center text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 mr-3 sm:mr-4" />
                  <span className="font-semibold text-sm sm:text-base">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Roles Section */}
          {relatedRoles.length > 0 && (
            <div className="pt-8 sm:pt-10 border-t border-slate-100 dark:border-slate-700">
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">Alternative Roles</h4>
              <div className="space-y-3 sm:space-y-4">
                {relatedRoles.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 sm:p-5 bg-slate-100 dark:bg-slate-900/40 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700/50 shadow-sm group">
                    <div className="space-y-0.5 sm:space-y-1">
                      <p className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">{item.role.title}</p>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Domain: {item.domainTitle}</p>
                    </div>
                    <button
                      onClick={() => handleSwitchDomain(item.domainId, item.role)}
                      className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all ml-2"
                    >
                      Switch Domain
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-4 sm:pt-6 pb-2 text-center">
            <a
              href="https://forms.gle/MjASL15RThoH6QdZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-ntprimary text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-xl sm:rounded-2xl hover:opacity-90 transition-all shadow-xl hover:scale-105 active:scale-95 duration-300 text-sm sm:text-base"
            >
              Apply for Placement
            </a>
            <p className="mt-4 text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">NetTech India — Get Placed</p>
          </div>
        </div>
      </Modal>

      {/* Footer - Mobile Optimized */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-10 sm:py-16 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <img
            src={theme === 'dark' ? 'img/NetTech India logo W.png' : 'img/NetTech India logo.png'}
            alt="NetTech India"
            className="h-10 sm:h-16 w-auto mb-6 sm:mb-8 object-contain reveal"
          />
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-slate-400 dark:text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] reveal text-center" style={{ transitionDelay: '0.1s' }}>
            <h6 className="hover:text-ntprimary transition-colors">Guidance</h6>
            <h6 className="hover:text-ntprimary transition-colors">Career Path</h6>
            <a href="https://forms.gle/MjASL15RThoH6QdZ8" className="hover:text-ntprimary transition-colors">Get Placed</a>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-100 dark:border-slate-900 w-full text-center text-slate-400 dark:text-slate-600 text-[10px] sm:text-xs reveal" style={{ transitionDelay: '0.2s' }}>
            © 2024 NetTech India Career Portal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
