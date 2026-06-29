"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Women's Collection",
    subtitle: "Elegant silhouettes designed for timeless beauty.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    href: "/women",
    large: true,
  },
  {
    title: "Men's Collection",
    subtitle: "Modern tailoring with effortless sophistication.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    href: "/men",
    large: false,
  },
  {
    title: "New Arrivals",
    subtitle: "Fresh pieces curated for every season.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    href: "/new",
    large: false,
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="uppercase tracking-[0.45em] text-[#C9A14A] text-sm">
            Collections
          </span>

          <h2 className="mt-4 text-5xl font-light text-white">
            Discover Luxury
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Crafted with premium fabrics and timeless elegance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {collections.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className={item.large ? "lg:col-span-2" : ""}
            >
              <Link href={item.href}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <div
                    className={
                      item.large ? "relative h-[650px]" : "relative h-[310px]"
                    }
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute bottom-10 left-10">
                      <h3 className="text-4xl font-light text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-gray-300">
                        {item.subtitle}
                      </p>

                      <div className="mt-8 inline-flex rounded-full border border-[#C9A14A] px-6 py-3 uppercase tracking-[0.25em] text-[#C9A14A] transition hover:bg-[#C9A14A] hover:text-black">
                        Explore
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}