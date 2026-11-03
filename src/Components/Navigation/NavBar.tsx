import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.jpg";
import { navigationItems } from "./navigationItems";

function Navbar() {
  // Gives us the current URL/page.
  // Example:
  // "/"              -> Home page
  // "/about-us"      -> About Us page
  // "/events"        -> Events page
  const location = useLocation();

  // Allows us to change/navigate to another route programmatically.
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");

  /*
    This function is used for navigation to SECTIONS
    that exist inside the Home page.

    Example:
    Services -> id="services"
    Contact  -> id="contact"
    Home     -> id="home"

    It does NOT open a new page.
    It scrolls to an element on the current Home page.
  */
  const scrollToSection = (id: string) => {
    // Close mobile menu
    setIsOpen(false);

    /*
      If we are already on the Home page,
      simply find the element with the matching ID
      and scroll to it.

      Example:
      scrollToSection("services")

      looks for:

      <section id="services">
    */
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      return;
    }

    /*
      If we are currently on another page,
      first go back to the Home page.
    */
    navigate("/");

    /*
      After the Home page loads, find the section
      and scroll to it.

      Example:
      You are on /about-us
      and click "Contact"

      1. navigate("/") -> Home page
      2. find id="contact"
      3. scroll to Contact
    */
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };

  /*
    Prevent the Home page from scrolling
    behind the mobile navigation drawer.
  */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setIsOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMoreOpen) return;

    const closeOnPointerDown = (event: MouseEvent) => {
      if (
        event.target instanceof Node &&
        !moreMenuRef.current?.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMoreOpen(false);
    };

    document.addEventListener("mousedown", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMoreOpen]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const updateActiveSection = () => {
      let currentSection = "home";

      for (const item of navigationItems) {
        if (item.type !== "section") continue;

        const section = document.getElementById(item.id);
        if (
          section &&
          section.getBoundingClientRect().top <= window.innerHeight * 0.35
        ) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    const frame = window.requestAnimationFrame(updateActiveSection);
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 z-50"
      >
        <div className="flex items-center justify-between px-4 backdrop-blur-xl sm:px-6 p-1">

          {/* ================= LOGO ================= */}

          <motion.button
            onClick={() => {
              /*
                If already on Home:
                scroll to the top.

                If on another page:
                navigate back to Home.
              */
              if (location.pathname === "/") {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              } else {
                navigate("/");
              }

              setIsOpen(false);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center"
          >
            <img
              src={Logo}
              alt="DORiSA Consult"
              className="h-11 w-auto object-contain sm:h-12"
            />
          </motion.button>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div className="hidden items-center gap-1 lg:flex">
            {navigationItems
              .filter((item) => item.type === "section")
              .map((item) => {
                if (item.type !== "section") return null;

                const isActive =
                  location.pathname === "/" && activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    aria-current={isActive ? "location" : undefined}
                    className={`group relative rounded-xl px-4 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-slate-950"
                        : "text-blue-500 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 ${
                        isActive ? "w-5" : "w-0 group-hover:w-5"
                      }`}
                    />
                  </motion.button>
                );
              })}

            <div className="relative" ref={moreMenuRef}>
              <button
                type="button"
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
                onClick={() => setIsMoreOpen((open) => !open)}
                className={`flex items-center gap-1 rounded-xl px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                  isMoreOpen ||
                  navigationItems.some(
                    (item) =>
                      item.type === "route" &&
                      item.path === location.pathname,
                  )
                    ? "text-slate-950"
                    : "text-blue-500 hover:text-blue-600"
                }`}
              >
                More
                <ChevronDown
                  size={15}
                  className={`transition-transform ${
                    isMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                    className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl"
                  >
                    {navigationItems
                      .filter((item) => item.type === "route")
                      .map((item) => {
                        if (item.type !== "route") return null;

                        const isActive = location.pathname === item.path;

                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setIsMoreOpen(false)}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${
                              isActive
                                ? "bg-amber-50 text-slate-950"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                            }`}
                          >
                            {item.label}
                            <ArrowUpRight
                              size={15}
                              className={
                                isActive ? "text-amber-500" : "text-slate-300"
                              }
                            />
                          </Link>
                        );
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-2">

            {/* DESKTOP CTA */}

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(15,23,42,0.16)",
              }}
              whileTap={{ scale: 0.97 }}

              /*
                Let's Talk is a SECTION action.

                It does:

                scrollToSection("contact")

                Therefore it goes to:

                <section id="contact">
              */
              onClick={() => scrollToSection("contact")}

              className="hidden items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 sm:flex"
            >
              Let's Talk

              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-amber-400"
              >
                →
              </motion.span>
            </motion.button>

            {/* MOBILE MENU BUTTON */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors lg:hidden"
            >
              <Menu size={21} strokeWidth={1.8} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE DRAWER ================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/40 backdrop-blur-sm lg:hidden"
            />

            {/* Mobile Drawer */}

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.8,
              }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-gradient-to-tl from-blue-100 via-amber-50 to-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}

              <div className="flex items-center justify-between border-b border-white/40 px-6 py-5">
                <img
                  src={Logo}
                  alt="DORiSA Consult"
                  className="h-10 w-auto object-contain"
                />

                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition-colors hover:bg-white"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Navigation */}

              <div className="flex flex-1 flex-col px-6 py-8">

                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Navigation
                </p>

                <div className="space-y-1">

                  {navigationItems.map((item, index) => {

                    /*
                      MOBILE SECTION

                      Example:

                      Services
                      ↓
                      scrollToSection("services")
                    */
                    if (item.type === "section") {
                      const isActive =
                        location.pathname === "/" && activeSection === item.id;

                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 * index,
                            duration: 0.35,
                          }}
                          onClick={() => scrollToSection(item.id)}
                          aria-current={isActive ? "location" : undefined}
                          className={`group flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-base font-medium transition-all ${
                            isActive
                              ? "bg-white/60 text-slate-950"
                              : "text-slate-700 hover:bg-white/60 hover:text-slate-950"
                          }`}
                        >
                          <span>{item.label}</span>

                          <span className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-500">
                            →
                          </span>
                        </motion.button>
                      );
                    }

                    /*
                      MOBILE ROUTE

                      Example:

                      Events
                      ↓
                      <Link to="/events">

                      This changes the URL to:

                      /events
                    */
                    const isActive = location.pathname === item.path;

                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 * index,
                          duration: 0.35,
                        }}
                      >
                        <Link
                          to={item.path}
                          aria-current={isActive ? "page" : undefined}
                          className={`group flex w-full items-center justify-between rounded-xl px-3 py-4 text-base font-medium transition-all ${
                            isActive
                              ? "bg-white/60 text-slate-950"
                              : "text-slate-700 hover:bg-white/60 hover:text-slate-950"
                          }`}
                        >
                          <span>{item.label}</span>

                          <ArrowUpRight
                            size={17}
                            className={`transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-500 ${
                              isActive ? "text-amber-500" : "text-slate-300"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom CTA */}

                <div className="mt-auto pt-8">

                  <motion.button
                    whileTap={{ scale: 0.97 }}

                    /*
                      Again, this is a section navigation.

                      It finds:

                      id="contact"
                    */
                    onClick={() => scrollToSection("contact")}

                    className="flex w-full items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-lg"
                  >
                    <span>Let's Talk</span>

                    <span className="text-lg text-amber-400">
                      →
                    </span>
                  </motion.button>

                  <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
                    Strategic consulting for businesses ready to grow with clarity
                    and confidence.
                  </p>
                </div>
              </div>

              {/* Drawer Footer */}

              <div className="border-t border-white/40 px-6 py-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>DORiSA Consult</span>
                  <span>© 2026</span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;