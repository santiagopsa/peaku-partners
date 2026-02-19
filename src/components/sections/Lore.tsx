"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="lore" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          <h2 data-reveal className="text-3xl font-semibold tracking-tight md:text-4xl">
            {isEs
              ? "Una alianza simple, pensada para tu comunidad"
              : "A simple partnership built for your community"}
          </h2>
          <p data-reveal className="mt-4 text-firo-muted">
            {isEs
              ? "Cuando activas el partnership con PeakU, tu comunidad accede a publicar una vacante premium sin costo y tu coworking suma un beneficio que se siente cercano y útil."
              : "When you activate the PeakU partnership, your community gets access to post a premium job opening at no cost, and your coworking adds a practical, high-value benefit."}
          </p>
          <p data-reveal className="mt-3 text-firo-muted">
            {isEs
              ? "Es una relación gana-gana: tu comunidad recibe más oportunidades, tu coworking se diferencia y PeakU llega a nuevas comunidades."
              : "It is a win-win: your community gets more opportunities, your coworking stands out, and PeakU reaches new communities."}
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              desc={isEs ? "No pagas por activar. Tu equipo nos da el sí y nosotros ponemos en marcha el partnership." : "There is no activation fee. Your team gives us the go-ahead, and we launch the partnership."}
            />
            <Card
              desc={isEs ? "Recibes un kit de comunicación con piezas listas para contar el beneficio dentro de tu comunidad." : "You receive a communication kit with ready-to-use pieces to share the benefit with your community."}
            />
            <Card
              desc={isEs ? "También creamos una landing de tu partnership para que tu comunidad entre, entienda el beneficio y lo active fácilmente." : "We also create a partnership landing page so your community can access, understand, and activate the benefit easily."}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Card({ desc }: { desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
