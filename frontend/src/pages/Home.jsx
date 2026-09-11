import { useState } from 'react';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  return (
    <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface">
      <div className="flex flex-col w-full">
        
        {/* Announcement Bar */}
        <div className="w-full bg-secondary-container text-on-secondary-container px-margin-sm py-2 flex items-center justify-center gap-space-xs text-center">
          <span className="material-symbols-outlined text-[15px] text-secondary">auto_awesome</span>
          <p className="font-label-sm text-label-sm tracking-wide">
            Spedizione gratuita oltre 45€ <span className="opacity-60">•</span> 100% Fatto a mano in Italia
          </p>
        </div>

        {/* Hero Lifestyle Editorial Card */}
        <section className="px-margin pt-margin-sm pb-space-sm">
          <div className="relative w-full rounded-lg overflow-hidden shadow-md bg-surface-container-low flex flex-col justify-end min-h-[380px]">
            <div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeL7my739WzZWeLA_rQ1eTZNvdvPm2NhXovwRuvIiGMw8WJCzECPwHA8sx28zq4qJi4JsMD2usxwDqABbPq4fkWVBI5SqZGohhl9pSAlo7R4G32YMNaeZ4yTOX7AeNTtxLDjgeLelKgxogJCfS_3g_jdFN6MEg2cal-r2xgPAOIXvwTv1pwxyxtrfMk02_rmIBIJd1IiW_XOvPDhCIyRUzNth4VNK2BXxxf-ZdAJA_jCeIdJPpnDV8Ig')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/30 to-transparent"></div>
            
            <div className="relative z-10 p-space-lg flex flex-col items-start gap-space-xs text-surface-bright">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md text-primary shadow-sm">
                <span className="material-symbols-outlined text-[14px]">wb_sunny</span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase">Nuova Capsule Estiva</span>
              </div>
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-tertiary font-headline-md tracking-tight leading-tight mt-1">
                Luce, Colori &amp; Perline d'Autore
              </h1>
              <p className="font-body-sm text-body-sm text-surface-container-low/95 line-clamp-2 mt-0.5">
                Creazioni uniche fatte a mano con perle d'acqua dolce autentiche e perline millefiori artigianali.
              </p>
              <a className="mt-space-sm w-full py-3.5 px-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform" href="#">
                <span>Scopri la Collezione Estiva</span>
                <span className="text-base">☀️</span>
              </a>
            </div>
          </div>
        </section>

        {/* Category Quick Pills */}
        <section className="pt-space-sm pb-space-sm">
          <div className="flex items-center justify-between px-margin mb-space-sm">
            <span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase font-semibold">Categorie del Cuore</span>
            <a className="font-label-sm text-label-sm text-primary font-semibold" href="#">Vedi Tutto</a>
          </div>
          <div className="flex gap-space-sm overflow-x-auto px-margin no-scrollbar pb-1">
            <a className="flex flex-col items-center gap-1.5 flex-shrink-0 group" href="#">
              <div className="w-16 h-16 rounded-full bg-surface-container-high p-1 shadow-sm flex items-center justify-center transition-transform group-active:scale-95">
                <div className="w-full h-full rounded-full bg-surface-container overflow-hidden flex items-center justify-center">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnF_3ib4em-40gxIa05rL73yZnx1L7T8hPxjI0esqAIQSmWni1BFo-O2v9xoWhBZqVvNJ1px9UO7LPfYWmG3hz-pVybzercaT0zA-jjowAnYUC9fAln0w7NgQv0ZE5pA7XUdMx1u89Np_Dbg7rXLDg7SsXbRiv6LmsgTVFgce_jF_lUA54E_7UJ617Ne8Q1gaooxrpv2PZ8kOHAPp_SQycRK8UbEQWsYJh2lbg_f4CpvEVRvJGpmDVWQ" />
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface text-center">Collane</span>
            </a>
            <a className="flex flex-col items-center gap-1.5 flex-shrink-0 group" href="#">
              <div className="w-16 h-16 rounded-full bg-surface-container-high p-1 shadow-sm flex items-center justify-center transition-transform group-active:scale-95">
                <div className="w-full h-full rounded-full bg-surface-container overflow-hidden flex items-center justify-center">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBei0dsnCsyoyL2LO6hQUbJtfcyjZGA37XTfhqVf2N9eqtVDM1GtzvbL_a0702QrQwywdpjGAiYANp93FMWQHBnZ0XnSyjlUyKo4SWZSyve2MIIOS-mPGRp-PCjHplWj3KT7ibjpoHWgO9mGvSm3pWnqBion_f4eKJe8oYW5--Rs-KzjB5xunaxxbGF8aQe95U4gNxUKCXzJBAWr8nDlbRFLTrvtUTVYNYWtQDiYenXJymIK_12L0xuLA" />
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface text-center">Bracciali</span>
            </a>
            <a className="flex flex-col items-center gap-1.5 flex-shrink-0 group" href="#">
              <div className="w-16 h-16 rounded-full bg-surface-container-high p-1 shadow-sm flex items-center justify-center transition-transform group-active:scale-95">
                <div className="w-full h-full rounded-full bg-surface-container overflow-hidden flex items-center justify-center">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDojeTCO-fe5YZjYfOZNqTkJ3agH-Akf6o-WEjeNzeH9KUXgEF7HGaGuMOMrI65H5kwRZpiOWn4tqGP0rUnWRcfqzpb3t-qs7vo9MJNMe-bMeLWXQC1Pl1dYkNfj0_v8xehyVrJ2M_p0lJknX-3ml10lCWypcEISkuvmQPmncBMG5G3HhdqvtYjG3-sMUFYzwypsvkrvyqKgiaz8IZtVz4i_s1MXd_12oItMu7YQbD6ZZ04tsfpxBakGw" />
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface text-center">Cavigliere</span>
            </a>
            <a className="flex flex-col items-center gap-1.5 flex-shrink-0 group" href="#">
              <div className="w-16 h-16 rounded-full bg-surface-container-high p-1 shadow-sm flex items-center justify-center transition-transform group-active:scale-95">
                <div className="w-full h-full rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[26px]">all_inclusive</span>
                </div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface text-center">Set Completi</span>
            </a>
          </div>
        </section>

        {/* Nuovi Arrivi */}
        <section className="pt-space-md pb-space-sm">
          <div className="px-margin flex items-end justify-between mb-space-sm">
            <div>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined text-[16px]">arrow_back_ios_new</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">Freschi di Laboratorio</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Nuovi Arrivi</h2>
            </div>
          </div>
          
          <div className="flex gap-gutter-sm overflow-x-auto px-margin snap-x snap-mandatory no-scrollbar pb-2">
            <div className="w-[210px] flex-shrink-0 snap-start flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1h4sGNDD-V882fWtxAzrI0NG7GaxmZsv4hYfDTInmhTzdTtJUJqfInOmHIjM36-MViuJB-vkfNU-u3X777accjPFJpJ9RHqusb1VUJK0jSd-izmZiNyPODygFx695kNXrAZbS1CMbySPu__Vcg15rnG6Dls1sTE_jkUNFSIpzLoMPHkk6Ko-OxqwaF5b3ZRhvkRwlVLqGyVCygs8Ir_IdwfqWlIvAOWaWWPvIcydHbLlh5Sk2X3jrvA" />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-[9px] tracking-wider uppercase shadow-sm">Novità</span>
                <button onClick={handleAddToCart} aria-label="Aggiungi al carrello" className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md text-primary shadow-md flex items-center justify-center active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <div className="p-space-sm flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-label-sm text-[10px] text-on-surface-variant/80 uppercase tracking-wider">Collana</span>
                  <h3 className="font-headline-sm text-[15px] leading-snug text-on-surface truncate">Soleil Pastello</h3>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-label-lg text-label-lg font-bold text-primary">38,00€</span>
                </div>
              </div>
            </div>

            <div className="w-[210px] flex-shrink-0 snap-start flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALwIi5cZUS2uvkC8STMYPHR-lgiPhLuHI2DCNdm-_zFw51H_CD_jS1Gs9ijTzr_3JibL2zGkrOo435x7IFNRVg1uWq9lPQbbnUDwpk0HW4xPJA8nQX-JyTiBNMlRs2Pm8YmmKtBctgOZicLkjqO3spQRAURXIYGEPicTQra6LwWGBARrqxtDogvHHmlxsNotuPQNFgWEWbFdqnCfmpGV967PepRKDZK_3rv8DGNIFkIjxvQQ2L8nE2Yg" />
                <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-[9px] tracking-wider uppercase shadow-sm">Bestseller</span>
                <button onClick={handleAddToCart} aria-label="Aggiungi al carrello" className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-surface-bright/90 backdrop-blur-md text-primary shadow-md flex items-center justify-center active:scale-90 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <div className="p-space-sm flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-label-sm text-[10px] text-on-surface-variant/80 uppercase tracking-wider">Bracciale</span>
                  <h3 className="font-headline-sm text-[15px] leading-snug text-on-surface truncate">Positano Shell</h3>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="font-label-lg text-label-lg font-bold text-primary">24,00€</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* I Più Amati */}
        <section className="px-margin pt-space-md pb-space-sm">
          <div className="flex items-center justify-between mb-space-sm">
            <div>
              <div className="flex items-center gap-1 text-secondary">
                <span className="material-symbols-outlined text-[16px]">favorite</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest">Iconici &amp; Desiderati</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">I Più Amati</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-gutter-sm">
            <div className="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBVuxoTQQcIrdk_RRv8hKOoGFukInpJY2tgoqtAqoliK6OH8oakSC9m5WvRMNeWu6kzy2FsgvHHwRPqXPEuYD5HebOwAftUZ9x0lt_7rIk9Tuv-wLcUMKIbLu7Tx6xQ49YOe63N8BeWTZVHyN76wY-wNqoLFrMjI2lmXLVAxYSINEzfl83-QYVG_B2QsRONpAwhGLlPRTXD6VWqSNLu156GlU-TJWrjijdjSQwnN3pMc5DL5zAm8adww" />
                <button onClick={handleAddToCart} aria-label="Aggiungi al carrello" className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-bright/90 text-primary shadow-sm flex items-center justify-center active:scale-90">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
              <div className="p-space-sm">
                <h3 className="font-label-lg text-label-lg text-on-surface truncate">Choker Amalfi Sunrise</h3>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-label-md text-label-md font-bold text-primary">34,00€</span>
                  <div className="flex items-center text-tertiary">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-[11px] ml-0.5 font-bold">4.9</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm">
              <div className="relative aspect-[4/5] bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZFrd5puqP7mdo-bbOmgdvqVH_U0eWTkFvjRmx2OX0b-z0iExWN9h2g7AQPT2vbY1KWJ3A17fSJsUQkzo_weIGAaTePzzLR8MwU_5n8tuoV8zmO5ESPGNEJIWHr38lcWjTl9FHWjm3XvfS5n0Jhrm6um1_Sp2IQQAGnn93oObEsgc-HCE8ydAzow19J6N3YdkJKLzapFFsesi_NDPDMcfiQ9XWesE-rFm0Ej0Hh5eEz9hNT-AvV38uXw" />
                <button onClick={handleAddToCart} aria-label="Aggiungi al carrello" className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-bright/90 text-primary shadow-sm flex items-center justify-center active:scale-90">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
              </div>
              <div className="p-space-sm">
                <h3 className="font-label-lg text-label-lg text-on-surface truncate">Cavigliera Corallo</h3>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="font-label-md text-label-md font-bold text-primary">22,00€</span>
                  <div className="flex items-center text-tertiary">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-label-sm text-[11px] ml-0.5 font-bold">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Feedback Toast */}
        <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 z-40 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <span className="material-symbols-outlined text-secondary-fixed text-[18px]">check_circle</span>
          <span className="font-label-sm text-label-sm">Aggiunto al carrello ✨</span>
        </div>
      </div>
    </main>
  );
}