
import Link from "next/link";
import { services, highlights, projects, ourApproach } from "./services";
export default function page() {




  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 "
          style={
            {
              backgroundImage: "url('https://images.unsplash.com/photo-1712397943847-e104395a1a8b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }
          }
        />

        <div className="relative mx-auto max-w-8xl px-6 py-8 lg:px-10 ">
          <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="rounded-xl">
                <img
                  src="https://res.cloudinary.com/dpdwmxgd4/image/upload/v1776240966/ai_dremtu.png"
                  alt="Code AI Technologies Logo"
                  className="h-13 w-auto object-contain rounded-full"
                />
              </div>
            </div>

            <nav className="hidden gap-8 text-white/70 md:flex">
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

          <div className="grid gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-12 px-5">
            <div>
              <h1 className="mt-6 max-w-4xl text-7xl font-bold leading-tight sm:text-5xl lg:text-8xl mb-5 ">
                Code AI Technologies
              </h1>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/70">
                IT Services • Design • Digital Growth
              </span>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">

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
          {services.map((service) => {

            const Icon = service.icon

            return (

              <div
                key={service.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]   "
              >
                <div className="mb-5 h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex justify-center items-center">
                  <Icon className="text-white text-4xl" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-7 text-white/65">{service.description}</p>
              </div>
            )
          }
          )}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]"
        style={
          {
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }
        }
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 ">

          <div className="grid min-h-[70vh] gap-10 lg:grid-cols-2">

            {/* LEFT SIDE (Centered vertically) */}
            <div className="flex flex-col justify-start sm:-ml-15">
              <p className="text-sm uppercase tracking-[0.25em] text-white/50">
                About Us
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-6xl leading-tight text-white/75 ">
                Built around value, quality, and long-term client trust.
              </h2>
            </div>

            {/* RIGHT SIDE (Keep as is) */}
            <div className="flex flex-col justify-center space-y-5 text-white/90 leading-7 pl-0 sm:pl-12">
              <p>
                At CODE AI TECHNOLOGIES, we focus on solving real business problems through technology. Whether a client needs a strong website, a tailored application, better visibility through SEO and digital marketing, or secure database support, we aim to provide dependable service that creates measurable value.
              </p>
              <p>
                We believe technical services should not feel overpriced or complicated. That is why our approach combines quality execution, clean communication, and pricing that feels worth the investment.
              </p>
              <p>
                an IT-based service company delivering practical, high-quality digital solutions for clients across websites, applications, SEO, digital marketing, IT management, UI/UX design, and database security.
              </p>
              <p>
                Our USP is simple: we aim to deliver the best possible solution in the most cost-effective manner, so every investment feels worthwhile.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              We don’t just build products — we build outcomes.
            </h2>

            <p className="mt-6 text-white/65 leading-7 max-w-xl">
              Every solution we deliver is designed with a clear goal: helping your business grow, operate efficiently, and create long-term value. We focus on practical execution, not unnecessary complexity.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-white" />
                <p className="text-white/80">Solutions aligned with real business goals</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-white" />
                <p className="text-white/80">Execution that balances speed and quality</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-white" />
                <p className="text-white/80">Transparent communication at every step</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - TIMELINE STYLE */}
          <div className="relative border-l border-white/10 pl-8 space-y-10">
            {ourApproach.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-white" />

                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Step 0{index + 1}
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-white/65 leading-7">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section
  id="projects"
  className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-10 lg:py-20"
>
  <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
    
    {/* Left content */}
    <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
      <p className="text-xs uppercase tracking-[0.25em] text-white/50 sm:text-sm">
        Projects Delivered
      </p>

      <h2 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-[1.05] text-white sm:max-w-none sm:text-5xl lg:text-5xl">
        Selected work that reflects our execution and delivery.
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
        Instead of listing projects as simple cards, this section presents them like a curated
        portfolio — more refined, easier to scan, and better aligned with a premium agency aesthetic.
      </p>
    </div>

    {/* Right content */}
    <div className="min-w-0 space-y-4 sm:space-y-5 lg:space-y-6">
      {projects.map((project) => (
        <div
          key={project.name}
          className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[2rem] sm:p-6"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            
            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
                <span className="shrink-0 text-xs font-medium tracking-[0.25em] text-white/35 sm:text-sm">
                  {project.number}
                </span>

                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 sm:text-xs">
                    {project.type}
                  </p>

                  <h3 className="mt-2 break-words text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                    [ Add short project description / scope / business impact here ]
                  </p>
                </div>
              </div>
            </div>

            <div className="md:self-stretch">
              <div className="flex h-full items-center md:justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  className="w-full rounded-full border border-white/15 px-4 py-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/55 transition hover:border-white/25 hover:text-white/80 sm:w-auto sm:text-xs"
                >
                  View Project
                </Link>
              </div>
            </div>

          </div>
        </div>
      ))}
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
                  <p>codeaiindia@gmail.com</p>
                </div>
                <div>
                  <p className="text-white/50">Phone</p>
                  <p>+91 9990905440</p>
                </div>
                <div>
                  <p className="text-white/50">Office Address</p>
                  <p>Office No. - 821/22, 8th Floor, Bhutani Aplhathumb, Sector-90, Noida, Uttar Pradesh - 201305</p>
                </div>
                <div>
                  <p className="text-white/50">Business Hours</p>
                  <p>Monday - Friday @ 10:30am - 7:00pm </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
