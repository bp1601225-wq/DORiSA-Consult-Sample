
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import Logo from "../../assets/Logo.jpg";
import { navigationItems } from "./navigationItems";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.slice(1);

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    `relative py-2 text-[13px] font-semibold tracking-wide transition-colors duration-300
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
    after:origin-left after:rounded-full after:bg-[#FD7E02]
    after:transition-transform after:duration-300
    ${
      active
        ? "text-[#1D4ED8] after:scale-x-100"
        : "text-[#14213D] after:scale-x-0 hover:text-[#1D4ED8] hover:after:scale-x-100"
    }`;

  const mobileLinkClass = (active: boolean) =>
    `flex w-full items-center justify-between border-b border-blue-50 py-4 text-left text-sm font-semibold transition-colors
    ${
      active
        ? "text-[#1D4ED8]"
        : "text-[#14213D] hover:text-[#FD7E02]"
    }`;

  return (
    <header
      id="site-navbar"
      className="fixed left-0 top-0 z-50 w-full"
    >
      {/* Top Information Bar */}
      <div className="bg-[#14213D] px-4 py-2 text-white sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <p className="text-[10px] font-medium tracking-wide text-blue-50 sm:text-xs">
            Strategic Consulting for Sustainable Growth
          </p>

          <p className="hidden text-[10px] font-semibold tracking-wider text-blue-200 sm:block">
            INSIGHT. STRATEGY. GROWTH.
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-blue-100/70 bg-white/95 px-4 shadow-[0_4px_20px_rgba(20,33,61,0.06)] backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="DORiSA Consult"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 xl:flex">
            {navigationItems.map((item) => {
              if (item.type === "section") {
                const active =
                  location.pathname === "/" &&
                  location.hash === `#${item.id}`;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={linkClass(active)}
                  >
                    {item.label}
                  </button>
                );
              }

              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={linkClass(active)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Let's Talk */}
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="hidden items-center gap-2 rounded-md bg-[#14213D] px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-md shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FD7E02] hover:text-white lg:flex"
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#14213D] transition-all hover:bg-blue-100 hover:text-[#1D4ED8] xl:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-[#14213D] xl:hidden"
              style={{ top: "var(--site-navbar-height, 96px)" }}
            />

            {/* Mobile Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed right-0 z-50 w-[88%] max-w-sm overflow-y-auto overscroll-y-contain rounded-bl-2xl border-l border-blue-100 bg-white p-6 shadow-2xl [touch-action:pan-y] [-webkit-overflow-scrolling:touch] xl:hidden"
              style={{
                top: "var(--site-navbar-height, 96px)",
                height: "calc(100dvh - var(--site-navbar-height, 96px))",
              }}
            >
              {/* Drawer Heading */}
              <div className="mb-5 border-b border-blue-100 pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1D4ED8]">
                  Explore DORiSA
                </p>
                <p className="mt-2 text-xs leading-relaxed text-gray-500">
                  Strategic insight and practical solutions for sustainable
                  business growth.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col">
                {navigationItems.map((item) => {
                  if (item.type === "section") {
                    const active =
                      location.pathname === "/" &&
                      location.hash === `#${item.id}`;

                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={mobileLinkClass(active)}
                      >
                        {item.label}
                        <ArrowUpRight size={15} />
                      </button>
                    );
                  }

                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={mobileLinkClass(active)}
                    >
                      {item.label}
                      <ArrowUpRight size={15} />
                    </Link>
                  );
                })}
              </div>

              {/* Contact Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-[#14213D] px-5 py-4 text-sm font-semibold text-white transition-all hover:bg-[#FD7E02]"
              >
                Let's Talk
                <ArrowUpRight size={17} />
              </button>

              <p className="mt-8 text-center text-[10px] font-medium tracking-widest text-gray-400">
                DORiSA CONSULT · SUSTAINABLE GROWTH
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
