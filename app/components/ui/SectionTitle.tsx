import Badge from "./Badge";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <Badge>{badge}</Badge>

      <h2 className="mt-6 text-4xl font-light text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}