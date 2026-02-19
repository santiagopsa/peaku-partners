"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const cards = [
  { title: "Premium benefit for your community", desc: "People and companies in your coworking can post a premium job opening at no cost on PeakU." },
  { title: "No-cost activation", desc: "Your coworking does not pay to participate: you activate the partnership, and we support you through the process." },
  { title: "More value for your community", desc: "You share a practical, high-impact opportunity with the people and teams in your coworking." },
  { title: "Also useful to hire talent", desc: "Your coworking can also use the platform to find talent when needed." },
];
const cardsEs = [
  { title: "Beneficio premium para tu comunidad", desc: "Las personas y empresas de tu coworking acceden a publicar una vacante premium sin costo en PeakU." },
  { title: "Activación sin costo", desc: "Tu coworking no paga por participar: tú activas el partnership y nosotros te acompañamos en el proceso." },
  { title: "Más valor para tu comunidad", desc: "Compartes una oportunidad útil y diferencial para las personas y equipos que hacen parte de tu coworking." },
  { title: "También para contratar talento", desc: "Además, tu coworking puede usar la plataforma para encontrar talento cuando lo necesite." },
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
              {isEs ? "Lo que gana tu coworking al activar el partnership" : "What your coworking gains by activating the partnership"}
            </h2>
            <p className="mt-4 max-w-lg text-firo-muted">
              {isEs
                ? "Convertimos una activación simple en un beneficio concreto para tu comunidad y en una oportunidad de crecimiento compartido."
                : "We turn a simple activation into a clear benefit for your community and a shared growth opportunity."}
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
