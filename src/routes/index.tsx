import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Wrench, Globe, Network, ShieldCheck, ShoppingCart, Headphones,
  Monitor, Laptop, Keyboard, Gamepad2, Router, Cpu,
  Menu, X, MapPin, Mail, Phone, Check, Facebook, Instagram, Linkedin, Github, ArrowRight, Sparkles,
} from "lucide-react";
import { toast } from "sonner";

import heroPc from "@/assets/hero-pc.jpg";
import prodDesktop from "@/assets/prod-desktop.jpg";
import prodLaptop from "@/assets/prod-laptop.jpg";
import prodMonitor from "@/assets/prod-monitor.jpg";
import prodKeyboard from "@/assets/prod-keyboard.jpg";
import prodGaming from "@/assets/prod-gaming.jpg";
import prodNetwork from "@/assets/prod-network.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

import Map from "@/components/Map";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TechCore Solutions — IT usluge i prodavnica računara u Beogradu" },
      { name: "description", content: "Servis računara, mreže i serveri, cyber security, izrada sajtova i prodaja IT opreme. TechCore Solutions, Knez Mihailova 12, Beograd." },
      { property: "og:title", content: "TechCore Solutions" },
      { property: "og:description", content: "Premium IT usluge i prodavnica računara u Beogradu." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Wrench, title: "Servis računara", desc: "Brza dijagnostika, popravka hardvera i softvera, čišćenje i optimizacija sistema." },
  { icon: Globe, title: "Izrada web sajtova", desc: "Moderni, brzi i SEO optimizovani sajtovi i web aplikacije po meri." },
  { icon: Network, title: "Mreže i serveri", desc: "Projektovanje, instalacija i održavanje LAN/WiFi mreža i serverske infrastrukture." },
  { icon: ShieldCheck, title: "Cyber Security", desc: "Zaštita podataka, firewall, audit bezbednosti i obuka zaposlenih." },
  { icon: ShoppingCart, title: "Prodaja računara i laptopova", desc: "Provereni brendovi, custom konfiguracije i poslovne nabavke." },
  { icon: Headphones, title: "IT podrška 24/7", desc: "Stalna tehnička podrška, remote i on-site intervencije za firme." },
];

const products = [
  { img: prodDesktop, icon: Monitor, title: "TechCore Prime X", category: "Desktop računar", price: "189.900 RSD", desc: "Intel i7, 32GB DDR5, RTX 4070, 1TB NVMe." },
  { img: prodLaptop, icon: Laptop, title: "Nimbus Pro 16", category: "Laptop", price: "164.500 RSD", desc: "16'' OLED, Ryzen 9, 32GB RAM, 1TB SSD." },
  { img: prodMonitor, icon: Cpu, title: "UltraView 34 QD-OLED", category: "Monitor", price: "129.000 RSD", desc: "34'' ultrawide, 175Hz, QD-OLED, HDR400." },
  { img: prodKeyboard, icon: Keyboard, title: "AeroType K75", category: "Tastature i miševi", price: "18.900 RSD", desc: "Mehanička tastatura, hot-swap, RGB." },
  { img: prodGaming, icon: Gamepad2, title: "Striker Gaming Set", category: "Gaming oprema", price: "32.500 RSD", desc: "Slušalice + kontroler + podloga." },
  { img: prodNetwork, icon: Router, title: "MeshNet AX6000", category: "Mrežna oprema", price: "24.800 RSD", desc: "WiFi 6 router, mesh, 2.5GbE." },
];

const packages = [
  {
    name: "Basic", price: "9.900", per: "/mes",
    desc: "Idealno za mala preduzeća i početne IT potrebe.",
    features: ["Remote IT podrška", "Antivirus zaštita", "Backup do 50GB", "Reakcija 24h"],
    highlighted: false,
  },
  {
    name: "Business", price: "24.900", per: "/mes",
    desc: "Kompletno IT održavanje za rastuće firme.",
    features: ["Sve iz Basic paketa", "On-site intervencije", "Mreža i serveri", "Backup do 500GB", "Reakcija 4h"],
    highlighted: true,
  },
  {
    name: "Premium", price: "59.900", per: "/mes",
    desc: "Enterprise nivo bezbednosti i podrške.",
    features: ["Sve iz Business paketa", "24/7 monitoring", "Cyber security audit", "Neograničen backup", "Reakcija 1h", "Dedicated inženjer"],
    highlighted: false,
  },
];

const galleryImgs = [gallery1, gallery2, gallery3, gallery4, prodKeyboard, prodNetwork];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-foreground antialiased">
      <Toaster />
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */

function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const links = [
    { href: "#o-nama", label: "O nama" },
    { href: "#usluge", label: "Usluge" },
    { href: "#proizvodi", label: "Proizvodi" },
    { href: "#galerija", label: "Galerija" },
    { href: "#paketi", label: "Paketi" },
    { href: "#kontakt", label: "Kontakt" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 max-w-7xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl btn-hero">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Tech<span className="gradient-text">Core</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#kontakt" className="hidden rounded-xl btn-hero px-4 py-2 text-sm font-semibold md:inline-flex">
            Zakaži poziv
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-xl btn-outline-glow md:hidden" aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-white/5">
                {l.label}
              </a>
            ))}
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="mt-1 rounded-xl btn-hero px-3 py-2 text-center text-sm font-semibold">
              Zakaži poziv
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="animate-fade-in">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Dostupni za nove projekte • Beograd
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            IT rešenja koja <span className="gradient-text">pokreću</span> vaš biznis
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            TechCore Solutions je tim sertifikovanih inženjera. Servisiramo, gradimo i štitimo
            vašu IT infrastrukturu — od jednog laptopa do kompletne mreže i servera.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#usluge" className="inline-flex items-center gap-2 rounded-xl btn-hero px-6 py-3 text-sm font-semibold">
              Pogledaj usluge <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-xl btn-outline-glow px-6 py-3 text-sm font-semibold">
              Kontaktiraj nas
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "12+", v: "godina iskustva" },
              { k: "850+", v: "zadovoljnih klijenata" },
              { k: "24/7", v: "podrška" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 text-center">
                <dt className="font-display text-2xl font-bold gradient-text">{s.k}</dt>
                <dd className="mt-0.5 text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-3xl" />
          <div className="glass animate-float overflow-hidden rounded-3xl p-2">
            <img src={heroPc} alt="Premium PC sa RGB osvetljenjem" width={1920} height={1080} className="w-full rounded-2xl object-cover" />
          </div>
          <div className="glass absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl p-3 sm:flex">
            <div className="grid h-10 w-10 place-items-center rounded-xl btn-hero"><ShieldCheck className="h-5 w-5" /></div>
            <div>
              <div className="text-sm font-semibold">Sigurno i pouzdano</div>
              <div className="text-xs text-muted-foreground">ISO 27001 standard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <section id="o-nama" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>O nama</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Tehnologija sa <span className="gradient-text">ljudskim pristupom</span></h2>
            <p className="mt-5 text-muted-foreground">
              Od 2012. godine pomažemo firmama, preduzetnicima i pojedincima da iskoriste
              maksimum iz svoje IT opreme. Verujemo u jasna rešenja, transparentne cene i
              dugoročna partnerstva.
            </p>
            <p className="mt-3 text-muted-foreground">
              Naš tim čini 14 sertifikovanih inženjera — od Microsoft i Cisco do
              cyber security specijalista — koji rade po proverenim procedurama.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:max-w-md">
              {[
                "Sertifikovani inženjeri", "Brza dijagnostika",
                "Originalni delovi", "Garancija na rad",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-emerald-400" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={gallery3} alt="IT radni prostor" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-2xl object-cover glass-hover" />
            <img src={gallery2} alt="Servis hardvera" width={1024} height={1024} loading="lazy" className="mt-8 aspect-square w-full rounded-2xl object-cover glass-hover" />
            <img src={gallery1} alt="Server soba" width={1024} height={1024} loading="lazy" className="aspect-square w-full rounded-2xl object-cover glass-hover" />
            <img src={gallery4} alt="Cyber security" width={1024} height={1024} loading="lazy" className="mt-8 aspect-square w-full rounded-2xl object-cover glass-hover" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */

function Services() {
  return (
    <section id="usluge" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Naše usluge</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Kompletna IT podrška na <span className="gradient-text">jednom mestu</span></h2>
          <p className="mt-4 text-muted-foreground">Šest oblasti u kojima smo najjači — od servisa do bezbednosti.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="glass glass-hover group rounded-2xl p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <a href="#kontakt" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-80 transition group-hover:opacity-100">
                  Saznaj više <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRODUCTS ---------------- */

function Products() {
  return (
    <section id="proizvodi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Proizvodi</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Oprema koja <span className="gradient-text">isporučuje rezultate</span></h2>
            <p className="mt-3 text-muted-foreground">Pažljivo odabran asortiman, sa garancijom i tehničkom podrškom.</p>
          </div>
          <a href="#kontakt" className="rounded-xl btn-outline-glow px-5 py-2.5 text-sm font-semibold">Zatraži ponudu</a>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.title} className="glass glass-hover group overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                  <img src={p.img} alt={p.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="glass absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs">
                    <Icon className="h-3.5 w-3.5" /> {p.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="font-display text-xl font-bold gradient-text">{p.price}</span>
                    <a href="#kontakt" className="inline-flex items-center gap-1 rounded-lg btn-outline-glow px-3.5 py-2 text-sm font-medium">
                      Detaljnije <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GALLERY ---------------- */

function Gallery() {
  return (
    <section id="galerija" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Galerija</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">IT oprema i naš <span className="gradient-text">radni prostor</span></h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {galleryImgs.map((img, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-2xl glass-hover ${i % 5 === 0 ? "col-span-2 row-span-2" : ""}`}>
              <img src={img} alt={`Galerija ${i + 1}`} width={1024} height={1024} loading="lazy" className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PACKAGES ---------------- */

function Packages() {
  return (
    <section id="paketi" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Paketi usluga</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Transparentne cene, <span className="gradient-text">jasna vrednost</span></h2>
          <p className="mt-4 text-muted-foreground">Izaberite paket koji odgovara veličini i potrebama vaše firme.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-7 ${
                p.highlighted
                  ? "bg-gradient-to-br from-primary/25 via-accent/15 to-transparent ring-1 ring-primary/40 shadow-[0_30px_80px_-30px_oklch(0.62_0.24_305/0.6)]"
                  : "glass"
              }`}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-hero px-3 py-1 text-xs font-semibold">
                  Najpopularniji
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-4xl font-bold gradient-text">{p.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">RSD{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${
                  p.highlighted ? "btn-hero" : "btn-outline-glow"
                }`}
              >
                Izaberi {p.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) { toast.error("Popunite ime, email i poruku."); return; }
    if (!/^\S+@\S+\.\S+$/.test(email)) { toast.error("Email nije validan."); return; }
    if (name.length > 100 || email.length > 255 || phone.length > 30 || message.length > 1000) {
      toast.error("Polje je predugačko."); return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Poruka poslata! Javljamo se u najkraćem roku.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  }

  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pošaljite nam <span className="gradient-text">poruku</span></h2>
            <p className="mt-3 text-muted-foreground">Odgovaramo u roku od 24h radnim danima.</p>

            <div className="mt-8 space-y-3">
              <InfoRow icon={MapPin} title="Adresa" value="Knez Mihailova 12, 11000 Beograd" />
              <InfoRow icon={Phone} title="Telefon" value="+381 11 123 4567" />
              <InfoRow icon={Mail} title="Email" value="info@techcore.rs" />
            </div>

            <div className="mt-6 h-72 overflow-hidden rounded-2xl glass p-1">
              <Map />
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Ime i prezime" name="name" placeholder="Marko Petrović" required maxLength={100} />
              <Field label="Email" name="email" type="email" placeholder="marko@firma.rs" required maxLength={255} />
              <Field label="Telefon" name="phone" placeholder="+381 60 000 0000" maxLength={30} />
              <Field label="Tema" name="subject" placeholder="Servis / Ponuda / Saradnja" maxLength={120} />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block text-sm font-medium text-muted-foreground">Poruka</label>
              <textarea
                name="message" required maxLength={1000} rows={6}
                placeholder="Opišite ukratko vaš upit..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:bg-white/[0.07]"
              />
            </div>
            <button type="submit" disabled={loading} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl btn-hero px-5 py-3 text-sm font-semibold disabled:opacity-60">
              {loading ? "Slanje..." : "Pošalji poruku"} <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">Slanjem prihvatate našu politiku privatnosti.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required, maxLength }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; maxLength?: number;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-muted-foreground">{label}{required && " *"}</label>
      <input
        name={name} type={type} placeholder={placeholder} required={required} maxLength={maxLength}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition focus:border-primary/60 focus:bg-white/[0.07]"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, title, value }: { icon: typeof MapPin; title: string; value: string }) {
  return (
    <div className="glass flex items-center gap-4 rounded-2xl p-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl btn-hero"><Sparkles className="h-5 w-5" /></span>
            <span className="font-display text-lg font-bold">Tech<span className="gradient-text">Core</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Premium IT usluge i prodavnica računara u srcu Beograda.</p>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Linkedin, Github].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-10 w-10 place-items-center rounded-xl btn-outline-glow">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Kompanija" links={["O nama", "Karijera", "Blog", "Kontakt"]} />
        <FooterCol title="Usluge" links={["Servis", "Web sajtovi", "Mreže", "Cyber Security"]} />
        <div>
          <h4 className="font-display text-sm font-semibold">Kontakt</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Knez Mihailova 12, Beograd</li>
            <li>+381 11 123 4567</li>
            <li>info@techcore.rs</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TechCore Solutions. Sva prava zadržana.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l}><a href="#" className="text-muted-foreground transition hover:text-foreground">{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-primary" /> {children}
    </span>
  );
}
