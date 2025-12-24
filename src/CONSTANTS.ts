import { getOrigQueryParams } from "astro/assets/utils"

export const BRAND_NAME = "VINCODE"
export const VINCODE_IG = "https://www.instagram.com/vincodedev/"
export const email = 'vincodedev@gmail.com'
export const phone = '+51 956023028'

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
  // {
  //   id: 3,
  //   name: "Otros Proyectos",
  //   htmlId: "other-projects"
  // },
  {
    id: 4,
    name: "Sobre Nosotros",
    htmlId: "about-us"
  },
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
    description: 'Portfolio profesional para Ingeniero.',
    img: '/portfolio-web.webp',
    url: 'https://bryanvivancos.netlify.app/',
    goToWeb: true
  },
  {
    title: 'Links in Bio',
    description: 'Web para centralizar los links más importantes de una empresa de Joyas.',
    img: '/link_bio.webp',
    url: 'https://catquizpe.vercel.app/',
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
    description: 'Impresión duradera con una tarjeta de presentación digital negocio de joyas.',
    img: '/catquiz-digital-card.webp',
    url: 'https://catquiz-card.vercel.app/',
    goToWeb: true
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
    img: "/quizter-image-01.webp",
    title: "QUIZTER",
    url: `${QUIZTER_APP}`,
    description: 'Juego de Quiz con preguntas de cultura general',
    goToWeb: true,
  },
  {
    img: "/randomizer-image-01.webp",
    title: "RANDOMIZER",
    url: `${RANDOMIZER_APP}`,
    description: 'Pagina de juegos, aplicaciones de números random, sorteos',
    goToWeb: true
  },
  {
    img: "/randomizer-image-01.webp",
    title: "VIN DISPLAY - Cartelera Digital",
    url: ``,
    description: 'Software de Cartelera Digital para mostrar publicidad y tus menus o sabores disponibles de tu restaurante',
    goToWeb: false
  },
];


// index.html
// <!-- <meta property="og:title" content="Vincode" /> -->
// <!-- <meta property="og:description"
//   content="Somos un equipo de desarrollo de software que ofrece soluciones personalizadas para empresas y startups." /> -->
// <!-- <meta property="og:url" content="www.vincode.dev"> -->