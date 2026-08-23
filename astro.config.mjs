// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
   site: "https://www.vincode.dev", 
   output: "static",
   
   build: {
      inlineStylesheets: "always",
   },

   vite: {
      plugins: [tailwindcss()],
   },

   integrations: [
      react(),
      sitemap({
         serialize(item) {
            return item;
         },
         filter: (page) => !page.includes('/404'),
      }),
],

   env: {
      schema: {
         WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public' }),
      }
   },

   adapter: vercel({}),
});