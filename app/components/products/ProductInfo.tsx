"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Product } from "@/app/data/products";
import CartButton from "../cart/CartButton";

interface Props {
  product: Product;
}

export default function ProductInfo({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  return (
    <div className="flex flex-col">
      {/* Category */}
      <p className="text-sm uppercase tracking-[0.3em] text-[#C9A14A]">
        {product.category}
      </p>

      {/* Name */}
      <h1 className="mt-4 text-5xl font-light text-white">
        {product.name}
      </h1>

      {/* Price */}
      <p className="mt-6 text-3xl font-semibold text-white">
        €{product.price}
      </p>

      {/* Description */}
      <p className="mt-8 leading-8 text-gray-400">
        {product.description}
      </p>

      {/* Colors */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-medium">
          Color
        </h3>

        <div className="flex gap-3">
          {product.colors.map((color) => (
            <span
              key={color}
              className="rounded-full border border-white/20 px-4 py-2 text-sm"
            >
              {color}
            </span>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-10">
        <h3 className="mb-4 text-lg font-medium">
          Select Size
        </h3>

        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`rounded-full px-5 py-3 transition ${
                selectedSize === size
                  ? "bg-[#C9A14A] text-black"
                  : "border border-white/20 text-white hover:border-[#C9A14A]"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Stock */}
      <p className="mt-8 text-sm text-gray-400">
        {product.stock} items in stock
      </p>

      {/* Buttons */}
      <div className="mt-12 flex gap-4">
        <div className="flex-1">
          <CartButton
            id={product.id}
            name={`${product.name} (${selectedSize})`}
            price={product.price}
            image={product.images[0]}
          />
        </div>

        <button className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 transition hover:border-[#C9A14A] hover:text-[#C9A14A]">
          <Heart size={22} />
        </button>
      </div>
    </div>
  );
}