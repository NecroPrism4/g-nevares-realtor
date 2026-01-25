import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import swup from "@swup/astro";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://gnevarezrealtor.dyndns.org",
  base: "/",
  integrations: [swup({
    theme: ["overlay", { direction: "to-top" , color: "#151a22" }],
    cache: true,
    progress: true,
  }), preact(), sitemap(), db()],

  image: {
    responsiveStyles: true,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      port: 4321,
      host: true,
      allowedHosts: ["gnevarezrealtor.dyndns.org"],
    },
    port: 4321,
    host: true,
    allowedHosts: ["gnevarezrealtor.dyndns.org"],
  },
});

//swup theme variations:
// theme: "fade"
// theme: ["overlay", { direction: "to-top"}]
//
// for overlay and fade, further customization can be done in animate.css file
// To know about swup, visit https://swup.js.org/