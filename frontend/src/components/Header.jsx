const Mark = () => (
  <svg viewBox="0 0 64 64" className="h-7 w-7">
    <rect x="2" y="2" width="60" height="60" rx="14" fill="#0A0A0A"/>
    <path d="M19 20 H45 L25.5 44 H45" fill="none" stroke="#C4A45C" strokeWidth="3.6" strokeLinecap="square"/>
  </svg>
);
export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 md:px-12 h-16 flex items-center gap-2.5">
        <Mark/><span className="font-medium tracking-tight">Margin · Premium Notes</span>
      </div>
    </header>
  );
}
