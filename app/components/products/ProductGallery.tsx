"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[110px_1fr]">
      {/* Thumbnails */}
      <div className="order-2 flex gap-4 lg:order-1 lg:flex-col">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border transition-all ${
              selectedImage === image
                ? "border-[#C9A14A]"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <Image
              src={image}
              alt={`${name} ${index + 1}`}
              width={100}
              height={120}
              className="h-28 w-24 object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative overflow-hidden rounded-3xl bg-[#111]">
        <Image
          src={selectedImage}
          alt={name}
          width={900}
          height={1200}
          priority
          className="h-auto w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
    </div>
  );
}