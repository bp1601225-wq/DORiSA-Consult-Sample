
import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navigation/NavBar";

function AppLayout() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const navbar = document.getElementById("site-navbar");

    if (!navbar) return;

    const updateHeight = () => {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);

      document.documentElement.style.setProperty(
        "--site-navbar-height",
        `${height}px`
      );
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(navbar);

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Floating Bubbles */}
  
{/* Visible Floating Bubbles */}
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="absolute -left-16 top-32 h-64 w-64 rounded-full bg-blue-200/70" />

  <div className="absolute -right-16 top-[25%] h-72 w-72 rounded-full bg-orange-200/60" />

  <div className="absolute bottom-10 left-[30%] h-52 w-52 rounded-full bg-blue-100/80" />

  <div className="absolute right-[20%] top-10 h-36 w-36 rounded-full bg-orange-100/80" />

  <div className="absolute bottom-[25%] -left-10 h-40 w-40 rounded-full bg-orange-200/50" />

  <div className="absolute right-[40%] bottom-0 h-32 w-32 rounded-full bg-blue-200/60" />
</div>


      <div className="relative z-10">
        <Navbar />

        <div
          aria-hidden="true"
          className="shrink-0"
          style={{ height: navbarHeight }}
        />

        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
