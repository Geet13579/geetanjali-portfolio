// All content below is taken from Geetanjali's resume (Geetanjali_Professional_Resume.pdf).
// Nothing here is invented: links are the hyperlinks embedded in the PDF itself.

export const profile = {
  name: "Geetanjali Jangde",
  firstName: "Geetanjali",
  role: "Full Stack Developer",
  tagline: "Building Scalable & Interactive Digital Experiences",
  email: "geetanjalijangde1999@gmail.com",
  phone: "+91 9399107337",
  phoneHref: "+919399107337",
  github: "https://github.com/Geet13579",
  linkedin: "https://www.linkedin.com/in/geetanjali-jangde-9b36b1201/",
  resumePath: "/resume/Geetanjali-Jangde-Resume.pdf",
  portrait: "/images/geetanjali-portrait.png",
  yearsExperience: "4+",
  summary: [
    "Full Stack Developer with 4+ years of professional experience in full stack web development, frontend development, backend development, REST API development, database management, and cloud deployment.",
    "Technical expertise includes JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, MongoDB, MySQL, Redux, AWS, and Firebase.",
    "Experienced in responsive web design, authentication, payment gateway integration, application security, and performance optimization.",
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroTechIcons = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "AWS",
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "C/C++", "SQL"],
  },
  {
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "PHP", "RESTful APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Firebase", "SQLite"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Nginx", "Linux"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "VS Code",
      "Android Studio",
      "Figma",
    ],
  },
  {
    title: "Core Concepts",
    items: [
      "DBMS",
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Agile Development",
      "Responsive Web Design",
    ],
  },
  {
    title: "Security",
    items: ["JWT Authentication", "Role-Based Access Control (RBAC)", "API Security"],
  },
  {
    title: "Third-Party Integrations",
    items: ["Cashfree Payment Gateway", "Firebase Integration"],
  },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  company: string;
  category: "Government" | "Platform" | "Corporate" | "Design";
  tags: string[];
  summary: string;
  highlights: string[];
  liveUrl?: string;
  liveLabel?: string;
  /** Used for the CSS-based visual mockup (not a real screenshot). */
  motif: "shield" | "grid" | "map" | "booking" | "tax" | "building" | "mobile" | "car" | "wellness" | "taxi" | "furniture" | "door" | "web";
};

export const projects: Project[] = [
  {
    id: "ovse-visitor-tracker",
    title: "Aadhaar Offline Verification (OVSE) Integration",
    subtitle: "Visitor Tracker Application",
    company: "Arceus Infotech · CHiPS",
    category: "Government",
    tags: ["Aadhaar", "QR Redirection", "Role-based Logins"],
    summary:
      "Complete frontend for an Aadhaar-based visitor tracking application with separate login interfaces for Premises Users and Administrators.",
    highlights: [
      "Developed the complete frontend with separate login interfaces for Premises Users and Administrators.",
      "Integrated QR code-based redirection to the official Aadhaar App for real-time face authentication.",
      "Designed a seamless visitor verification workflow to simplify identity verification and improve the user experience.",
      "Built a responsive interface for managing visitor verification processes and application workflows.",
    ],
    liveUrl: "http://ovseportal.vercel.app/",
    motif: "shield",
  },
  {
    id: "chips-grievance-portal",
    title: "Chhattisgarh Aadhaar Grievance Portal",
    subtitle: "CHiPS",
    company: "Arceus Infotech · CHiPS",
    category: "Government",
    tags: ["Dashboards", "Workflows", "Wallet", "UIDAI"],
    summary:
      "Spearheaded the frontend design and development of the CHiPS portal with interfaces for multiple user roles.",
    highlights: [
      "Developed dedicated dashboards and workflows for District Coordinators (DC), E-District Managers (EDM), and Operators.",
      "Implemented the Operator Onboarding Process: operators register, submit required details, and complete onboarding.",
      "Developed a comprehensive Aadhaar Grievance Management System for registration, processing, escalation, and resolution.",
      "Routed operator grievances to E-District Managers (EDMs) for review and further processing.",
      "Integrated the escalation workflow with UIDAI, forwarding grievances through the respective EDMs.",
      "Developed grievance tracking to monitor status, progress, and resolution, helping EDMs track actions taken and pending issues.",
      "Implemented wallet integration for wallet-related functionality within the portal.",
      "Integrated frontend components with backend APIs for seamless data exchange and workflow management.",
    ],
    liveUrl: "https://aadhaarservice.cgstate.gov.in/",
    motif: "grid",
  },
  {
    id: "sub-aua-tracker",
    title: "Aadhaar Sub-AUAs Onboarding & Grievance Tracker",
    subtitle: "AUA/KUA · CHiPS",
    company: "Arceus Infotech · CHiPS",
    category: "Government",
    tags: ["Onboarding", "Tracking", "Single-page UI"],
    summary:
      "Complete frontend for a centralized onboarding and grievance tracking application.",
    highlights: [
      "Designed and developed the complete frontend for a centralized onboarding and grievance tracking application.",
      "Built a user-friendly, single-page interface with simplified interactions for managing projects, categories, subcategories, and tracking updates.",
    ],
    liveUrl: "https://aadhar-tracker-jwqx.vercel.app/",
    motif: "building",
  },
  {
    id: "face-auth-ui",
    title: "CHiPS Aadhaar Face Authentication Gateway App",
    subtitle: "Mobile UI/UX Design",
    company: "Arceus Infotech · CHiPS",
    category: "Design",
    tags: ["Figma", "Mobile UX", "User Flows"],
    summary:
      "Complete mobile application UI/UX designed in Figma for the CHiPS Aadhaar Authentication Gateway.",
    highlights: [
      "Designed a complete mobile application UI/UX in Figma for the CHiPS Aadhaar Authentication Gateway.",
      "Created user flows and screens for onboarding, Aadhaar details entry, face authentication, verification status, and success/error scenarios.",
      "Designed interactive and user-friendly interfaces to simplify the Aadhaar authentication process.",
      "Maintained consistent design patterns across authentication screens, loading states, and verification workflows.",
    ],
    liveUrl:
      "https://www.figma.com/design/ADgcH5LnpiJEq828VVlwsy/Face-Authentication-UI?node-id=133-368&t=CYLZLO8p2Gg1Q8PN-1",
    liveLabel: "View Figma design",
    motif: "mobile",
  },
  {
    id: "nexify-world",
    title: "Nexify World",
    subtitle: "Vehicle Management Platform",
    company: "Beaming India",
    category: "Platform",
    tags: ["Admin Panel", "Maps", "Payment Gateway", "REST APIs"],
    summary:
      "Responsive web interfaces and an admin panel for a vehicle management platform with map and payment integrations.",
    highlights: [
      "Architected and developed responsive web interfaces delivering seamless user experiences across multiple application modules.",
      "Designed and developed an admin panel to manage platform operations, service workflows, and administrative activities.",
      "Integrated map services to support location-based functionality and streamline vehicle pickup and drop-off.",
      "Implemented payment gateway integration to enable secure online transactions and simplify payment workflows.",
      "Integrated REST APIs for seamless communication between frontend components and backend services.",
    ],
    liveUrl: "https://nexifyworld.com/",
    motif: "map",
  },
  {
    id: "zookstay",
    title: "ZookStay",
    subtitle: "Hotelier & Guest Booking Platform",
    company: "Beaming India",
    category: "Platform",
    tags: ["Booking", "Property Listings", "APIs"],
    summary:
      "Responsive hotel booking platform with destination search, check-in/check-out selection, guest management, and property listings.",
    highlights: [
      "Developed a responsive hotel booking platform featuring destination search, check-in/check-out selection, guest management, and property listings.",
      "Built interactive property cards, popular destination sections, promotional deals, and hotel discovery interfaces.",
      "Integrated APIs to support property data, booking workflows, and dynamic content rendering.",
    ],
    liveUrl: "https://www.zookstay.com/",
    motif: "booking",
  },
  {
    id: "gst-portal",
    title: "Chhattisgarh Commercial Tax (GST) Department Portal",
    subtitle: "Government Portal Frontend",
    company: "Beaming India",
    category: "Government",
    tags: ["Reusable Components", "Accessibility", "Responsive"],
    summary:
      "Developed and enhanced the frontend of a government GST portal with structured content and user-friendly navigation.",
    highlights: [
      "Developed and enhanced the frontend interface for a government GST portal, focusing on structured content presentation and user-friendly navigation.",
      "Implemented organized sections for GST services, tax rules, notifications, circulars, and taxpayer resources.",
      "Built reusable UI components for service categories, quick links, help centers, and notification panels.",
      "Designed responsive layouts to improve accessibility and usability across different screen sizes.",
    ],
    liveUrl: "https://gst-commercial.netlify.app/",
    motif: "tax",
  },
  {
    id: "politech",
    title: "Politech Future Solutions",
    subtitle: "Corporate Website Development",
    company: "Beaming India",
    category: "Corporate",
    tags: ["Corporate Site", "Contact Forms", "Case Studies"],
    summary:
      "Responsive corporate website showcasing election management, political campaign solutions, and data analytics services.",
    highlights: [
      "Developed a responsive corporate website showcasing election management, political campaign solutions, and data analytics services.",
      "Implemented structured service sections, case studies, company news, team information, and contact forms.",
      "Built reusable UI components and responsive layouts for consistent presentation across devices.",
      "Integrated contact forms and supporting website components to streamline client inquiries and business communication.",
    ],
    liveUrl: "https://politech.vercel.app/",
    motif: "web",
  },
  {
    id: "programmics-website",
    title: "Programmics Technology",
    subtitle: "Corporate Website Development",
    company: "Programmics Technology",
    category: "Corporate",
    tags: ["Corporate Site", "Responsive", "Reusable UI"],
    summary:
      "Responsive website interfaces showcasing IT services, technology solutions, and company projects.",
    highlights: [
      "Developed responsive website interfaces showcasing IT services, technology solutions, and company projects.",
      "Implemented structured sections for service offerings, portfolio projects, client testimonials, company information, and contact details.",
      "Built reusable frontend components and responsive layouts for a consistent experience across devices.",
      "Collaborated with the team to implement modern UI designs aligned with business requirements.",
    ],
    liveUrl: "https://programmics.co.in/",
    motif: "web",
  },
  {
    id: "sparkcars",
    title: "SPARKCARS",
    subtitle: "EV Rental & Subscription Management Platform",
    company: "Programmics Technology",
    category: "Platform",
    tags: ["Admin Panel", "EV Charging", "Maps", "REST APIs"],
    summary:
      "Administrative panels for managing EV rental operations and the overall mobility ecosystem.",
    highlights: [
      "Developed administrative panels to manage EV rental operations and the overall mobility ecosystem.",
      "Implemented charging station management so administrators can add, update, and manage EV charging station locations.",
      "Integrated map-based location features to support charging station identification and location updates.",
      "Built responsive admin interfaces and integrated REST APIs for seamless data management and operational workflows.",
    ],
    motif: "car",
  },
  {
    id: "relaxation-arena",
    title: "Relaxation Arena",
    subtitle: "Online Wellness Booking Platform",
    company: "Prixso Software",
    category: "Platform",
    tags: ["Booking Workflow", "Wellness"],
    summary:
      "Online platform to explore wellness and body relaxation services and book appointments by preference.",
    highlights: [
      "Developed an online platform that allows users to explore wellness and body relaxation services and book appointments based on their preferences.",
      "Implemented a streamlined booking workflow covering service selection, appointment scheduling, and booking management.",
      "Designed an intuitive user interface to help customers navigate available services and access booking options.",
    ],
    liveUrl: "https://relaxationarena.com/",
    motif: "wellness",
  },
  {
    id: "taxi-wala",
    title: "Taxi Wala",
    subtitle: "Online Taxi Booking & Transportation Platform",
    company: "Prixso Software",
    category: "Platform",
    tags: ["Booking Form", "Vehicle Listings", "Inquiry Forms"],
    summary:
      "Web-based taxi booking platform for round-trip rides, local transportation, and corporate travel services.",
    highlights: [
      "Developed a web-based taxi booking platform enabling customers to book round-trip rides, local transportation, and corporate travel services.",
      "Implemented an online booking form capturing passenger details, pickup and drop-off dates, travel preferences, and vehicle selections.",
      "Designed vehicle listing sections showcasing taxi options including Innova Crysta, Scorpio, Ertiga, and Swift Dzire.",
      "Built service sections for city-to-city travel, local transportation, and corporate bookings.",
      "Developed customer inquiry forms and responsive website sections to improve accessibility and streamline booking.",
    ],
    liveUrl: "https://texi-wala.vercel.app/",
    motif: "taxi",
  },
  {
    id: "ios-furniture",
    title: "IOS Furniture",
    subtitle: "Office & Residential Furniture Website",
    company: "Prixso Software",
    category: "Corporate",
    tags: ["Product Galleries", "Inquiry Forms", "Responsive"],
    summary:
      "Responsive corporate website showcasing office furniture, residential furniture, workstations, and customized furniture solutions.",
    highlights: [
      "Developed a responsive corporate website showcasing office furniture, residential furniture, workstations, and customized furniture solutions.",
      "Built interactive product galleries and structured navigation to improve product discovery and user experience.",
      "Developed client inquiry forms to facilitate customer inquiries and furniture requirements.",
    ],
    liveUrl: "https://www.iosfurniture.com/",
    motif: "furniture",
  },
  {
    id: "schon",
    title: "Schon",
    subtitle: "Architectural Product Showcase Platform",
    company: "Prixso Software",
    category: "Corporate",
    tags: ["Product Showcase", "Premium Layouts"],
    summary:
      "A premium digital experience for showcasing aluminium doors, windows, and contemporary architectural solutions.",
    highlights: [
      "Crafted a premium digital experience for showcasing aluminium doors, windows, and contemporary architectural solutions.",
      "Translated design concepts into visually rich web interfaces featuring luxury product collections and architectural project portfolios.",
      "Structured product categories and showcase galleries to help customers explore design options and product specifications.",
      "Built elegant, responsive layouts aligned with the brand's premium positioning and modern architectural aesthetics.",
      "Optimized content hierarchy and navigation for a seamless product discovery experience.",
    ],
    liveUrl: "https://www.theschon.com/",
    motif: "door",
  },
];

export type Job = {
  role: string;
  company: string;
  location: string;
  period: string;
  note?: string;
  projectIds: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    role: "Software Developer (L6)",
    company: "Arceus Infotech Pvt. Ltd",
    location: "Mumbai, Maharashtra",
    period: "Sept 2025 – Present",
    note: "Deployed at Chhattisgarh Infotech Promotion Society (CHiPS), Nava Raipur, Chhattisgarh",
    projectIds: [
      "ovse-visitor-tracker",
      "chips-grievance-portal",
      "sub-aua-tracker",
      "face-auth-ui",
    ],
    current: true,
  },
  {
    role: "Full Stack Developer",
    company: "Beaming India",
    location: "Raipur, CG",
    period: "Mar 2024 – Sept 2025",
    projectIds: ["nexify-world", "zookstay", "gst-portal", "politech"],
  },
  {
    role: "Full Stack Developer",
    company: "Programmics Technology",
    location: "Raipur, CG",
    period: "Jul 2023 – Mar 2024",
    projectIds: ["programmics-website", "sparkcars"],
  },
  {
    role: "Full Stack Developer",
    company: "Prixso Software Pvt. Ltd.",
    location: "",
    period: "Nov 2021 – Jul 2023",
    projectIds: ["relaxation-arena", "taxi-wala", "ios-furniture", "schon"],
  },
];

export const services = [
  {
    title: "Frontend Development",
    icon: "layout",
    text: "Responsive, accessible interfaces with React.js, Next.js, TypeScript, Redux and Tailwind CSS.",
  },
  {
    title: "Full Stack Web Apps",
    icon: "layers",
    text: "End-to-end applications using Node.js, Express.js, MongoDB and MySQL, deployed to the cloud.",
  },
  {
    title: "Admin Panels & Dashboards",
    icon: "dashboard",
    text: "Role-based dashboards and workflow interfaces for operations, onboarding and tracking.",
  },
  {
    title: "REST API Development",
    icon: "server",
    text: "RESTful APIs with JWT authentication, role-based access control and API security.",
  },
  {
    title: "Payments & Maps Integration",
    icon: "map",
    text: "Cashfree payment gateway integration and map-based location features.",
  },
  {
    title: "UI/UX Design in Figma",
    icon: "pen",
    text: "User flows and mobile screens designed in Figma, with consistent design patterns.",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
  school: "CSVTU – Chhattisgarh Swami Vivekanand Technical University, Bhilai, CG",
  college: "Krishna Engineering College",
  cgpa: "8.66/10",
  period: "2018 – 2021",
  url: "https://csvtu.ac.in/",
};

export const certification = {
  title: "Web Technologies Training",
  issuer: "Software Solution (Sensible Computer)",
  technologies: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap"],
  duration: "August 2019 – September 2019",
  year: "2019",
};
