import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
    build: { format: "preserve" },
    integrations: [mdx()],
});
