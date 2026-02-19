import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  return (
    <section id="join" className="bg-firo-bg py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Activa el partnership de PeakU para tu coworking"
                  : "Activate PeakU partnership for your coworking"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Te escribimos por WhatsApp para activar la alianza sin costo, coordinar el envío del kit de comunicación y dejar lista la landing para tu comunidad."
                  : "We will contact you on WhatsApp to activate the partnership at no cost, coordinate the communication kit delivery, and publish the landing page for your community."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/luisa@peaku.co"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value={isEs ? "PeakU | Activación de partnership para coworking" : "PeakU | Coworking partnership activation"} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="santiago@peaku.co" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre del líder o dueño" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="whatsapp">
                    {isEs ? "Número de WhatsApp" : "WhatsApp number"}
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "+57 300 000 0000" : "+1 (555) 000-0000"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {isEs ? "Quiero activarlo en mi coworking" : "I want to activate it in my coworking"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Sin spam. Usamos tu WhatsApp solo para coordinar esta activación."
              : "No spam. We only use your WhatsApp to coordinate this activation."}
          </div>
        </div>
      </Container>
    </section>
  );
}
