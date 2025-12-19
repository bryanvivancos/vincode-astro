// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
   output: "server",
   vite: {
    plugins: [tailwindcss()],
   },
   integrations: [react()],
   env: {
      schema: {
         WEB3FORMS_KEY: envField.string({ context: 'server', access: 'public' }),
      }
   },
});