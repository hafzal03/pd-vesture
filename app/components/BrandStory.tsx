// app/components/BrandStory.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandStory() {
  return (
    <section className="bg-[#111111] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
        {/* Image */}
        <div className="relative h-[650px] overflow-hidden rounded-3xl">
          <Image
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=80"
            alt="Pd_vesture Brand Story"
            fill
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <span className="mb-4 block text-sm uppercase tracking-[0.35em] text-[#C9A14A]">
            Our Story
          </span>

          <h2 className="mb-8 text-5xl font-light leading-tight text-[#F8F6F2]">
            Luxury Crafted
            <br />
            With Purpose.
          </h2>

          <p className="mb-6 text-lg leading-8 text-gray-400">
            Pd_vesture was founded with one vision: create fashion that feels
            timeless rather than temporary. Every piece is designed with clean
            silhouettes, premium fabrics, and modern elegance inspired by the
            world's leading luxury houses.
          </p>

          <p className="mb-10 text-lg leading-8 text-gray-400">
            We believe luxury is found in exceptional craftsmanship,
            sophisticated simplicity, and confidence that never follows trends.
          </p>

          <Link
            href="/about"
            className="inline-flex rounded-full bg-[#C9A14A] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition hover:scale-105 hover:bg-[#d8b05b]"
          >
            Discover Our Brand
          </Link>
        </div>
      </div>
    </section>
  );
}