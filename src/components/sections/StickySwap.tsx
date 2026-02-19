"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Evidence-backed decisions", desc: "Each recommendation is presented with clear criteria and objective signals." },
  { title: "Fewer repeated hiring processes", desc: "Shared structure reduces resets, delays, and unnecessary back-and-forth." },
  { title: "Higher hiring leader trust", desc: "Leaders understand why a candidate fits, before relying on gut feeling." },
  { title: "Your work becomes visible", desc: "The depth of your recruiting process is no longer hidden behind opinions." },
];
const cardsEs = [
  { title: "Beneficio premium para tu comunidad", desc: "Las personas y empresas de tu coworking acceden a publicar una vacante premium sin costo en PeakU." },
  { title: "Activación sin costo", desc: "Tu coworking no paga por participar: solo activas el partnership y empezamos juntos." },
  { title: "Visibilidad y crecimiento para ambos", desc: "PeakU se da a conocer en nuevas comunidades y tu coworking suma una propuesta diferencial." },
  { title: "También para contratar talento", desc: "Tu coworking también puede usar la plataforma para encontrar talento cuando lo necesite." },
];

type StickySwapProps = {
  locale?: "en" | "es";
};

export default function StickySwap({ locale = "en" }: StickySwapProps) {
  const isEs = locale === "es";
  const cardsToRender = isEs ? cardsEs : cards;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-swap-item]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.25, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom 50%",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="md:sticky md:top-24 md:h-fit">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Lo que gana tu coworking al activar el partnership" : "What changes when evidence is shared"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "Convertimos una activación simple en un beneficio concreto para tu comunidad y en una oportunidad de crecimiento para ambas partes."
                : "It is not about arguing harder. It is about making your process visible and credible."}
            </p>
          </div>

          <div className="grid gap-4">
            {cardsToRender.map((c) => (
              <div
                key={c.title}
                data-swap-item
                className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft"
              >
                <div className="text-firo-muted">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
