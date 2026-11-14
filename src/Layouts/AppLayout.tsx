import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navigation/NavBar";

function AppLayout() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (!navbar) return;

    const root = document.documentElement;
    const previousHeaderHeight = root.style.getPropertyValue(
      "--site-navbar-height",
    );
    const previousScrollPaddingTop = root.style.scrollPaddingTop;
    const previousScrollRestoration = window.history.scrollRestoration;

    const updateNavbarHeight = () => {
      const height = navbar.getBoundingClientRect().height;
      root.style.setProperty("--site-navbar-height", `${height}px`);
      root.style.scrollPaddingTop = `${height}px`;
      setNavbarHeight(height);
    };

    updateNavbarHeight();
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    resizeObserver.observe(navbar);
    window.history.scrollRestoration = "manual";

    return () => {
      resizeObserver.disconnect();

      if (previousHeaderHeight) {
        root.style.setProperty("--site-navbar-height", previousHeaderHeight);
      } else {
        root.style.removeProperty("--site-navbar-height");
      }

      root.style.scrollPaddingTop = previousScrollPaddingTop;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <div
        aria-hidden="true"
        className="shrink-0"
        style={{ height: navbarHeight }}
      />
      <Outlet />
    </>
  );
}

export default AppLayout;
