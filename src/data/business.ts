export interface BusinessData {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    manifesto: string;
    description: string;
    url: string;
  };
  contact: {
    email: string;
    whatsapp: string; // raw number: "529981689399"
    whatsappUrl: string; // "https://wa.me/529981689399"
    whatsappDisplay: string; // "+52 998 168 9399"
    calBookingUrl?: string; // placeholder
  };
  credentials: {
    iataNumber: string;
    hostAgency: string;
    founderName: string;
    foundedYear: number;
    city: string;
    region: string;
    country: string;
  };
  stats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
  process: Array<{ number: string; title: string; body: string }>;
  aboutParagraphs: string[];
  services: Array<{
    slug: string; // "grupos-escolares" | "equipos-deportivos" | "ejecutivos"
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    cta: { label: string; href: string };
    featured: boolean; // true = highlighted card
  }>;
  cases: Array<{
    slug: string;
    tag: string;
    title: string;
    client: string;
    date?: string;
    highlights: string;
    image?: string; // placeholder por ahora
    imageAlt?: string;
  }>;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
  seo: {
    defaultOgImage: string;
    siteLocale: string;
    defaultKeywords: string[];
  };
  pages: {
    [slug: string]: {
      title: string;
      description: string;
      keywords?: string[];
    };
  };
}

export const business: BusinessData = {
  brand: {
    name: "Agencias Poc Chuc",
    shortName: "Poc Chuc",
    tagline: "Viajar bien no es suerte. Depende de quién lo arme.",
    manifesto: "Armamos los viajes que no eliges pero tienes que hacer sí o sí — competencias, trabajo, obligaciones familiares — para que lleguen como reloj suizo.",
    description: "Agencia de viajes boutique mexicana especialista en viajes de deber: competencias deportivas, viajes de trabajo recurrentes, obligaciones familiares y profesionales.",
    url: "https://pocchuc.mx",
  },
  contact: {
    email: "roberto@pocchuc.mx",
    whatsapp: "529981689399",
    whatsappUrl: "https://wa.me/529981689399",
    whatsappDisplay: "+52 998 168 9399",
  },
  credentials: {
    iataNumber: "33520476",
    hostAgency: "Fora Travel",
    founderName: "Roberto Calderón Guillemot",
    foundedYear: 2026,
    city: "Guadalajara",
    region: "Jalisco",
    country: "MX",
  },
  stats: [
    { value: "50+", label: "viajes armados", sublabel: "desde que empezamos" },
    { value: "2", label: "equipos recurrentes", sublabel: "que confían año con año" },
    { value: "0", label: "incidencias operativas", sublabel: "en todos los viajes" },
  ],
  process: [
    {
      number: "01",
      title: "Nos cuentas",
      body: "Una llamada de 30 minutos para entender destino, fechas, número de personas, presupuesto y no-negociables. Sin compromiso.",
    },
    {
      number: "02",
      title: "Te proponemos",
      body: "Cotización estándar en 48 horas con 2-3 opciones de hospedaje, presupuesto desglosado y preview del hub digital. ¿Necesitas antes? Cotización express en 24 horas por un fee adicional de $500 MXN.",
    },
    {
      number: "03",
      title: "Confirmamos",
      body: "Firma de propuesta, anticipo del 30%, y procedemos a reservas en firme con comprobantes.",
    },
    {
      number: "04",
      title: "Te acompañamos",
      body: "Hub digital con todo el itinerario, documento de contingencias, y soporte vía WhatsApp durante el viaje.",
    },
  ],
  aboutParagraphs: [
    "Hay viajes que no eliges hacer, pero tienes que hacer sí o sí. Un torneo escolar fuera de la ciudad. Un ejecutivo que presenta en otra plaza. Una boda de prima a la que no puedes faltar. Esos viajes no son escape — son compromiso. Y cada hora que gastas armándolos es una hora que no le dedicas a lo que sí es tu trabajo.",
    "Agencias Poc Chuc existe para resolverlos. Te entregamos el viaje completo listo para ejecutar: vuelos, hospedaje, traslados, actividades y un hub digital con todo lo que necesitas en la mano. Tú firmas y supervisas. Nosotros operamos.",
  ],
  services: [
    {
      slug: "grupos-escolares",
      eyebrow: "PRODUCTO FLAGSHIP",
      title: "Grupos escolares y universitarios",
      description: "Para escuelas y universidades que mueven equipos representativos, excursiones académicas o grupos culturales. Hospedaje, traslados, hub digital — y opción de depósito directo de padres de familia para que el coordinador no cargue la colecta.",
      bullets: [
        "Equipos y grupos representativos",
        "10-40 personas por viaje",
        "Depósito directo de padres de familia",
      ],
      cta: { label: "Ver cómo funciona →", href: "/grupos-escolares" },
      featured: true,
    },
    {
      slug: "equipos-deportivos",
      eyebrow: "CLUBES Y SELECCIONES",
      title: "Equipos deportivos privados",
      description: "Para clubes como Lobos Rugby, selecciones y equipos privados que viajan a torneos nacionales e internacionales. Logística integral del equipo completo, del vuelo a la cancha.",
      bullets: [
        "Clubes y selecciones",
        "Torneos nacionales e internacionales",
        "Logística del equipo completo",
      ],
      cta: { label: "Ver cómo funciona →", href: "/equipos-deportivos" },
      featured: false,
    },
    {
      slug: "ejecutivos",
      eyebrow: "SERVICIO INDIVIDUAL",
      title: "Para ejecutivos que viajan mucho",
      description: "Resolvemos la logística de tus viajes de trabajo con un solo mensaje. Hospedaje, cambios de último minuto, factura a tu empresa o facturas individuales para tu reembolso. Un contacto directo que responde rápido.",
      bullets: [
        "Directivos y gerentes",
        "Reservas recurrentes",
        "Dos modelos de pago disponibles",
      ],
      cta: { label: "Conocer más →", href: "/ejecutivos" },
      featured: false,
    },
  ],
  cases: [
    {
      slug: "ciencias-torreon",
      tag: "RUGBY ESCOLAR",
      title: "Instituto de Ciencias · Torreón",
      client: "Instituto de Ciencias",
      date: "octubre 2026",
      highlights: "25 jugadores · 3 noches · Logística integral GDL→TRC",
    },
    {
      slug: "ciencias-la-marquesa",
      tag: "RUGBY ESCOLAR",
      title: "Instituto de Ciencias · La Marquesa",
      client: "Instituto de Ciencias",
      date: "diciembre 2026",
      highlights: "20 jugadores · 4 noches · GDL→CDMX con traslado terrestre",
    },
    {
      slug: "cancun-7s-lobos",
      tag: "TORNEO INTERNACIONAL",
      title: "Cancún 7s · Lobos Rugby",
      client: "Lobos Rugby",
      highlights: "Logística anual del club en su torneo bandera internacional",
    },
  ],
  socialMedia: {},
  seo: {
    defaultOgImage: "/og-default.png",
    siteLocale: "es_MX",
    defaultKeywords: [
      "agencia de viajes mexicana",
      "viajes grupos escolares",
      "viajes equipos deportivos",
      "agencia viajes ejecutivos",
      "logística viajes grupales mexico",
      "agente IATA guadalajara",
    ],
  },
  pages: {
    home: {
      title: "Viajes bien armados para competencias, trabajo y compromisos",
      description: "Agencia de viajes mexicana especialista en viajes de deber: competencias deportivas, viajes de trabajo y compromisos familiares. Cotiza en 48 h, express en 24 h.",
    },
    "grupos-escolares": {
      title: "Viajes para grupos escolares y universitarios",
      description: "Para escuelas y universidades que mueven equipos representativos, excursiones académicas o grupos culturales. Opción de depósito directo de padres de familia.",
    },
    "equipos-deportivos": {
      title: "Viajes para equipos deportivos privados y clubes",
      description: "Armamos la logística completa de tu club deportivo: vuelos, hospedaje, traslados, hub digital. Para torneos nacionales e internacionales.",
    },
    ejecutivos: {
      title: "Viajes de trabajo para ejecutivos que viajan mucho",
      description: "Resolvemos tus viajes de trabajo con un solo mensaje. Facturamos a tu empresa o facturas individuales para reembolso. Respuesta <4h.",
    },
    "como-trabajamos": {
      title: "Nuestro proceso: cómo armamos cada viaje",
      description: "Un proceso probado en 4 fases: descubrimiento, propuesta, pre-viaje, durante y post. Cotización estándar 48h, express 24h por $500 MXN.",
    },
    casos: {
      title: "Casos reales de viajes que hemos armado",
      description: "Instituto de Ciencias, Lobos Rugby y más. Viajes reales con logística completa y hubs digitales personalizados.",
    },
    sobre: {
      title: "Sobre Agencias Poc Chuc y Roberto Calderón",
      description: "Nacimos ayudando a amigos a viajar bien. Hoy agencia profesional certificada IATA #33520476 vía Fora Travel. Desde Guadalajara.",
    },
    contacto: {
      title: "Cotiza tu viaje · Contacto",
      description: "Cuéntanos tu viaje y te contestamos en menos de 4 horas. Formulario, WhatsApp o agenda una llamada.",
    },
    "aviso-de-privacidad": {
      title: "Aviso de privacidad",
      description: "Aviso de privacidad de Agencias Poc Chuc.",
    },
    terminos: {
      title: "Términos y condiciones",
      description: "Términos y condiciones de Agencias Poc Chuc.",
    },
  },
};
