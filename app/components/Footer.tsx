// app/components/Footer.tsx

"use client";

import Link from "next/link";

const shopLinks = [
  { name: "Women's Collection", href: "/women" },
  { name: "Men's Shirts", href: "/men" },
  { name: "New Arrivals", href: "/new" },
  { name: "Best Sellers", href: "/best-sellers" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "Shipping", href: "/shipping" },
  { name: "Returns", href: "/returns" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

const socialLinks = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Pinterest", href: "#" },
  { name: "TikTok", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#080808] text-[#F8F6F2]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-4xl font-light tracking-[0.2em] text-[#C9A14A]">
              Pd_vesture
            </h2>

            <p className="max-w-md leading-8 text-gray-400">
              Luxury fashion inspired by timeless elegance, premium craftsmanship,
              and contemporary design. Crafted for those who appreciate refined
              style without compromise.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
              Follow
            </h3>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 transition hover:text-[#C9A14A]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-[#222] pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Pd_vesture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}