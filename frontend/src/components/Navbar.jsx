import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_4px_24px_rgba(135,102,85,0.05)]">
        <div className="h-16 px-margin flex items-center justify-between gap-space-sm">
          <Link to="/" className="flex items-center gap-space-sm">
            <img alt="Perlica Charms Logo" className="h-8 w-auto object-contain" src="/logo.png" />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none">Perlica Charms</span>
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Handmade Jewelry</span>
            </div>
          </Link>
          <div className="flex items-center gap-space-xs">
            <button aria-label="Cerca" className="w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <Link to="/carrello" className="relative w-11 h-11 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[22px]">local_mall</span>
              <span className="absolute top-1.5 right-1.5 min-w-[17px] h-[17px] px-1 rounded-full bg-primary text-on-primary font-label-sm text-[9px] font-bold flex items-center justify-center leading-none ring-2 ring-surface">2</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Menu Mobile in basso */}
      <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-8px_30px_rgba(135,102,85,0.08)]">
        <div className="flex justify-around items-center h-20 px-gutter-sm">
          <Link to="/" className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] h-14 text-on-surface-variant hover:text-primary font-semibold">
            <span className="material-symbols-outlined text-[24px]">cottage</span>
            <span className="font-label-sm text-label-sm tracking-wide">Home</span>
          </Link>
          <Link to="/catalogo" className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] h-14 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined text-[24px]">auto_awesome</span>
            <span className="font-label-sm text-label-sm tracking-wide">Catalogo</span>
          </Link>
          <Link to="/chi-siamo" className="flex flex-col items-center justify-center gap-space-xs min-w-[56px] h-14 text-on-surface-variant hover:text-primary">
            <span className="material-symbols-outlined text-[24px]">volunteer_activism</span>
            <span className="font-label-sm text-label-sm tracking-wide">Chi Siamo</span>
          </Link>
          <Link to="/carrello" className="relative flex flex-col items-center justify-center gap-space-xs min-w-[56px] h-14 text-on-surface-variant hover:text-primary">
            <div className="relative flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">local_mall</span>
              <span className="absolute -top-1 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-primary text-on-primary font-label-sm text-[9px] font-bold flex items-center justify-center leading-none">2</span>
            </div>
            <span className="font-label-sm text-label-sm tracking-wide">Carrello</span>
          </Link>
        </div>
      </nav>
    </>
  );
}