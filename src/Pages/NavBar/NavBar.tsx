import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../../assets/Logo.jpg";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 50);

      return;
    }

    navigate("/");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 400);
  };

  const navItems = [
    {
      label: "Services",
      type: "section",
      id: "services",
    },
    {
      label: "About Us",
      type: "section",
      id: "about",
    },
    {
      label: "Our Approach",
      type: "section",
      id: "approach",
    },
    {
      label: "Contact",
      type: "section",
      id: "contact",
    },
    {
      label: "Events",
      type: "route",
      path: "/events",
    },
  ];

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 z-50  "
      >
        <div className=" flex  items-center justify-between   px-4  backdrop-blur-xl sm:px-6 p-1">
          
          {/* LOGO */}
          <motion.button
            onClick={() => {
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

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              if (item.type === "section") {
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id!)}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative rounded-xl px-4 py-2.5 text-[13px] font-medium tracking-wide text-blue-500 transition-all duration-300 hover:text-blue-600"
                  >
                    {item.label}

                    <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-5" />
                  </motion.button>
                );
              }

              return (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -1 }}
                >
                  <Link
                    to={item.path!}
                    className="group relative flex items-center gap-1 rounded-xl px-4 py-2.5 text-[13px] font-medium tracking-wide text-blue-500 transition-all duration-300"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-y-0.5 -translate-x-0.5 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />

                    <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            
            {/* DESKTOP CTA */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(15,23,42,0.16)",
              }}
              whileTap={{ scale: 0.97 }}
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
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition-colors  lg:hidden"
            >
              <Menu size={21} strokeWidth={1.8} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-950/30 backdrop-blur-sm lg:hidden"
            />

            {/* DRAWER */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <img
                  src={Logo}
                  alt="DORiSA Consult"
                  className="h-10 w-auto object-contain"
                />

                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* DRAWER CONTENT */}
              <div className="flex flex-1 flex-col px-6 py-8">
                
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Navigation
                </p>

                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    if (item.type === "section") {
                      return (
                        <motion.button
                          key={item.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.05 * index,
                            duration: 0.35,
                          }}
                          onClick={() => scrollToSection(item.id!)}
                          className="group flex w-full items-center justify-between rounded-xl px-3 py-4 text-left text-base font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-950"
                        >
                          <span>{item.label}</span>

                          <span className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-500">
                            →
                          </span>
                        </motion.button>
                      );
                    }

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
                          to={item.path!}
                          className="group flex w-full items-center justify-between rounded-xl px-3 py-4 text-base font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-950"
                        >
                          <span>{item.label}</span>

                          <ArrowUpRight
                            size={17}
                            className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-500"
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* MOBILE CTA */}
                <div className="mt-auto pt-8">
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => scrollToSection("contact")}
                    className="flex w-full items-center justify-between rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white shadow-lg"
                  >
                    <span>Let's Talk</span>

                    <span className="text-lg text-amber-400">
                      →
                    </span>
                  </motion.button>

                  <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
                    Strategic consulting for businesses ready to
                    grow with clarity and confidence.
                  </p>
                </div>
              </div>

              {/* DRAWER FOOTER */}
              <div className="border-t border-slate-100 px-6 py-5">
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
