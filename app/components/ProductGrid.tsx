"use client";

import ProductCard from "./ProductCard";
import { products } from "@/app/data/products";

export default function ProductGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}