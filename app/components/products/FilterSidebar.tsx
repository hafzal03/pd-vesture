export default function FilterSidebar() {
  return (
    <aside className="sticky top-28 rounded-3xl border border-white/10 bg-[#111] p-8">
      <div className="mb-10">
        <h3 className="mb-5 text-lg font-medium text-white">
          Categories
        </h3>

        <div className="space-y-3">
          {["Dresses", "Tops", "Blazers", "Outerwear"].map((item) => (
            <button
              key={item}
              className="block text-gray-400 transition hover:text-[#C9A14A]"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-5 text-lg font-medium text-white">
          Sizes
        </h3>

        <div className="flex flex-wrap gap-3">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-[#C9A14A]"
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}