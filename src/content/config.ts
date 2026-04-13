import { defineCollection, z } from "astro:content";
import { icons } from "../components/icons";

const iconNames = Object.keys(icons) as [
    keyof typeof icons,
    ...(keyof typeof icons)[]
];

const services = defineCollection({
    schema: z.object({
        id: z.number(),
        category: z.string(),
        title: z.string(),
        icon: z.string(),
        available: z.boolean(),
        cardDescription: z.string(),
        subtitle: z.string(),
        description: z.string(),
        demosTitle: z.string(),
        // Beneficios
        benefits: z.array(
            z.object({
                id: z.number(),
                icon: z.enum(iconNames),
                title: z.string(),
                description: z.string(),
            })
        ),
        // Proyectos
        projects: z.array(
            z.object({
                title: z.string(),
                description: z.string(),
                img: z.string(),
                imgGallery: z.array(z.string()),
            })
        ),
        // FAQ
        faqData: z.array(
            z.object({
                id: z.number(),
                question: z.string(),
                answer: z.string(),
            })
        ),
        // Pricing packages
        pricing: z.array(
            z.object({
                id: z.number(),
                name: z.string(),
                description: z.string(),
                price: z.number(),
                originalPrice: z.number(),
                discount: z.string(),
                deliveryTime: z.string().optional(),
                isPopular: z.boolean().optional(),
                includes: z.array(z.string()),
                finalNote: z.string().optional(),
                color: z.enum(['gray', 'primary', 'teal', 'purple', 'green']).optional(),
            })
        ).optional(),
    }),
})

export const collections = { services }