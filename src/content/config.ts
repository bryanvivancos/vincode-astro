import { number } from "astro/zod";
import { defineCollection, z } from "astro:content";
import { boolean, object, string } from "astro:schema";

const services = defineCollection({
    schema: z.object({
        id: number(),
        title: string(),
        icon: z.any(),
        available: boolean(),
        cardDescription: string(),
        subtitle: string(),
        description: string(),
        demosTitle: string(),
        // Beneficios
        benefits: z.array(
        z.object({
            id: z.number(),
            icon: z.any(), // Usamos any porque los iconos suelen ser componentes/referencias
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