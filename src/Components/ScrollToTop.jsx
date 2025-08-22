import { useEffect } from "react";
import { useLocation } from "react-router";
// import { useLocation } from "react-route";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // যখনই path change হবে তখন scroll top এ নিয়ে যাবে
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
