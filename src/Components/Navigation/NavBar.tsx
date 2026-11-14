
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X } from "lucide-react";
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
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (isActive: boolean) =>
    `relative py-2 text-sm font-medium transition-colors duration-200
    after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
    after:origin-left after:transition-transform after:duration-300
    ${
      isActive
        ? "text-[#F59E0B] after:scale-x-100 after:bg-[#F59E0B]"
        : "text-black after:scale-x-0 after:bg-[#F59E0B] hover:text-[#F59E0B] hover:after:scale-x-100"
    }`;

  const mobileLinkClass = (isActive: boolean) =>
    `w-full border-b border-gray-100 py-3 text-left text-base font-medium
    transition-colors duration-200 ${
      isActive
        ? "border-b-[#F59E0B] text-[#F59E0B]"
        : "text-black hover:text-[#F59E0B]"
    }`;

  return (
    <header
      id="site-navbar"
      className="fixed left-0 top-0 z-50 w-full"
    >
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-[#14213D] via-[#1D4ED8] to-[#172D57] px-4 py-2.5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <p className="text-xs font-medium tracking-wide sm:text-sm">
            Empowering businesses through insight, strategy and sustainable
            growth.
          </p>

          <p className="hidden text-xs font-semibold tracking-wide text-blue-100 sm:block">
            Strategic Consulting for Sustainable Growth
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-100 bg-gray-100/50 px-4 shadow-sm sm:px-6">
        <div className="mx-auto grid h-[60px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-self-start">
            <img
              src={Logo}
              alt="DORiSA Consult"
              className="h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigationItems.map((item) => {
              if (item.type === "section") {
                const isActive =
                  location.pathname === "/" &&
                  location.hash === `#${item.id}`;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={linkClass(isActive)}
                  >
                    {item.label}
                  </button>
                );
              }

              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={linkClass(isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Let's Talk Button */}
          <Link
            to="/contact"
            className="hidden justify-self-end rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#F59E0B] hover:text-black lg:block"
          >
            Let's Talk
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="col-span-2 justify-self-end text-black transition-colors hover:text-[#F59E0B] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black lg:hidden"
              style={{ top: "var(--site-navbar-height, 92px)" }}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="fixed right-0 z-50 w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-xl lg:hidden"
              style={{
                top: "var(--site-navbar-height, 92px)",
                height: "calc(100vh - var(--site-navbar-height, 92px))",
              }}
            >
              <div className="flex flex-col">
                {navigationItems.map((item) => {
                  if (item.type === "section") {
                    const isActive =
                      location.pathname === "/" &&
                      location.hash === `#${item.id}`;

                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={mobileLinkClass(isActive)}
                      >
                        {item.label}
                      </button>
                    );
                  }

                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className={mobileLinkClass(isActive)}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-5 w-fit rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#F59E0B] hover:text-black"
                >
                  Let's Talk
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
