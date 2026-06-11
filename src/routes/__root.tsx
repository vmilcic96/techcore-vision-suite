import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Stranica nije pronađena</h2>
        <p className="mt-2 text-sm text-muted-foreground">Tražena stranica ne postoji ili je premeštena.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md btn-hero px-5 py-2.5 text-sm font-medium">
            Početna
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">Greška pri učitavanju</h1>
        <p className="mt-2 text-sm text-muted-foreground">Nešto je pošlo po zlu. Pokušajte ponovo.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md btn-hero px-5 py-2.5 text-sm font-medium"
          >
            Pokušaj ponovo
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TechCore Solutions — IT usluge i prodaja računara u Beogradu" },
      { name: "description", content: "TechCore Solutions: servis računara, mreže i serveri, cyber security, izrada sajtova i prodaja IT opreme u Beogradu." },
      { property: "og:title", content: "TechCore Solutions — IT usluge i prodaja računara u Beogradu" },
      { property: "og:description", content: "TechCore Solutions: servis računara, mreže i serveri, cyber security, izrada sajtova i prodaja IT opreme u Beogradu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TechCore Solutions — IT usluge i prodaja računara u Beogradu" },
      { name: "twitter:description", content: "TechCore Solutions: servis računara, mreže i serveri, cyber security, izrada sajtova i prodaja IT opreme u Beogradu." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc34bfe3-6918-41ed-98f4-db0642737b20/id-preview-5e9245cc--1d570510-8137-4e64-a31d-c5508061e346.lovable.app-1781187557342.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bc34bfe3-6918-41ed-98f4-db0642737b20/id-preview-5e9245cc--1d570510-8137-4e64-a31d-c5508061e346.lovable.app-1781187557342.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="sr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
