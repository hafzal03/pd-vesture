interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full border border-[#C9A14A] px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#C9A14A]">
      {children}
    </span>
  );
}