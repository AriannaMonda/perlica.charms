import { Link } from 'react-router-dom';

export default function Carrello() {
  return (
    <main className="flex flex-col relative w-full pt-20 pb-32 bg-surface min-h-screen">
      <div className="px-margin flex flex-col gap-space-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-[28px] text-primary">shopping_bag</span>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">Il tuo Carrello</h1>
        </div>

        {/* Lista Articoli */}
        <div className="flex flex-col gap-space-sm">
          
          {/* Articolo 1 */}
          <div className="flex gap-space-sm bg-surface-container-lowest p-3 rounded-2xl shadow-sm relative">
            <button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center text-outline hover:text-error transition-colors bg-surface-container-lowest rounded-full">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfE6kH4Z7Y98qe8y6qYUD7QT9VzWZSWAFDVEuhRc6rhDsL8gfPUNupc60bWhAVQT1E6Q0lkmxEPDP5AF-86fnEpNx9maXJtCdVwsiClk7jK1aPegeK_AMC8RA3TUEes9U1BwARmdP-1ngytHVAC1icpFHD7fCJIZTMn1OS1S9e0u5LlNHHDrhUHyE5ZAWkFZxIm9o1o2XrWQFKa2xnoQ6OvKCa5JVweY-LtmH0FTN8bWtkTXD_tu_N6g" alt="Collana Sirena" className="w-24 h-24 object-cover rounded-xl bg-surface-container-low" />
            <div className="flex flex-col flex-1 py-1 justify-between pr-4">
              <div>
                <h3 className="font-headline-sm text-[15px] text-on-surface line-clamp-1">Collana Sirena</h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Perle e quarzo rosa</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-label-lg font-bold text-primary">42,00€</span>
                <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-3 py-1 shadow-inner">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">remove</span>
                  <span className="font-label-md text-on-surface">1</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">add</span>
                </div>
              </div>
            </div>
          </div>

          {/* Articolo 2 */}
          <div className="flex gap-space-sm bg-surface-container-lowest p-3 rounded-2xl shadow-sm relative">
            <button className="absolute top-2 right-2 w-7 h-7 flex items-center justify-center text-outline hover:text-error transition-colors bg-surface-container-lowest rounded-full">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOONu1jE8HwcNA-VERddTwMJy1S0mZJTT_W7XmTVEVpuvFnwOGzvzI6OlENmrRYPO2WIlqhjLGKw5T7AVlGVi09MlVcCUtp2B6DFqKTbqGrdsLyqxc7HIZteZzenaSQoqr3longg0i2t8veHF9P0LYHA6WNeZHmeB7gG-bX1p84CaIJuaZ_IYU5BBD4gZxURQex1oAcZfvdlrOczjwaDL0Pw08eQXmIz9lkodTrFHlmejQNESfbHjWIQ" alt="Bracciale Amalfi" className="w-24 h-24 object-cover rounded-xl bg-surface-container-low" />
            <div className="flex flex-col flex-1 py-1 justify-between pr-4">
              <div>
                <h3 className="font-headline-sm text-[15px] text-on-surface line-clamp-1">Bracciale Amalfi</h3>
                <p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">Misura regolabile</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-label-lg font-bold text-on-surface">26,00€</span>
                <div className="flex items-center gap-3 bg-surface-container-low rounded-full px-3 py-1 shadow-inner">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">remove</span>
                  <span className="font-label-md text-on-surface">1</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer">add</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Riepilogo Ordine */}
        <div className="bg-surface-container-lowest rounded-2xl p-space-md mt-4 shadow-sm border border-surface-container-high">
          <div className="flex flex-col gap-2 border-b border-surface-container pb-3 mb-3">
            <div className="flex justify-between items-center font-body-sm text-on-surface-variant">
              <span>Subtotale (2 articoli)</span>
              <span>68,00€</span>
            </div>
            <div className="flex justify-between items-center font-body-sm text-on-surface-variant">
              <span>Spedizione</span>
              <span className="text-secondary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">local_shipping</span> Gratuita</span>
            </div>
          </div>
          <div className="flex justify-between items-center font-headline-sm text-on-surface">
            <span>Totale</span>
            <span className="text-primary text-[22px]">68,00€</span>
          </div>
        </div>

        {/* Pulsanti Azione */}
        <button className="w-full py-4 mt-2 rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-[20px]">lock</span>
          Procedi al Pagamento (68,00€)
        </button>
        <Link to="/catalogo" className="w-full py-3 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md flex items-center justify-center active:scale-95 transition-transform">
          Continua lo shopping
        </Link>
      </div>
    </main>
  );
}