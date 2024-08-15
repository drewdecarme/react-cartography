import { css } from "@linaria/core";
import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

const globalCSS = css`
  padding: 0;
  margin: 0;

  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export const loader = async ({ context }: LoaderFunctionArgs) => {
  console.log(context.cloudflare.env.MAPBOX_TOKEN);
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
  return <Outlet />;
}
