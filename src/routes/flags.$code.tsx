import { createFileRoute, redirect } from "@tanstack/react-router";
import { getCountry } from "@/lib/countries";

// Legacy URL: /flags/:code → redirect to /:slug
export const Route = createFileRoute("/flags/$code")({
  beforeLoad: ({ params }) => {
    const c = getCountry(params.code);
    if (c?.slug) {
      throw redirect({ to: "/$slug", params: { slug: c.slug }, replace: true });
    }
    throw redirect({ to: "/flags", replace: true });
  },
  component: () => null,
});
