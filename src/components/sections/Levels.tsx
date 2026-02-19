"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Activation",
    earns: "Your coworking activates the PeakU partnership",
    does: "No cost, with guided support from our team",
  },
  {
    level: "Step 2",
    title: "Communication",
    earns: "You receive a communication kit to share the benefit",
    does: "Ready-to-use pieces for your community",
  },
  {
    level: "Step 3",
    title: "Direct access",
    earns: "We launch a partnership landing page for your coworking",
    does: "Your community can access and activate the benefit easily",
  },
  {
    level: "Step 4",
    title: "Shared value",
    earns: "Your community posts premium job openings on PeakU",
    does: "Your coworking can also use PeakU to find talent",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Activación",
    earns: "Tu coworking activa el partnership con PeakU",
    does: "Sin costo y con acompañamiento de nuestro equipo",
  },
  {
    level: "Paso 2",
    title: "Difusión",
    earns: "Recibes un kit de comunicación para difundir el beneficio",
    does: "Piezas listas para compartir en tu comunidad",
  },
  {
    level: "Paso 3",
    title: "Acceso directo",
    earns: "Lanzamos una landing del partnership de tu coworking",
    does: "Tu comunidad entra, conoce el beneficio y lo activa fácilmente",
  },
  {
    level: "Paso 4",
    title: "Valor compartido",
    earns: "Tu comunidad publica vacantes premium en PeakU",
    does: "Y tu coworking también puede usar PeakU para encontrar talento",
  },
];

type LevelsProps = {
  locale?: "en" | "es";
};

export default function Levels({ locale = "en" }: LevelsProps) {
  const isEs = locale === "es";
  const levelItems = isEs ? levelsEs : levels;
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-level]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 22, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="levels" className="bg-firo-bg py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "Una activación simple que genera valor para todos" : "A simple activation that creates value for everyone"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Tu coworking comparte un beneficio valioso con su comunidad sin asumir costos. PeakU gana visibilidad y, cuando el partnership funciona bien, se abren nuevas oportunidades para todos."
                : "Your coworking shares a high-value benefit with the community at no cost. PeakU gains visibility and, when the partnership works well, new opportunities open up for everyone."}
            </p>
          </div>

          <div className="grid gap-4">
            {levelItems.map((l) => (
              <div
                key={l.level}
                data-level
                className="group rounded-3xl border border-firo-line bg-firo-bg p-6 shadow-soft transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-firo-muted">{l.level}</div>
                  <div className="h-2 w-2 rounded-full bg-firo-blue opacity-70 group-hover:opacity-100" />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <Stat label={isEs ? "Qué ocurre" : "What happens"} value={l.earns} />
                  <Stat label={isEs ? "Impacto" : "Impact"} value={l.does} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-4">
      <div className="text-xs font-semibold text-firo-muted">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}
