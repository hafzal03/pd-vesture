"use client";

import ProductCard from "./ProductCard";
import { products } from "@/app/data/products";

interface ProductGridProps {
  category?: string;
}

export default function ProductGrid({
  category,
}: ProductGridProps) {
  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}