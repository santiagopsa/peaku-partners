"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type VideoHeroProps = {
  locale?: "en" | "es";
};

export default function VideoHero({ locale = "en" }: VideoHeroProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-counter]",
        { innerText: 0 },
        {
          innerText: 1414,
          duration: 1.2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: root.current!, start: "top 70%" },
        } as any
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100vh] overflow-hidden bg-firo-bg text-firo-text"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/firo-hero-poster.jpg"
      >
        <source src="/video/firo-hero.webm" type="video/webm" />
        <source src="/video/firo-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/65 to-firo-bg/95" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,.9) 0, rgba(255,255,255,.9) 1px, transparent 2px, transparent 7px)",
        }}
      />

      <Container>
        <div className="relative z-10 flex min-h-[100vh] items-center py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-xs text-firo-muted">
              <a
                href="/"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  !isEs ? "bg-firo-blue/10 text-firo-text" : ""
                }`}
              >
                EN
              </a>
              <a
                href="/es"
                className={`rounded-md px-2 py-1 hover:text-firo-text ${
                  isEs ? "bg-firo-blue/10 text-firo-text" : ""
                }`}
              >
                ES
              </a>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-firo-muted border border-firo-line">
              <span className="h-2 w-2 rounded-full bg-firo-blue" />
              {isEs ? "Partnership de PeakU para coworkings" : "PeakU partnership for coworkings"}
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              {isEs
                ? "Activa este beneficio con PeakU y compártelo con tu comunidad."
                : "Activate this PeakU benefit and share it with your community."}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-firo-muted md:text-lg">
              {isEs
                ? "Desde tu coworking puedes abrir, sin costo, el acceso para que tu comunidad publique una vacante premium en PeakU. Nosotros te enviamos un kit de comunicación y una landing lista para que lo compartas fácilmente."
                : "From your coworking, you can unlock access at no cost so your community can post a premium job opening on PeakU. We send you a communication kit and a ready-to-share landing page."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#join"
                className="rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-95"
              >
                {isEs ? "Activar partnership" : "Activate partnership"}
              </a>
            </div>

            <p className="mt-3 text-xs text-firo-muted">
              {isEs
                ? "Sin costo para tu coworking, con valor real para tu comunidad."
                : "No cost for your coworking, with real value for your community."}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
