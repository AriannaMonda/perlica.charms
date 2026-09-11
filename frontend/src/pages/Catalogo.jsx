import { useState } from 'react';

export default function Catalogo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setToastMessage(name);
    setTimeout(() => setToastMessage(''), 2500);
  };

  return (
    <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface">
      <div className="flex flex-col w-full">
        <div className="px-margin pt-space-md pb-space-sm">
          <div className="flex items-center gap-space-xs mb-1">
            <span className="inline-flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[18px]">sunny</span>
            </span>
            <span className="font-label-sm text-label-sm tracking-widest uppercase text-tertiary">Collezione Artigianale</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">Tutte le Creazioni</h1>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            Ogni pezzo è unico, assemblato chicco dopo chicco a mano con perle naturali e perline di Murano.
          </p>
        </div>

        <div className="px-margin mb-space-sm">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant text-[20px] pointer-events-none">search</span>
            <input className="w-full h-12 pl-11 pr-10 rounded-full bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline shadow-sm focus:outline-none focus:shadow-md transition-shadow" id="catalogSearchInput" placeholder="Cerca collane, pietre dure, perle..." type="text" />
          </div>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar py-space-xs mb-space-sm">
          <div className="flex items-center gap-space-xs px-margin min-w-max" id="categoryChips">
            <button className="filter-chip active flex items-center gap-1.5 h-9 px-4 rounded-full bg-on-surface text-surface font-label-md text-label-md transition-transform active:scale-95 shadow-sm">
              <span>Tutti</span>
              <span className="font-label-sm text-[11px] opacity-80">(34)</span>
            </button>
            <button className="filter-chip flex items-center gap-1.5 h-9 px-4 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-transform active:scale-95 shadow-sm hover:bg-surface-container">
              <span>Collane</span>
              <span className="font-label-sm text-[11px] text-outline">(14)</span>
            </button>
            <button className="filter-chip flex items-center gap-1.5 h-9 px-4 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-transform active:scale-95 shadow-sm hover:bg-surface-container">
              <span>Braccialetti</span>
              <span className="font-label-sm text-[11px] text-outline">(11)</span>
            </button>
            <button className="filter-chip flex items-center gap-1.5 h-9 px-4 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-label-md transition-transform active:scale-95 shadow-sm hover:bg-surface-container">
              <span>Cavigliere</span>
              <span className="font-label-sm text-[11px] text-outline">(9)</span>
            </button>
          </div>
        </div>

        <div className="px-margin mb-space-md flex items-center justify-between gap-space-xs">
          <button onClick={() => setIsModalOpen(true)} className="flex-1 flex items-center justify-between h-10 px-3.5 rounded-full bg-surface-container-low text-on-surface-variant shadow-sm transition-colors active:bg-surface-container">
            <div className="flex items-center gap-2 min-w-0">
              <span className="material-symbols-outlined text-[18px] text-secondary">tune</span>
              <span className="font-label-md text-label-md truncate">Filtra per Materiale</span>
            </div>
            <span className="font-label-sm text-[11px] px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-bold">Tutti</span>
          </button>
          <button className="flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-surface-container-low text-on-surface-variant shadow-sm transition-colors active:bg-surface-container shrink-0">
            <span className="material-symbols-outlined text-[18px] text-tertiary">swap_vert</span>
            <span className="font-label-md text-label-md">Più popolari</span>
            <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
          </button>
        </div>

        <div className="px-margin mb-space-lg">
          <div className="grid grid-cols-2 gap-gutter-sm">
            {/* Prodotto 1 */}
            <div className="product-card group flex flex-col bg-surface-container-lowest rounded-DEFAULT overflow-hidden shadow-[0_4px_20px_-2px_rgba(135,102,85,0.06)] transition-all duration-300 hover:shadow-md relative">
              <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfE6kH4Z7Y98qe8y6qYUD7QT9VzWZSWAFDVEuhRc6rhDsL8gfPUNupc60bWhAVQT1E6Q0lkmxEPDP5AF-86fnEpNx9maXJtCdVwsiClk7jK1aPegeK_AMC8RA3TUEes9U1BwARmdP-1ngytHVAC1icpFHD7fCJIZTMn1OS1S9e0u5LlNHHDrhUHyE5ZAWkFZxIm9o1o2XrWQFKa2xnoQ6OvKCa5JVweY-LtmH0FTN8bWtkTXD_tu_N6g" />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm tracking-wider shadow-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  Bestseller
                </span>
              </div>
              <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                <div>
                  <h2 className="font-headline-sm text-[15px] leading-snug text-on-surface line-clamp-1">Collana Sirena</h2>
                  <p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-1 mt-0.5">Perle e quarzo rosa</p>
                </div>
                <div className="flex items-center justify-between pt-1 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-primary leading-tight">42,00€</span>
                  </div>
                  <button onClick={(e) => handleAddToCart(e, 'Collana Sirena')} className="flex items-center justify-center h-8 px-3 rounded-full bg-primary text-on-primary font-label-md text-label-md gap-1 transition-transform active:scale-95 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">local_mall</span>
                    <span>Aggiungi</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Prodotto 2 */}
            <div className="product-card group flex flex-col bg-surface-container-lowest rounded-DEFAULT overflow-hidden shadow-[0_4px_20px_-2px_rgba(135,102,85,0.06)] transition-all duration-300 hover:shadow-md relative">
              <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOONu1jE8HwcNA-VERddTwMJy1S0mZJTT_W7XmTVEVpuvFnwOGzvzI6OlENmrRYPO2WIlqhjLGKw5T7AVlGVi09MlVcCUtp2B6DFqKTbqGrdsLyqxc7HIZteZzenaSQoqr3longg0i2t8veHF9P0LYHA6WNeZHmeB7gG-bX1p84CaIJuaZ_IYU5BBD4gZxURQex1oAcZfvdlrOczjwaDL0Pw08eQXmIz9lkodTrFHlmejQNESfbHjWIQ" />
              </div>
              <div className="p-3 flex flex-col flex-1 justify-between gap-2">
                <div>
                  <h2 className="font-headline-sm text-[15px] leading-snug text-on-surface line-clamp-1">Bracciale Amalfi</h2>
                  <p className="font-body-sm text-[12px] text-on-surface-variant line-clamp-1 mt-0.5">Perline Miyuki</p>
                </div>
                <div className="flex items-center justify-between pt-1 mt-auto">
                  <div className="flex flex-col">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface leading-tight">26,00€</span>
                  </div>
                  <button onClick={(e) => handleAddToCart(e, 'Bracciale Amalfi')} className="flex items-center justify-center h-8 px-3 rounded-full bg-primary text-on-primary font-label-md text-label-md gap-1 transition-transform active:scale-95 shadow-sm">
                    <span className="material-symbols-outlined text-[16px]">local_mall</span>
                    <span>Aggiungi</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-margin mb-space-xl flex flex-col items-center">
          <div className="w-full bg-surface-container-low rounded-2xl p-4 flex flex-col items-center text-center shadow-sm">
            <div className="w-full max-w-[200px] h-1.5 bg-surface-container-highest rounded-full overflow-hidden mb-2.5">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '18%' }}></div>
            </div>
            <button className="flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:shadow active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[18px] text-primary">autorenew</span>
              <span>Carica altri gioielli</span>
            </button>
          </div>
        </div>

        {/* Modal Filtri */}
        <div className={`fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300 flex items-end ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`w-full bg-surface rounded-t-3xl p-margin max-h-[80vh] overflow-y-auto transform transition-transform duration-300 shadow-2xl ${isModalOpen ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="w-12 h-1.5 bg-surface-container-highest rounded-full mx-auto mb-4"></div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Filtra Gioielli</h3>
              <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <div>
                <span className="font-label-md text-label-md text-on-surface font-semibold block mb-2">Materiali Preziosi</span>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-md text-[13px]">Tutti i materiali</button>
                  <button className="px-3.5 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-md text-[13px]">Perle d'acqua dolce</button>
                </div>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="w-full h-12 rounded-full bg-primary text-on-primary font-label-md text-label-md font-bold active:scale-95 transition-transform shadow-md">
              Mostra Risultati
            </button>
          </div>
        </div>

        {/* Toast Notifica */}
        <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-sm transition-all duration-300 ${toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-inverse-surface text-inverse-on-surface shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[18px]">check</span>
              </span>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md font-semibold text-inverse-on-surface">{toastMessage} aggiunto</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}