import Image from "next/image";
import Container from "../ui/Container";

type RewardsProps = {
  locale?: "en" | "es";
};

export default function Rewards({ locale = "en" }: RewardsProps) {
  const isEs = locale === "es";
  return (
    <section id="rewards" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {isEs ? "PeakU se encarga de que la activación sea fácil para tu equipo" : "This is exactly why we built PeakU"}
            </h2>
            <p className="mt-4 text-firo-muted">
              {isEs
                ? "Te enviamos un kit de comunicación con piezas para compartir el beneficio dentro del coworking y creamos una landing del partnership para que tu comunidad acceda directo. Tu equipo activa y nosotros acompañamos el resto."
                : "We kept seeing recruiters with solid judgment lose internal support. PeakU helps structure evaluations, build hiring reports, and present candidates in a format teams trust."}
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              <Loot value={isEs ? "Activación sin costo" : "Visible criteria"} />
              <Loot value={isEs ? "Kit de comunicación para difusión" : "Organized evidence"} />
              <Loot value={isEs ? "Landing exclusiva del partnership" : "Less friction"} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-[40px] bg-firo-blue/15 blur-3xl" />
            <Image
              src="/assets/hero/dashboard.png"
              alt="FIRO dashboard"
              width={1400}
              height={900}
              className="relative w-full rounded-3xl shadow-soft"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Loot({ value }: { value: string }) {
  return (
    <div className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-xl font-semibold">{value}</div>
    </div>
  );
}
