import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

import Toast from "./components/ui/Toast";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "PD_VESTURE | Luxury Fashion",
  description:
    "Premium Women's Fashion & Men's Shirts. Timeless luxury with modern elegance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        <ToastProvider>
          <CartProvider>
            {children}
            <Toast />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}