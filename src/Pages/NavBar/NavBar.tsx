import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../../assets/Logo.jpg";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // If already on homepage, scroll directly
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    // If on another page, go back to homepage first
    navigate("/");

    // Wait for homepage to render, then scroll
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 300);
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

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4"
    >
      <div className="flex items-center justify-between rounded-2xl px-5 py-3 backdrop-blur-md">

        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => {
            if (location.pathname === "/") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              navigate("/");
            }
          }}
          className="flex items-center"
        >
          <img
            src={Logo}
            alt="DORiSA Consult"
            className="h-12 w-auto object-contain"
          />
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            // SECTION LINKS
            if (item.type === "section") {
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  whileHover={{ y: -2 }}
                  className="group relative rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.label}

                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-5" />
                </motion.button>
              );
            }

            // ROUTE LINKS
            return (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.path!}
                  className="group relative block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.label}

                  <span className="absolute bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-amber-500 transition-all duration-300 group-hover:w-5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Let's Talk */}
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 10px 25px rgba(15, 23, 42, 0.15)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-slate-800"
          >
            Let's Talk

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="text-amber-400"
            >
              →
            </motion.span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden">
            <div className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-slate-800" />
              <span className="block h-0.5 w-5 bg-slate-800" />
              <span className="block h-0.5 w-3 bg-slate-800" />
            </div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;