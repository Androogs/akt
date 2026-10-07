import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIAS, MOTOS } from "../data/motos.js";
import { dealer, waLink } from "../data/dealer.js";
import { img, cop, getMoto, getCategoria, motosDe, ahorro, DESTACADAS } from "../utils/catalogo.js";
import { IconArrow, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield, categoryIcon } from "../components/Icons.jsx";
import useReveal from "../components/useReveal.js";

const SLIDES = DESTACADAS.map(getMoto).filter(Boolean);
const MS = 6000;

// CARRUSEL NUEVO - pon tus imagenes en /public
const BANNERS = [
  "public/akt-motos-home-banner-nkd-desktop.webp",
  "public/akt-motos-home-banner-seguridad-vial-desktop-v2.webp",
  "public/Banner_home_agosto_NKD-01-1.jpg"
];
const MS_BANNER = 1800;

export default function Inicio() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const [b, setB] = useState(0);
  const [pausaB, setPausaB] = useState(false);

  useReveal();

  useEffect(() => {
    if (pausa) return;
    const t = setTimeout(() => setI((i + 1) % SLIDES.length), MS);
    return () => clearTimeout(t);
  }, [i, pausa]);

  useEffect(() => {
    if (pausaB) return;
    const t = setInterval(() => setB((p) => (p + 1) % BANNERS.length), MS_BANNER);
    return () => clearInterval(t);
  }, [pausaB]);

  const m = SLIDES[i];
  const cat = getCategoria(m.categoria);
  const save = ahorro(m);

  return (
    <>
      <section className="bc" onMouseEnter={() => setPausaB(true)} onMouseLeave={() => setPausaB(false)}>
        <div className="bc__track">
          {BANNERS.map((src, k) => (
            <img key={k} src={src} alt={`Banner ${k + 1}`} className={`bc__img ${k === b? "is-on" : ""}`} />
          ))}
        </div>
        <button className="bc__arrow bc__arrow--prev" onClick={() => setB((p) => (p - 1 + BANNERS.length) % BANNERS.length)}>‹</button>
        <button className="bc__arrow bc__arrow--next" onClick={() => setB((p) => (p + 1) % BANNERS.length)}>›</button>
        <div className="bc__dots">
          {BANNERS.map((_, k) => (
            <button key={k} className={`bc__dot ${k === b? "is-on" : ""}`} onClick={() => setB(k)} aria-label={`Banner ${k + 1}`}>
              <i><b style={{ animationDuration: `${MS_BANNER}ms`, animationPlayState: pausaB? "paused" : "running", animationName: k === b? "bc-progress" : "none" }} /></i>
            </button>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec__head reveal">
            <div>
              <span className="eyebrow">Portafolio AKT</span>
              <h2 className="h-display">Elige tu línea</h2>
            </div>
            <Link to="/motos" className="link-arrow">Ver los {MOTOS.length} modelos <IconArrow width="18" /></Link>
          </div>
          <div className="lines">
            {CATEGORIAS.map((c, k) => {
              const lista = motosDe(c.id);
              const hero = lista.reduce((a, b) => (b.precio > a.precio? b : a), lista[0]);
              const Icon = categoryIcon[c.id];
              return (
                <Link key={c.id} to={`/motos/${c.id}`} className={`line reveal ${k === 0? "line--wide" : ""}`} style={{ "--d": `${k * 60}ms` }}>
                  <div className="line__text">
                    <h3>{c.nombre}</h3>
                    <p>{c.lema}</p>
                    <small>{lista.length} modelos · desde {cop(Math.min(...lista.map((x) => x.precio)))}*</small>
                  </div>
                  <img src={img(hero)} alt="" loading="lazy" />
                  <span className="line__go"><IconArrow /></span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band__grid">
          <div className="band__intro reveal">
            <span className="eyebrow eyebrow--light">{dealer.displayName}</span>
            <h2 className="h-display">Compra, financia y mantén tu AKT en un solo lugar</h2>
            <a className="btn btn--red" href={waLink("Hola, quiero agendar una visita al concesionario AKT Palmira.")} target="_blank" rel="noreferrer">
              <IconWhatsapp width="18" height="18" /> Agenda tu visita
            </a>
          </div>
          {[
            { i: <IconCard />, t: "Financiación", d: "Simula tu cuota y solicita tu estudio de crédito con nuestro equipo.", to: "/financiacion" },
            { i: <IconWrench />, t: "Taller especializado", d: "Mantenimiento preventivo y correctivo con técnicos AKT.", to: "/posventa" },
            { i: <IconBox />, t: "Repuestos originales", d: "Repuestos y accesorios originales para todas las líneas.", to: "/posventa?s=repuestos" },
            { i: <IconShield />, t: "Garantía y respaldo", d: "Te acompañamos durante toda la garantía de fábrica.", to: "/posventa?s=garantia" },
          ].map((p, k) => (
            <Link key={p.t} to={p.to} className="perk reveal" style={{ "--d": `${k * 70}ms` }}>
              <span className="perk__icon">{p.i}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="perk__more">Ver más <IconArrow width="14" height="14" /></span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}