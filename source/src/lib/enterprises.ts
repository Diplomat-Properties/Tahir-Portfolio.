const diplomatLogo = { url: "./assets/logos/diplomat-properties.png" };
const riseLogo = { url: "./assets/logos/rise-properties.png" };
const businessLinkLogo = { url: "./assets/logos/business-link.png" };

export const enterprises = [
  {
    id: "diplomat", number: "01", name: "Diplomat Properties", shortName: "Diplomat Properties", role: "Proprietor", period: "2013 – Present", logo: diplomatLogo.url, logoKind: "diplomat",
    category: "Real estate", description: "A hands-on approach to Dubai's property market.",
    summary: "Real estate sales, leasing and property management, grounded in long-term client and broker relationships.",
    details: ["Day-to-day operations and long-term business strategy", "Budgets and financial direction", "Client and broker relationships across Dubai"],
    areas: ["Sales", "Leasing", "Property management"],
  },
  {
    id: "rise", number: "02", name: "Rise Properties LLC", shortName: "Rise Properties", role: "Director & Partner", period: "June 2024 – Present", logo: riseLogo.url, logoKind: "rise",
    category: "Real estate", description: "A broader perspective on property.",
    summary: "Residential, commercial and mixed-use property, with direct involvement in acquisitions, leasing and sales.",
    details: ["Property acquisitions, leasing and sales", "Financial planning and business direction", "Team leadership and operational oversight"],
    areas: ["Residential", "Commercial", "Mixed-use"],
  },
  {
    id: "branch", number: "03", name: "Rise Properties LLC — Branch", shortName: "Rise Properties · Branch", role: "Director & Partner", period: "September 2025 – Present", logo: riseLogo.url, logoKind: "rise",
    category: "Business expansion", description: "The next chapter for Rise.",
    summary: "A branch of Rise Properties LLC, expanding the company's operations from September 2025.",
    details: ["An extension of Rise Properties LLC's operations", "Part of the same real estate business", "Continuity in management and team leadership"],
    areas: ["Rise Properties LLC", "Branch operations"],
  },
  {
    id: "business-link", number: "04", name: "Business Link Consultancies", shortName: "Business Link", role: "Proprietor", period: "March 2011 – Present", logo: businessLinkLogo.url, logoKind: "business-link",
    category: "Enterprise formation", description: "Turning business intent into a working enterprise.",
    summary: "Business formation and corporate services for companies in the UAE, from setup to ongoing administrative support.",
    details: ["Business formation and company setup", "PRO services, trade licences and document clearing", "Management and HR consultancy"],
    areas: ["Business setup", "PRO services", "HR consultancy"],
  },
  {
    id: "faiza", number: "05", name: "Faiza Saqlain Ready Made Garments", shortName: "Faiza Saqlain", role: "Sales Director & Partner", period: "February 2024 – Present", logo: "./assets/logos/faiza-saqlain.png", logoKind: "faiza",
    category: "Fashion & retail", description: "A distinct perspective on fashion and enterprise.",
    summary: "Sales direction and partnership in the ready-made garments business, with a focus on commercial growth and lasting customer relationships.",
    details: ["Sales leadership and business development", "Partner-level involvement in business direction", "Customer relationships and team coordination"],
    areas: ["Fashion", "Ready-made garments", "Sales leadership"],
  },
] as const;

export const leadershipStats = [
  { value: "30+", label: "Years of experience" },
  { value: "200+", label: "Total staff across businesses" },
] as const;
