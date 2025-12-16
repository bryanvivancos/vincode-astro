import BriefcaseIcon from "./components/icons/BriefcaseIcon"
import CardIcon from "./components/icons/CardIcon"
import CustomSoftwareIcon from "./components/icons/CustomSoftwareIcon"
import GlobeIcon from "./components/icons/GlobeIcon"
import LinkIcon from "./components/icons/LinkIcon"
import ServerIcon from "./components/icons/ServerIcon"

export const BRAND_NAME = "Vincode.dev"
export const VINCODE_IG = "https://www.instagram.com/vincodedev/"

export const HERO_TITLE_us = "Elevate Your Online Presence with Expert Digital Services"
export const HERO_TITLE = "Eleva Tu Presencia En Línea con Servicios Digitales"
export const HERO_SUBTITLE_us = "From stunning portfolios to powerful e-commerce platforms, we craft digital solutions that drive success."
export const HERO_SUBTITLE = "Desde portfolios impresionantes hasta potentes plataformas de comercio electrónico, creamos soluciones digitales que impulsan el éxito."

export const SERVICES_TITLE_us = "Comprehensive Digital Solutions"
export const SERVICES_TITLE = "Soluciones Digitales"
export const SERVICES_SUBTITLE_us = "We offer a range of services to meet your digital needs, from portfolio creation to e-commerce development."
export const SERVICES_SUBTITLE = "Ofrecemos una gama de servicios para satisfacer sus necesidades digitales, desde la creación de portfolios hasta el desarrollo de comercio electrónico."

export const PORTFOLIO_SERVICE_TITLES_us = "Our portfolio creation service is designed to help professionals across various industries present their work in the best possible light. We understand that your portfolio is often the first impression you make on potential clients or employers, so we focus on creating a visually appealing and user-friendly experience that highlights your unique talents and achievements."
export const PORTFOLIO_SERVICE_TITLES = "Entendemos que su portfolio suele ser la primera impresión que causa a clientes o empleadores potenciales, por lo que nos centramos en crear una experiencia visualmente atractiva e intuitiva que destaque sus talentos y logros únicos."
export const PORTFOLIO_SERVICE_SUBTITLES_us = "Elevate your professional presence with a stunning, custom-designed portfolio that showcases your best work and skills. Our expert designers will craft a portfolio that not only looks great but also effectively communicates your value to potential clients and employers."
export const PORTFOLIO_SERVICE_SUBTITLES = "Realza tu presencia profesional con un portfolio impactante y personalizado que muestre tus mejores trabajos y habilidades. Juntos crearemos un portfolio que no solo lucirá impecable, sino que también comunicará eficazmente tu valor a clientes y empleadores potenciales."

export const ECOMMERCE_WEB_TITLES_us = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
export const ECOMMERCE_WEB_TITLES = "Nuestro servicio de creación de tiendas online está diseñado para emprendedores, marcas y empresas que desean vender sus productos o servicios de forma profesional, segura y efectiva. Entendemos que tu tienda virtual es el corazón de tu negocio digital, por eso nos enfocamos en desarrollar plataformas atractivas, rápidas y orientadas a la conversión."
export const ECOMMERCE_WEB_SUBTITLES_us = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
export const ECOMMERCE_WEB_SUBTITLES = "Impulsa tus ventas con una tienda ecommerce moderna y personalizada que refleje la esencia de tu marca, facilite la compra y ofrezca una experiencia de usuario impecable. Juntos construiremos una tienda que no solo luzca profesional, sino que también te ayude a crecer y escalar tu negocio en línea."

export const LINK_BIO_TITLES = "Nuestro servicio de creación de Links in Bio está pensado para profesionales, emprendedores, creadores de contenido y empresas que buscan centralizar toda su presencia digital en un solo enlace. Sabemos que en la era de las redes sociales, tu link en la biografía es tu carta de presentación: debe ser atractivo, funcional y reflejar tu identidad de marca."
export const LINK_BIO_SUBTITLES = "Diseñamos tu Links in Bio con una estética moderna, adaptable a tu marca y optimizada para convertir visitas en acciones concretas — ya sea dirigir tráfico a tus redes, ventas, servicios o contenido destacado."

export const BUSINESS_CARD_TITLES = "Nuestro servicio de creación de tarjetas digitales está diseñado para profesionales, empresas y emprendedores que desean compartir su información de manera moderna, práctica y profesional. Una tarjeta digital no solo reemplaza la tarjeta física, sino que la transforma en una experiencia interactiva que proyecta innovación y credibilidad."
export const BUSINESS_CARD_SUBTITLES = "Impulsa tu presencia profesional con una tarjeta digital personalizada que reúne todos tus datos de contacto, redes sociales, enlaces y servicios en un solo lugar. Juntos crearemos una tarjeta impactante que refleje tu marca y te permita conectar fácilmente con clientes, socios o colaboradores."

export const CUSTOM_SOFTWARE_TITLES = "Nuestro servicio de desarrollo de plataformas personalizadas está dirigido a empresas, emprendedores y proyectos que requieren soluciones tecnológicas diseñadas exactamente a la medida de sus procesos, operaciones y objetivos."
export const CUSTOM_SOFTWARE_SUBTITLES = "Entendemos que cada negocio es único, por eso creamos plataformas robustas, escalables y totalmente adaptadas a tus necesidades, ya sea para gestión interna, automatización, ventas, reservas, educación, logística, administración de usuarios, dashboards y mucho más."

export const TECHNIQUE_SUPPORT_TITLES = "Ofrecemos una amplia gama de programas esenciales —como Microsoft Office, antivirus, suites creativas, herramientas de productividad y más— con licencia verificada y soporte de instalación en cualquier sistema operativo."
export const TECHNIQUE_SUPPORT_SUBTITLES = "Asegura el rendimiento y la seguridad de tu equipo con software original, optimizado y correctamente instalado. Nos encargamos de todo el proceso: desde la asesoría hasta la configuración, para que puedas trabajar con total tranquilidad y eficiencia."

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
  //   name: "Testimonios",
  //   htmlId: "testimonials"
  // },
  // {
  //   id: 4,
  //   name: "Contacto",
  //   htmlId: "contact"
  // },
]

// SERVICIOS
export const services = [
  {
    icon: BriefcaseIcon,
    title: 'Creación de Portfolios',
    description: 'Muestra tu trabajo con un portfolio profesional en línea.',
    page: '/services/portfolio',
    available: true,
  },
  {
    icon: LinkIcon,
    title: 'Links in Bio',
    description: 'Crea un centro para todos tus enlaces importantes.',
    page: '/services/link-bio',
    available: true,
  },
  {
    icon: CardIcon,
    title: 'Tarjetas de Presentación Digital',
    description: 'Deje una impresión duradera con una tarjeta de presentación digital.',
    page: '/services/digital-card',
    available: true,
  },
  {
    icon: CustomSoftwareIcon,
    title: 'Desarrollo Software Personalizado',
    description: 'Impulsa tu negocio con una plataforma personalizada, diseñada para optimizar tus flujos de trabajo.',
    page: '/services/custom-software',
    available: true,
  },
  {
    icon: ServerIcon,
    title: 'Soporte Técnico',
    description: 'Tu software favorito con licencia legítima en tu pc.',
    page: '/services/technique-support',
    available: true,
  },
  {
    icon: GlobeIcon,
    title: 'Desarrollo Web Ecommerce',
    description: 'Construye una potente tienda online para vender tus productos o servicios.',
    page: '/services/ecommerce',
    available: false,
  },
];

// PROYECTOS
export const projects = [
  {
    title: 'Portfolio',
    description: 'Portfolio profesional para Ingeniero.',
    img: '/portfolio_image.webp',
    link: 'https://bryanvivancos.netlify.app/'
  },
  {
    title: 'Links in Bio',
    description: 'Web para centralizar los links más importantes de una empresa de Joyas.',
    img: '/link_bio.webp',
    link: 'https://catquizpe.vercel.app/'
  },
  // {
  //   title: 'E-commerce Web',
  //   description: 'Build a powerful online store to sell your products or services.',
  //   img: '/project-image.webp',
  //   link: '#'
  // },
  {
    title: 'Tarjeta de presentación digital',
    description: 'Impresión duradera con una tarjeta de presentación digital para ingeniero.',
    img: '/digital-card.webp',
    link: 'https://bryanvivancosbusiness.vercel.app/'
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

export const items = [
  {
    src: "/quizter-image-01.webp",
    title: "QUIZTER",
    href: `${QUIZTER_APP}`
  },
  {
    src: "/randomizer-image-01.webp",
    title: "RANDOMIZER",
    href: `${RANDOMIZER_APP}`
  },
];


// index.html
// <!-- <meta property="og:title" content="Vincode" /> -->
// <!-- <meta property="og:description"
//   content="Somos un equipo de desarrollo de software que ofrece soluciones personalizadas para empresas y startups." /> -->
// <!-- <meta property="og:url" content="www.vincode.dev"> -->