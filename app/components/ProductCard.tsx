"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/app/data/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
          {/* Image */}
          <div className="relative h-[430px] overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-[#C9A14A] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                {product.badge}
              </span>
            )}

            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-[#C9A14A] hover:text-black"
            >
              <Heart size={18} />
            </button>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="flex items-center gap-2 rounded-full bg-[#C9A14A] px-6 py-3 text-sm font-semibold text-black">
                <ShoppingBag size={18} />
                View Product
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A14A]">
              {product.category}
            </p>

            <h3 className="text-2xl font-light text-white transition group-hover:text-[#C9A14A]">
              {product.name}
            </h3>

            <p className="text-xl font-semibold text-white">
              €{product.price}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}