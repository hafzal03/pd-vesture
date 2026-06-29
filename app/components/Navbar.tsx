"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ShoppingBag,
  Heart,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";

import { useCart } from "@/app/context/CartContext";
import CartDrawer from "./cart/CartDrawer";

const links = [
  { name: "Women", href: "/women" },
  { name: "Men", href: "/men" },
  { name: "New", href: "/new" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="pl-2 text-3xl font-light tracking-[0.3em] text-[#C9A14A]"
          >
            PD
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[0.25em] text-white transition hover:text-[#C9A14A]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden items-center gap-5 md:flex">
            <Search
              size={20}
              className="cursor-pointer text-white hover:text-[#C9A14A]"
            />

            <Heart
              size={20}
              className="cursor-pointer text-white hover:text-[#C9A14A]"
            />

            <button
              onClick={() => setCartOpen(true)}
              className="relative"
            >
              <ShoppingBag
                size={20}
                className="cursor-pointer text-white hover:text-[#C9A14A]"
              />

              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C9A14A] text-xs font-bold text-black">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white md:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#0B0B0B] md:hidden"
          >
            <div className="flex flex-col gap-6 p-8">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="uppercase tracking-[0.25em] text-white hover:text-[#C9A14A]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  );
}