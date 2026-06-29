import { notFound } from "next/navigation";

import { products } from "@/app/data/products";
import Container from "@/app/components/ui/Container";

import ProductGallery from "@/app/components/products/ProductGallery";
import ProductInfo from "@/app/components/products/ProductInfo";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B0B0B] pt-28 pb-20 text-white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <ProductGallery
            images={product.images}
            name={product.name}
          />

          <ProductInfo product={product} />
        </div>
      </Container>
    </main>
  );
}