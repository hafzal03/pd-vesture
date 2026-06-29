"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/app/context/CartContext";

interface Props {
  item: CartItemType;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

export default function CartItem({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}: Props) {
  return (
    <div className="flex gap-4 border-b border-white/10 pb-6">
      {/* Image */}
      <div className="relative h-28 w-24 overflow-hidden rounded-xl bg-[#1a1a1a]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C9A14A]">
            Luxury Collection
          </p>

          <h3 className="mt-1 text-lg text-white">
            {item.name}
          </h3>

          <p className="mt-2 text-xl font-semibold text-[#C9A14A]">
            €{item.price}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="rounded-full border border-white/20 p-2 hover:border-[#C9A14A]"
            >
              <Minus size={16} />
            </button>

            <span className="w-6 text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => increaseQuantity(item.id)}
              className="rounded-full border border-white/20 p-2 hover:border-[#C9A14A]"
            >
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 hover:text-red-400"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}