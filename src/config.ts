export interface SiteConfig {
  language: string
  title: string
  description: string
  brandName: string
}

export interface HeroConfig {
  titleText: string
  subtitleLines: string[]
  ctaLabel: string
  roomLabel: string
  /** Path from public/, e.g. "/images/hero.jpg". Empty → black background. */
  fluidImagePath: string
}

export interface WorkItem {
  id: string
  title: string
  type: string
  status: string
  metrics: string
  /** Path from public/, e.g. "/images/work-1.jpg". MUST be a topic-relevant image (generated via generate_image, or a downloaded relevant asset). Do NOT point this at placeholder services like picsum.photos, unsplash random, or lorem.space. */
  image: string
  artist: string
  location: string
  medium: string
  article: string
  embedUrl?: string
}

export interface GalleryConfig {
  eyebrowLabel: string
  titleLines: string[]
  stats: { label: string; value: string }[]
  sideLabel: string
  works: WorkItem[]
}

export interface InstantConfig {
  /** 3 text lines animated in sequence. Index 0 big serif, 1 assembly, 2 caption. */
  textLines: [string, string, string] | string[]
  /** Path from public/, e.g. "/videos/ambient.mp4". Empty → black background. */
  videoPath: string
  roomLabel: string
}

export interface NavLink {
  label: string
  href?: string
}

export interface FooterConfig {
  brandText: string
  taglineLines: string[]
  navigationHeading: string
  navigationLinks: NavLink[]
  contactHeading: string
  contactLinks: NavLink[]
  copyright: string
  creditText: string
}

export interface WorkDetailConfig {
  backLabel: string
  artistLabel: string
  locationLabel: string
  mediumLabel: string
  backToGalleryLabel: string
  metaRoomSuffix: string
  footerNote: string
  notFoundTitle: string
  notFoundLink: string
}

// =============================================================================
// SITE CONFIG
// =============================================================================

export const siteConfig: SiteConfig = {
  language: "es",
  title: "Oscar Tapia | Diseñador Gráfico Senior · Marketing Digital",
  description: "Portafolio profesional de Oscar Tapia. Diseñador Gráfico Senior especializado en Branding, Marketing Digital, Google Ads, Meta Ads, Community Management y Copywriter.",
  brandName: "OSCAR TAPIA",
}

// =============================================================================
// HERO CONFIG
// =============================================================================

export const heroConfig: HeroConfig = {
  titleText: "OSCAR TAPIA",
  subtitleLines: [
    "Diseñador Gráfico Senior especializado en Branding,",
    "Marketing Digital y Estrategia de Contenidos.",
    "Más de 10 años creando experiencias visuales",
    "que conectan marcas con sus audiencias.",
    "Transformo ideas en resultados medibles.",
  ],
  ctaLabel: "VER PROYECTOS",
  roomLabel: "DISEÑO · MARKETING · ESTRATEGIA",
  fluidImagePath: "/images/hero-source.jpg",
}

// =============================================================================
// GALLERY / PORTFOLIO CONFIG
// =============================================================================

export const galleryConfig: GalleryConfig = {
  eyebrowLabel: "PORTFOLIO // GALERÍA",
  titleLines: ["Proyectos", "Destacados"],
  stats: [
    { label: "Proyectos", value: "16" },
    { label: "Años activo", value: "10+" },
    { label: "Clientes", value: "50+" },
    { label: "Especialidades", value: "10" },
  ],
  sideLabel: "OSCAR::TAPIA",
  works: [
    {
      id: "BR-001",
      title: "LUXE BEAUTY",
      type: "branding",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-1.jpg",
      artist: "Oscar Tapia",
      location: "Ciudad de México",
      medium: "Identidad visual completa, packaging",
      article: "Luxe Beauty es una marca de cosméticos de alta gama que buscaba posicionarse en el mercado latinoamericano. Desarrollé una identidad visual completa que transmite elegancia y sofisticación, incluyendo logo, paleta cromática, tipografía, packaging y aplicaciones digitales.\n\nEl resultado fue un incremento del 45% en el reconocimiento de marca durante los primeros 6 meses después del lanzamiento.",
    },
    {
      id: "SM-002",
      title: "FITLIFE GYM",
      type: "social-media",
      status: "EN CURSO",
      metrics: "2025",
      image: "/images/work-2.jpg",
      artist: "Oscar Tapia",
      location: "Guadalajara",
      medium: "Diseño para redes sociales, estrategia de contenidos",
      article: "FitLife Gym necesitaba revitalizar su presencia en redes sociales para atraer a un público más joven. Creé un sistema visual dinámico con contenido diario que combina motivación fitness con tips de nutrición.\n\nEn 3 meses, los seguidores crecieron un 180% y la tasa de engagement pasó del 2.1% al 7.4%.",
    },
    {
      id: "DG-003",
      title: "TECHSTART",
      type: "digital-marketing",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-3.jpg",
      artist: "Oscar Tapia",
      location: "Remoto / LATAM",
      medium: "Campaña digital, Google Ads, Meta Ads",
      article: "TechStart es una startup de tecnología educativa que necesitaba generar leads cualificados de manera eficiente. Diseñé y ejecuté una campaña integral en Google Ads y Meta Ads con landing pages optimizadas.\n\nLa campaña generó 2,400 leads en 2 meses con un CPL 60% menor al benchmark de la industria.",
    },
    {
      id: "AD-004",
      title: "SABORES MX",
      type: "advertising",
      status: "COMPLETADO",
      metrics: "2023",
      image: "/images/work-4.jpg",
      artist: "Oscar Tapia",
      location: "Monterrey",
      medium: "Diseño publicitario, campaña OOH",
      article: "Sabores MX es una cadena de restaurantes de comida tradicional mexicana que buscaba diferenciarse en un mercado competitivo. Desarrollé una campaña publicitaria visualmente impactante que celebra la riqueza cultural de la gastronomía mexicana.\n\nLa campaña incluyó vallas publicitarias, material POP y contenido digital, resultando en un aumento del 30% en tráfico a los restaurantes.",
    },
    {
      id: "BR-005",
      title: "VITA WELLNESS",
      type: "branding",
      status: "COMPLETADO",
      metrics: "2023",
      image: "/images/work-5.jpg",
      artist: "Oscar Tapia",
      location: "Ciudad de México",
      medium: "Branding, packaging, web design",
      article: "Vita Wellness es un centro de bienestar holístico que requería una identidad que transmita calma, balance y profesionalismo. El diseño se basa en formas orgánicas y una paleta terrosa que evoca la naturaleza.\n\nEl rebranding completo incluyó identidad visual, packaging para productos de bienestar, y diseño de sitio web.",
    },
    {
      id: "CM-006",
      title: "MODA URBANA",
      type: "community",
      status: "EN CURSO",
      metrics: "2025",
      image: "/images/work-6.jpg",
      artist: "Oscar Tapia",
      location: "Ciudad de México",
      medium: "Community Management, contenido",
      article: "Moda Urbana es una marca de ropa streetwear que necesitaba construir una comunidad leal en redes sociales. Desarrollé una estrategia de community management enfocada en el engagement auténtico y el contenido generado por usuarios.\n\nLa comunidad creció de 5,000 a 35,000 seguidores en 8 meses con una tasa de engagement del 12%.",
    },
    {
      id: "IA-007",
      title: "EDUFUTURO",
      type: "ia-marketing",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-7.jpg",
      artist: "Oscar Tapia",
      location: "Remoto",
      medium: "IA aplicada, automatización, chatbots",
      article: "EduFuturo es una plataforma educativa que quería implementar herramientas de IA para mejorar la experiencia del estudiante. Diseñé e implementé un sistema de automatización que incluye chatbots, personalización de contenido y análisis predictivo.\n\nLa implementación redujo los tiempos de respuesta en un 80% y mejoró la retención de estudiantes en un 25%.",
    },
    {
      id: "DG-008",
      title: "GREEN HOME",
      type: "digital-marketing",
      status: "COMPLETADO",
      metrics: "2022",
      image: "/images/work-8.jpg",
      artist: "Oscar Tapia",
      location: "Querétaro",
      medium: "Marketing digital, SEO, Google Ads",
      article: "Green Home es una empresa de productos sustentables para el hogar que buscaba aumentar sus ventas online. Desarrollé una estrategia de marketing digital integral incluyendo SEO, Google Ads y email marketing.\n\nLas ventas online aumentaron un 150% en el primer año y el tráfico orgánico creció un 300%.",
    },
    {
      id: "SM-009",
      title: "ARTE COLECTIVO",
      type: "social-media",
      status: "COMPLETADO",
      metrics: "2023",
      image: "/images/work-9.jpg",
      artist: "Oscar Tapia",
      location: "Oaxaca",
      medium: "Social media, diseño editorial",
      article: "Arte Colectivo es una galería de arte contemporáneo que necesitaba una presencia digital a la altura de su propuesta artística. Creé un sistema visual que refleja la vanguardia de sus exposiciones.\n\nEl contenido digital ha generado un aumento del 200% en visitantes a la galería física.",
    },
    {
      id: "AD-010",
      title: "FINANZAS 360",
      type: "advertising",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-10.jpg",
      artist: "Oscar Tapia",
      location: "Ciudad de México",
      medium: "Diseño publicitario, campaña B2B",
      article: "Finanzas 360 es una firma de consultoría financiera que requería una campaña B2B sofisticada. Desarrollé un concepto visual basado en la claridad y la confianza, utilizando gráficos de datos como elementos estéticos.\n\nLa campaña generó 150 reuniones de ventas cualificadas en 3 meses.",
    },
    {
      id: "BR-011",
      title: "CASA NATURA",
      type: "branding",
      status: "COMPLETADO",
      metrics: "2022",
      image: "/images/work-11.jpg",
      artist: "Oscar Tapia",
      location: "Tulum",
      medium: "Branding, hospitality design",
      article: "Casa Natura es un hotel boutique en Tulum que buscaba una identidad visual que reflejara su conexión con la naturaleza. El diseño incorpora elementos orgánicos y texturas naturales.\n\nLa identidad ha sido reconocida en varias publicaciones de diseño internacionales y contribuyó a un occupancy rate del 85%.",
    },
    {
      id: "DG-012",
      title: "LEGAL EXPERTS",
      type: "digital-marketing",
      status: "COMPLETADO",
      metrics: "2023",
      image: "/images/work-12.jpg",
      artist: "Oscar Tapia",
      location: "Ciudad de México",
      medium: "Estrategia digital, LinkedIn Ads",
      article: "Legal Experts es un despacho de abogados que necesitaba generar leads de alta calidad a través de LinkedIn. Diseñé una estrategia de contenido y publicidad enfocada en el segmento corporativo.\n\nLa estrategia generó 80 leads cualificados por mes con un costo por lead 40% menor al esperado.",
    },
    {
      id: "SM-013",
      title: "MÚSICA VIVA",
      type: "social-media",
      status: "EN CURSO",
      metrics: "2025",
      image: "/images/work-13.jpg",
      artist: "Oscar Tapia",
      location: "Guadalajara",
      medium: "Social media, motion graphics",
      article: "Música Viva es un festival de música independiente que requería una presencia digital energética y vibrante. Desarrollé un sistema visual dinámico con motion graphics para redes sociales.\n\nLas preventas se agotaron 2 semanas antes del evento, un record para el festival.",
    },
    {
      id: "AD-014",
      title: "CLÍNICA VIDA",
      type: "advertising",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-14.jpg",
      artist: "Oscar Tapia",
      location: "Puebla",
      medium: "Diseño publicitario, healthcare",
      article: "Clínica Vida es una red de clínicas médicas que necesitaba humanizar su comunicación. Desarrollé una campaña centrada en historias reales de pacientes con un tratamiento visual cálido y empático.\n\nLa campaña aumentó las citas programadas online en un 65%.",
    },
    {
      id: "IA-015",
      title: "DATA INSIGHTS",
      type: "ia-marketing",
      status: "COMPLETADO",
      metrics: "2024",
      image: "/images/work-15.jpg",
      artist: "Oscar Tapia",
      location: "Remoto",
      medium: "Dashboards, Power BI, Looker Studio",
      article: "Data Insights es un proyecto personal donde desarrollé dashboards interactivos en Power BI y Looker Studio para visualizar métricas de marketing de manera efectiva. Los dashboards permiten a los clientes entender sus datos en tiempo real.\n\nLos dashboards han sido implementados por 15+ clientes y han mejorado la toma de decisiones basada en datos.",
    },
    {
      id: "BR-016",
      title: "CAFÉ DE ORIGEN",
      type: "branding",
      status: "COMPLETADO",
      metrics: "2023",
      image: "/images/work-16.jpg",
      artist: "Oscar Tapia",
      location: "Veracruz",
      medium: "Branding, packaging, fotografía",
      article: "Café de Origen es una marca de café de especialidad que buscaba destacar en el mercado gourmet. Desarrollé una identidad visual que celebra el origen artesanal del café mexicano.\n\nEl packaging diseñado ha sido galardonado en el Packaging Design Awards 2023 y las ventas crecieron un 90% después del rebranding.",
    },
  ],
}

// =============================================================================
// INSTANT (THE INSTANT) CONFIG
// =============================================================================

export const instantConfig: InstantConfig = {
  textLines: ["CREAR", "es dar forma a lo invisible", "¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad."],
  videoPath: "/videos/ambient.mp4",
  roomLabel: "Contacto // Colaboración",
}

// =============================================================================
// FOOTER CONFIG
// =============================================================================

export const footerConfig: FooterConfig = {
  brandText: "OSCAR TAPIA",
  taglineLines: ["DISEÑADOR GRÁFICO SENIOR", "MARKETING DIGITAL", "COPYWRITER"],
  navigationHeading: "NAVEGACIÓN",
  navigationLinks: [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre Mí", href: "#sobre-mi" },
    { label: "Contacto", href: "#contacto" },
  ],
  contactHeading: "CONTACTO",
  contactLinks: [
    { label: "oscartapia@email.com", href: "mailto:oscartapia@email.com" },
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
  ],
  copyright: "© 2025 OSCAR TAPIA",
  creditText: "DISEÑADO CON PASIÓN Y PROPÓSITO",
}

// =============================================================================
// WORK DETAIL CONFIG
// =============================================================================

export const workDetailConfig: WorkDetailConfig = {
  backLabel: "← VOLVER",
  artistLabel: "Diseñador",
  locationLabel: "Ubicación",
  mediumLabel: "Servicios",
  backToGalleryLabel: "← VER TODOS LOS PROYECTOS",
  metaRoomSuffix: "PORTFOLIO",
  footerNote: "Oscar Tapia · Portfolio",
  notFoundTitle: "404 · Proyecto no encontrado",
  notFoundLink: "← VOLVER AL PORTFOLIO",
}

// =============================================================================
// ABOUT SECTION DATA
// =============================================================================

export interface AboutData {
  label: string
  title: string
  paragraphs: string[]
  stats: { value: string; label: string }[]
  image: string
}

export const aboutData: AboutData = {
  label: "SOBRE MÍ",
  title: "Creando marcas\nque impactan",
  paragraphs: [
    "Con más de una década de experiencia en el mundo del diseño gráfico y el marketing digital, he tenido el privilegio de trabajar con marcas nacionales e internacionales para construir identidades visuales memorables y estrategias digitales efectivas.",
    "Mi enfoque combina la creatividad artística con el análisis de datos, permitiéndome crear campañas que no solo se ven bien, sino que generan resultados tangibles: más leads, más conversiones y mayor reconocimiento de marca.",
    "Como Copywriter certificado y especialista en Community Management, entiendo que cada pieza de comunicación debe contar una historia coherente que resuene con la audiencia objetivo.",
  ],
  stats: [
    { value: "10+", label: "Años de experiencia" },
    { value: "150+", label: "Proyectos entregados" },
    { value: "50+", label: "Clientes satisfechos" },
  ],
  image: "/images/profile-photo.jpg",
}

// =============================================================================
// SERVICES DATA
// =============================================================================

export interface ServiceItem {
  title: string
  description: string
}

export const servicesData: {
  label: string
  title: string
  items: ServiceItem[]
} = {
  label: "SERVICIOS",
  title: "¿Qué puedo\nhacer por ti?",
  items: [
    { title: "Diseño Publicitario", description: "Campañas visuales para print y digital que captan la atención y comunican mensajes claros." },
    { title: "Branding", description: "Desarrollo de identidades visuales completas: logo, paleta de color, tipografía y guías de marca." },
    { title: "Diseño para Redes Sociales", description: "Contenido visual estratégico para Instagram, Facebook, LinkedIn y TikTok." },
    { title: "Marketing Digital", description: "Estrategias integrales de marketing online para hacer crecer tu negocio." },
    { title: "Google Ads", description: "Gestión profesional de campañas publicitarias en Google Search, Display y YouTube." },
    { title: "Google Analytics", description: "Análisis de datos y métricas para tomar decisiones basadas en evidencia." },
    { title: "Community Management", description: "Gestión profesional de comunidades online y atención al cliente." },
    { title: "Meta Ads", description: "Campañas optimizadas en Facebook Ads e Instagram Ads para máximo ROI." },
    { title: "Estrategia Digital", description: "Planificación integral de presencia digital alineada a objetivos de negocio." },
    { title: "IA aplicada al Marketing", description: "Implementación de herramientas de inteligencia artificial para optimizar procesos creativos." },
  ],
}

// =============================================================================
// SKILLS DATA
// =============================================================================

export interface SkillItem {
  name: string
  percentage: number
}

export const skillsData: {
  label: string
  title: string
  items: SkillItem[]
} = {
  label: "HABILIDADES",
  title: "Herramientas &\nTecnologías",
  items: [
    { name: "Adobe Creative Suite", percentage: 95 },
    { name: "Figma", percentage: 90 },
    { name: "Google Ads & Analytics", percentage: 92 },
    { name: "Meta Business Suite", percentage: 88 },
    { name: "Copywriting & Storytelling", percentage: 94 },
    { name: "Branding & Identity", percentage: 96 },
    { name: "Community Management", percentage: 90 },
    { name: "Power BI / Looker Studio", percentage: 85 },
    { name: "AI Tools (Midjourney, ChatGPT, etc.)", percentage: 88 },
    { name: "Estrategia Digital", percentage: 93 },
  ],
}

// =============================================================================
// TESTIMONIALS DATA
// =============================================================================

export interface TestimonialItem {
  quote: string
  name: string
  role: string
  rating: number
}

export const testimonialsData: {
  label: string
  title: string
  items: TestimonialItem[]
} = {
  label: "TESTIMONIOS",
  title: "Lo que dicen\nlos clientes",
  items: [
    {
      quote: "Oscar transformó completamente nuestra marca. Su visión creativa y su entendimiento del mercado nos llevaron a resultados que superaron todas nuestras expectativas. El rebranding incrementó nuestras ventas en un 45%.",
      name: "María González",
      role: "Directora de Marketing, Luxe Beauty",
      rating: 5,
    },
    {
      quote: "Trabajar con Oscar fue un game changer para nuestra startup. No solo entregó diseños espectaculares, sino que entendió perfectamente nuestros objetivos de negocio. Las campañas que diseñó superaron todos los KPIs.",
      name: "Carlos Mendoza",
      role: "CEO, TechStart",
      rating: 5,
    },
    {
      quote: "La identidad visual que Oscar creó para Casa Natura capturó perfectamente la esencia de nuestro hotel. Cada detalle está pensado y cada elemento comunica. Es un verdadero artista con visión estratégica.",
      name: "Ana Rivera",
      role: "Fundadora, Casa Natura",
      rating: 5,
    },
  ],
}

// Helper map for WorkDetail lookups
export const worksById: Record<string, WorkItem> = Object.fromEntries(
  galleryConfig.works.map((w) => [w.id.toLowerCase(), w]),
)
