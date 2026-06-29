"use client";

import { X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import CartItem from "./CartItem";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({
  open,
  onClose,
}: CartDrawerProps) {
  const {
    cart,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
          open
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-[#111] shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-2xl font-light text-white">
            Shopping Cart
          </h2>

          <button
            onClick={onClose}
            className="text-white transition hover:text-[#C9A14A]"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex h-full items-center justify-center text-gray-500">
              Your cart is empty.
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 p-6">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg text-gray-300">
                Total
              </span>

              <span className="text-2xl font-semibold text-white">
                €{total}
              </span>
            </div>

            <button className="w-full rounded-full bg-[#C9A14A] py-4 font-medium text-black transition hover:opacity-90">
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}