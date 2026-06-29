import Link from "next/link";

interface Props {
  page: string;
}

export default function Breadcrumb({ page }: Props) {
  return (
    <div className="mt-8 flex items-center gap-2 text-sm text-gray-500">
      <Link
        href="/"
        className="transition hover:text-[#C9A14A]"
      >
        Home
      </Link>

      <span>/</span>

      <span className="text-white">{page}</span>
    </div>
  );
}