import { useState, useEffect, useRef } from 'react';

const ap = 'assets';
const imgLogo = `${ap}/8d620.png`;
const imgCeiaNatalBg = `${ap}/a7090.png`;
const imgReveillonBg = `${ap}/49af0.png`;
const imgNatalCard1 = `${ap}/e17f6.png`;
const imgNatalCard2 = `${ap}/aee3d.png`;
const imgNatalCard3 = `${ap}/c1928.png`;
const imgNatalCard4 = `${ap}/a137a.png`;
const imgNatalCard5 = `${ap}/efe48.png`;
const imgBebidasNatal = `${ap}/ef5d7.png`;
const imgTrilhaNatal = `${ap}/3c986.png`;
const imgMomentos1Natal = `${ap}/6cf4f.png`;
const imgMomentos2Natal = `${ap}/c0ae1.png`;
const imgRevCard1 = `${ap}/34f03.png`;
const imgRevCard2 = `${ap}/bc643.png`;
const imgRevCard3 = `${ap}/602d4.png`;
const imgRevCard4 = `${ap}/59e8a.png`;
const imgBebidasRev = `${ap}/c4322.png`;
const imgBandaSugarSoul = `${ap}/6e797.png`;
const imgDjGoulart = `${ap}/f0471.png`;
const imgMomentos1Rev = `${ap}/43537.png`;
const imgMomentos2Rev = `${ap}/f6029.png`;
const imgMomentos3Rev = `${ap}/099ae.png`;
const imgMesaCafeRev = 'assets/mesa-cafe-rev.png';
const iconPhoneRed = `${ap}/5a793.svg`;
const iconPhoneGold = `${ap}/0133e.svg`;
const vecCheck = `${ap}/c8f34.svg`;
const vecDotActive = `${ap}/cb34f.svg`;
const vecDotInactive = `${ap}/3aacf.svg`;
const vecLineRed1300 = `${ap}/4f306.svg`;
const vecLineRed1300b = `${ap}/8f35c.svg`;
const vecLineDark1300 = `${ap}/4e84f.svg`;
const vecLineRed112 = `${ap}/b4d1e.svg`;
const vecVertWhite = `${ap}/d2135.svg`;
const vecLineGold112 = `${ap}/cf80d.svg`;

const imgMobBannerNatal   = 'assets/banner-mob-natal.png';
const imgMobBannerFestas  = 'assets/banner-mob-festas.png';
const imgMobBannerRev     = 'assets/banner-mob-reveillon.png';
const MOB_BANNER_RATIO = '175.47%';
const imgMobHeroNatal = 'assets/hero-mob-natal.png';
const imgMobHeroRev   = 'assets/hero-mob-reveillon.png';

// Helper function to build WhatsApp API link with requested custom message
const getWhatsappUrl = (phone: string, eventName: string) => {
  const text = `Olá, vim do site do Cassiano e gostaria de fazer uma reserva para ${eventName}`;
  return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
};

export default function App() {
  const [activeSlide, setActiveSlide] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile detection
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1920
  );
  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const isMobile = windowWidth <= 767;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveSlide(s => (s + 1) % 3);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goToSlide = (i: number) => {
    setActiveSlide(i);
    startTimer();
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const imgBannerNatal = 'assets/banner-natal.png';
  const imgBannerFestas = 'assets/banner-festas.png';
  const imgBannerRev = 'assets/banner-reveillon.png';

  const fHN = "'Helvetica Neue', Helvetica, Arial, sans-serif";
  const fMatches = "'Matches', serif";

  // ─── PricingCard ────────────────────────────────────────────────────────────
  const PricingCard = ({
    outerBg, dividerColor, eventLabel, tierLabel, price,
    ctaBg, ctaText, ctaHref, badgeBg, includes,
  }: {
    outerBg: string; innerBg?: string; dividerColor: string; eventLabel: string;
    tierLabel: string; price: string; ctaBg: string; ctaText: string;
    ctaHref: string; badgeBg: string; includes: string[]; leftColumnBg?: string;
  }) => {
    if (isMobile) {
      return (
        <div style={{ width: '100%', background: outerBg, borderRadius: 13, marginBottom: 16, overflow: 'hidden' }}>
          <div style={{ padding: '24px 20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 15, color: '#000', textTransform: 'uppercase', lineHeight: '22px', marginBottom: 6, textAlign: 'center', width: '100%' }}>{eventLabel}</div>
            <div style={{ background: badgeBg, display: 'inline-flex', height: 34, borderRadius: 10, paddingLeft: 14, paddingRight: 14, alignItems: 'center', marginBottom: 10, width: 'fit-content' }}>
              <span style={{ fontFamily: fHN, fontWeight: 600, fontSize: 12, letterSpacing: '3px', color: '#faf4fb' }}>LOTE ATUAL</span>
            </div>
            <div style={{ fontFamily: fMatches, fontSize: 52, color: '#000', lineHeight: '58px', textAlign: 'center', width: '100%' }}>{tierLabel}</div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 40, color: '#000', lineHeight: '1.1', marginTop: 2, textAlign: 'center', width: '100%' }}>{price}</div>
            <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 18, color: '#000', lineHeight: '26px', marginTop: 4, textAlign: 'center', width: '100%' }}>por pessoa</div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 14, color: '#000', lineHeight: '20px', textAlign: 'center', width: '100%' }}>+ 13% de taxa de serviço</div>
          </div>
          <div style={{ height: 2, background: dividerColor, marginLeft: 20, marginRight: 20 }} />
          <div style={{ padding: '16px 20px 24px' }}>
            <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 12, letterSpacing: '3px', color: '#000', textTransform: 'uppercase', marginBottom: 12, textAlign: 'center' }}>A EXPERIÊNCIA INCLUI</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {includes.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={vecCheck} style={{ width: 13, height: 16, flexShrink: 0 }} />
                  <span style={{ fontFamily: fHN, fontWeight: 400, fontSize: 15, color: '#000', lineHeight: '22px' }}>{item}</span>
                </div>
              ))}
            </div>
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: ctaBg, width: 260, height: 54, borderRadius: 10, textDecoration: 'none', cursor: 'pointer', margin: '0 auto' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: ctaText, textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </div>
      );
    }
    return (
      <div style={{ width: '100%', maxWidth: 1300, minHeight: 340, marginBottom: 20, background: outerBg, borderRadius: 13, display: 'flex', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: '40%', minWidth: 320, maxWidth: 480, boxSizing: 'border-box', padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#000', textTransform: 'uppercase', lineHeight: '1.2', marginBottom: 6 }}>{eventLabel}</div>
          <div style={{ background: badgeBg, width: 'fit-content', padding: '6px 16px', borderRadius: 8, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginBottom: 10 }}>
            <span style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(11px, 1vw, 14px)', letterSpacing: '3px', color: '#faf4fb' }}>LOTE ATUAL</span>
          </div>
          <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 68px)', color: '#000', lineHeight: '1.05' }}>{tierLabel}</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(32px, 3.5vw, 48px)', color: '#000', lineHeight: '1.1' }}>{price}</div>
          <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(16px, 1.5vw, 22px)', color: '#000', lineHeight: '1.2', marginTop: 4 }}>por pessoa</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(13px, 1.1vw, 16px)', color: '#000', lineHeight: '1.2' }}>+ 13% de taxa de serviço</div>
        </div>
        <div style={{ width: 3, background: dividerColor, alignSelf: 'stretch', marginTop: 24, marginBottom: 24, flexShrink: 0 }} />
        <div style={{ flex: 1, boxSizing: 'border-box', padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(13px, 1.2vw, 16px)', letterSpacing: '3.5px', color: '#000', marginBottom: 14, textTransform: 'uppercase' }}>A EXPERIÊNCIA INCLUI</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
            {includes.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src={vecCheck} style={{ width: 15, height: 18, flexShrink: 0 }} />
                <span style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 18px)', color: '#000', lineHeight: '1.3' }}>{item}</span>
              </div>
            ))}
          </div>
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', background: ctaBg, width: 'clamp(240px, 22vw, 320px)', height: 'clamp(48px, 4vw, 58px)', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', flexShrink: 0 }}>
            <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(13px, 1.1vw, 16px)', letterSpacing: '3px', color: ctaText, textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
          </a>
        </div>
      </div>
    );
  };

  // ─── PricingCardHotel ────────────────────────────────────────────────────────
  const PricingCardHotel = ({
    outerBg, dividerColor, ctaBg, ctaText, ctaHref,
    titleAccentColor, titleLines, description,
  }: {
    outerBg: string; innerBg?: string; dividerColor: string;
    ctaBg: string; ctaText: string; ctaHref: string;
    titleAccentColor: string; titleLines: string; description: string;
  }) => {
    const paras = description.split('\n\n');
    if (isMobile) {
      return (
        <div style={{ width: '100%', background: outerBg, borderRadius: 13, marginBottom: 16, overflow: 'hidden' }}>
          <div style={{ padding: '24px 20px 16px' }}>
            <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 15, color: '#000', textTransform: 'uppercase', lineHeight: '22px', marginBottom: 8, textAlign: 'center' }}>PACOTE ESPECIAL</div>
            <div style={{ fontFamily: fMatches, fontSize: 52, color: titleAccentColor, lineHeight: '58px', whiteSpace: 'pre-line', textAlign: 'center' }}>{titleLines}</div>
            <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 18, color: '#000', lineHeight: '26px', marginTop: 8, textTransform: 'uppercase', textAlign: 'center' }}>VALOR SOB CONSULTA</div>
          </div>
          <div style={{ height: 2, background: dividerColor, marginLeft: 20, marginRight: 20 }} />
          <div style={{ padding: '16px 20px 24px' }}>
            <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 18, color: '#000', lineHeight: '24px', marginBottom: 10, textAlign: 'center' }}>Hotel Golden Tulip</div>
            {paras.map((p, i) => (
              <div key={i} style={{ fontFamily: fHN, fontWeight: 400, fontSize: 15, lineHeight: '22px', color: '#000', marginBottom: i < paras.length - 1 ? 10 : 16, textAlign: 'center' }}>{p}</div>
            ))}
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: ctaBg, width: 260, height: 54, borderRadius: 10, textDecoration: 'none', cursor: 'pointer', margin: '0 auto' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: ctaText, textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </div>
      );
    }
    return (
      <div style={{ width: '100%', maxWidth: 1300, minHeight: 320, marginBottom: 20, background: outerBg, borderRadius: 13, display: 'flex', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ width: '40%', minWidth: 320, maxWidth: 480, boxSizing: 'border-box', padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0 }}>
          <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#000', textTransform: 'uppercase', lineHeight: '1.2', marginBottom: 8 }}>PACOTE ESPECIAL</div>
          <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 68px)', color: titleAccentColor, lineHeight: '1.05', whiteSpace: 'pre-line' }}>{titleLines}</div>
          <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(18px, 1.8vw, 24px)', color: '#000', lineHeight: '1.2', marginTop: 8, textTransform: 'uppercase' }}>VALOR SOB CONSULTA</div>
        </div>
        <div style={{ width: 3, background: dividerColor, alignSelf: 'stretch', marginTop: 24, marginBottom: 24, flexShrink: 0 }} />
        <div style={{ flex: 1, boxSizing: 'border-box', padding: '28px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(16px, 1.6vw, 22px)', color: '#000', lineHeight: '1.3', marginBottom: 10 }}>Hotel Golden Tulip</div>
          {paras.map((p, i) => (
            <div key={i} style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 18px)', lineHeight: '1.4', color: '#000', maxWidth: 460, marginBottom: i < paras.length - 1 ? 10 : 20 }}>{p}</div>
          ))}
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', justifyContent: 'center', background: ctaBg, width: 'clamp(240px, 22vw, 320px)', height: 'clamp(48px, 4vw, 58px)', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', flexShrink: 0 }}>
            <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(13px, 1.1vw, 16px)', letterSpacing: '3px', color: ctaText, textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: '100%', maxWidth: 1920, margin: '0 auto', background: '#000', overflowX: 'hidden', paddingTop: isMobile ? 60 : 100 }}>

      {/* ── Navigation ─────────────────────────────────────────────────────── */}
      {isMobile ? (
        <>
          {/* Mobile closed header */}
          <nav id="inicio" style={{ height: 60, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
            <button
              onClick={() => setMenuOpen(true)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0, outline: 'none' }}
              aria-label="Abrir menu"
            >
              <div style={{ width: 22, height: 2, background: '#ffffff', borderRadius: 1 }} />
              <div style={{ width: 22, height: 2, background: '#ffffff', borderRadius: 1 }} />
              <div style={{ width: 22, height: 2, background: '#ffffff', borderRadius: 1 }} />
            </button>
            <img src={imgLogo} style={{ width: 110, height: 24, objectFit: 'contain' }} />
          </nav>

          {/* Mobile open menu overlay */}
          {menuOpen && (
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, background: '#000', zIndex: 200, borderBottomLeftRadius: 24, borderBottomRightRadius: 24, paddingBottom: 36 }}>
              <div style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
                <button
                  onClick={() => setMenuOpen(false)}
                  style={{ background: 'none', border: '1.5px solid rgba(255,255,255,0.5)', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, outline: 'none', color: '#fff', fontSize: 14, lineHeight: 1 }}
                  aria-label="Fechar menu"
                >
                  ✕
                </button>
                <img src={imgLogo} style={{ width: 136, height: 29, objectFit: 'contain' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 24, paddingRight: 24, paddingTop: 8 }}>
                {[
                  { label: 'Início', id: 'inicio' },
                  { label: 'Ceia de Natal', id: 'ceia-natal' },
                  { label: 'Virada do Ano', id: 'virada-ano' },
                  { label: 'Contato', id: 'footer-contact' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { if (item.id === 'inicio') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { scrollTo(item.id); } setMenuOpen(false); }}
                    style={{ background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', padding: '18px 0', textAlign: 'left', fontFamily: fHN, fontWeight: 400, fontSize: 20, color: '#ffffff', outline: 'none' }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <nav id="inicio" style={{ height: 100, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 'clamp(24px, 4vw, 60px)', paddingRight: 'clamp(24px, 4vw, 60px)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, maxWidth: 1920, margin: '0 auto' }}>
          <img src={imgLogo} style={{ width: 'clamp(160px, 15vw, 240px)', height: 'auto', maxH: 52, objectFit: 'contain' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 3vw, 48px)' }}>
            {['Início', 'Ceia de Natal', 'Virada do Ano', 'Contato'].map((link, i) => {
              const targets = ['inicio', 'ceia-natal', 'virada-ano', 'footer-contact'];
              return (
                <button key={i} onClick={() => { if (targets[i] === 'inicio') { window.scrollTo({ top: 0, behavior: 'smooth' }); } else { scrollTo(targets[i]); } }} style={{ fontFamily: fHN, fontWeight: 600, fontSize: 'clamp(14px, 1.2vw, 20px)', color: '#fff', background: 'none', border: 'none', cursor: 'pointer', padding: 0, outline: 'none' }}>
                  {link}
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* ── Hero carousel ──────────────────────────────────────────────────── */}
      {isMobile ? (
        <section style={{ background: '#000', overflow: 'hidden' }}>
          <div style={{ position: 'relative', paddingTop: MOB_BANNER_RATIO, overflow: 'hidden' }}>
            {/* Slide 0 — Ceia de Natal */}
            <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 0 ? 1 : 0, pointerEvents: activeSlide === 0 ? 'auto' : 'none' }}>
              <img src={imgMobBannerNatal} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <button
                onClick={() => scrollTo('ceia-natal')}
                style={{ position: 'absolute', top: '62%', left: '50%', transform: 'translateX(-50%)', width: 260, height: 52, background: '#ab8645', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
              >
                <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '2px', color: '#fcfdf5', textTransform: 'uppercase' }}>SAIBA MAIS</span>
              </button>
            </div>

            {/* Slide 1 — Festas de Fim de Ano */}
            <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 1 ? 1 : 0, pointerEvents: activeSlide === 1 ? 'auto' : 'none' }}>
              <img src={imgMobBannerFestas} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <a
                href={getWhatsappUrl('5512991402949', 'as Festas de Fim de Ano')}
                target="_blank" rel="noopener noreferrer"
                style={{ position: 'absolute', top: '62%', left: '50%', transform: 'translateX(-50%)', width: 260, height: 52, background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
              >
                <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '2px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
              </a>
            </div>

            {/* Slide 2 — Réveillon */}
            <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 2 ? 1 : 0, pointerEvents: activeSlide === 2 ? 'auto' : 'none' }}>
              <img src={imgMobBannerRev} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <button
                onClick={() => scrollTo('virada-ano')}
                style={{ position: 'absolute', top: '62%', left: '50%', transform: 'translateX(-50%)', width: 260, height: 52, background: '#e84029', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
              >
                <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '2px', color: '#fcfdf5', textTransform: 'uppercase' }}>SAIBA MAIS</span>
              </button>
            </div>

            <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8, zIndex: 10 }}>
              {[0, 1, 2].map(i => (
                <button key={i} onClick={() => goToSlide(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: 10, height: 10, outline: 'none' }}>
                  <img src={activeSlide === i ? vecDotActive : vecDotInactive} style={{ width: 10, height: 10 }} />
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section style={{ height: 'clamp(480px, 45vw, 750px)', position: 'relative', overflow: 'hidden', background: '#000' }}>
          {/* Slide 0 — CEIA DE NATAL */}
          <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 0 ? 1 : 0, pointerEvents: activeSlide === 0 ? 'auto' : 'none' }}>
            <img src={imgBannerNatal} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <button
              onClick={() => scrollTo('ceia-natal')}
              style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(260px, 22vw, 380px)', height: 'clamp(48px, 4vw, 68px)', background: '#e84029', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
            >
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(14px, 1.2vw, 20px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>SAIBA MAIS</span>
            </button>
          </div>

          {/* Slide 1 — FESTAS */}
          <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 1 ? 1 : 0, pointerEvents: activeSlide === 1 ? 'auto' : 'none' }}>
            <img src={imgBannerFestas} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <a
              href={getWhatsappUrl('5512991402949', 'as Festas de Fim de Ano')}
              target="_blank" rel="noopener noreferrer"
              style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(260px, 22vw, 380px)', height: 'clamp(48px, 4vw, 68px)', background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
            >
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(14px, 1.2vw, 20px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>

          {/* Slide 2 — RÉVEILLON */}
          <div style={{ position: 'absolute', inset: 0, transition: 'opacity 0.8s ease', opacity: activeSlide === 2 ? 1 : 0, pointerEvents: activeSlide === 2 ? 'auto' : 'none' }}>
            <img src={imgBannerRev} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <button
              onClick={() => scrollTo('virada-ano')}
              style={{ position: 'absolute', bottom: '18%', left: '50%', transform: 'translateX(-50%)', width: 'clamp(260px, 22vw, 380px)', height: 'clamp(48px, 4vw, 68px)', background: '#ab8645', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
            >
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(14px, 1.2vw, 20px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>SAIBA MAIS</span>
            </button>
          </div>

          {/* Dots */}
          <div style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 14, zIndex: 10 }}>
            {[0, 1, 2].map(i => (
              <button key={i} onClick={() => goToSlide(i)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: 18, height: 18, outline: 'none' }}>
                <img src={activeSlide === i ? vecDotActive : vecDotInactive} style={{ width: 18, height: 18 }} />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* ── Ceia de Natal hero ─────────────────────────────────────────────── */}
      {isMobile ? (
        <section id="ceia-natal" style={{ position: 'relative', overflow: 'hidden', background: '#000' }}>
          <img src={imgMobHeroNatal} style={{ width: '100%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.68) 55%, rgba(0,0,0,0.22) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 48, paddingLeft: 24, paddingRight: 24, paddingBottom: 48 }}>
            <div style={{ fontFamily: fMatches, fontSize: 48, color: '#e84029', lineHeight: '52px', textAlign: 'center', marginBottom: 16, textTransform: 'uppercase', whiteSpace: 'pre-line' }}>
              {'CEIA DE NATAL\nNO CASSIANO'}
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#faf4fb', lineHeight: '20px', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', marginBottom: 16 }}>
              24 DE DEZEMBRO DE 2026 | 20H30 ÀS 00H30
            </div>
            <img src={vecLineRed112} style={{ width: 80, height: 5, display: 'block', marginBottom: 18 }} />
            <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 15, color: '#faf4fb', lineHeight: '22px', letterSpacing: '0.8px', textAlign: 'center', marginBottom: 14, textTransform: 'uppercase' }}>
              TRADIÇÃO, SABORES E ENCONTROS QUE TORNAM O NATAL AINDA MAIS ESPECIAL.
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#faf4fb', lineHeight: '20px', textAlign: 'center', marginBottom: 28 }}>
              Uma experiência gastronômica completa, com o melhor da culinária portuguesa, em um ambiente acolhedor e elegante, no coração de São José dos Campos.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 260, height: 54, background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '2px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </section>
      ) : (
        <section id="ceia-natal" style={{ minHeight: 'clamp(550px, 50vw, 780px)', position: 'relative', overflow: 'hidden', background: '#000', display: 'flex', alignItems: 'center' }}>
          <img src={imgCeiaNatalBg} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'relative', zIndex: 2, paddingLeft: 'clamp(40px, 15vw, 280px)', paddingRight: 'clamp(20px, 4vw, 60px)', paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}>
            <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 76px)', color: '#e84029', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 16, textTransform: 'uppercase' }}>
              {'CEIA DE NATAL\nNO CASSIANO'}
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(16px, 1.5vw, 22px)', color: '#faf4fb', lineHeight: '1.3', letterSpacing: '1.6px', textTransform: 'uppercase', marginBottom: 16 }}>
              24 DE DEZEMBRO DE 2026 | 20H30 ÀS 00H30
            </div>
            <img src={vecLineRed112} style={{ width: 112, height: 5, marginBottom: 20, display: 'block', flexShrink: 0 }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(16px, 1.5vw, 22px)', color: '#faf4fb', lineHeight: '1.4', letterSpacing: '2px', maxWidth: 750, marginBottom: 20, textTransform: 'uppercase' }}>
              TRADIÇÃO, SABORES E ENCONTROS QUE TORNAM O NATAL AINDA MAIS ESPECIAL.
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 18px)', color: '#faf4fb', lineHeight: '1.5', maxWidth: 700, marginBottom: 32 }}>
              Uma experiência gastronômica completa, com o melhor da culinária portuguesa, em um ambiente acolhedor e elegante, no coração de São José dos Campos.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(260px, 22vw, 380px)', height: 'clamp(48px, 4vw, 68px)', background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(14px, 1.2vw, 20px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Estação Buffet Natal ───────────────────────────────────────────── */}
      <section style={{ background: '#e84029', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 'clamp(40px, 5vw, 80px) 20px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(36px, 3.8vw, 60px)', color: '#fff', lineHeight: '1.1', textAlign: 'center', marginBottom: 12 }}>ESTAÇÃO BUFFET</div>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 16 : 'clamp(15px, 1.4vw, 20px)', color: '#faf4fb', textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.3', marginBottom: 32 }}>UMA SELEÇÃO DE PRATOS TRADICIONAIS</div>
          {isMobile ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              {[
                { img: imgNatalCard3, label: 'Pães, Antepastos,\nQueijos e Frios' },
                { img: imgNatalCard2, label: 'Saladas' },
                { img: imgNatalCard4, label: 'Pratos Quentes' },
                { img: imgNatalCard1, label: 'Sobremesas' },
                { img: imgNatalCard5, label: 'Mesa do Café' },
              ].map((card, i) => (
                <div key={i} style={{ width: '100%', border: '2px solid #faf4fb', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', paddingTop: '72%', position: 'relative', overflow: 'hidden' }}>
                    <img src={card.img} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 14, color: '#faf4fb', textAlign: 'center', lineHeight: '19px', whiteSpace: 'pre-line' }}>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36, width: '100%' }}>
              {[
                { img: imgNatalCard3, label: 'Pães, Antepastos,\nQueijos e Frios' },
                { img: imgNatalCard2, label: 'Saladas' },
                { img: imgNatalCard4, label: 'Pratos Quentes' },
                { img: imgNatalCard1, label: 'Sobremesas' },
                { img: imgNatalCard5, label: 'Mesa do Café' },
              ].map((card, i) => (
                <div key={i} style={{ width: 'clamp(190px, 17vw, 238px)', height: 320, border: '3px solid #faf4fb', borderRadius: 13, overflow: 'hidden', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                  <div style={{ width: '100%', height: 240, overflow: 'hidden', flexShrink: 0 }}>
                    <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 8px' }}>
                    <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(14px, 1.2vw, 17px)', color: '#faf4fb', textAlign: 'center', lineHeight: '1.2', whiteSpace: 'pre-line' }}>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: isMobile ? 24 : 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isMobile ? 260 : 'clamp(260px, 22vw, 380px)', height: isMobile ? 56 : 'clamp(48px, 4vw, 68px)', background: '#362f28', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: isMobile ? 13 : 'clamp(13px, 1.1vw, 17px)', letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Bebidas Inclusas Natal ─────────────────────────────────────────── */}
      {isMobile ? (
        <section style={{ background: '#000', overflow: 'hidden' }}>
          <div style={{ paddingTop: 48, paddingLeft: 20, paddingRight: 20, paddingBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: fMatches, fontSize: 52, color: '#e84029', lineHeight: '56px', textAlign: 'center', marginBottom: 16, whiteSpace: 'pre-line' }}>
              {'BEBIDAS\nINCLUSAS'}
            </div>
            <img src={vecLineRed112} style={{ width: 112, height: 5, marginBottom: 16, display: 'block' }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 16, color: '#faf4fb', lineHeight: '24px', textAlign: 'center' }}>
              Espumante, vinho tinto, água mineral, suco e refrigerante.
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <img src={imgBebidasNatal} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', width: 260 }}>
              <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 56, background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
                <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ background: '#000', display: 'flex', flexDirection: 'row', overflow: 'hidden', minHeight: 'clamp(400px, 35vw, 550px)' }}>
          <div style={{ width: '55%', minHeight: 400, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
            <img src={imgBebidasNatal} style={{ position: 'absolute', width: '100%', height: '100%', inset: 0, objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 'clamp(30px, 4vw, 60px)', paddingRight: 'clamp(30px, 4vw, 60px)' }}>
            <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 76px)', color: '#e84029', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 16 }}>
              {'BEBIDAS\nINCLUSAS'}
            </div>
            <img src={vecLineRed112} style={{ width: 112, height: 5, marginBottom: 20, display: 'block', flexShrink: 0 }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(15px, 1.5vw, 22px)', color: '#faf4fb', lineHeight: '1.4', maxWidth: 500, marginBottom: 32 }}>
              Espumante, vinho tinto, água mineral, suco e refrigerante.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(240px, 20vw, 340px)', height: 'clamp(48px, 4vw, 60px)', background: '#e84029', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(13px, 1.1vw, 17px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Trilha da Noite ────────────────────────────────────────────────── */}
      {isMobile ? (
        <section style={{ background: '#e84029', overflow: 'hidden', paddingTop: 48, paddingBottom: 48, paddingLeft: 20, paddingRight: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fMatches, fontSize: 52, color: '#fff', lineHeight: '56px', textAlign: 'center', marginBottom: 16 }}>TRILHA DA NOITE</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 15, color: '#faf4fb', textAlign: 'center', textTransform: 'uppercase', lineHeight: '22px', marginBottom: 28 }}>
            Música ao vivo acompanha toda a ceia, no clima de animação com voz e violão de leandro salgado.
          </div>
          <div style={{ width: '100%', borderRadius: 13, overflow: 'hidden', position: 'relative', marginBottom: 28, flexShrink: 0 }}>
            <img src={imgTrilhaNatal} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, borderRadius: 13, border: '3px solid #ffffff', pointerEvents: 'none', zIndex: 2 }} />
          </div>
          <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 260, height: 56, background: '#362f28', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', margin: '0 auto' }}>
            <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
          </a>
        </section>
      ) : (
        <section style={{ background: '#e84029', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 'clamp(40px, 5vw, 80px) 20px' }}>
          <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: fMatches, fontSize: 'clamp(36px, 3.8vw, 60px)', color: '#fff', lineHeight: '1.1', textAlign: 'center', marginBottom: 16 }}>TRILHA DA NOITE</div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(15px, 1.5vw, 22px)', color: '#faf4fb', textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.4', maxWidth: 900, marginBottom: 32 }}>
              Música ao vivo acompanha toda a ceia, no clima de animação com voz e violão de leandro salgado.
            </div>
            <div style={{ width: '100%', maxWidth: 900, height: 'clamp(280px, 28vw, 400px)', borderRadius: 13, overflow: 'hidden', position: 'relative', marginBottom: 36, flexShrink: 0 }}>
              <img src={imgTrilhaNatal} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, borderRadius: 13, border: '3px solid #ffffff', pointerEvents: 'none', zIndex: 2 }} />
            </div>
            <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(240px, 20vw, 340px)', height: 'clamp(48px, 4vw, 60px)', background: '#362f28', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(13px, 1.1vw, 17px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Escolha Natal (pricing + reserva) ─────────────────────────────── */}
      <section style={{ background: '#000', display: 'flex', justifyContent: 'center', padding: 'clamp(32px, 4vw, 64px) 20px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 14 : 'clamp(14px, 1.3vw, 18px)', color: '#ffffff', textTransform: 'uppercase', marginBottom: 8, textAlign: isMobile ? 'center' : 'left' }}>RESERVAS</div>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(38px, 4.2vw, 68px)', color: '#e84029', width: '100%', lineHeight: '1.1', marginBottom: 12, textAlign: isMobile ? 'center' : 'left' }}>
            ESCOLHA COMO VIVER ESSA NOITE
          </div>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 14 : 'clamp(14px, 1.3vw, 18px)', color: '#ffffff', lineHeight: '1.4', width: '100%', marginBottom: 32, textAlign: isMobile ? 'center' : 'left' }}>
            Valores por lote, sujeitos à disponibilidade.
          </div>

          <PricingCard
            outerBg="#e84029" dividerColor="#000000"
            eventLabel="CEIA DE NATAL" tierLabel="LOTE X" price="R$ 000,00"
            ctaBg="#000000" ctaText="#ffffff" ctaHref={getWhatsappUrl('5512992414004', 'a Ceia de Natal')}
            badgeBg="#000000" includes={['Estações Completas Do Buffet', 'Bebidas Selecionadas', 'Música Ao Vivo Durante A Ceia']}
          />

          <PricingCardHotel
            outerBg="#ffffff" dividerColor="#e84029"
            ctaBg="#e84029" ctaText="#faf4fb" ctaHref={getWhatsappUrl('5512992414004', 'o pacote de Ceia de Natal com Hospedagem')}
            titleAccentColor="#e84029" titleLines={'CEIA +\nHOSPEDAGEM'}
            description={'Uma experiência completa para aproveitar a noite com mais conforto.\n\nReservas pelo WhatsApp ou telefone do Hotel Golden Tulip.'}
          />

          {!isMobile && (
            <img src={vecLineRed1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 24, marginBottom: 32, display: 'block', flexShrink: 0 }} />
          )}

          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(38px, 4.2vw, 68px)', color: '#e84029', width: '100%', lineHeight: '1.1', marginBottom: 28, marginTop: isMobile ? 16 : 0, textAlign: isMobile ? 'center' : 'left' }}>
            COMO FAZER SUA RESERVA
          </div>

          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { num: '01', label: 'ESCOLHA SUA EXPERIÊNCIA', desc: 'Somente ceia ou pacote com hospedagem.' },
                { num: '02', label: 'ENTRE EM CONTATO', desc: 'Ceia pelo WhatsApp ou telefone do Cassiano. Pacote com hospedagem pelos canais do Hotel Golden Tulip.' },
                { num: '03', label: 'CONFIRME SUA RESERVA', desc: 'A confirmação acontece após o pagamento integral via PIX ou Cartão de Crédito.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: fMatches, fontSize: 48, color: '#e84029', lineHeight: '48px', flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#ffffff', lineHeight: '18px', textTransform: 'uppercase', marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#ffffff', lineHeight: '19px' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', width: '100%', maxWidth: 1300, gap: 24 }}>
              {[
                { num: '01', label: 'ESCOLHA SUA EXPERIÊNCIA', desc: 'Somente ceia ou pacote com hospedagem.' },
                { num: '02', label: 'ENTRE EM CONTATO', desc: 'Ceia pelo WhatsApp ou telefone do Cassiano. Pacote com hospedagem pelos canais do Hotel Golden Tulip.' },
                { num: '03', label: 'CONFIRME SUA RESERVA', desc: 'A confirmação acontece após o pagamento integral via PIX ou Cartão de Crédito.' },
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4vw, 60px)', color: '#e84029', lineHeight: '1', flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(13px, 1.1vw, 16px)', color: '#ffffff', lineHeight: '1.3', textTransform: 'uppercase', marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(13px, 1vw, 15px)', color: '#ffffff', lineHeight: '1.4' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isMobile ? (
            <div style={{ height: 2, background: '#e84029', marginTop: 24, marginBottom: 24 }} />
          ) : (
            <img src={vecLineRed1300b} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 32, marginBottom: 32, display: 'block', flexShrink: 0 }} />
          )}

          {/* Momentos que Ficam Natal */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              <div>
                <div style={{ fontFamily: fMatches, fontSize: 44, color: '#e84029', lineHeight: '48px', whiteSpace: 'pre-line', marginBottom: 12, textAlign: 'center' }}>
                  {'MOMENTOS\nQUE FICAM'}
                </div>
                <img src={vecLineRed112} style={{ width: 112, height: 5, display: 'block', marginBottom: 12, marginLeft: 'auto', marginRight: 'auto' }} />
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 15, color: '#ffffff', lineHeight: '22px', textAlign: 'center' }}>
                  Um pouco do que já vivemos em nossas ceias de Natal no Cassiano.
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: '100%', paddingTop: '66%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos1Natal} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: '100%', paddingTop: '66%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos2Natal} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 32, width: '100%', maxWidth: 1300, alignItems: 'center', marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: fMatches, fontSize: 'clamp(38px, 4.2vw, 68px)', color: '#e84029', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 14 }}>
                  {'MOMENTOS\nQUE FICAM'}
                </div>
                <img src={vecLineRed112} style={{ width: 112, height: 5, display: 'block', marginBottom: 16 }} />
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', lineHeight: '1.4', maxWidth: 450 }}>
                  Um pouco do que já vivemos em nossas ceias de Natal no Cassiano.
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                <div style={{ width: 'clamp(220px, 20vw, 300px)', height: 'clamp(250px, 22vw, 340px)', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos1Natal} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: 'clamp(220px, 20vw, 300px)', height: 'clamp(250px, 22vw, 340px)', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos2Natal} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          )}

          {/* Info bar */}
          {isMobile ? (
            <>
              <div style={{ height: 2, background: '#e84029', marginBottom: 20 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20, alignItems: 'center' }}>
                <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center' }}>INFORMAÇÕES E RESERVAS</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                  <img src={iconPhoneRed} style={{ width: 22, height: 22, flexShrink: 0 }} />
                  <a href="tel:+551231314141" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 17, color: '#ffffff', letterSpacing: '2px', lineHeight: '24px', textDecoration: 'none' }}>(12) 3131-4141</a>
                </div>
                <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 260, height: 52, background: '#e84029', borderRadius: 10, textDecoration: 'none', marginLeft: 'auto', marginRight: 'auto' }}>
                  <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: '#ffffff', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
                </a>
              </div>
              <div style={{ height: 2, background: '#e84029', marginBottom: 16 }} />
            </>
          ) : (
            <>
              <img src={vecLineRed1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 24, marginBottom: 24, display: 'block', flexShrink: 0 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1300, marginBottom: 24, flexShrink: 0 }}>
                <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(12px, 1vw, 15px)', color: '#ffffff', letterSpacing: '3px', textTransform: 'uppercase' }}>INFORMAÇÕES E RESERVAS</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={iconPhoneRed} style={{ width: 22, height: 22, flexShrink: 0 }} />
                  <a href="tel:+551231314141" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', letterSpacing: '3px', textDecoration: 'none' }}>(12) 3131-4141</a>
                </div>
                <a href={getWhatsappUrl('5512992414004', 'a Ceia de Natal')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(220px, 18vw, 280px)', height: 'clamp(44px, 3.8vw, 55px)', background: '#e84029', borderRadius: 10, textDecoration: 'none', flexShrink: 0 }}>
                  <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(12px, 1vw, 15px)', letterSpacing: '3px', color: '#ffffff', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
                </a>
              </div>
              <img src={vecLineRed1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginBottom: 16, display: 'block', flexShrink: 0 }} />
            </>
          )}
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#ffffff', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8, flexShrink: 0 }}>POLÍTICA DE CANCELAMENTO</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: isMobile ? 11 : 'clamp(11px, 1vw, 14px)', color: '#ffffff', lineHeight: '1.5', width: '100%', maxWidth: 1300, flexShrink: 0 }}>
            Cancelamentos até 30/11: reembolso integral no PIX; 95% do valor no cartão de crédito. Cancelamentos até 10/12: reembolso de 50% no PIX; 45% do valor no cartão de crédito. Após 10/12 não aceitamos cancelamento, mas a reserva pode ser transferida para outra pessoa.
          </div>
        </div>
      </section>

      {/* ── Réveillon hero ─────────────────────────────────────────────────── */}
      {isMobile ? (
        <section id="virada-ano" style={{ position: 'relative', overflow: 'hidden', background: '#e2dacd' }}>
          <img src={imgMobHeroRev} style={{ width: '100%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(226,218,205,0.94) 0%, rgba(226,218,205,0.82) 52%, rgba(226,218,205,0.15) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 48, paddingLeft: 24, paddingRight: 24, paddingBottom: 48 }}>
            <div style={{ fontFamily: fMatches, fontSize: 48, color: '#ab8645', lineHeight: '52px', textAlign: 'center', marginBottom: 16, textTransform: 'uppercase', whiteSpace: 'pre-line' }}>
              {'RÉVEILLON\nNO CASSIANO'}
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#362f28', lineHeight: '20px', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', marginBottom: 16 }}>
              31 DE DEZEMBRO DE 2026 | 20H30 ÀS 01H30
            </div>
            <img src={vecLineGold112} style={{ width: 80, height: 5, display: 'block', marginBottom: 18 }} />
            <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 15, color: '#362f28', lineHeight: '22px', letterSpacing: '0.8px', textAlign: 'center', marginBottom: 14, textTransform: 'uppercase' }}>
              UMA NOVA HISTÓRIA COMEÇA SEMPRE À MESA.
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#362f28', lineHeight: '20px', textAlign: 'center', marginBottom: 28 }}>
              Celebre a chegada de 2027 com alta gastronomia, boa música e um ambiente sofisticado, no Hotel Golden Tulip, em São José dos Campos.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 260, height: 54, background: '#ab8645', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '2px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </section>
      ) : (
        <section id="virada-ano" style={{ minHeight: 'clamp(550px, 50vw, 780px)', position: 'relative', overflow: 'hidden', background: 'linear-gradient(to bottom, #e2dacd, #f4f0e7)', display: 'flex', alignItems: 'center' }}>
          <img src={imgReveillonBg} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #e2dacd 30%, #ede7dc 45%, transparent 65%)', zIndex: 1 }} />
          <div style={{ position: 'relative', zIndex: 2, paddingLeft: 'clamp(40px, 15vw, 280px)', paddingRight: 'clamp(20px, 4vw, 60px)', paddingTop: 'clamp(60px, 6vw, 100px)', paddingBottom: 'clamp(60px, 6vw, 100px)' }}>
            <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 76px)', color: '#ab8645', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 16, textTransform: 'uppercase' }}>
              {'RÉVEILLON\nNO CASSIANO'}
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(16px, 1.5vw, 22px)', color: '#362f28', lineHeight: '1.3', letterSpacing: '1.6px', textTransform: 'uppercase', marginBottom: 16 }}>
              31 DE DEZEMBRO DE 2026 | 20H30 ÀS 01H30
            </div>
            <img src={vecLineGold112} style={{ width: 112, height: 5, marginBottom: 16, display: 'block', flexShrink: 0 }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(16px, 1.5vw, 22px)', color: '#362f28', lineHeight: '1.4', letterSpacing: '2px', maxWidth: 750, marginBottom: 16, textTransform: 'uppercase' }}>
              UMA NOVA HISTÓRIA COMEÇA SEMPRE À MESA.
            </div>
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(14px, 1.2vw, 18px)', color: '#362f28', lineHeight: '1.5', maxWidth: 700, marginBottom: 32 }}>
              Celebre a chegada de 2027 com alta gastronomia, boa música e um ambiente sofisticado, no Hotel Golden Tulip, em São José dos Campos.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(260px, 22vw, 380px)', height: 'clamp(48px, 4vw, 68px)', background: '#ab8645', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(14px, 1.2vw, 20px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Estação Buffet Réveillon ───────────────────────────────────────── */}
      <section style={{ background: '#fcfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 'clamp(40px, 5vw, 80px) 20px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(36px, 3.8vw, 60px)', color: '#362f28', lineHeight: '1.1', textAlign: 'center', marginBottom: 12 }}>ESTAÇÃO BUFFET</div>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 16 : 'clamp(15px, 1.4vw, 20px)', color: '#362f28', textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.3', marginBottom: 32 }}>UMA SELEÇÃO DE PRATOS TRADICIONAIS</div>
          {isMobile ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              {[
                { img: imgRevCard2, label: 'Pães, Antepastos,\nQueijos e Frios' },
                { img: imgRevCard1, label: 'Saladas' },
                { img: imgRevCard4, label: 'Pratos Quentes' },
                { img: imgRevCard3, label: 'Sobremesas' },
                { img: imgMesaCafeRev, label: 'Mesa do Café' },
              ].map((card, i) => (
                <div key={i} style={{ width: '100%', border: '2px solid #362f28', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', paddingTop: '72%', position: 'relative', overflow: 'hidden' }}>
                    <img src={card.img} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 14, color: '#362f28', textAlign: 'center', lineHeight: '19px', whiteSpace: 'pre-line' }}>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 36, width: '100%' }}>
              {[
                { img: imgRevCard2, label: 'Pães, Antepastos,\nQueijos e Frios' },
                { img: imgRevCard1, label: 'Saladas' },
                { img: imgRevCard4, label: 'Pratos Quentes' },
                { img: imgRevCard3, label: 'Sobremesas' },
                { img: imgMesaCafeRev, label: 'Mesa do Café' },
              ].map((card, i) => (
                <div key={i} style={{ width: 'clamp(190px, 17vw, 238px)', height: 320, border: '3px solid #362f28', borderRadius: 13, overflow: 'hidden', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
                  <div style={{ width: '100%', height: 240, overflow: 'hidden', flexShrink: 0 }}>
                    <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4px 8px' }}>
                    <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(14px, 1.2vw, 17px)', color: '#362f28', textAlign: 'center', lineHeight: '1.2', whiteSpace: 'pre-line' }}>{card.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: isMobile ? 24 : 0, display: 'flex', justifyContent: 'center', width: '100%' }}>
            <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isMobile ? 260 : 'clamp(260px, 22vw, 380px)', height: isMobile ? 56 : 'clamp(48px, 4vw, 68px)', background: '#362f28', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: isMobile ? 13 : 'clamp(13px, 1.1vw, 17px)', letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Bebidas Inclusas Réveillon ─────────────────────────────────────── */}
      {isMobile ? (
        <section style={{ background: 'linear-gradient(to right, #e2dacd, #f4f0e7)', overflow: 'hidden' }}>
          <div style={{ paddingTop: 48, paddingLeft: 20, paddingRight: 20, paddingBottom: 32, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontFamily: fMatches, fontSize: 52, color: '#ab8645', lineHeight: '56px', textAlign: 'center', marginBottom: 16, whiteSpace: 'pre-line' }}>{'BEBIDAS\nINCLUSAS'}</div>
            <img src={vecLineGold112} style={{ width: 112, height: 5, marginBottom: 16, display: 'block' }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 16, color: '#362f28', lineHeight: '24px', textAlign: 'center' }}>
              Espumante, vinho tinto, vinho branco, cerveja, água mineral, suco e refrigerante.
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <img src={imgBebidasRev} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', width: 260 }}>
              <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 56, background: '#ab8645', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
                <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
              </a>
            </div>
          </div>
        </section>
      ) : (
        <section style={{ background: 'linear-gradient(to right, #e2dacd, #f4f0e7)', display: 'flex', flexDirection: 'row', overflow: 'hidden', minHeight: 'clamp(400px, 35vw, 550px)' }}>
          <div style={{ width: '55%', minHeight: 400, position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
            <img src={imgBebidasRev} style={{ position: 'absolute', width: '100%', height: '100%', inset: 0, objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 'clamp(30px, 4vw, 60px)', paddingRight: 'clamp(30px, 4vw, 60px)' }}>
            <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4.5vw, 76px)', color: '#ab8645', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 16 }}>
              {'BEBIDAS\nINCLUSAS'}
            </div>
            <img src={vecLineGold112} style={{ width: 112, height: 5, marginBottom: 16, display: 'block', flexShrink: 0 }} />
            <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(15px, 1.5vw, 22px)', color: '#362f28', lineHeight: '1.4', maxWidth: 500, marginBottom: 32 }}>
              Espumante, vinho tinto, vinho branco, cerveja, água mineral, suco e refrigerante.
            </div>
            <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(240px, 20vw, 340px)', height: 'clamp(48px, 4vw, 60px)', background: '#ab8645', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(13px, 1.1vw, 17px)', letterSpacing: '2.5px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Animação da Virada ─────────────────────────────────────────────── */}
      <section style={{ background: '#fcfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 'clamp(40px, 5vw, 80px) 20px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(36px, 3.8vw, 60px)', color: '#362f28', lineHeight: '1.1', textAlign: 'center', marginBottom: 12 }}>ANIMAÇÃO DA VIRADA</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: isMobile ? 15 : 'clamp(15px, 1.5vw, 22px)', color: '#362f28', textAlign: 'center', textTransform: 'uppercase', lineHeight: '1.4', maxWidth: 900, marginBottom: 20 }}>
            BANDA SUGAR SOUL E DJ GOULART REVEZAM PARA EMBALAR A NOITE DA VIRADA.
          </div>
          <img src={vecLineGold112} style={{ width: 112, height: 5, marginBottom: 24, display: 'block', flexShrink: 0 }} />
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? 16 : 24, marginBottom: 32, width: '100%', justifyContent: 'center' }}>
            {[
              { img: imgBandaSugarSoul, label: 'Banda sugar soul' },
              { img: imgDjGoulart, label: 'DJ GOULART' },
            ].map((card, i) => (
              <div key={i} style={{ width: isMobile ? '100%' : 'clamp(320px, 30vw, 460px)', height: isMobile ? 240 : 340, flexShrink: 0, border: '3px solid #362f28', borderRadius: 13, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <img src={card.img} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ height: isMobile ? 48 : 56, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#fcfdf5' }}>
                  <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 18 : 'clamp(16px, 1.5vw, 22px)', color: '#362f28', lineHeight: '1.2', textTransform: 'uppercase' }}>{card.label}</span>
                </div>
              </div>
            ))}
          </div>
          <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isMobile ? 260 : 'clamp(260px, 22vw, 380px)', height: isMobile ? 56 : 'clamp(48px, 4vw, 68px)', background: '#362f28', borderRadius: 10, textDecoration: 'none', cursor: 'pointer' }}>
            <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: isMobile ? 13 : 'clamp(13px, 1.1vw, 17px)', letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>RESERVE AGORA</span>
          </a>
        </div>
      </section>

      {/* ── Escolha Réveillon (pricing + reserva) ─────────────────────────── */}
      <section style={{ background: 'linear-gradient(to bottom, #e2dacd, #f4f0e7)', display: 'flex', justifyContent: 'center', padding: 'clamp(32px, 4vw, 64px) 20px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(38px, 4.2vw, 68px)', color: '#ab8645', width: '100%', lineHeight: '1.1', marginBottom: 12, textAlign: isMobile ? 'center' : 'left' }}>
            ESCOLHA COMO VIVER A VIRADA
          </div>
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: isMobile ? 14 : 'clamp(14px, 1.3vw, 18px)', color: '#362f28', lineHeight: '1.4', width: '100%', marginBottom: 32, textAlign: isMobile ? 'center' : 'left' }}>
            Valores por lote, sujeitos à disponibilidade. Não haverá queima de fogos na virada.
          </div>

          <PricingCard
            outerBg="#ab8645" dividerColor="#000000"
            eventLabel="RÉVEILLON" tierLabel="LOTE X" price="R$ 000,00"
            ctaBg="#362f28" ctaText="#faf4fb" ctaHref={getWhatsappUrl('5512992414004', 'o Réveillon')}
            badgeBg="#362f28" includes={['Estações completas do buffet', 'Bebidas selecionadas', 'Banda Sugar Soul + DJ Goulart']}
          />

          <PricingCardHotel
            outerBg="#ffffff" dividerColor="#ab8645"
            ctaBg="#ab8645" ctaText="#fcfdf5" ctaHref={getWhatsappUrl('5512992414004', 'o pacote de Réveillon com Hospedagem')}
            titleAccentColor="#ab8645" titleLines={'RÉVEILLON +\nHOSPEDAGEM'}
            description={'Uma experiência completa para começar o novo ano com mais conforto.\n\nReservas pelo WhatsApp ou telefone do Hotel Golden Tulip.'}
          />

          {!isMobile && (
            <img src={vecLineDark1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 24, marginBottom: 32, display: 'block', flexShrink: 0 }} />
          )}

          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(38px, 4.2vw, 68px)', color: '#362f28', width: '100%', lineHeight: '1.1', marginBottom: 28, marginTop: isMobile ? 16 : 0, textAlign: isMobile ? 'center' : 'left' }}>
            COMO FAZER SUA RESERVA
          </div>

          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { num: '01', label: 'ESCOLHA SUA EXPERIÊNCIA', desc: 'Somente Réveillon ou pacote com hospedagem.' },
                { num: '02', label: 'ENTRE EM CONTATO', desc: 'Réveillon pelo WhatsApp ou telefone do Cassiano. Pacote com hospedagem pelos canais do Hotel Golden Tulip.' },
                { num: '03', label: 'CONFIRME SUA RESERVA', desc: 'A confirmação acontece após o pagamento integral via PIX ou Cartão de Crédito.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: fMatches, fontSize: 48, color: '#ab8645', lineHeight: '48px', flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#362f28', lineHeight: '18px', textTransform: 'uppercase', marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#362f28', lineHeight: '19px' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', width: '100%', maxWidth: 1300, gap: 24 }}>
              {[
                { num: '01', label: 'ESCOLHA SUA EXPERIÊNCIA', desc: 'Somente Réveillon ou pacote com hospedagem.' },
                { num: '02', label: 'ENTRE EM CONTATO', desc: 'Réveillon pelo WhatsApp ou telefone do Cassiano. Pacote com hospedagem pelos canais do Hotel Golden Tulip.' },
                { num: '03', label: 'CONFIRME SUA RESERVA', desc: 'A confirmação acontece após o pagamento integral via PIX ou Cartão de Crédito.' },
              ].map((step, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: fMatches, fontSize: 'clamp(44px, 4vw, 60px)', color: '#ab8645', lineHeight: '1', flexShrink: 0 }}>{step.num}</div>
                  <div>
                    <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(13px, 1.1vw, 16px)', color: '#362f28', lineHeight: '1.3', textTransform: 'uppercase', marginBottom: 4 }}>{step.label}</div>
                    <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(13px, 1vw, 15px)', color: '#362f28', lineHeight: '1.4' }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isMobile ? (
            <div style={{ height: 2, background: '#ab8645', marginTop: 24, marginBottom: 24 }} />
          ) : (
            <img src={vecLineDark1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 32, marginBottom: 32, display: 'block', flexShrink: 0 }} />
          )}

          {/* Momentos que Ficam Réveillon */}
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
              <div>
                <div style={{ fontFamily: fMatches, fontSize: 44, color: '#ab8645', lineHeight: '48px', whiteSpace: 'pre-line', marginBottom: 12, textAlign: 'center' }}>
                  {'MOMENTOS\nQUE FICAM'}
                </div>
                <img src={vecLineGold112} style={{ width: 112, height: 5, display: 'block', marginBottom: 12, marginLeft: 'auto', marginRight: 'auto' }} />
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 15, color: '#362f28', lineHeight: '22px', marginBottom: 16, textAlign: 'center' }}>
                  Um pouco do que já vivemos em nossos Réveillons no Cassiano.
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: '100%', paddingTop: '66%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos2Rev} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: '100%', paddingTop: '66%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos3Rev} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: '100%', paddingTop: '66%', position: 'relative', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos1Rev} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: 32, width: '100%', maxWidth: 1300, alignItems: 'center', marginBottom: 32 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: fMatches, fontSize: 'clamp(38px, 4.2vw, 68px)', color: '#ab8645', lineHeight: '1.05', whiteSpace: 'pre-line', marginBottom: 14 }}>
                  {'MOMENTOS\nQUE FICAM'}
                </div>
                <img src={vecLineGold112} style={{ width: 112, height: 5, display: 'block', marginBottom: 16 }} />
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#362f28', lineHeight: '1.4', maxWidth: 450 }}>
                  Um pouco do que já vivemos em nossos Réveillons no Cassiano.
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, flexShrink: 0 }}>
                <div style={{ width: 'clamp(180px, 16vw, 240px)', height: 'clamp(240px, 20vw, 320px)', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos2Rev} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: 'clamp(180px, 16vw, 240px)', height: 'clamp(240px, 20vw, 320px)', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos3Rev} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ width: 'clamp(180px, 16vw, 240px)', height: 'clamp(240px, 20vw, 320px)', overflow: 'hidden', borderRadius: 8 }}>
                  <img src={imgMomentos1Rev} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
            </div>
          )}

          {/* Info bar */}
          {isMobile ? (
            <>
              <div style={{ height: 2, background: '#ab8645', marginBottom: 20 }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 20, alignItems: 'center' }}>
                <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#362f28', letterSpacing: '2px', textTransform: 'uppercase', textAlign: 'center' }}>INFORMAÇÕES E RESERVAS</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                  <img src={iconPhoneGold} style={{ width: 22, height: 22, flexShrink: 0 }} />
                  <a href="tel:+551231314141" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 17, color: '#362f28', letterSpacing: '2px', lineHeight: '24px', textDecoration: 'none' }}>(12) 3131-4141</a>
                </div>
                <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 260, height: 52, background: '#362f28', borderRadius: 10, textDecoration: 'none', marginLeft: 'auto', marginRight: 'auto' }}>
                  <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 13, letterSpacing: '3px', color: '#faf4fb', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
                </a>
              </div>
              <div style={{ height: 2, background: '#ab8645', marginBottom: 16 }} />
            </>
          ) : (
            <>
              <img src={vecLineDark1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginTop: 24, marginBottom: 24, display: 'block', flexShrink: 0 }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1300, marginBottom: 24, flexShrink: 0 }}>
                <span style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(12px, 1vw, 15px)', color: '#362f28', letterSpacing: '3px', textTransform: 'uppercase' }}>INFORMAÇÕES E RESERVAS</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <img src={iconPhoneGold} style={{ width: 22, height: 22, flexShrink: 0 }} />
                  <a href="tel:+551231314141" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#362f28', letterSpacing: '3px', textDecoration: 'none' }}>(12) 3131-4141</a>
                </div>
                <a href={getWhatsappUrl('5512992414004', 'o Réveillon')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'clamp(220px, 18vw, 280px)', height: 'clamp(44px, 3.8vw, 55px)', background: '#362f28', borderRadius: 10, textDecoration: 'none', flexShrink: 0 }}>
                  <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: 'clamp(12px, 1vw, 15px)', letterSpacing: '3px', color: '#faf4fb', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
                </a>
              </div>
              <img src={vecLineDark1300} style={{ width: '100%', maxWidth: 1300, height: 3, marginBottom: 16, display: 'block', flexShrink: 0 }} />
            </>
          )}
          <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 13, color: '#362f28', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8, flexShrink: 0 }}>POLÍTICA DE CANCELAMENTO</div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: isMobile ? 11 : 'clamp(11px, 1vw, 14px)', color: '#362f28', lineHeight: '1.5', width: '100%', maxWidth: 1300, flexShrink: 0 }}>
            Cancelamentos até 30/11: reembolso integral no PIX; 95% do valor no cartão de crédito. Cancelamentos até 10/12: reembolso de 50% no PIX; 45% do valor no cartão de crédito. Após 10/12 não aceitamos cancelamento, mas a reserva pode ser transferida para outra pessoa.
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer id="footer-contact" style={{ background: '#000', display: 'flex', justifyContent: 'center', padding: 'clamp(40px, 5vw, 64px) 20px 40px' }}>
        <div style={{ width: '100%', maxWidth: 1300, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontFamily: fMatches, fontSize: isMobile ? 44 : 'clamp(38px, 4.2vw, 68px)', color: '#e84029', textAlign: 'center', lineHeight: '1.1', maxWidth: 965, marginBottom: 16 }}>
            GARANTA SEU LUGAR À MESA
          </div>
          <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: isMobile ? 15 : 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', textAlign: 'center', maxWidth: 900, lineHeight: '1.4', marginBottom: 32 }}>
            As reservas são limitadas e os valores variam conforme o lote vigente. Fale com nossa equipe, consulte a disponibilidade e escolha como celebrar no Cassiano.
          </div>
          <a href={getWhatsappUrl('5512992414004', 'as Festas de Fim de Ano')} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: isMobile ? '100%' : 'clamp(260px, 22vw, 340px)', height: isMobile ? 54 : 'clamp(48px, 4vw, 60px)', border: '2px solid #fcfdf5', borderRadius: 10, textDecoration: 'none', cursor: 'pointer', marginBottom: 40 }}>
            <span style={{ fontFamily: fHN, fontWeight: 900, fontSize: isMobile ? 13 : 'clamp(13px, 1.1vw, 17px)', letterSpacing: '3px', color: '#fcfdf5', textTransform: 'uppercase' }}>FAÇA A SUA RESERVA</span>
          </a>
          {isMobile ? (
            <div style={{ width: '100%', height: 2, background: '#e84029', marginBottom: 24 }} />
          ) : (
            <img src={vecLineRed1300} style={{ width: '100%', maxWidth: 1300, height: 3, display: 'block', flexShrink: 0 }} />
          )}
          {isMobile ? (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, paddingTop: 8 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 15, color: '#ffffff', lineHeight: '20px' }}>Colinas Shopping   |   Hotel Golden Tulip</div>
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 13, color: '#ffffff', lineHeight: '20px', marginTop: 4 }}>Av. São João, 2200 - Jardim das Colinas,<br />São José dos Campos - SP</div>
              </div>
              <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                <a href="tel:+551239214004" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 15, color: '#ffffff', textDecoration: 'none' }}>(12) 3921-4004</a>
                <a href={getWhatsappUrl('5512992414004', 'as Festas de Fim de Ano')} target="_blank" rel="noopener noreferrer" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 15, color: '#ffffff', textDecoration: 'none' }}>(12) 99241-4004</a>
              </div>
              <img src={imgLogo} style={{ width: 160, height: 34, objectFit: 'contain' }} />
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1300, paddingTop: 28, paddingBottom: 16 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', lineHeight: '1.3' }}>Colinas Shopping   |   Hotel Golden Tulip</div>
                <div style={{ fontFamily: fHN, fontWeight: 400, fontSize: 'clamp(13px, 1.1vw, 16px)', color: '#ffffff', lineHeight: '1.3', marginTop: 4 }}>Av. São João, 2200  - Jardim das Colinas, São José dos Campos - SP</div>
              </div>
              <img src={vecVertWhite} style={{ width: 2, height: 48, flexShrink: 0, display: 'block', margin: '0 clamp(16px, 3vw, 40px)' }} />
              <div style={{ display: 'flex', gap: 'clamp(16px, 2.5vw, 36px)', alignItems: 'center', flexShrink: 0 }}>
                <a href="tel:+551239214004" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', textDecoration: 'none' }}>(12) 3921-4004</a>
                <a href={getWhatsappUrl('5512992414004', 'as Festas de Fim de Ano')} target="_blank" rel="noopener noreferrer" style={{ fontFamily: fHN, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 20px)', color: '#ffffff', textDecoration: 'none' }}>(12) 99241-4004</a>
              </div>
              <img src={vecVertWhite} style={{ width: 2, height: 48, flexShrink: 0, display: 'block', margin: '0 clamp(16px, 3vw, 40px)' }} />
              <img src={imgLogo} style={{ width: 'clamp(120px, 12vw, 180px)', height: 'auto', objectFit: 'contain', flexShrink: 0 }} />
            </div>
          )}
        </div>
      </footer>

    </div>
  );
}
