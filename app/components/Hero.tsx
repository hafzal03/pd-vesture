"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0B0B0B]">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1800&q=80"
        alt="Luxury Fashion"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block border border-[#C9A14A] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#C9A14A]"
          >
            Luxury Fashion 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-6xl font-light leading-[0.95] text-white md:text-8xl"
          >
            Wear
            <br />
            Confidence.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            Premium fashion inspired by timeless elegance.
            Carefully curated collections for women and men,
            designed to elevate everyday luxury.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Link
              href="/women"
              className="rounded-full bg-[#C9A14A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition duration-300 hover:scale-105"
            >
              Shop Women
            </Link>

            <Link
              href="/men"
              className="rounded-full border border-white px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            >
              Shop Men
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-[#C9A14A]">
          Scroll
        </p>

        <div className="mx-auto mt-4 h-12 w-[2px] bg-[#C9A14A]/40">
          <div className="h-6 animate-bounce bg-[#C9A14A]" />
        </div>
            </motion.div>
    </section>
  );
}
