export default function SortDropdown() {
  return (
    <select className="rounded-full border border-white/10 bg-[#111] px-6 py-3 text-white outline-none transition hover:border-[#C9A14A]">
      <option>Newest</option>
      <option>Best Selling</option>
      <option>Price: Low → High</option>
      <option>Price: High → Low</option>
    </select>
  );
}