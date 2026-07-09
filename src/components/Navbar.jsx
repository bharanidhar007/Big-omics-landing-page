"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [subActive, setSubActive] = useState(null);
  const [dropdownPos, setDropdownPos] = useState(0);

  // Mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [mobilePlatformExpanded, setMobilePlatformExpanded] = useState(false);

  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    {
      title: "About",
      width: "min-w-[220px]",
      link: "https://bigomics.ch/about-us/",
      items: [
        { name: "About us", link: "https://bigomics.ch/about-us/" },
        { name: "BigOmics Team & Board", link: "https://bigomics.ch/management/" },
        { name: "Strategic Partners", link: "https://bigomics.ch/about-us/our-partnerships/" },
        { name: "Investors", link: "https://bigomics.ch/investors" },
      ],
    },
    {
      title: "Benefits",
      width: "min-w-[280px]",
      link: "https://bigomics.ch/benefits/",
      items: [
        { name: "Omics Playground for Biologists", link: "https://bigomics.ch/omics-playground-for-biologists/" },
        { name: "Omics Playground for Bioinformaticians", link: "https://bigomics.ch/omics-playground-for-bioinformaticians/" },
        { name: "Omics Playground for Managers", link: "https://bigomics.ch/omics-playground-for-managers/" },
      ],
    },
    {
      title: "Pricing",
      width: "min-w-[100px]",
      link: "https://bigomics.ch/pricing/",
      items: [],
    },
    {
      title: "Platform",
      width: "w-[180px]",
      platformWidth: "w-[440px]",
      link: "https://bigomics.ch/platforms/",
      items: [],
      isPlatform: true,
    },
    {
      title: "Solutions",
      width: "min-w-[150px]",
      link: "https://bigomics.ch/omics-playground-for-drug-discovery/",
      items: [
        { name: "Drug Discovery", link: "https://bigomics.ch/omics-playground-for-drug-discovery/" },
      ],
    },
    {
      title: "Resources",
      width: "min-w-[180px]",
      link: "https://bigomics.ch/blog/",
      items: [
        { name: "Blog", link: "https://bigomics.ch/blog/" },
        { name: "Scientific Insights", link: "https://bigomics.ch/blog/category/scientific-insights/" },
        { name: "Case Studies", link: "https://bigomics.ch/case-studies/" },
        { name: "Press releases", link: "https://bigomics.ch/blog/category/press-release/" },
        { name: "Tutorials", link: "https://bigomics.ch/tutorials/" },
        { name: "Events", link: "https://bigomics.ch/events/" },
        { name: "Community forum", link: "https://groups.google.com/g/omicsplayground" },
        { name: "Careers", link: "https://bigomics.ch/blog/category/careers/" },
      ],
    },
    {
      title: "Contact Us",
      width: "min-w-[240px]",
      link: "https://bigomics.ch/contact-us/",
      items: [
        { name: "Contact us", link: "https://bigomics.ch/contact-us/" },
        { name: "LinkedIn", link: "https://www.linkedin.com/company/bigomics-analytics/" },
        { name: "Twitter", link: "https://x.com/bigomics" },
      ],
    },
  ];

  const hasChildren = (m) => m.isPlatform || m.items.length > 0;

  const toggleMobileItem = (i) => {
    setMobileExpanded(mobileExpanded === i ? null : i);
    setMobilePlatformExpanded(false);
  };

  return (
    <div
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || active !== null || mobileOpen
          ? "bg-white/80 backdrop-blur-lg border-b border-white/20"
          : "bg-transparent"
        }`}
    >
      {/* ── DESKTOP NAVBAR ── */}
      <div className="hidden lg:grid max-w-[1400px] mx-auto px-6 py-3 grid-cols-[auto_1fr_auto] items-center">

        {/* LEFT (Logo + Menu) */}
        <div className="flex items-center gap-12">
          <a href="https://bigomics.ch/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img
              src={scrolled || active !== null ? "/logo-black.png" : "/logo-white.png"}
              alt="BigOmics Logo"
              className="h-12 w-auto cursor-pointer"
            />
          </a>

          <div className="flex items-center justify-center">
            {menu.map((m, i) => (
              <div
                key={i}
                className="relative flex items-center px-6"
                onMouseEnter={(e) => {
                  clearTimeout(timeoutRef.current);
                  setActive(i);
                  const itemRect = e.currentTarget.getBoundingClientRect();
                  const navRect = navRef.current.getBoundingClientRect();
                  setDropdownPos(itemRect.left - navRect.left);
                }}
                onMouseLeave={() => {
                  timeoutRef.current = setTimeout(() => {
                    setActive(null);
                    setSubActive(null);
                  }, 150);
                }}
              >
                <div className="absolute inset-y-[-20px] left-0 right-0 pointer-events-auto" />
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative px-2 py-1 whitespace-nowrap text-base font-semibold cursor-pointer ${scrolled || active !== null ? "text-gray-800" : "text-white"
                    } hover:text-blue-600`}
                >
                  {m.title}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div />

        {/* RIGHT */}
        <div className={`flex items-center gap-4 justify-end text-base font-semibold ${scrolled || active !== null ? "text-blue-600" : "text-white"
          }`}>
          <a href="https://omicsplayground.bigomics.ch/" target="_blank">
            <span className="cursor-pointer hover:underline">Log in</span>
          </a>
          <span className="text-gray-400">|</span>
          <a href="https://omicsplayground.bigomics.ch/" target="_blank">
            <span className="cursor-pointer hover:underline">Register</span>
          </a>
        </div>
      </div>

      {/* ── DESKTOP DROPDOWN ── */}
      {active !== null && (
        <div
          className={`hidden lg:block absolute top-full mt-0 bg-white/80 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-gray-200 z-40 ${menu[active].title === "Platform"
              ? subActive === 0 ? "w-[440px]" : "w-[180px]"
              : menu[active].width
            }`}
          style={{ left: dropdownPos + 11 }}
          onMouseEnter={() => clearTimeout(timeoutRef.current)}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => {
              setActive(null);
              setSubActive(null);
            }, 150);
          }}
        >
          {menu[active].title === "Platform" ? (
            <div className={`grid ${subActive === 0 ? "grid-cols-[180px_200px]" : "grid-cols-[180px]"}`}>
              <div className="border-r">
                <a
                  href="https://bigomics.ch/omics-playground/"
                  target="_blank"
                  onMouseEnter={() => setSubActive(0)}
                  className={`block px-4 py-3 text-[15px] hover:bg-gray-50 hover:text-blue-600 ${subActive === 0 ? "bg-gray-50 text-blue-600" : "text-gray-800"
                    }`}
                >
                  Omics Playground
                </a>
                <a
                  href="https://bigomics.ch/multi-omics-playground-beta/"
                  target="_blank"
                  onMouseEnter={() => setSubActive(null)}
                  className="block px-4 py-3 text-[15px] hover:bg-gray-50 hover:text-blue-600 text-gray-800"
                >
                  Multi-Omics add-on
                </a>
              </div>
              {subActive === 0 && (
                <div className="pl-4 w-[260px] shrink-0">
                  <a
                    href="https://bigomics.ch/proteomics-data-analysis/"
                    target="_blank"
                    className="block px-4 py-3 text-[15px] whitespace-nowrap border-b hover:bg-gray-50 hover:text-blue-600 text-gray-800"
                  >
                    For Proteomics Data Analysis
                  </a>
                  <a
                    href="https://bigomics.ch/rna-seq-data-analysis/"
                    target="_blank"
                    className="block px-4 py-3 text-[15px] whitespace-nowrap border-b hover:bg-gray-50 hover:text-blue-600 text-gray-800"
                  >
                    For RNA-Seq Data Analysis
                  </a>
                </div>
              )}
            </div>
          ) : menu[active].items.length > 0 ? (
            <div className="flex flex-col">
              {menu[active].items.map((item, j) => (
                <a
                  key={j}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-[15px] whitespace-nowrap border-b last:border-b-0 hover:bg-gray-50 hover:text-blue-600 text-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {/* ── MOBILE NAVBAR ── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <a href="https://bigomics.ch/" target="_blank" rel="noopener noreferrer">
          <img
            src={scrolled || mobileOpen ? "/logo-black.png" : "/logo-white.png"}
            alt="BigOmics Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Hamburger / Close button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex flex-col justify-center items-center w-9 h-9 gap-[5px] ${scrolled || mobileOpen ? "text-gray-800" : "text-white"
            }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            // X icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── MOBILE MENU PANEL ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 overflow-y-auto max-h-[calc(100vh-64px)]">
          {menu.map((m, i) => (
            <div key={i} className="border-b border-gray-100">
              {/* Section header row */}
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer"
                onClick={() => hasChildren(m) ? toggleMobileItem(i) : undefined}
              >
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold tracking-widest uppercase text-gray-800"
                  onClick={(e) => hasChildren(m) && e.preventDefault()}
                >
                  {m.title}
                </a>
                {hasChildren(m) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${mobileExpanded === i ? "rotate-180" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>

              {/* Sub-items accordion */}
              {mobileExpanded === i && (
                <div className="bg-gray-50 border-t border-gray-100">
                  {m.isPlatform ? (
                    <>
                      {/* Platform: accordion within accordion */}
                      <div className="border-b border-gray-100">
                        <div
                          className="flex items-center justify-between pl-10 pr-6 py-3 cursor-pointer"
                          onClick={() => setMobilePlatformExpanded(!mobilePlatformExpanded)}
                        >
                          <a
                            href="https://bigomics.ch/omics-playground/"
                            target="_blank"
                            className="text-[15px] text-gray-700"
                            onClick={(e) => e.preventDefault()}
                          >
                            Omics Playground
                          </a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${mobilePlatformExpanded ? "rotate-180" : ""
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {mobilePlatformExpanded && (
                          <div className="bg-white">
                            <a
                              href="https://bigomics.ch/proteomics-data-analysis/"
                              target="_blank"
                              className="block pl-14 pr-6 py-3 text-[14px] text-gray-600 border-t border-gray-100 hover:text-blue-600"
                            >
                              For Proteomics Data Analysis
                            </a>
                            <a
                              href="https://bigomics.ch/rna-seq-data-analysis/"
                              target="_blank"
                              className="block pl-14 pr-6 py-3 text-[14px] text-gray-600 border-t border-gray-100 hover:text-blue-600"
                            >
                              For RNA-Seq Data Analysis
                            </a>
                          </div>
                        )}
                      </div>
                      <a
                        href="https://bigomics.ch/multi-omics-playground-beta/"
                        target="_blank"
                        className="block pl-10 pr-6 py-3 text-[15px] text-gray-700 border-b border-gray-100 hover:text-blue-600"
                      >
                        Multi-Omics add-on
                      </a>
                    </>
                  ) : (
                    m.items.map((item, j) => (
                      <a
                        key={j}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block pl-10 pr-6 py-3 text-[15px] text-gray-700 border-b border-gray-100 last:border-b-0 hover:text-blue-600"
                      >
                        {item.name}
                      </a>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Log in / Register */}
          <div className="flex items-center gap-4 px-6 py-4 text-base font-semibold text-blue-600">
            <a href="https://omicsplayground.bigomics.ch/" target="_blank">
              <span className="cursor-pointer hover:underline">Log in</span>
            </a>
            <span className="text-gray-400">|</span>
            <a href="https://omicsplayground.bigomics.ch/" target="_blank">
              <span className="cursor-pointer hover:underline">Register</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}