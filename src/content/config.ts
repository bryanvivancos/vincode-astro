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
    }),
})

export const collections = { services }