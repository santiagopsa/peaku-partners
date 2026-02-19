"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

const levels = [
  {
    level: "Step 1",
    title: "Signal",
    earns: "You do the hard diagnostic work",
    does: "Screening, interviews, and structured notes",
  },
  {
    level: "Step 2",
    title: "Recommendation",
    earns: "You present a candidate with clear rationale",
    does: "Technical and behavioral evidence, not opinions",
  },
  {
    level: "Step 3",
    title: "Rejection",
    earns: "Feedback arrives without structure",
    does: "\"Not convinced\" with no shared criteria",
  },
  {
    level: "Step 4",
    title: "Reprocess",
    earns: "The process starts again and trust drops",
    does: "Time lost for recruiter, leader, and candidate",
  },
];
const levelsEs = [
  {
    level: "Paso 1",
    title: "Activación",
    earns: "Tu coworking activa el partnership con PeakU",
    does: "Sin costo y con implementación guiada",
  },
  {
    level: "Paso 2",
    title: "Difusión",
    earns: "Recibes un kit de comunicación para difundir el beneficio",
    does: "Piezas listas para compartir con tu comunidad",
  },
  {
    level: "Paso 3",
    title: "Acceso directo",
    earns: "Lanzamos una landing del partnership de tu coworking",
    does: "Tu comunidad entra y activa el beneficio fácilmente",
  },
  {
    level: "Paso 4",
    title: "Valor compartido",
    earns: "Tu comunidad publica vacantes premium en PeakU",
    does: "Tu coworking también puede usar PeakU para encontrar talento",
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
              {isEs ? "Una activación simple que genera valor para todos" : "This is not a talent problem. It is a trust problem."}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Tu coworking ofrece un beneficio de alto impacto para su comunidad sin asumir costos. PeakU gana visibilidad y, cuando el partnership funciona bien, se abre la puerta a nuevas oportunidades."
                : "Teams rarely question the process itself. They question the recruiter’s judgment. PeakU adds structured evidence to make hiring decisions defensible."}
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
