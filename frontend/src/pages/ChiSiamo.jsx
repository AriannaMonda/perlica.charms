export default function ChiSiamo() {
  return (
    <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface">
      <div className="flex flex-col w-full">
        {/* Sunlit Brand Hero & Intention Header */}
        <section className="px-margin pt-space-lg pb-space-md flex flex-col items-center text-center relative overflow-hidden">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-secondary-container text-on-secondary-container shadow-sm mb-space-sm">
            <span className="material-symbols-outlined text-[16px]">arrow_back_ios_new</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">Creato a Mano con Amore</span>
          </div>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-space-xs max-w-xs">
            Dietro le Quinte di <span className="text-primary italic">Perlica Charms</span>
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Un viaggio intimo tra perle naturali d'acqua dolce, riflessi dorati e la gioia autentica della brezza estiva mediterranea.
          </p>
          {/* Decorative Subtle Sunburst Radiance Graphic */}
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-tertiary-fixed to-transparent mt-space-md opacity-70"></div>
        </section>

        {/* Storytelling Artisan Showcase */}
        <section className="px-margin mb-space-lg">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-md relative overflow-hidden">
            {/* Artisan Portrait Frame */}
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
              <img alt="Chiara, fondatrice e jewelry designer di Perlica Charms" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqTeQK6_bNbimPPKW2UMbgxYg49muPjOGT0ZWcwQK_EZ-vwECfJ-r97qous73Rkckq4BwpFrufj4XfhajNkX7hUO_oTKw8JQdFwE90EF52VgE7XKWMHwhvKO3vbghkBXcTN6cbN-t7YxG_rln0N5Yv9CExywIhFlJE0NcyWmiz1GGuoEIGSeLYawLphJUEj0pQG426njEMZjNdGqIelarD7P1LYuptKK-d77gsQafHEQGEEDV9_kNPhzobqRnUkgNs3Kk" />
              <div className="absolute bottom-3 left-3 right-3 bg-surface-bright/90 backdrop-blur-md rounded-DEFAULT p-space-sm flex items-center justify-between shadow-sm">
                <div className="flex flex-col">
                  <span className="font-headline-sm text-headline-sm text-on-surface leading-tight">Federica S.</span>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">Fondatrice &amp; Artigiana</span>
                </div>
                <span className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                  <span className="material-symbols-outlined text-[20px]">palette</span>
                </span>
              </div>
            </div>
            {/* Narrative Quote */}
            <div className="flex flex-col gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[32px] opacity-40 leading-none">format_quote</span>
              <p className="font-body-lg text-body-lg text-on-surface italic -mt-2">“Ciao, sono Federica. Ho fondato Perlica Charms per catturare la spensieratezza delle estati mediterranee in piccoli tesori da indossare ogni giorno.”</p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                <span style={{ caretColor: 'rgb(0, 0, 0)', color: 'rgb(0, 0, 0)', fontSize: 'medium' }}>
                  Ogni pezzo nasce sul mio banco di lavoro, illuminato dal sole della Riviera. Scelgo con cura i fili e le perline, creando gioielli ispirati al mare e alla luce calda del tramonto.
                </span>
                <br />
              </p>
            </div>
            {/* Tactile Micro Badges */}
            <div className="grid grid-cols-2 gap-space-xs pt-space-xs">
              <div className="flex items-center gap-space-xs p-space-sm rounded-DEFAULT bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                <span className="font-label-md text-label-md text-on-surface font-medium">100% Pezzi Unici</span>
              </div>
              <div className="flex items-center gap-space-xs p-space-sm rounded-DEFAULT bg-surface-container-low">
                <span className="material-symbols-outlined text-tertiary text-[20px]">water_drop</span>
                <span className="font-label-md text-label-md text-on-surface font-medium">Water Resistant</span>
              </div>
            </div>
          </div>
        </section>

        {/* I Nostri Pilastri Artigianali */}
        <section className="px-margin mb-space-xl flex flex-col gap-space-md">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">Valori &amp; Garanzie</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">I Nostri Pilastri Artigianali</h2>
          </div>
          <div className="flex flex-col gap-space-sm">
            <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md transition-all">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">diamond</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Materiali di Pregio</h3>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md transition-all">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">waves</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Fatto per Durare</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Cordoncini cerati ultra-resistenti a triplo intreccio nautico, concepiti per resistere a tuffi in mare aperto, sabbia calda e giornate di sole senza mai sbiadire.
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-start gap-space-md transition-all">
              <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[24px]">eco</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Sostenibilità Consapevole</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Packaging 100% plastic-free: custodie in cotone grezzo riciclabile fatte a telaio, scatoline ecologiche FSC e timbratura manuale con inchiostri all'acqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Il Processo Creativo: Step-by-Step Editorial Flow */}
        <section className="px-margin mb-space-xl flex flex-col gap-space-md">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">L'Arte della Creazione</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Il Processo Creativo</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Un rito lento fatto di precisione tattile e sensibilità cromatica.</p>
          </div>
          <div className="relative flex flex-col gap-space-sm pl-4">
            <div className="absolute left-7 top-4 bottom-6 w-0.5 bg-surface-container-highest"></div>
            <div className="relative flex items-start gap-space-md group">
              <div className="relative z-10 w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm shrink-0">1</div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex-1">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Selezione Perline</span>
                  <span className="material-symbols-outlined text-primary text-[18px] ml-auto">grain</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Scelta manuale e meticolosa di ogni perla barocca, esaltando asimmetrie e sfumature cromatiche naturali.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-space-md group">
              <div className="relative z-10 w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm shrink-0">2</div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex-1">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Incordatura a Mano Libera</span>
                  <span className="material-symbols-outlined text-secondary text-[18px] ml-auto">handshake</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Composizione armonica di ritmi e contrasti tra turchese, corallo e madreperla, seguendo ispirazioni estive spontanee.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-space-md group">
              <div className="relative z-10 w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm shrink-0">3</div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex-1">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Chiusura &amp; Controllo Qualità</span>
                  <span className="material-symbols-outlined text-tertiary text-[18px] ml-auto">task_alt</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Fissaggio artigianale dei finalini in oro 14k e test di trazione ad alta resistenza prima della sigillatura.</p>
              </div>
            </div>
            <div className="relative flex items-start gap-space-md group">
              <div className="relative z-10 w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm text-[11px] font-bold flex items-center justify-center shadow-sm shrink-0">4</div>
              <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex-1">
                <div className="flex items-center gap-space-xs mb-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface">Confezionamento Profumato</span>
                  <span className="material-symbols-outlined text-primary text-[18px] ml-auto">local_florist</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Ogni cofanetto riceve una goccia di essenza di fiori d'arancio e una cartolina scritta e numerata a mano.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Community & Social Micro-Feed */}
        <section className="px-margin mb-space-xl flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">La Nostra Famiglia</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Community</h2>
            </div>
            <a className="font-label-md text-label-md text-primary font-semibold hover:underline flex items-center gap-0.5" href="#">
              @perlica.charms &nbsp; &nbsp; &nbsp; &nbsp;<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-3 gap-space-xs">
            <div className="relative aspect-square rounded-DEFAULT overflow-hidden bg-surface-container shadow-sm group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSyaVtfbYEXlnY1hEbFG4jYbBMmJ6V1X9dLcYuqb6SrTBemqXqcmGBpMtNaagcTnAum6-I0-11vo0SDHz-sqpdXlPOM246kckZLmke4vI1_TSAZpQ3WidqBXqMifVUThBTtszvz83u-Jo992WWhervcbf9B0jAHPKwvQKdNzD-MaiSDOXRnHDyFNrlDWaX94SwcNFwuK6Z0WaARtev2fwJZHZrsTqfYbhpVyU8IelO4rjLuu12wjHYF-3MJX_LVBFP7XsMnMKh521dUP4" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent flex items-end p-1.5 opacity-90">
                <span className="text-surface-bright font-label-sm text-[10px] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">favorite</span> 842
                </span>
              </div>
            </div>
            <div className="relative aspect-square rounded-DEFAULT overflow-hidden bg-surface-container shadow-sm group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeO4TwaM06se1OxqhKy5yL1M8vPzI45QxKRIprbHBc-6B_mcU8guwAs_-h3eXtXFdzbpjguGvlQGUlCIvZ5jjymvi-8CGZqytHJBHoZN6NNxIfMBsy7SUotJaeifT_lXsEW7iTYzyQUdYrlUCURbsRbgKBjeveJuImlh58ldVH7g5s2fpw27NDjSrRIMRFeCiJ1_x8OkLUY3TvDucrFTZIfZFeuDOb1TjWbmTJglDdgSqnvllC80Zi6m2YDxR64-07wdfRhIui_VTGsN4" />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <span className="w-7 h-7 rounded-full bg-surface-bright/90 backdrop-blur-sm flex items-center justify-center text-primary shadow">
                  <span className="material-symbols-outlined text-[16px] ml-0.5">play_arrow</span>
                </span>
              </div>
            </div>
            <div className="relative aspect-square rounded-DEFAULT overflow-hidden bg-surface-container shadow-sm group">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="..." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOjFfNaB8eI8KnihpEh4bCvR4Fahq2OQ_A3pIdDpfy7cyuMTQZXXNXGERBBHoX2ckXEj0xqaZJhW1u3-WBCsp2Jhwu6nUC8C-wd2833-sO6_V_0cWSBnOu-nhOdlvD9GBGfEsknF9oNb2OPDO-L-BtlR631B6jakZt86S6h6D7tri7VdleGkT3S6s7XMfoi05e5qHLFQNo0HS3ji_KI561aMgJqdEpdkG8zOSXDDF3sfpD9ZfQgPfyQNtUqQk5_lU08Wkt_nnwZ-F4Hsk" />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent flex items-end p-1.5 opacity-90">
                <span className="text-surface-bright font-label-sm text-[10px] flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">favorite</span> 1.2k
                </span>
              </div>
            </div>
          </div>
          <div className="p-space-sm rounded-DEFAULT bg-surface-container-high flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <span className="w-8 h-8 rounded-full bg-surface-lowest flex items-center justify-center text-primary shadow-xs">
                <span className="material-symbols-outlined text-[18px]">tag</span>
              </span>
              <span className="font-body-sm text-body-sm text-on-surface">Taggaci nei tuoi post con <strong>#PerlicaCharmsClub</strong></span>
            </div>
            <button className="px-space-sm py-1 rounded-full bg-surface text-primary font-label-sm text-label-sm shadow-xs hover:bg-primary hover:text-on-primary transition-colors">
              Partecipa
            </button>
          </div>
        </section>

        {/* Complete Mobile Footer & Newsletter */}
        <footer className="bg-surface-container-low px-margin pt-space-lg pb-space-lg rounded-t-xl flex flex-col gap-space-lg">
          <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs text-primary">
              <span className="material-symbols-outlined text-[20px]">local_post_office</span>
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">La Nostra Cartolina Estiva</span>
            </div>
            <div className="flex flex-col">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">Ricevi il 10% sul primo ordine</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Novità in anteprima, edizioni limitate e piccole storie dal laboratorio di Chiara.</p>
            </div>
            <form className="flex flex-col gap-space-xs mt-1" id="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-space-xs" id="nl-input-group">
                <input className="flex-1 h-12 px-space-md rounded-full bg-surface-container text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all" placeholder="La tua email migliore..." required type="email" />
                <button className="h-12 px-space-md rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container active:scale-95 transition-all shadow-sm" type="submit">
                  Iscriviti
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-space-xs">
            <details className="group bg-surface-container-lowest rounded-DEFAULT p-space-sm shadow-xs">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none font-headline-sm text-[15px] text-on-surface">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
                  Spedizioni &amp; Tempi (24/48h)
                </span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs mt-space-xs border-t border-surface-container">
                Spediamo con corriere espresso tracciato in tutta Italia. Ordini pronti in 24h lavorative con consegna gratuita per ordini sopra i 55€.
              </p>
            </details>
            <details className="group bg-surface-container-lowest rounded-DEFAULT p-space-sm shadow-xs">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none font-headline-sm text-[15px] text-on-surface">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">straighten</span>
                  Guida alle Taglie &amp; Regolazioni
                </span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs mt-space-xs border-t border-surface-container">
                I nostri girocolli misurano 38 cm + 5 cm di catenella estensibile. I bracciali sono dotati di nodo scorsoio nautico adattabile a qualsiasi polso.
              </p>
            </details>
            <details className="group bg-surface-container-lowest rounded-DEFAULT p-space-sm shadow-xs">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none font-headline-sm text-[15px] text-on-surface">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">sync</span>
                  Politica di Reso (30 Giorni)
                </span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs mt-space-xs border-t border-surface-container">
                Vogliamo che tu sia 100% felice. Hai fino a 30 giorni di tempo dalla ricezione per cambiare idea o richiedere la sostituzione gratuita della misura.
              </p>
            </details>
            <details className="group bg-surface-container-lowest rounded-DEFAULT p-space-sm shadow-xs">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none font-headline-sm text-[15px] text-on-surface">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
                  Contatti &amp; Assistenza WhatsApp
                </span>
                <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs mt-space-xs border-t border-surface-container flex flex-col gap-2">
                <p>Hai domande su un ordine o desideri una personalizzazione speciale? Federica risponde direttamente su WhatsApp dal lunedì al sabato.</p>
                <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary font-bold" href="#">
                  <span className="material-symbols-outlined text-[18px]">send</span> Avvia chat (+39 391 797 9837)
                </a>
              </div>
            </details>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-space-xs pt-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-highest text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-[16px]">favorite</span>
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">100% Handcrafted in Italy with Love</span>
            </div>
            <p className="font-body-sm text-[12px] text-on-surface-variant/70 mt-1">© 2024 Perlica Charms Gioielli Artigianali. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}