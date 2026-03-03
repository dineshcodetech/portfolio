/**
 * Portfolio content — edit here to update copy and add your recent projects.
 */

export const site = {
  name: "Recursion Technologies",
  tagline: "Scalable and global",
} as const;

export const profile = {
  title: "Who we are",
  experience: "5+ years",
  focus: "MCS (Microsoft Cloud Solutions) & full-stack development",
  bio: "We are a cross-functional team building scalable applications from idea to production. We specialize in cloud-native architecture, modern frontends, robust backends, and AI-integrated products for enterprises and startups worldwide.",
  highlights: [
    "5+ years in Microsoft Cloud Solutions (Azure, M365, Power Platform)",
    "End-to-end delivery: architecture, development, and deployment",
    "Cross-functional team: App, Backend, Frontend & AI developers",
  ],
} as const;

export const services = [
  {
    id: "mobile",
    slug: "mobile",
    title: "Mobile Apps",
    summary: "React Native, Flutter & Expo — one codebase for iOS and Android.",
    icon: "Smartphone",
  },
  {
    id: "backend",
    slug: "backend",
    title: "Backend & APIs",
    summary: "Java Spring Boot, Node.js, Python FastAPI — scalable and secure.",
    icon: "Server",
  },
  {
    id: "frontend",
    slug: "frontend",
    title: "Frontend & Web",
    summary: "React.js, Vue, Next.js — modern UIs and design systems.",
    icon: "Layout",
  },
  {
    id: "devops",
    slug: "devops",
    title: "DevOps & Cloud",
    summary: "AWS, Azure, GCP, Hostinger — deploy anywhere, adapt to any setup.",
    icon: "Cloud",
  },
  {
    id: "ai",
    slug: "ai",
    title: "AI & Intelligent Apps",
    summary: "Chatbots, automation, predictive features — no AI expertise needed.",
    icon: "Sparkles",
  },
] as const;

/** Full content for service detail pages. Key = service slug. */
export const serviceDetails: Record<
  string,
  {
    tagline: string;
    overview: string[];
    techStack: string[];
    highlights: string[];
  }
> = {
  mobile: {
    tagline: "React Native, Flutter & Expo",
    overview: [
      "We independently build and ship mobile apps with React Native and Flutter, using Expo for rapid iteration. You get a single codebase for iOS and Android with native performance and smooth UX — no need to maintain two separate apps.",
      "From MVPs to production apps, we handle architecture, state management, and store deployment so you can focus on your product.",
    ],
    techStack: [
      "React Native",
      "Flutter",
      "Expo (managed & bare workflows)",
      "TypeScript / Dart",
      "Native iOS & Android builds",
    ],
    highlights: [
      "Cross-platform from one codebase — ship to iOS and Android faster.",
      "Expo for fast iteration, OTA updates, and easier tooling.",
      "Native performance and access to device APIs when you need them.",
      "We own the full lifecycle: design, build, test, and store submission.",
    ],
  },
  backend: {
    tagline: "Java Spring Boot, Node.js, Python FastAPI",
    overview: [
      "Production-ready APIs and services in the stack that fits your product: Java Spring Boot for enterprise and complex domains, Node.js for real-time and JS ecosystems, or Python FastAPI for speed and data-heavy workloads.",
      "We focus on scalability, security, and high concurrency so your backend can grow with your users.",
    ],
    techStack: [
      "Java Spring Boot",
      "Node.js (Express, Nest, etc.)",
      "Python FastAPI",
      "REST & GraphQL",
      "PostgreSQL, MongoDB, Redis",
    ],
    highlights: [
      "Pick the right stack: Spring Boot, Node.js, or FastAPI based on your needs.",
      "Strict validation, clean APIs, and documentation from day one.",
      "Async where it matters — fast responses under load.",
      "We design for scale and security from the start.",
    ],
  },
  frontend: {
    tagline: "React.js, Vue, Next.js",
    overview: [
      "Modern web apps built with React.js, Vue, or Next.js. We deliver responsive UIs, reusable design systems, and fast, accessible experiences that work across devices and browsers.",
      "Whether it’s a marketing site, dashboard, or full product UI, we use the right framework and keep code maintainable.",
    ],
    techStack: [
      "React.js",
      "Vue.js",
      "Next.js",
      "TypeScript",
      "Tailwind, design systems",
    ],
    highlights: [
      "React, Vue, or Next.js — we choose based on your product and team.",
      "Responsive, accessible, and performance-conscious by default.",
      "Design systems and component libraries for consistency and speed.",
      "SEO and core web vitals considered from the start.",
    ],
  },
  devops: {
    tagline: "AWS, Azure, GCP, Hostinger",
    overview: [
      "We deploy and run your apps on the cloud you prefer: AWS, Azure, GCP, or Hostinger. We have hands-on experience across these platforms and can adapt to any other DevOps or hosting setup you need.",
      "CI/CD, containers, serverless, or traditional hosting — we set up reliable, repeatable pipelines and environments so you can ship with confidence.",
    ],
    techStack: [
      "AWS (EC2, Lambda, ECS, RDS, etc.)",
      "Azure",
      "Google Cloud (GCP)",
      "Hostinger",
      "Docker, CI/CD, IaC",
    ],
    highlights: [
      "Deploy anywhere: AWS, Azure, GCP, or Hostinger — we adapt to your choice.",
      "CI/CD pipelines, containers, and infra as code when you need them.",
      "Monitoring, logging, and cost awareness built into the setup.",
      "We can adopt other DevOps tools and clouds as your stack evolves.",
    ],
  },
  ai: {
    tagline: "Smart chatbots, automation & predictive features",
    overview: [
      "Stand out with AI: smart chatbots, document understanding, predictive features, and automation that feel magical. We help you add intelligence to any product — no AI expertise required on your side.",
      "From integrating LLMs and building RAG systems to custom models and workflow automation, we handle the technical side so you can focus on the experience and outcomes.",
    ],
    techStack: [
      "LLMs & prompt engineering",
      "RAG (retrieval-augmented generation)",
      "Chatbots & conversational AI",
      "Document understanding & NLP",
      "Workflow automation & agents",
    ],
    highlights: [
      "Add AI to any product — we handle models, APIs, and integration.",
      "Chatbots, document Q&A, and automation that users actually enjoy.",
      "No in-house AI team needed; we bring the expertise and delivery.",
      "From prototypes to production: security, cost, and scale in mind.",
    ],
  },
};

export const team = [
  { role: "App Developers", description: "Mobile & desktop applications" },
  { role: "Backend Developers", description: "APIs, services & infrastructure" },
  { role: "Frontend Developers", description: "Web & UI development" },
  { role: "AI Developers", description: "ML models, agents & automation" },
] as const;

/** Project list for cards. Use `slug` when you have a detail page (e.g. /projects/parashu). */
export const projects = [
  {
    id: "parashu",
    slug: "parashu",
    title: "Parashu",
    description: "Full-stack e-commerce & custom tailoring platform — FastAPI backend, React Native (Expo) mobile, RBAC, and tailor workflow.",
    tags: ["FastAPI", "React Native", "Expo", "PostgreSQL", "TypeScript", "Zustand"],
    link: "https://parashu.in/",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
  },
  {
    id: "nah44",
    slug: "nah44",
    title: "NAH44 Platform",
    description: "Multi-service SaaS: Tags Franchise system, QR menu ordering & billing, and online recharge & bill payments — Node.js backend, React (Vite) web, React Native mobile.",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Vite", "React Native", "Razorpay", "Socket.io"],
    link: "https://nah44.com/",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "lms",
    slug: "lms",
    title: "Modern LMS",
    description: "Full-stack learning management platform: course & quiz engines, progress tracking, Razorpay payments, referral credits, automated PDF certificates, AWS S3 media, NextAuth & Twilio.",
    tags: ["Next.js 14", "React 18", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Razorpay", "AWS S3"],
    link: "https://codtechlearning.com/",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    id: "krushi",
    slug: "krushi",
    title: "Krushi",
    description: "Gig-economy marketplace: Next.js business portal + React Native worker app — job matching, OTP attendance, internal wallet, Razorpay & redemption.",
    tags: ["Next.js 14", "React Native", "Prisma", "PostgreSQL", "NextAuth", "Razorpay", "Google Maps", "NativeWind"],
    link: "https://krushistaff.com/",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: "hascart",
    slug: "hascart",
    title: "HasCart",
    description: "E-commerce ecosystem: React Native customer app (Tab UI, Tailwind), Dockerized Node/Express API as Amazon Product Advertising proxy, React (Vite) admin — JWT, RBAC, affiliate referrals, MongoDB.",
    tags: ["React Native", "Node.js", "Express", "MongoDB", "React", "Vite", "Tailwind", "Docker", "JWT"],
    link: "https://hascart.in/",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
  },
  {
    id: "medtech",
    slug: "medtech",
    title: "MedTech",
    description: "Telemedicine platform: find doctors, book appointments, Razorpay payments, health tracking, real-time chat & WebRTC video — Next.js, Socket.io, Prisma, NextAuth, FullCalendar.",
    tags: ["Next.js 14", "React 18", "Prisma", "PostgreSQL", "Socket.io", "WebRTC", "NextAuth", "Razorpay", "Tailwind"],
    link: "https://www.kaustubhamedtech.com/",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: "rag-document-qa",
    slug: "rag-document-qa",
    title: "RAG Document Q&A",
    description: "AI-powered document analysis: upload PDFs, query in natural language. Full RAG pipeline, pgvector, Ollama (Llama 3) local LLM — FastAPI, React, LangChain, Sentence-Transformers.",
    tags: ["FastAPI", "React", "TypeScript", "LangChain", "Ollama", "pgvector", "PostgreSQL", "Vite", "Framer Motion"],
    link: "#",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    id: "rakshak",
    slug: "rakshak",
    title: "Rakshak Solutions",
    description: "Eco-centric tech corporate site: BIOSTER (Hygiene), BLUHEALTH (Healthcare), EDUGENIE (Education). Cinematic preloader, canvas particle system, 3D card effects — HTML5, CSS3, Vanilla JS.",
    tags: ["HTML5", "CSS3", "JavaScript", "Canvas", "SEO", "Schema.org", "Responsive"],
    link: "https://rakshaksolutions.in/",
    image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80",
  },
] as const;

/** Full content for project detail pages. Key = project slug. */
export const projectDetails: Record<
  string,
  {
    tagline: string;
    overview: string[];
    techStack: { frontend: string[]; backend: string[] };
    features: { title: string; description: string }[];
    contributions: string[];
  }
> = {
  parashu: {
    tagline: "E-commerce & custom tailoring platform",
    overview: [
      "Parashu is a comprehensive, full-stack e-commerce platform designed for clothing with a unique, integrated custom-tailoring workflow. It enables users to browse products, place orders, and optionally have their clothing custom-fitted by assigned tailors.",
      "The application is split into two main components: a high-performance FastAPI backend and a cross-platform mobile application built with React Native (Expo). It supports a sophisticated Role-Based Access Control (RBAC) system handling Customers, Admins, and Tailors.",
    ],
    techStack: {
      frontend: [
        "React Native, Expo, Expo Router (file-based routing)",
        "TypeScript",
        "Zustand (client state), React Query (server state / caching)",
        "MMKV (local storage), Axios",
        "Formik + Yup, Lottie, Reanimated",
      ],
      backend: [
        "FastAPI (asynchronous Python)",
        "PostgreSQL (production) / SQLite (dev)",
        "SQLAlchemy 2.0 (async), Pydantic v2",
        "JWT, passlib, bcrypt",
      ],
    },
    features: [
      {
        title: "Custom tailor workflow",
        description:
          "Admins assign tailors to orders requiring custom measurements. Tailors get dedicated access to input and lock measurement details.",
      },
      {
        title: "Role-based access control (RBAC)",
        description:
          "Three roles — User, Admin, Tailor — with strictly separated concerns and dedicated API routes.",
      },
      {
        title: "Complete e-commerce cycle",
        description:
          "Shopping cart, product variants (size/color), dynamic categories, wishlists, and product reviews.",
      },
      {
        title: "Admin dashboard support",
        description:
          "Full CRUD APIs for products, categories, dynamic banners, coupons, and complex order life-cycle tracking.",
      },
      {
        title: "Production-ready frontend",
        description:
          "Multi-environment configs with EAS (Expo Application Services) for Dev, QA, and Production builds.",
      },
      {
        title: "Offline context",
        description:
          "Basic offline handling with NetInfo and local storage mechanisms.",
      },
    ],
    contributions: [
      "Engineered the asynchronous REST API using FastAPI and SQLAlchemy for fast queries and high concurrency.",
      "Implemented strict data validation with Pydantic to prevent invalid schemas from entering the database.",
      "Architected the mobile app with Expo Router and TypeScript for scalability and developer experience.",
      "Replaced heavy state managers with Zustand and React Query, optimizing render cycles and network requests.",
      "Developed the data flow so that once a tailor locks measurements, the system restricts further edits for real-time data integrity.",
    ],
  },
  nah44: {
    tagline: "Multi-service SaaS — Franchise, QR Menu & Bill Payments",
    overview: [
      "NAH44 is a comprehensive, multi-service platform providing B2B and B2C solutions through a centralized backend. It integrates three primary services: a Tags Franchise System for hierarchical QR tag management across franchise branches; a QR Menu Ordering & Billing System for contactless dining (scan, order, pay); and an Online Recharge & Bill Payment Platform for mobile/DTH recharges and utility payments.",
      "Architecture is microservices-inspired full-stack: a shared Backend API (NAH44BE), a Web Frontend (NAH44FE), and a React Native Customer App. Built as Full Stack / Mobile Developer with role-based dashboards, real-time order tracking, and secure payments via Razorpay.",
    ],
    techStack: {
      frontend: [
        "Web (NAH44FE): React 18, Vite, React Router v6, React Query, Axios, Socket.io — mobile-first responsive",
        "Mobile (NAH44 App): React Native CLI, NativeWind (Tailwind), React Navigation, Async Storage, React Native Camera Kit",
        "Third-party: Razorpay, Twilio (SMS/OTP), HTML5-QRCode (web scanner)",
      ],
      backend: [
        "Node.js, Express.js, PostgreSQL, JWT authentication",
        "REST APIs: Razorpay webhooks, utility provider APIs (DTH/mobile recharge)",
        "express-validator, helmet, bcryptjs — validation, security, credential hashing",
      ],
    },
    features: [
      {
        title: "Customer React Native App",
        description:
          "Cross-platform mobile UI with NativeWind (Tailwind). QR code scanner (react-native-camera-kit) for table codes and instant menu access. Fluid navigation (react-navigation, bottom tabs + stack) from browsing to utility recharges.",
      },
      {
        title: "Web dashboard & frontend",
        description:
          "Role-based dashboards for Admins, Franchise Owners, and Users. Live order tracking via WebSockets (socket.io-client) so the billing counter gets real-time updates without refresh. Responsive UI with React Query for API caching; works on mobile, tablet, and desktop.",
      },
      {
        title: "Backend architecture",
        description:
          "Relational PostgreSQL for transactions, roles, menu items, and franchise allocations. Secure REST APIs with Razorpay webhook verification and utility provider integrations. express-validator, helmet, and bcryptjs for payload validation, HTTP security, and password hashing.",
      },
      {
        title: "Tags Franchise System",
        description:
          "Hierarchical management for allocating and managing QR tags across franchise branches.",
      },
      {
        title: "QR menu & billing",
        description:
          "Contactless dining: customers scan QR codes to view menus, place orders, and pay bills securely.",
      },
      {
        title: "Recharge & bill payments",
        description:
          "Integrated gateway for mobile (prepaid/postpaid), DTH recharges, and utility bill payments.",
      },
    ],
    contributions: [
      "Engineered seamless interaction between a unified PostgreSQL backend and two distinct front ends: Vite React web and React Native customer app.",
      "Optimized QR code generation and decoding to work across web (html5-qrcode) and mobile devices.",
      "Simplified state management and reduced database query overhead by integrating React Query on the client.",
    ],
  },
  lms: {
    tagline: "Full-stack learning management platform",
    overview: [
      "A full-stack, comprehensive, and scalable learning management platform designed to deliver high-quality educational content. The platform features robust course management, progressive learning tracking, interactive quizzes, automated certificate generation, and a complete referral and credit system.",
      "Built with Next.js 14 and React 18 on the front end, Next.js API Routes and Node.js on the back end, and PostgreSQL with Prisma ORM. Authentication via NextAuth.js, media on AWS S3, payments via Razorpay, and real-time WhatsApp notifications via Twilio.",
    ],
    techStack: {
      frontend: [
        "Next.js 14, React 18, TypeScript",
        "Tailwind CSS, Radix UI (clsx, tailwind-merge)",
      ],
      backend: [
        "Next.js API Routes (serverless), Node.js",
        "PostgreSQL, Prisma ORM",
        "NextAuth.js, bcrypt, signed URLs",
        "AWS S3 (media), Razorpay, Twilio API (WhatsApp)",
        "PDFKit, PDF-lib (certificates & offer letters)",
      ],
    },
    features: [
      {
        title: "Dynamic course & quiz engines",
        description:
          "Relational schemas (Prisma) for multi-faceted courses with nested sections and mixed lesson types (Video, Text, Quizzes), plus standalone timed quizzes.",
      },
      {
        title: "Secure payment integration",
        description:
          "Razorpay integrated for end-to-end payment processing on premium courses, quizzes, and subscriptions.",
      },
      {
        title: "Referral & credits system",
        description:
          "Referral engine where users earn credits on successful referrals; credits apply to future purchases or cash out via a Redemption Request flow.",
      },
      {
        title: "Automated communication",
        description:
          "Twilio triggers real-time WhatsApp notifications to admins and users for key events (e.g. credit redemption requests and approvals).",
      },
      {
        title: "Certificate generation",
        description:
          "Programmatic PDF generation (pdf-lib, PDFKit) for course completion certificates and internship offer letters, uploaded to AWS S3.",
      },
      {
        title: "Cloud media & content delivery",
        description:
          "Secure video uploads and access via AWS S3 and presigned URLs so only authorized users can stream premium lectures.",
      },
      {
        title: "Real-time progress tracking",
        description:
          "Granular progress tracking so users see course completion percentages update as they consume lessons.",
      },
    ],
    contributions: [
      "Developed a seamless, highly responsive UI with Tailwind CSS.",
      "Built relational database architectures for scalable tracking of student metrics, instructors, and structured content.",
      "Reduced manual admin work by automating certificate distribution and user payout workflows using AWS and Twilio.",
    ],
  },
  krushi: {
    tagline: "Gig-economy marketplace — Business portal & worker app",
    overview: [
      "Krushi is an end-to-end marketplace connecting businesses (employers) with verified gig-workers. The ecosystem includes a responsive Next.js web portal for businesses to manage job postings, and a React Native mobile app for workers to find jobs, track attendance, and manage earnings. The platform handles the full gig-worker lifecycle: job matching, onboarding, OTP-based physical attendance verification, and dynamic wallet-based payouts.",
      "Built as Full-Stack Developer with Next.js 14 (web), React Native (mobile), Next.js serverless API routes, Prisma, and PostgreSQL. Authentication via NextAuth.js and custom OTP workflows; payments and withdrawals via Razorpay and an internal wallet engine.",
    ],
    techStack: {
      frontend: [
        "Web: Next.js 14, React 18, Tailwind CSS, Framer Motion, Radix UI",
        "Mobile: React Native, React Navigation (Native Stack & Bottom Tabs), NativeWind",
        "Google Maps / Places Autocomplete, Sharp (image optimization)",
      ],
      backend: [
        "Next.js serverless API routes, Prisma ORM, PostgreSQL",
        "NextAuth.js, custom OTP workflows, JWT, bcryptjs",
        "Razorpay (payments), internal wallet ledger",
      ],
    },
    features: [
      {
        title: "Internal wallet & financial engine",
        description:
          "Double-entry internal wallet ledger (WalletTransaction) for platform economics. Payment routing for advance payments, platform commission deduction, and accurate worker net pay. Razorpay integration on web and mobile. Redemption Request module so workers withdraw balances to bank, UPI, or via QR.",
      },
      {
        title: "OTP-secured attendance (check-in)",
        description:
          "Workers confirm arrival at the job site using a cryptographically generated 4-digit OTP, giving verifiable attendance states (PENDING, PRESENT, ABSENT) and bridging physical presence with software.",
      },
      {
        title: "Scalable gig-matching architecture",
        description:
          "Relational schema (Prisma, PostgreSQL) for Users, BusinessProfiles, and Jobs. Job posting system with worker counts, base vs platform wages, required dates, and guidelines (e.g. uniform colors, grooming codes).",
      },
      {
        title: "Application & attendance workflow",
        description:
          "Custom job application lifecycle (APPLIED, ACCEPTED, REJECTED); businesses review worker profiles before booking. End-to-end flow from application to OTP check-in.",
      },
      {
        title: "Web portal & mobile experience",
        description:
          "Next.js SSR dashboards with Framer Motion; unified React Native app with separate navigation stacks for Worker vs User/Business, styled with NativeWind.",
      },
      {
        title: "Location & platform safety",
        description:
          "Google Maps and Places Autocomplete on web and mobile for exact job locations. Worker/employer verification flags, block-counts for malicious accounts, time-expiring SMS OTP storage.",
      },
    ],
    contributions: [
      "Engineered the internal wallet and financial engine: double-entry ledger, commission logic, and Razorpay integration across web and mobile, plus structured Redemption Request flows for withdrawals.",
      "Implemented OTP-based physical attendance verification so worker check-in at job sites is cryptographically verifiable (PENDING / PRESENT / ABSENT), demonstrating product sense for real-world constraints.",
      "Architected relational data model and job-posting system (worker counts, wages, dates, guidelines) and custom application lifecycle (APPLIED → ACCEPTED/REJECTED) with business review.",
      "Built modern Next.js SSR dashboards and a unified React Native app with role-segregated navigation and NativeWind styling, showcasing ability to deliver both web and mobile from one codebase.",
    ],
  },
  hascart: {
    tagline: "E-commerce ecosystem — Customer app, API proxy & admin",
    overview: [
      "HasCart is a full e-commerce ecosystem with three parts: a React Native customer app (built natively without Expo) with a modern Tab-based UI and Tailwind CSS for browsing categories, searching products, and managing profile; a Dockerized Node.js and Express REST API that acts as a secure proxy to the Amazon Product Advertising API to fetch products on demand (zero local inventory); and a React web admin panel (Vite + Tailwind) for administrators to manage users and system roles.",
      "The backend uses MongoDB (Mongoose) for User, Agent, and Admin management, with JWT authentication, Role-Based Access Control (RBAC), and an Affiliate Referral System. The API uniquely proxies Amazon PA API so the platform can offer product search and discovery without holding inventory.",
    ],
    techStack: {
      frontend: [
        "Customer app: React Native (native, no Expo), Tab-based UI, Tailwind CSS",
        "Admin panel: React, Vite, Tailwind CSS",
        "Categories, search, profile (mobile); user/role management (web)",
      ],
      backend: [
        "Node.js, Express REST API, Docker",
        "MongoDB, Mongoose (User / Agent / Admin)",
        "JWT authentication, RBAC, Affiliate Referral System",
        "Secure proxy to Amazon Product Advertising API (on-demand, no local inventory)",
      ],
    },
    features: [
      {
        title: "HasCart Customer App (mobile)",
        description:
          "React Native app built natively (without Expo). Tab-based interface with Tailwind CSS: browse categories, search products, manage profile.",
      },
      {
        title: "HasCart API (backend)",
        description:
          "Dockerized Node.js and Express REST API. Secure proxy to Amazon Product Advertising API for on-demand product fetch — zero local inventory. MongoDB (Mongoose) for User/Agent/Admin; JWT, RBAC, and Affiliate Referral System.",
      },
      {
        title: "HasCart Admin Panel (web)",
        description:
          "React dashboard (Vite + Tailwind) connected to the Node backend. Administrators manage users and system roles securely.",
      },
      {
        title: "Amazon PA API proxy",
        description:
          "API acts as a secure proxy to Amazon Product Advertising API so the app can fetch and display products on demand without storing inventory.",
      },
      {
        title: "RBAC & referral system",
        description:
          "Role-Based Access Control for User, Agent, and Admin; affiliate referral system integrated into the platform.",
      },
    ],
    contributions: [
      "Built the React Native customer app with a Tab-based UI and Tailwind CSS for categories, search, and profile — native build without Expo.",
      "Designed and implemented the Dockerized Node.js/Express API as a secure proxy to the Amazon Product Advertising API, enabling on-demand product data with no local inventory.",
      "Modeled User, Agent, and Admin in MongoDB with Mongoose; implemented JWT auth, RBAC, and the Affiliate Referral System.",
      "Delivered the React (Vite + Tailwind) admin dashboard for secure user and role management, completing the three-part ecosystem.",
    ],
  },
  medtech: {
    tagline: "Telemedicine & consultation platform",
    overview: [
      "A comprehensive telehealth platform connecting patients with medical professionals. Users find specialized doctors, book appointments, pay securely (Razorpay), track daily health metrics, and conduct virtual consultations via real-time chat and video (WebRTC).",
      "Built with Next.js 14 and React 18 on the front end; Node.js, Next.js Server Actions/API Routes, Socket.io for real-time messaging, and WebRTC (simple-peer) for video. PostgreSQL and Prisma power a rich relational schema (20+ models); NextAuth, OTP (Twilio/Firebase), and Upstash Redis for auth and rate limiting. Integrations include Cloudinary (medical documents), Resend/Nodemailer, and FullCalendar for scheduling.",
    ],
    techStack: {
      frontend: [
        "Next.js 14, React 18, Tailwind CSS, Radix UI, Framer Motion",
        "FullCalendar (scheduling), Recharts (health metrics)",
        "Real-time chat (Socket.io client), WebRTC (simple-peer) for video",
      ],
      backend: [
        "Node.js, Next.js Server Actions / API Routes, Socket.io, WebRTC (simple-peer)",
        "PostgreSQL, Prisma ORM, Upstash Redis (rate limiting)",
        "NextAuth.js, OTP (Twilio/Firebase), Bcrypt, Zod",
        "Razorpay, Cloudinary, Resend/Nodemailer",
      ],
    },
    features: [
      {
        title: "Role-based access (Patients, Doctors, Admins)",
        description:
          "Separate dashboards for Patients, Doctors, and Admins with secure, role-specific flows and permissions.",
      },
      {
        title: "Doctor discovery & scheduling",
        description:
          "Filter doctors by specialization and availability; view real-time slots and book appointments via FullCalendar.",
      },
      {
        title: "Virtual consultations (telehealth)",
        description:
          "Real-time text chat (Socket.io) and peer-to-peer video/audio (WebRTC / simple-peer) for virtual appointments.",
      },
      {
        title: "Secure payments",
        description:
          "Appointment fee processing with Razorpay integration.",
      },
      {
        title: "Health tracking & medical records",
        description:
          "Patients upload encrypted reports (Cloudinary) and track daily/weekly/monthly health metrics (sleep, wellness) on the platform.",
      },
      {
        title: "Verification system",
        description:
          "OTP verification (Twilio/email) and Admin panel to verify doctor licenses and documents before profiles go live.",
      },
    ],
    contributions: [
      "Built a low-latency real-time messaging and notification system with Socket.io, persisting chat history and seen receipts in PostgreSQL for patient-doctor communication.",
      "Designed an extensive Prisma schema (20+ models) for healthcare: doctor availability, appointments, multi-participant chats, health trackers, and reviews.",
      "Created a responsive, accessible UI with Tailwind and Radix, plus Framer Motion/GSAP animations and Recharts for health and scheduling views.",
      "Implemented security and compliance: rate limiting (Upstash Redis), encrypted storage, and strict validation (Zod) for sensitive medical data.",
    ],
  },
  "rag-document-qa": {
    tagline: "Intelligent document Q&A with RAG & local LLM",
    overview: [
      "A full-stack, AI-powered document analysis application using Retrieval-Augmented Generation (RAG). Users upload complex documents (e.g. PDFs) and query them in natural language. The system processes documents, converts text into vector embeddings, stores them in a vector database, and uses a locally hosted LLM (Ollama, Llama 3) to generate accurate, context-bound answers—reducing AI hallucinations and keeping sensitive data private.",
      "Built with a Python FastAPI backend for async REST APIs, LangChain for RAG orchestration, Sentence-Transformers (all-mpnet-base-v2) for embeddings, and PostgreSQL with pgvector for fast similarity search. The frontend is a dynamic, typed React + TypeScript + Vite app with Framer Motion.",
    ],
    techStack: {
      frontend: [
        "React, TypeScript, Vite",
        "Framer Motion (animations), Lucide React (icons), ESLint",
      ],
      backend: [
        "Python, FastAPI, Uvicorn",
        "LangChain (RAG orchestration), Sentence-Transformers (all-mpnet-base-v2)",
        "Ollama (Llama 3, local inference)",
        "PostgreSQL with pgvector (vector storage & similarity search)",
        "unstructured, pypdf (document parsing)",
      ],
    },
    features: [
      {
        title: "Document processing pipeline",
        description:
          "Ingest, parse, and split complex PDFs using unstructured and pypdf; LangChain text splitters for manageable chunks.",
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description:
          "Full RAG pipeline: documents → vector embeddings → stored in DB; user queries are embedded and matched to top-k chunks for context-bound, accurate answers.",
      },
      {
        title: "Local AI & privacy first",
        description:
          "Ollama runs Llama 3 entirely locally so sensitive (e.g. legal) document data never leaves the machine.",
      },
      {
        title: "Fast vector search",
        description:
          "PostgreSQL with pgvector stores document chunks and performs fast similarity search (cosine distance) for sub-second context retrieval.",
      },
      {
        title: "Modern responsive UI",
        description:
          "Dynamic, animated, strongly-typed React + TypeScript frontend with Framer Motion and Lucide icons.",
      },
    ],
    contributions: [
      "Developed a full-stack AI document analysis tool implementing a complete RAG pipeline to query complex documents using natural language.",
      "Architected a high-performance backend with Python and FastAPI, integrating LangChain and Sentence-Transformers to process PDFs and generate embeddings.",
      "Engineered vector search with PostgreSQL and pgvector for fast, sub-second context retrieval for the LLM.",
      "Implemented local LLM inference with Ollama (Llama 3) so sensitive documents are processed with full data privacy.",
      "Built a dynamic, strongly-typed UI with React, TypeScript, Vite, and Framer Motion.",
    ],
  },
  rakshak: {
    tagline: "Eco-centric technology corporate website",
    overview: [
      "Rakshak Solutions is a premium, fully responsive corporate website for an eco-centric tech company. It showcases sustainable technologies across Hygiene (BIOSTER), Healthcare (BLUHEALTH), and Education (EDUGENIE). The site creates a strong visual impact through cinematic effects, smooth scrolling, and interactive particle systems while staying performant and semantically structured.",
      "Built with vanilla HTML5, CSS3, and JavaScript (ES6+) — no frameworks or build tools. Custom dark theme, CSS variables, Flexbox/Grid, and Google Fonts (Inter, Plus Jakarta Sans). Fully static, zero-dependency architecture.",
    ],
    techStack: {
      frontend: [
        "HTML5, CSS3 (vanilla), JavaScript (ES6+)",
        "Custom dark theme, CSS variables, Flexbox/Grid",
        "Inter & Plus Jakarta Sans (Google Fonts)",
        "Fully static site, zero-dependency architecture",
      ],
      backend: [
        "Static site — no server or backend required",
      ],
    },
    features: [
      {
        title: "Cinematic hero & preloader",
        description:
          "Cinematic preloader mimicking a secure protocol authentication sequence; layered atmospheric depth with custom CSS keyframes, floating microscopic entities (viruses, bacteria, phages) and mechanical drones.",
      },
      {
        title: "Advanced UI/UX interactions",
        description:
          "Custom glowing cursor that follows the mouse; interactive HTML5 canvas particle system with dynamic connections between nodes; 3D perspective hover effects on service (product) cards.",
      },
      {
        title: "Performance & responsiveness",
        description:
          "Cross-device responsive layout using CSS media queries only (no Bootstrap/Tailwind). Optimized SVG icons and graphics for retina displays and fast load times.",
      },
      {
        title: "SEO & accessibility",
        description:
          "Semantic HTML5, Schema.org JSON-LD structured data, meta and Open Graph tags for social sharing, and comprehensive alt attributes for screen readers.",
      },
    ],
    contributions: [
      "Developed a high-performance corporate landing page for an eco-centric tech (IoT/Robotics) company using core HTML, CSS, and Vanilla JavaScript.",
      "Engineered an immersive experience with a custom HTML5 canvas particle system, cinematic preloader, and interactive 3D card designs.",
      "Implemented technical SEO including JSON-LD structured data and semantic HTML to improve search engine indexing.",
    ],
  },
};

export const contact = {
  cta: "Let's build something great",
  subtext: "Discuss your project or get a quote. We respond within 24 hours.",
  email: "aravindpolavarapu567@gmail.com",
  phone: "+16562044178",
  whatsapp: "+16562044178",
} as const;
