export const BRAND_NAME = "VINCODE"
export const VINCODE_IG = "https://www.instagram.com/vincodedev/"
export const email = 'vincodedev@gmail.com'
export const phone = '+51 956023028'
export const WHATSAPP_NUMBER = '51956023028'

export const HERO_TITLE = "Eleva Tu Presencia En Línea con Servicios Digitales"
export const HERO_SUBTITLE = "Desde tarjetas digitales intuitivas, portfolios impresionantes hasta potentes plataformas de comercio electrónico, creamos soluciones digitales que impulsan el éxito."

export const SERVICES_TITLE = "Soluciones Digitales"
export const SERVICES_SUBTITLE = "Ofrecemos una gama de servicios para satisfacer tus necesidades digitales, desde la creación de tarjetas digitales, portfolios hasta el desarrollo de un software a la medida de tu negocio."

// NAVBAR ITEMS
export const navbar_items = [
  {
    id: 1,
    name: "Servicios",
    htmlId: "services"
  },
  {
    id: 2,
    name: "Proyectos",
    htmlId: "projects"
  },
  {
    id: 4,
    name: "Sobre Nosotros",
    htmlId: "about-us"
  },
  // {
  //   id: 3,
  //   name: "Otros Proyectos",
  //   htmlId: "other-projects"
  // },
  // {
  //   id: 5,
  //   name: "Testimonios",
  //   htmlId: "testimonials"
  // },
  // {
  //   id: 6,
  //   name: "Contacto",
  //   htmlId: "contact"
  // },
]

// PROYECTOS
export const projects = [
  {
    title: 'Portfolio',
    description: 'Un portfolio que no solo muestra proyectos, sino que cuenta una historia profesional. Diseño interactivo y responsive que captura la atención de reclutadores y clientes, optimizado para aparecer en las primeras búsquedas de Google.',
    category: 'Web',
    img: '/portfolio-web.webp',
    imgGallery: ['portfolio-web'],
    url: 'https://bryanvivancos.netlify.app/',
    goToWeb: true
  },
  {
    title: 'Links in Bio',
    description: 'Todo tu negocio en un solo link. Solución elegante que centraliza redes sociales, catálogos y contacto directo. Navegación instantánea que convierte visitantes en clientes potenciales desde el primer clic.',
    category: 'Web',
    img: '/cq-link-bio.webp',
    imgGallery: ['cq-link-bio'],
    url: 'https://bio.catquiz.pe',
    goToWeb: true
  },
  // {
  //   title: 'E-commerce Web',
  //   description: 'Build a powerful online store to sell your products or services.',
  //   img: '/project-image.webp',
  //   url: '#'
  // },
  {
    title: 'Tarjeta de presentación digital',
    description: 'Olvídate de las tarjetas de papel. Comparte tu negocio con un simple escaneo QR: contacto directo, galería de productos y redes sociales al instante. Una primera impresión digital que tus clientes nunca olvidarán.',
    category: 'Web',
    img: '/catquiz-digital-card.webp',
    imgGallery: ['catquiz-digital-card'],
    url: 'https://card.catquiz.pe',
    goToWeb: true
  },
  {
    title: "VIN DISPLAY - Software de Cartelera Digital y Menús Dinámicos",
    description: 'Transforma la experiencia de tus clientes con menús que se actualizan en segundos. Gestiona promociones en tiempo real, muestra tus platos más vendidos y controla todo desde tu teléfono. Tecnología que vende mientras tú cocinas.',
    category: 'Software',
    img: "/vin-display-img.webp",
    imgGallery: ["vin-display-img"],
    url: `/services/vin-display`,
    goToWeb: false
  },
];

// TESTIMONIOS
export const testimonials = [
  {
    name: 'Sophia Carter',
    date: '2023-08-15',
    avatar: '/avatar-sophia.png',
    text: '"The portfolio created by Digital Services Co. exceeded my expectations. It\'s professional, visually appealing, and perfectly showcases my work."',
    likes: 2,
  },
  {
    name: 'Ethan Bennett',
    date: '2023-09-22',
    avatar: '/avatar-ethan.png',
    text: '"I\'m thrilled with the e-commerce website they developed for my business. It\'s user-friendly, efficient, and has significantly boosted my sales."',
    likes: 3,
  },
  // {
  //   name: 'Olivia Hayes',
  //   date: '2023-10-10',
  //   avatar: '/avatar-olivia.png',
  //   text: '"The link-in-bio service is fantastic! It\'s a clean and organized way to share all my important links with my audience."',
  //   likes: 1,
  // },
];


//Urls OTROS PROYECTOS
export const QUIZTER_APP = "https://quizter-web.vercel.app/"
export const RANDOMIZER_APP = "https://randomizer-app-psi.vercel.app/"

export const others_projects = [
  {
    img: "/services-imgs/quizter-img.webp",
    imgGallery: ['quizter-img'],
    title: "QUIZTER",
    url: `${QUIZTER_APP}`,
    description: 'Juego de Quiz con preguntas de cultura general',
    goToWeb: true,
  },
  {
    img: "/services-imgs/randomizer-img.webp",
    imgGallery: ['randomizer-img'],
    title: "RANDOMIZER",
    url: `${RANDOMIZER_APP}`,
    description: 'Pagina de juegos, aplicaciones de números random, sorteos',
    goToWeb: true
  },
];


// index.html
// <!-- <meta property="og:title" content="Vincode" /> -->
// <!-- <meta property="og:description"
//   content="Somos un equipo de desarrollo de software que ofrece soluciones personalizadas para empresas y startups." /> -->
// <!-- <meta property="og:url" content="www.vincode.dev"> -->