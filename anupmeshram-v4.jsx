import { useState, useEffect, useRef, useCallback } from "react";

/* ═══ HOOKS ═══ */
function useReveal(t = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    o.observe(el); return () => o.disconnect();
  }, [t]);
  return { ref, v };
}

function Counter({ end, pre = "", suf = "", dur = 1500 }) {
  const [n, setN] = useState(0);
  const { ref, v } = useReveal(0.3);
  useEffect(() => {
    if (!v) return;
    const t0 = performance.now();
    const f = (now) => { const p = Math.min((now - t0) / dur, 1); setN(Math.floor((1 - Math.pow(1 - p, 4)) * end)); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
  }, [v, end, dur]);
  return <span ref={ref}>{pre}{n}{suf}</span>;
}

/* ═══ ICONS (proper SVG, no emojis) ═══ */
const Icons = {
  strategy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  impact: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  team: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  bolt: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

/* ═══ DOTTED WAVE SURFACE ═══ */
function DottedWaveSurface() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const c = canvasRef.current; if (!c) return;
    const ctx = c.getContext("2d");
    let count = 0, raf;
    const COLS = 50, ROWS = 28, SEP = 26;
    const resize = () => { c.width = c.offsetWidth * 2; c.height = c.offsetHeight * 2; ctx.scale(2, 2); };
    resize();
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      const w = c.offsetWidth, h = c.offsetHeight;
      const ox = (w - (COLS - 1) * SEP) / 2;
      const oy = h * 0.5;
      for (let ix = 0; ix < COLS; ix++) {
        for (let iy = 0; iy < ROWS; iy++) {
          const x = ox + ix * SEP;
          const wave = Math.sin((ix + count) * 0.25) * 14 + Math.sin((iy + count) * 0.4) * 10;
          const y = oy + (iy - ROWS / 2) * SEP + wave;
          const dist = Math.abs(wave) / 24;
          const alpha = 0.08 + dist * 0.2;
          const size = 1 + dist * 1.3;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 210, 190, ${alpha})`;
          ctx.fill();
        }
      }
      count += 0.035;
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.55 }} />;
}

/* ═══ SPOTLIGHT SVG ═══ */
function Spotlight() {
  return (
    <svg style={{ position: "absolute", top: "-30%", left: "-10%", width: "130%", height: "160%", pointerEvents: "none", opacity: 0, animation: "spotIn 1.5s ease forwards 0.4s" }} viewBox="0 0 3787 2842" fill="none">
      <g filter="url(#sf)"><ellipse cx="1924" cy="273" rx="1924" ry="273" transform="matrix(-0.82 -0.57 -0.57 0.82 3631 2291)" fill="rgba(0,210,190,0.1)" /></g>
      <defs><filter id="sf" x="0" y="0" width="3787" height="2842" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="bg"/><feBlend in="SourceGraphic" in2="bg" result="s"/><feGaussianBlur stdDeviation="151" result="b"/></filter></defs>
    </svg>
  );
}

/* ═══ GLOWING CARD — Aceternity-style conic gradient border ═══ */
function GlowCard({ children, accent = true }) {
  const ref = useRef(null);
  const handleMouse = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
    const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
    const isNear = (
      e.clientX > r.left - 80 && e.clientX < r.right + 80 &&
      e.clientY > r.top - 80 && e.clientY < r.bottom + 80
    );
    el.style.setProperty("--angle", `${angle}deg`);
    el.style.setProperty("--active", isNear ? "1" : "0");
    el.style.setProperty("--gx", `${e.clientX - r.left}px`);
    el.style.setProperty("--gy", `${e.clientY - r.top}px`);
  }, []);
  const handleLeave = useCallback(() => {
    const el = ref.current; if (!el) return;
    el.style.setProperty("--active", "0");
  }, []);

  useEffect(() => {
    const fn = (e) => handleMouse(e);
    document.addEventListener("pointermove", fn, { passive: true });
    return () => document.removeEventListener("pointermove", fn);
  }, [handleMouse]);

  const borderColor = accent ? "0, 210, 190" : "120, 140, 150";

  return (
    <div ref={ref} onMouseLeave={handleLeave}
      style={{
        "--angle": "0deg", "--active": "0", "--gx": "50%", "--gy": "50%",
        position: "relative", borderRadius: 20, padding: 1.5,
        background: `conic-gradient(from var(--angle), transparent 40%, rgba(${borderColor}, calc(0.5 * var(--active))) 50%, transparent 60%)`,
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = `0 12px 40px rgba(${borderColor}, 0.06)`; }}
      onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Inner card */}
      <div style={{
        borderRadius: 19, overflow: "hidden", position: "relative",
        background: "rgba(8, 12, 20, 0.92)",
        backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      }}>
        {/* Cursor glow overlay */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(500px circle at var(--gx) var(--gy), rgba(${borderColor}, 0.06), transparent 45%)`,
          opacity: "var(--active)", transition: "opacity 0.4s ease",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </div>
    </div>
  );
}

/* ═══ TOKENS ═══ */
const FD = "'Sora', sans-serif";
const FB = "'IBM Plex Sans', sans-serif";
const AC = "#00d2be";
const AC2 = "#00b4d8";
const BG = "#060810";
const T1 = "#e8eeef";
const T2 = "rgba(180, 205, 210, 0.6)";
const T3 = "rgba(140, 170, 178, 0.4)";
const BD = "rgba(0, 210, 190, 0.08)";

/* ═══ NAVBAR ═══ */
const NAV = ["About", "Experience", "Projects", "Skills", "Contact"];
function Navbar() {
  const [s, setS] = useState(false);
  useEffect(() => { const f = () => setS(window.scrollY > 50); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: s ? "8px 0" : "16px 0", transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", justifyContent: "center" }}>
        <nav style={{
          display: "flex", alignItems: "center", gap: 2,
          background: s ? "rgba(8,12,20,0.88)" : "rgba(8,12,20,0.5)",
          backdropFilter: "blur(24px) saturate(1.5)", WebkitBackdropFilter: "blur(24px) saturate(1.5)",
          borderRadius: 60, padding: "5px 6px",
          border: `1px solid rgba(0,210,190,${s ? 0.1 : 0.04})`,
          boxShadow: s ? "0 4px 40px rgba(0,210,190,0.04)" : "none",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <a href="#" style={{ padding: "8px 18px", borderRadius: 50, textDecoration: "none", fontFamily: FD, fontSize: 15, fontWeight: 700, color: AC }}>AM</a>
          <div style={{ width: 1, height: 14, background: BD, margin: "0 4px" }} />
          {NAV.map(n => (
            <a key={n} href={`#${n.toLowerCase()}`} style={{ padding: "8px 16px", borderRadius: 50, textDecoration: "none", fontFamily: FB, fontSize: 11.5, fontWeight: 500, color: T3, letterSpacing: "0.05em", textTransform: "uppercase", transition: "all 0.25s ease" }}
              onMouseEnter={e => { e.target.style.color = AC; e.target.style.background = "rgba(0,210,190,0.06)"; }}
              onMouseLeave={e => { e.target.style.color = T3; e.target.style.background = "transparent"; }}
            >{n}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ═══ SECTION HEADER ═══ */
function SectionHead({ title }) {
  const { ref, v } = useReveal();
  return (
    <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)", display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
      <div style={{ width: 10, height: 10, borderRadius: "50%", background: AC, boxShadow: `0 0 12px ${AC}50` }} />
      <h2 style={{ fontFamily: FD, fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 700, color: T1, letterSpacing: "-0.03em" }}>{title}</h2>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${BD}, transparent)` }} />
    </div>
  );
}

/* ═══ HERO ═══ */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 200); }, []);
  const a = (i) => ({ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(28px)", transition: `all 0.85s cubic-bezier(0.16,1,0.3,1) ${250 + i * 130}ms` });

  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", padding: "120px 32px 80px" }}>
      <DottedWaveSurface />
      <Spotlight />
      <div style={{ position: "absolute", top: "0%", right: "5%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,210,190,0.05) 0%, transparent 55%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={a(0)}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 10px", borderRadius: 50, background: "rgba(8,12,20,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(0,210,190,0.15)", marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: AC, boxShadow: `0 0 12px ${AC}60`, animation: "pulse 2.5s ease-in-out infinite" }} />
              <span style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, color: AC, letterSpacing: "0.08em", textTransform: "uppercase" }}>Building Intelligent Systems</span>
            </span>
          </div>
          <div style={{ ...a(1), fontFamily: FB, fontSize: 12, fontWeight: 500, color: T3, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Data Science Leader · AI/ML Architect</div>
          <h1 style={{ ...a(2), fontFamily: FD, fontWeight: 700, fontSize: "clamp(46px, 5.5vw, 70px)", color: T1, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 6 }}>Anup</h1>
          <h1 style={{ ...a(3), fontFamily: FD, fontWeight: 300, fontSize: "clamp(46px, 5.5vw, 70px)", letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 28, background: `linear-gradient(135deg, ${AC} 0%, ${AC2} 60%, #7dd3fc 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Meshram</h1>
          <p style={{ ...a(4), fontFamily: FB, fontSize: 15, fontWeight: 400, color: T2, lineHeight: 1.8, maxWidth: 430, marginBottom: 36 }}>
            11+ years shipping production AI/ML. Drove <span style={{ color: AC, fontWeight: 600 }}>$100M+</span> impact at <span style={{ color: T1 }}> AWS</span>, <span style={{ color: T1 }}>Ouro</span> & <span style={{ color: T1 }}>NBC Universal</span> — agentic AI, recommendation engines, anomaly detection at scale.
          </p>
          <div style={{ ...a(5), display: "flex", gap: 12 }}>
            <a href="#experience" style={{ padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontFamily: FB, fontSize: 13, fontWeight: 600, color: BG, background: `linear-gradient(135deg, ${AC}, ${AC2})`, boxShadow: `0 2px 20px rgba(0,210,190,0.2)`, transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(0,210,190,0.3)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 2px 20px rgba(0,210,190,0.2)"; }}
            >View Experience</a>
            <a href="#projects" style={{ padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontFamily: FB, fontSize: 13, fontWeight: 500, color: T2, background: "rgba(8,12,20,0.6)", backdropFilter: "blur(12px)", border: `1px solid ${BD}`, transition: "all 0.3s ease" }}
              onMouseEnter={e => { e.target.style.borderColor = "rgba(0,210,190,0.25)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.target.style.borderColor = BD; e.target.style.transform = "translateY(0)"; }}
            >Explore Projects</a>
          </div>
        </div>

        {/* Impact Dashboard */}
        <div style={a(3)}>
          <GlowCard>
            <div style={{ padding: "32px 28px" }}>
              <div style={{ position: "absolute", top: 0, left: 28, right: 28, height: 1, background: `linear-gradient(90deg, transparent, ${AC}35, transparent)` }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: AC, boxShadow: `0 0 8px ${AC}60` }} />
                <span style={{ fontFamily: FB, fontSize: 10.5, fontWeight: 600, color: T3, letterSpacing: "0.1em", textTransform: "uppercase" }}>Impact Dashboard</span>
              </div>
              <div style={{ fontFamily: FD, fontSize: "clamp(48px, 5.5vw, 64px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.9, marginBottom: 6, background: `linear-gradient(135deg, ${T1} 20%, ${AC} 80%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <Counter end={100} pre="$" suf="M+" />
              </div>
              <div style={{ fontFamily: FB, fontSize: 13, color: T3, marginBottom: 24 }}>cumulative business value through AI/ML</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: BD, borderRadius: 14, overflow: "hidden" }}>
                {[{ n: 350, s: "M", l: "Users Profiled", p: "" }, { n: 95, s: "%", l: "AML Automated", p: "" }, { n: 87, s: "M", l: "Spend Averted", p: "$" }].map((m, i) => (
                  <div key={i} style={{ background: "rgba(6,8,14,0.9)", padding: "18px 10px", textAlign: "center" }}>
                    <div style={{ fontFamily: FD, fontSize: 24, fontWeight: 700, color: T1, letterSpacing: "-0.02em", marginBottom: 3 }}><Counter end={m.n} pre={m.p} suf={m.s} /></div>
                    <div style={{ fontFamily: FB, fontSize: 9, fontWeight: 500, color: T3, letterSpacing: "0.06em", textTransform: "uppercase" }}>{m.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, display: "flex", alignItems: "flex-end", gap: 2.5, height: 36 }}>
                {[30, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 100].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 2.5, background: `linear-gradient(to top, rgba(0,210,190,0.08), rgba(0,210,190,${0.06 + h / 400}))` }} />
                ))}
              </div>
              <div style={{ fontFamily: FB, fontSize: 9.5, color: T3, marginTop: 6, textAlign: "center" }}>Impact trajectory · 2015 – 2026</div>
            </div>
          </GlowCard>
          <div style={{ ...a(6), position: "absolute", top: -14, right: 16, background: "rgba(8,12,20,0.88)", backdropFilter: "blur(12px)", borderRadius: 12, padding: "9px 14px", border: `1px solid ${BD}`, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 8px rgba(52,211,153,0.5)" }} />
            <span style={{ fontFamily: FB, fontSize: 11, fontWeight: 500, color: T2 }}>Currently at Ouro Inc.</span>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.8)}} @keyframes spotIn{to{opacity:1}}`}</style>
    </section>
  );
}

/* ═══ ABOUT — Glowing Bento with SVG icons ═══ */
function About() {
  const items = [
    { icon: Icons.strategy, title: "AI/ML Strategy", desc: "3-year roadmaps with C-suite, transforming operations through GenAI & Agentic AI systems across Fintech, Cloud, and Media." },
    { icon: Icons.impact, title: "$100M+ Impact", desc: "Cumulative business value driven through production AI/ML initiatives — from anomaly detection to customer profiling at scale." },
    { icon: Icons.team, title: "Team Builder", desc: "Scaled data science organizations from 1 to 5+ members with MLOps best practices and 60% faster model-to-production cycles." },
    { icon: Icons.bolt, title: "Full Stack AI", desc: "End-to-end: anomaly detection on 100Bn logs/day, time-series forecasting 1.2T data points, rec engines serving 20M+ users." },
  ];

  return (
    <section id="about" style={{ padding: "100px 32px", maxWidth: 1120, margin: "0 auto" }}>
      <SectionHead title="About" />
      <p style={{ fontFamily: FB, fontSize: 15, color: T2, lineHeight: 1.8, maxWidth: 700, marginBottom: 44 }}>
        I lead data science teams that deliver production-grade AI/ML systems driving real business impact. Over 11+ years, I've shipped solutions — from Agentic AI platforms to recommendation engines — generating measurable revenue across Fintech, Cloud, and Media.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {items.map((m, i) => {
          const rv = useReveal(0.1);
          return (
            <div key={i} ref={rv.ref} style={{ opacity: rv.v ? 1 : 0, transform: rv.v ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms` }}>
              <GlowCard>
                <div style={{ padding: "28px 26px", minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  {/* Icon container */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "rgba(0, 210, 190, 0.06)",
                    border: "1px solid rgba(0, 210, 190, 0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: AC, marginBottom: 20,
                  }}>
                    {m.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: FD, fontSize: 18, fontWeight: 700, color: T1, letterSpacing: "-0.02em", marginBottom: 10 }}>{m.title}</h3>
                    <p style={{ fontFamily: FB, fontSize: 13.5, color: T2, lineHeight: 1.7 }}>{m.desc}</p>
                  </div>
                </div>
              </GlowCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══ EXPERIENCE ═══ */
const ROLES = [
  { co: "Ouro Inc.", sub: "Previously NetSpend", role: "Data Science Leader, Innovation", dates: "2024 – Present", current: true, bullets: ["Lead 5-member DS org; C-suite AI/ML roadmap partner", "AI profiling 350M users → 23% retention, $28M revenue", "Agentic AML → 95% automation, $5M+/yr saved", "RAG assistant → CSAT +18pts; 99% CTR filings automated"] },
  { co: "Amazon Web Services", sub: "AWS", role: "Data Science Lead", dates: "2020 – 2024", current: false, bullets: ["ML strategy for $1.5B Cloud Management services", "GenAI remediation → 65% resolved <15min, $87M averted", "Time-series forecasting 1.2T data points → $55M ARR", "100Bn+ CloudTrail logs/day → 97.96% precision"] },
  { co: "NBC Universal", sub: "Peacock", role: "Senior Data Scientist", dates: "2015 – 2020", current: false, bullets: ["ML ratings forecasting → 65% accuracy gain", "Two-tower rec engine → 33% lift, 20M streams"] },
];

function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 32px", maxWidth: 1120, margin: "0 auto" }}>
      <SectionHead title="Experience" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {ROLES.map((r, i) => {
          const rv = useReveal(0.1);
          return (
            <div key={i} ref={rv.ref} style={{ opacity: rv.v ? 1 : 0, transform: rv.v ? "translateY(0)" : "translateY(24px)", transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms` }}>
              <GlowCard accent={r.current}>
                <div style={{ padding: "28px 28px 24px", display: "grid", gridTemplateColumns: "180px 1fr", gap: 28, position: "relative" }}>
                  {r.current && <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 2.5, borderRadius: 2, background: `linear-gradient(to bottom, ${AC}, transparent)` }} />}
                  <div>
                    <div style={{ fontFamily: FB, fontSize: 12, fontWeight: 600, color: r.current ? AC : T3, letterSpacing: "0.04em" }}>{r.dates}</div>
                    {r.current && <div style={{ marginTop: 10, display: "inline-flex", padding: "3px 10px", borderRadius: 50, background: "rgba(0,210,190,0.06)", border: "1px solid rgba(0,210,190,0.15)" }}>
                      <span style={{ fontFamily: FB, fontSize: 9, fontWeight: 700, color: AC, letterSpacing: "0.1em", textTransform: "uppercase" }}>Current</span>
                    </div>}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: FD, fontSize: 20, fontWeight: 700, color: T1, letterSpacing: "-0.02em", marginBottom: 2 }}>{r.co}<span style={{ fontFamily: FB, fontSize: 12.5, fontWeight: 400, color: T3, marginLeft: 8 }}>({r.sub})</span></h3>
                    <div style={{ fontFamily: FB, fontSize: 13, fontWeight: 500, color: T2, marginBottom: 14 }}>{r.role}</div>
                    {r.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, marginBottom: 7, fontFamily: FB, fontSize: 13, lineHeight: 1.7, color: T2 }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: r.current ? `${AC}50` : "rgba(255,255,255,0.06)", marginTop: 9, flexShrink: 0 }} />
                        <span>{b.split(/(\$?\d+[MBKT%]?\+?(?:\/yr)?)/g).map((p, pi) => /\d/.test(p) ? <span key={pi} style={{ color: AC, fontWeight: 600 }}>{p}</span> : p)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlowCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ═══ SKILLS ═══ */
const S1 = ["Generative AI", "Agentic AI", "LLMs", "RAG", "LangGraph", "Anomaly Detection", "Time-Series", "Recommendation Engines"];
const S2 = ["Python", "SQL", "MLOps", "AWS", "Snowflake", "Team Leadership", "C-Suite Strategy", "Cross-functional"];
function Skills() {
  const rv = useReveal();
  return (
    <section id="skills" style={{ padding: "60px 0", overflow: "hidden", borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
      <div ref={rv.ref} style={{ opacity: rv.v ? 1 : 0, transition: "opacity 0.8s ease" }}>
        {[S1, S2].map((row, ri) => (
          <div key={ri} style={{ display: "flex", gap: 10, animation: `sk${ri} ${36 + ri * 5}s linear infinite`, marginBottom: ri === 0 ? 10 : 0 }}>
            {[...row, ...row, ...row].map((s, si) => {
              const hi = S1.slice(0, 4).includes(s);
              return <span key={si} style={{ padding: "9px 20px", borderRadius: 50, whiteSpace: "nowrap", fontFamily: FB, fontSize: 12, fontWeight: hi ? 600 : 400, color: hi ? AC : T3, background: hi ? "rgba(0,210,190,0.06)" : "rgba(255,255,255,0.015)", border: `1px solid ${hi ? "rgba(0,210,190,0.15)" : "rgba(255,255,255,0.03)"}` }}>{s}</span>;
            })}
          </div>
        ))}
      </div>
      <style>{`@keyframes sk0{0%{transform:translateX(0)}100%{transform:translateX(-33.33%)}} @keyframes sk1{0%{transform:translateX(-33.33%)}100%{transform:translateX(0)}}`}</style>
    </section>
  );
}

/* ═══ CONTACT ═══ */
function Contact() {
  const rv = useReveal();
  return (
    <section id="contact" style={{ padding: "100px 32px", maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
      <div ref={rv.ref} style={{ opacity: rv.v ? 1 : 0, transform: rv.v ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ display: "inline-flex", width: 48, height: 48, borderRadius: 14, background: "rgba(8,12,20,0.7)", backdropFilter: "blur(12px)", border: `1px solid ${BD}`, alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: `0 0 24px rgba(0,210,190,0.06)` }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: AC, boxShadow: `0 0 16px ${AC}60` }} />
        </div>
        <h2 style={{ fontFamily: FD, fontSize: "clamp(30px, 4.5vw, 44px)", fontWeight: 700, color: T1, letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.1 }}>
          Let's build the <span style={{ background: `linear-gradient(135deg, ${AC}, ${AC2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>future</span>
        </h2>
        <p style={{ fontFamily: FB, fontSize: 14, color: T2, lineHeight: 1.7, marginBottom: 36 }}>Interested in AI/ML strategy, data science leadership, or building intelligent systems at scale.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a href="https://linkedin.com/in/anupmeshram" target="_blank" style={{ padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontFamily: FB, fontSize: 13, fontWeight: 600, color: BG, background: `linear-gradient(135deg, ${AC}, ${AC2})`, boxShadow: `0 2px 20px rgba(0,210,190,0.2)`, transition: "all 0.3s ease" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.target.style.transform = "translateY(0)"; }}>LinkedIn</a>
          <a href="mailto:anup.meshram@gmail.com" style={{ padding: "13px 28px", borderRadius: 10, textDecoration: "none", fontFamily: FB, fontSize: 13, fontWeight: 500, color: T2, background: "rgba(8,12,20,0.6)", backdropFilter: "blur(12px)", border: `1px solid ${BD}`, transition: "all 0.3s ease" }}
            onMouseEnter={e => { e.target.style.borderColor = "rgba(0,210,190,0.25)"; e.target.style.transform = "translateY(-2px)"; }} onMouseLeave={e => { e.target.style.borderColor = BD; e.target.style.transform = "translateY(0)"; }}>Email</a>
        </div>
      </div>
    </section>
  );
}

/* ═══ APP ═══ */
export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: BG, overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700&display=swap" rel="stylesheet" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <footer style={{ padding: "24px 32px", maxWidth: 1120, margin: "0 auto", borderTop: `1px solid ${BD}`, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: FB, fontSize: 11, color: T3 }}>© 2026 Anup Meshram</span>
        <span style={{ fontFamily: FB, fontSize: 11, color: T3 }}>Designed with intelligence.</span>
      </footer>
    </div>
  );
}
