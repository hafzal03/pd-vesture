// app/data/products.ts

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;

  images: string[];

  sizes: string[];

  colors: string[];

  badge?: string;

  featured?: boolean;

  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ivory Luxe Blazer",
    category: "Women's",
    price: 149,
    description:
      "Crafted from premium fabrics with a timeless silhouette. Designed for effortless elegance and everyday luxury.",

    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
    ],

    sizes: ["XS", "S", "M", "L", "XL"],

    colors: ["Ivory", "Black"],

    badge: "NEW",

    featured: true,

    stock: 18,
  },

  {
    id: 2,
    name: "Classic Black Dress",
    category: "Women's",
    price: 119,
    description:
      "Minimal elegance with luxurious tailoring. A wardrobe essential for every occasion.",

    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    ],

    sizes: ["XS", "S", "M", "L"],

    colors: ["Black"],

    badge: "BEST SELLER",

    featured: true,

    stock: 24,
  },

  {
    id: 3,
    name: "Premium White Shirt",
    category: "Men",
    price: 89,
    description:
      "Modern tailoring combined with premium cotton for an elevated everyday look.",

    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    ],

    sizes: ["S", "M", "L", "XL"],

    colors: ["White"],

    featured: true,

    stock: 30,
  },

  {
    id: 4,
    name: "Signature Brown Shirt",
    category: "Men",
    price: 95,
    description:
      "Luxury craftsmanship with a refined fit. Perfect for both casual and formal occasions.",

    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    ],

    sizes: ["M", "L", "XL"],

    colors: ["Brown"],

    badge: "LIMITED",

    stock: 12,
  },
];