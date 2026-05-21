export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[14px] font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-orange mb-5 before:content-[''] before:block before:w-[22px] before:h-px before:bg-muted-light before:shrink-0">
      {children}
    </div>
  );
}
