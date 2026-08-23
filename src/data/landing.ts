export const LANDING_HERO = {
  eyebrow: "Soluciones digitales para negocios",
  title: "Convertimos problemas de negocio en soluciones digitales",
  subtitle:
    "Diseñamos y desarrollamos sitios web, software y automatizaciones que ayudan a tu negocio a vender mejor, trabajar más rápido y crecer.",
  primaryCta: { label: "Hablemos de tu proyecto", href: "/contacto" },
  secondaryCta: { label: "Ver proyectos", href: "#proyectos" },
};

export const LANDING_VINBOOK_STRIP = {
  eyebrow: "Nuevo · VINBOOK",
  title: "Deja de gestionar reservas por WhatsApp.",
  subtitle: "Tu propia agenda online, disponible 24/7.",
  cta: { label: "Empezar ahora →", href: "https://vinbook.vincode.dev" },
};

export const LANDING_TRUST = {
  title: "Productos digitales pensados para cómo opera un negocio de verdad",
  metrics: [
    { value: "9+", label: "Productos y servicios disponibles" },
    { value: "100%", label: "Proyectos entregados a tiempo" },
    { value: "<24h", label: "Respuesta de soporte técnico" },
    { value: "4★+", label: "Satisfacción promedio de clientes" },
  ],
};

export const LANDING_SOLUTIONS = [
  {
    number: "01",
    title: "Web & Experiencias digitales",
    description:
      "Construimos experiencias digitales que ayudan a tu negocio a destacar, comunicar mejor y convertir.",
    items: [
      "Landing pages",
      "Web corporativa",
      "Ecommerce",
      "Portfolios",
      "Link Bio",
      "Tarjeta digital",
    ],
  },
  {
    number: "02",
    title: "Automatización & IA",
    description:
      "Reducimos tareas repetitivas y conectamos las herramientas que tu negocio ya utiliza.",
    items: [
      "Sistemas de reservas",
      "Automatización de procesos",
      "Integraciones",
      "WhatsApp",
      "Workflows",
      "IA",
    ],
  },
  {
    number: "03",
    title: "Software a medida",
    description:
      "Construimos sistemas adaptados a los procesos y necesidades reales de tu negocio.",
    items: [
      "VIN DISPLAY",
      "Dashboards",
      "Plataformas",
      "SaaS",
      "Sistemas internos",
      "Sistemas empresariales",
    ],
  },
];

export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  result?: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string; external?: boolean };
};

export const LANDING_FEATURED_PROJECTS: FeaturedProject[] = [
  {
    name: "VINBOOK",
    category: "Software · Reservas",
    description:
      "Una plataforma de reservas para gestionar servicios, disponibilidad, trabajadores y citas desde un solo lugar.",
    problem:
      "Las reservas se gestionaban por WhatsApp, llamadas y hojas de cálculo — con errores y poco control.",
    solution:
      "Sistema con página pública de citas, panel administrativo, servicios, trabajadores y notificaciones automáticas.",
    image: "/services-imgs/vinbook-shot.webp",
    imageAlt: "Captura de pantalla de VINBOOK, plataforma de reservas en línea",
    cta: {
      label: "Explorar VINBOOK",
      href: "https://vinbook.vincode.dev/",
      external: true,
    },
  },
  {
    name: "VIN DISPLAY",
    category: "Software · Cartelería digital",
    description:
      "Cartelería digital para actualizar menús, promociones y contenido en múltiples pantallas desde un solo panel.",
    problem:
      "Actualizar menús y promociones implicaba imprimir, reemplazar material físico y coordinar varias pantallas.",
    solution:
      "Panel centralizado para gestionar contenido en tiempo real desde cualquier dispositivo.",
    image: "/services-imgs/vin-display-img.webp",
    imageAlt: "Captura de pantalla de VIN DISPLAY, software de cartelería digital",
    cta: {
      label: "Conocer VIN DISPLAY",
      href: "/servicios/sistema-carteleria-digital",
    },
  },
  {
    name: "Catquiz — Link Bio",
    category: "Web · Presencia digital",
    description:
      "Una identidad digital que centraliza enlaces, catálogo y contacto en un solo enlace compartible.",
    problem:
      "La información del negocio estaba dispersa entre WhatsApp, redes y catálogo, sin un punto de entrada claro.",
    solution:
      "Link Bio personalizado con contacto, catálogo y redes, listo para Instagram y WhatsApp.",
    image: "/services-imgs/cq-link-bio.webp",
    imageAlt: "Página Link Bio desarrollada para Catquiz",
    cta: {
      label: "Ver proyecto",
      href: "https://bio.catquiz.pe",
      external: true,
    },
  },
];

export const LANDING_PROBLEMS = {
  title: "¿Qué podemos resolver?",
  subtitle:
    "No necesitas saber qué tecnología necesitas. Solo cuéntanos qué quieres mejorar.",
  items: [
    {
      problem: "Procesos manuales",
      question: "¿Sigues perdiendo tiempo en tareas repetitivas?",
      solution:
        "Automatizamos procesos para que tu equipo dedique menos tiempo a lo operativo.",
    },
    {
      problem: "Reservas y citas",
      question: "¿Tus clientes todavía reservan principalmente por WhatsApp?",
      solution:
        "Construimos sistemas de reservas con disponibilidad, servicios y panel de gestión.",
    },
    {
      problem: "Información dispersa",
      question: "¿Tu negocio depende de Excel o chats para operar?",
      solution:
        "Convertimos procesos dispersos en sistemas centralizados y fáciles de administrar.",
    },
    {
      problem: "Presencia digital",
      question: "¿Necesitas una web que realmente genere confianza y oportunidades?",
      solution:
        "Diseñamos experiencias pensadas para comunicar, convencer y convertir visitas en clientes.",
    },
    {
      problem: "Automatización",
      question: "¿Hay tareas que tu equipo repite todos los días?",
      solution:
        "Conectamos herramientas y automatizamos workflows para reducir trabajo manual.",
    },
    {
      problem: "Software a medida",
      question: "¿Las herramientas del mercado no se adaptan a tu negocio?",
      solution:
        "Desarrollamos software alrededor de cómo realmente funciona tu operación.",
    },
  ],
};

export const LANDING_PROCESS = [
  {
    number: "01",
    title: "Descubrimos",
    description:
      "Entendemos tu negocio, tus objetivos y el problema que quieres resolver.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos la experiencia y la solución adecuada antes de construir.",
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Diseñamos, desarrollamos, integramos y probamos la solución.",
  },
  {
    number: "04",
    title: "Lanzamos",
    description:
      "Ponemos la solución en producción y te acompañamos después del lanzamiento.",
  },
];

export const LANDING_TECH = [
  "Astro",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
];

export const LANDING_CLIENTS = {
  eyebrow: "Clientes y tecnología",
  title: "Negocios que ya confían en VINCODE",
  subtitle:
    "Trabajamos con marcas locales y construimos con tecnología moderna, pensada para escalar.",
  techLabel: "Construimos con tecnología moderna",
};

export const LANDING_FINAL_CTA = {
  title:
    "¿Tienes una idea, proceso o problema que quieras convertir en una solución digital?",
  description:
    "No necesitas saber qué tecnología necesitas. Cuéntanos qué quieres mejorar y te ayudamos a encontrar la solución adecuada.",
  buttonText: "Hablemos de tu proyecto",
  buttonHref: "/contacto",
};
