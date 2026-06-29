"use client";

import { ShoppingBag } from "lucide-react";

import { useCart } from "@/app/context/CartContext";
import { useToast } from "@/app/context/ToastContext";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function CartButton({
  id,
  name,
  price,
  image,
}: Props) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image,
    });

    showToast({
      title: "Added to Cart",
      description: `${name} has been added to your shopping bag.`,
    });
  }

  return (
    <button
      onClick={handleAddToCart}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C9A14A] px-8 py-4 font-medium text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(201,161,74,.35)] active:scale-95"
    >
      <ShoppingBag size={18} />
      Add to Cart
    </button>
  );
}