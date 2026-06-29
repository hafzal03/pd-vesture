import Container from "@/app/components/ui/Container";
import Breadcrumb from "./Breadcrumb";

interface PageBannerProps {
  badge: string;
  title: string;
  description: string;
  page?: string;
}

export default function PageBanner({
  badge,
  title,
  description,
  page,
}: PageBannerProps) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-[#111] to-[#0B0B0B]">
      <Container className="py-16 md:py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#C9A14A]">
          {badge}
        </p>

        <h1 className="max-w-4xl text-5xl font-light leading-tight text-white md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          {description}
        </p>

        {page && <Breadcrumb page={page} />}
      </Container>
    </section>
  );
}