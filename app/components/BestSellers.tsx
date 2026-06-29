// app/components/BestSellers.tsx

"use client";

import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function BestSellers() {
  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C9A14A]">
            Best Sellers
          </span>

          <h2 className="text-4xl font-light text-[#F8F6F2] md:text-5xl">
            Our Most Loved Pieces
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Discover timeless essentials designed with premium craftsmanship,
            luxurious fabrics, and effortless sophistication.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="rounded-full border border-[#C9A14A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A] transition duration-300 hover:bg-[#C9A14A] hover:text-black">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}