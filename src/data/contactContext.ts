import { WHATSAPP_NUMBER } from "../CONSTANTS";

export const DEFAULT_WHATSAPP_MESSAGE =
    "Hola, quiero hablar sobre un proyecto para mi negocio.";

export type ContactService = {
    id: string;
    label: string;
    message: string;
};

const SERVICES: Record<string, Omit<ContactService, "id">> = {
    "desarrollo-pagina-web": {
        label: "Landing Page",
        message:
            "Hola, estoy interesado en el servicio de Landing Page de VINCODE.",
    },
    "creacion-paginas-web-e-commerce": {
        label: "Ecommerce",
        message: "Hola, estoy interesado en el servicio de Ecommerce de VINCODE.",
    },
    "desarrollo-software-a-medida": {
        label: "software a medida",
        message:
            "Hola, estoy interesado en desarrollar un software a medida con VINCODE.",
    },
    "sistema-carteleria-digital": {
        label: "VIN DISPLAY",
        message: "Hola, estoy interesado en el servicio de VIN DISPLAY de VINCODE.",
    },
    "pagina-web-de-reservas": {
        label: "Página Web de Reservas",
        message:
            "Hola, estoy interesado en el servicio de Página Web de Reservas de VINCODE.",
    },
    "desarrollo-links-bio": {
        label: "Link Bio",
        message: "Hola, estoy interesado en el servicio de Link Bio de VINCODE.",
    },
    "diseno-tarjeta-de-presentacion": {
        label: "Tarjeta Digital",
        message:
            "Hola, estoy interesado en el servicio de Tarjeta Digital de VINCODE.",
    },
    "diseno-portafolio-profesional": {
        label: "Portafolio Profesional",
        message:
            "Hola, estoy interesado en el servicio de Portafolio Profesional de VINCODE.",
    },
    "setup-web-y-asesoria-seo": {
        label: "Setup Web",
        message: "Hola, estoy interesado en el servicio de Setup Web de VINCODE.",
    },
    "software-licenciado": {
        label: "Software Licenciado",
        message:
            "Hola, estoy interesado en el servicio de Software Licenciado de VINCODE.",
    },
    "punto-de-venta": {
        label: "VIN CASH",
        message: "Hola, estoy interesado en el servicio de VIN CASH de VINCODE.",
    },
    "sistema-para-restaurante": {
        label: "VIN REST",
        message: "Hola, estoy interesado en el servicio de VIN REST de VINCODE.",
    },
    vincrm: {
        label: "VINCRM",
        message:
            "Hola, estoy interesado en VINCRM, el CRM WhatsApp con IA de VINCODE.",
    },
};

/** Slugs públicos alternos. Solo estos alias se aceptan además de las claves de SERVICES. */
const ALIASES: Record<string, string> = {
    "landing-page": "desarrollo-pagina-web",
    software: "desarrollo-software-a-medida",
    ecommerce: "creacion-paginas-web-e-commerce",
    "custom-software": "desarrollo-software-a-medida",
    "vin-display": "sistema-carteleria-digital",
    "link-bio": "desarrollo-links-bio",
    "digital-card": "diseno-tarjeta-de-presentacion",
    portfolio: "diseno-portafolio-profesional",
    "setup-web": "setup-web-y-asesoria-seo",
    "technique-support": "software-licenciado",
    "point-of-service": "punto-de-venta",
    "vin-rest": "sistema-para-restaurante",
};

export function resolveContactService(
    raw: string | null | undefined,
): ContactService | null {
    if (!raw) return null;

    const trimmed = raw.trim();
    if (!trimmed || trimmed.length > 64) return null;

    let value: string;
    try {
        value = decodeURIComponent(trimmed).toLowerCase();
    } catch {
        return null;
    }

    if (!/^[a-z0-9-]+$/.test(value)) return null;

    const id = SERVICES[value] ? value : ALIASES[value];
    const service = id ? SERVICES[id] : undefined;
    if (!id || !service) return null;

    return { id, label: service.label, message: service.message };
}

export function contactPath(slug?: string | null): string {
    const service = resolveContactService(slug);
    if (!service) return "/contacto";
    return `/contacto?servicio=${service.id}`;
}

export function whatsappUrl(message: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function packageWhatsAppUrl(packageName: string, serviceName?: string): string {
    const message = serviceName
        ? `Hola, estoy interesado en el paquete ${packageName} de ${serviceName} de VINCODE.`
        : `Hola, estoy interesado en el paquete ${packageName} de VINCODE.`;
    return whatsappUrl(message);
}
