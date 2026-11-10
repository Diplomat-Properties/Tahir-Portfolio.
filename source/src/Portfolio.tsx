import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArchitecturalScene } from "@/components/architectural-scene";
import { enterprises, leadershipStats } from "@/lib/enterprises";
const portrait = { url: "./assets/images/muhammad-tahir-cutout.png" };

const NAV = ["About", "Companies", "Journey", "Contact"];
const EMAIL = "tahirbaig77@gmail.com";
const PHONE = "+971 55 515 1350";
const WA = "https://wa.me/971555151350";
const timeline = [
  ["1997", "Black Pool General Trading", "Sales Representative", "March 1997 – June 2008"],
  ["2004", "Diplomat General Trading LLC", "Director & Partner", "April 2004 – June 2016"],
  ["2005", "Dubai Link Transport LLC", "Director & Partner", "October 2005 – June 2017"],
  ["2009", "Shahnawaz Tourism LLC", "Director & Partner", "November 2009 – November 2011"],
  ["2011", "Business Link Consultancies", "Proprietor", "March 2011 – Present"],
  ["2013", "Diplomat Properties", "Proprietor", "2013 – Present"],
  ["2021", "Business Link Consultancies UK LTD", "Proprietor", "August 2021"],
  ["2024", "Faiza Saqlain Ready Made Garments", "Director & Partner", "February 2024 – Present"],
  ["2024", "Rise Properties LLC", "Managing Director & Owner", "June 2024 – Present"],
  ["2025", "Rise Properties LLC — Branch", "Managing Director & Owner", "September 2025 – Present"],
];
export default function Portfolio() {
  const [activeEnterprise, setActiveEnterprise] = useState("diplomat");
  return <div className="portfolio"><Header /><main><Hero /><BrandStrip onSelect={setActiveEnterprise} /><About /><Companies active={activeEnterprise} onSelect={setActiveEnterprise} /><Journey /><Principles /><Contact /></main><Footer /></div>;
}
function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return <header className="site-header"><div className="shell header-inner">
    <a href="#top" className="identity" onClick={() => setOpen(false)}><span className="insignia">MT</span><span>MUHAMMAD TAHIR</span></a>
    <nav aria-label="Primary" className="desktop-nav">{NAV.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
    <a className="header-contact" href="#contact">LET'S CONNECT <ArrowUpRight size={15}/></a>
    <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
  </div>{open && <nav id="mobile-nav" aria-label="Mobile" className="mobile-nav">{NAV.map((n, i) => <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}><span>0{i+1}</span>{n}<ArrowUpRight/></a>)}</nav>}</header>;
}
function Hero() {
  return <section id="top" className="hero">
    <div className="static-architecture" aria-hidden="true"><div className="architectural-ring"/><div className="architectural-ring second"/><div className="architectural-floor"/></div>
    <ArchitecturalScene />
    <div className="hero-portrait"><img src={portrait.url} alt="Muhammad Tahir, Business Owner and Director" fetchPriority="high"/></div>
    <div className="shell hero-inner"><div className="hero-copy"><p className="eyebrow hero-location"><span/>DUBAI, UNITED ARAB EMIRATES</p>
      <h1>MUHAMMAD<br/><span>TAHIR</span></h1>
      <p className="hero-title">Business Owner &amp; Director <span>•</span> Dubai, UAE</p>
      <p className="hero-accent">Architect of <em>opportunity.</em></p>
      <p className="hero-description">Business leadership across real estate,<br className="desktop-break"/> enterprise, fashion and trading.</p>
      <div className="hero-actions"><Button asChild className="primary-action" size="lg"><a href="#companies">Explore the enterprises <ArrowUpRight/></a></Button><Button asChild variant="ghost" className="quiet-action" size="lg"><a href="#contact">Get in touch <ArrowUpRight/></a></Button></div>
    </div><div className="hero-foot"><a href="#about"><ArrowDown size={14}/> DISCOVER THE PERSPECTIVE</a><span>LEADERSHIP. ENTERPRISE. LONGEVITY.</span></div></div>
  </section>;
}
function Logo({ enterprise, className = "" }: { enterprise: typeof enterprises[number]; className?: string }) {
  return <div className={`logo-lockup ${className}`}><div className={`logo-crop logo-${enterprise.logoKind}`}><img src={enterprise.logo} alt={`${enterprise.id === "branch" ? "Rise Properties LLC" : enterprise.name} original logo`} loading="lazy"/></div>{enterprise.id === "branch" && <span className="branch-label">BRANCH</span>}</div>;
}
function BrandStrip({ onSelect }: { onSelect: (id: string) => void }) {
  return <div className="brand-strip"><div className="shell brand-grid">{enterprises.map(e => <a href="#companies" key={e.id} onClick={() => onSelect(e.id)} aria-label={`Explore ${e.name}`}><Logo enterprise={e}/></a>)}</div></div>;
}
function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) { return <p className="section-label"><span>{number} /</span>{children}</p>; }
function About() {
  return <section id="about" className="section shell about-section"><div className="about-copy"><SectionLabel number="01">THE PERSPECTIVE</SectionLabel><h2>Building businesses.<br/>Creating <em>opportunity.</em></h2><p className="body-lead">More than 30 years of hands-on business experience.</p><p className="body-copy">Muhammad Tahir is a Dubai-based business owner and director whose work spans real estate, company formation, fashion, trading and transport. His approach is hands-on: close involvement in the business, long-term client relationships and disciplined business management.</p><dl className="stats">{leadershipStats.map(s => <div key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>)}</dl></div><div className="monogram-scene" aria-hidden="true"><div className="monogram-frame"><span className="metal-monogram">MT</span></div><span className="object-caption">A LONG-TERM PERSPECTIVE</span></div></section>;
}
function Companies({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return <section id="companies" className="enterprise-section section"><div className="shell"><div className="section-top"><div><SectionLabel number="02">BUSINESS INTERESTS</SectionLabel><h2>The <em>enterprises.</em></h2></div><p>Distinct businesses.<br/>A consistent standard of management.</p></div><Tabs value={active} onValueChange={onSelect} className="enterprise-tabs"><div className="tabs-scroll"><TabsList aria-label="Business interests" className="enterprise-tab-list">{enterprises.map(e => <TabsTrigger value={e.id} key={e.id} className="enterprise-tab"><span className="tab-number">{e.number}</span><span>{e.shortName}</span><ArrowUpRight size={16}/></TabsTrigger>)}</TabsList></div>{enterprises.map(e => <TabsContent key={e.id} value={e.id} className="enterprise-detail"><div className="enterprise-brand"><span className="eyebrow">{e.category}</span><Logo enterprise={e} className="featured-logo"/><span className="brand-index">{e.number} / BUSINESS INTERESTS</span></div><div className="enterprise-copy"><p className="eyebrow text-primary">{e.role} <span className="period">{e.period}</span></p><h3>{e.name}</h3><p className="enterprise-statement">{e.description}</p><p className="body-copy">{e.summary}</p><ul className="enterprise-responsibilities">{e.details.map(d => <li key={d}><span/> {d}</li>)}</ul><div className="enterprise-areas">{e.areas.map(a => <span key={a}>{a}</span>)}</div></div></TabsContent>)}</Tabs></div></section>;
}
function Journey() {
  return <section id="journey" className="section shell journey-section"><div className="section-top"><div><SectionLabel number="03">THE JOURNEY</SectionLabel><h2>Experience, <em>in motion.</em></h2></div><p>From the sales floor<br/>to business ownership and direction.</p></div><ol className="timeline">{timeline.map(([year,name,role,period]) => <li key={name}><span className="timeline-year">{year}</span><div className="timeline-name"><h3>{name}</h3><p>{role}</p></div><span className="timeline-period">{period}</span></li>)}</ol></section>;
}
function Principles() {
  const items = [["01", "Close to the business", "Hands-on operations and disciplined financial planning."], ["02", "Built on relationships", "Long-term client and broker relationships across Dubai."], ["03", "Led through people", "Team development, leadership and management."]];
  return <section className="principles-band"><div className="shell section"><SectionLabel number="04">OPERATING PRINCIPLES</SectionLabel><div className="principles-grid">{items.map(([n,t,d]) => <div key={n}><span className="eyebrow text-primary">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>;
}
function Contact() {
  return <section id="contact" className="section shell contact-section"><SectionLabel number="05">A CONVERSATION STARTS HERE</SectionLabel><div className="contact-heading"><h2>Let's build<br/><em>what's next.</em></h2><a href={`mailto:${EMAIL}`} className="contact-arrow" aria-label="Email Muhammad Tahir"><ArrowUpRight/></a></div><div className="contact-bottom"><p>For business enquiries<br/>and introductions.<span>Dubai, United Arab Emirates</span></p><div className="contact-links"><a href={`mailto:${EMAIL}`}><span>EMAIL</span>{EMAIL}<ArrowUpRight/></a><a href="tel:+971555151350"><span>TELEPHONE</span>{PHONE}<ArrowUpRight/></a><a href={WA} target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span>Message on WhatsApp<ArrowUpRight/></a></div></div></section>;
}
function Footer() { return <footer className="site-footer"><div className="shell"><a href="#top" className="identity"><span className="insignia">MT</span><span>MUHAMMAD TAHIR</span></a><p>© {new Date().getFullYear()} Muhammad Tahir</p><a href="#top">BACK TO TOP <ArrowUpRight size={14}/></a></div></footer>; }

