import { css } from "@linaria/core";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  json,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LayoutHeader } from "./features/LayoutHeader";

const globalCSS = css`
  padding: 0;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4rem 1fr auto;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }
`;

export const loader = async ({ context }: LoaderFunctionArgs) => {
  return json({
    ENV: {
      MAPBOX_TOKEN: context.cloudflare.env.MAPBOX_TOKEN,
    },
  });
};

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className={globalCSS}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <LayoutHeader>
        <ul>
          <li>
            <Link to="open-layers">Open Layers</Link>
          </li>
        </ul>
      </LayoutHeader>
      <main style={{ gridArea: "main" }}>
        <Outlet />
      </main>
      <footer style={{ gridArea: "footer" }}>footer</footer>
    </>
  );
}
