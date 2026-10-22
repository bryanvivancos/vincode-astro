import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { icons } from "./components/icons";

const iconNames = Object.keys(icons) as [
    keyof typeof icons,
    ...(keyof typeof icons)[]
];

const serviceSchema = {
    id: z.number(),
    category: z.string(),
    title: z.string(),
    icon: z.string(),
    available: z.boolean(),
    cardDescription: z.string(),
    subtitle: z.string(),
    description: z.string(),
    demosTitle: z.string(),
    benefits: z.array(
        z.object({
            id: z.number(),
            icon: z.enum(iconNames),
            title: z.string(),
            description: z.string(),
        })
    ),
    projects: z.array(
        z.object({
            title: z.string(),
            description: z.string(),
            img: z.string(),
            imgGallery: z.array(z.string()),
        })
    ),
    faqData: z.array(
        z.object({
            id: z.number(),
            question: z.string(),
            answer: z.string(),
        })
    ),
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
            color: z.enum(['gray', 'primary', 'teal', 'purple', 'green', 'orange']).optional(),
        })
    ).optional(),
};

const services = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
    schema: z.object(serviceSchema),
});

const servicios = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/servicios" }),
    schema: z.object({
        ...serviceSchema,
        heroImage: z.string().optional(),
    }),
});

export const collections = { services, servicios };
