import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { countries } from "@/lib/countries";

const BASE_URL = "https://www.flagman.games";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/flags", "/score", "/rules", "/buy", "/about", "/contacts",
          "/terms", "/privacy", "/data-policy",
          // NOTE: /full_rules intentionally excluded — noindex
        ];
        const dynamic = countries.map((c) => `/${c.slug ?? c.code}`);
        const urls = [...staticPaths, ...dynamic]
          .map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
