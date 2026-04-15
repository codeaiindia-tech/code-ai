import { services } from "./services";


export default function page() {
  

  const highlights = [
    "Cost-effective technical solutions",
    "Client-focused service delivery",
    "Scalable digital products",
    "Strong design and technical balance",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white/80">
                CODE AI TECHNOLOGIES
              </p>
            </div>

            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#why-us" className="transition hover:text-white">
                Why Us
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </header>

          <div className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                IT Services • Design • Digital Growth
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Smart technical solutions for businesses that want quality without overspending.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                CODE AI TECHNOLOGIES is an IT-based service company delivering practical, high-quality digital solutions for clients across websites, applications, SEO, digital marketing, IT management, UI/UX design, and database security.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                Our USP is simple: we aim to deliver the best possible solution in the most cost-effective manner, so every investment feels worthwhile.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                >
                  Get in Touch
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-black p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Company Snapshot
                </p>

                <div className="mt-6 space-y-4 text-sm text-white/80">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/50">Core Focus</p>
                    <p className="mt-1 font-medium">Affordable, reliable, business-driven digital services</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/50">Industries Served</p>
                    <p className="mt-1 font-medium">[ Add target industries here ]</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/50">Years of Experience</p>
                    <p className="mt-1 font-medium">[ Add experience / company journey here ]</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-white/50">Trusted By</p>
                    <p className="mt-1 font-medium">[ Add clients / brands / social proof here ]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/50">Our Services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Complete digital and technical support under one roof.
          </h2>
          <p className="mt-4 text-white/65">
            We help businesses build, improve, secure, and scale their digital presence with practical execution and cost-conscious delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-5 h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">About Us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Built around value, quality, and long-term client trust.
            </h2>
          </div>

          <div className="space-y-5 text-white/70 leading-7">
            <p>
              At CODE AI TECHNOLOGIES, we focus on solving real business problems through technology. Whether a client needs a strong website, a tailored application, better visibility through SEO and digital marketing, or secure database support, we aim to provide dependable service that creates measurable value.
            </p>
            <p>
              We believe technical services should not feel overpriced or complicated. That is why our approach combines quality execution, clean communication, and pricing that feels worth the investment.
            </p>
            <p>
              [ Add detailed company story / mission / vision here ]
            </p>
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A service-first team focused on practical results.
            </h2>
            <p className="mt-4 text-white/65 leading-7">
              We combine technical execution with business understanding, so clients get solutions that are not just functional, but aligned with growth, efficiency, and trust.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-4 h-2 w-14 rounded-full bg-white/80" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-dashed border-white/20 bg-transparent p-6 sm:col-span-2">
              <p className="text-white/50">Additional trust section</p>
              <p className="mt-2 text-lg font-medium text-white">
                [ Add testimonials / portfolio stats / project numbers here ]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Let’s Build</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Looking for a reliable tech partner for your business?
              </h2>
              <p className="mt-4 max-w-2xl text-white/70 leading-7">
                From websites and apps to security and digital growth, we help businesses move forward with the right mix of design, development, and support.
              </p>
            </div>

            <div id="contact" className="rounded-3xl border border-white/10 bg-black/60 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">Contact Area</p>
              <div className="mt-5 space-y-4 text-white/80">
                <div>
                  <p className="text-white/50">Email</p>
                  <p>[ Add official company email ]</p>
                </div>
                <div>
                  <p className="text-white/50">Phone</p>
                  <p>[ Add official phone number ]</p>
                </div>
                <div>
                  <p className="text-white/50">Office Address</p>
                  <p>[ Add office address ]</p>
                </div>
                <div>
                  <p className="text-white/50">Business Hours</p>
                  <p>[ Add business hours ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
