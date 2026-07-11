import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../constants/navigation";

export default function Navbar() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="hidden items-center gap-1 rounded-full bg-white/90 px-2 py-2 shadow-sm backdrop-blur-md md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive(item.path)
                  ? "text-white"
                  : "text-dark hover:text-olive"
              }`}
            >
              {isActive(item.path) && (
                <motion.span
                  layoutId="navbar-active"
                  className="absolute inset-0 rounded-full bg-olive"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </motion.div>

        {/* Mobile hamburger */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex w-full items-center justify-between rounded-full bg-white/90 px-5 py-3 shadow-sm backdrop-blur-md md:hidden"
        >
          <Link
            to="/"
            className="text-sm font-bold text-olive"
            onClick={() => setIsMobileOpen(false)}
          >
            Desa Wisata Tritik
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="cursor-pointer rounded-full p-1 text-dark transition-colors hover:text-olive"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </motion.div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white shadow-lg md:hidden"
            >
              {/* Close */}
              <div className="flex items-center justify-between border-b border-gray-light px-5 py-4">
                <span className="text-sm font-bold text-olive">Menu</span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="cursor-pointer rounded-full p-1 text-dark transition-colors hover:text-olive"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 p-4">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? "bg-olive text-white"
                          : "text-dark hover:bg-cream"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
