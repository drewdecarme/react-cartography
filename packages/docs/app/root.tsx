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
  useLocation,
  useNavigate,
} from "@remix-run/react";
import { LayoutHeader } from "./components/LayoutHeader";
import { ChangeEventHandler, useCallback } from "react";
import { InputSelect } from "./components/InputSelect";
import { match, P } from "ts-pattern";
import { LayoutFooter } from "./components/LayoutFooter";

const globalCSS = css`
  &:root {
    --font-family: "Source Sans Pro", sans-serif;
  }
  padding: 0;
  margin: 0;
  font-family: var(--font-family);

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

  .shiki {
    padding: 1rem;
    border-radius: 0.5rem;
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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ currentTarget: { value } }) => {
      navigate(value);
    },
    [navigate]
  );

  return (
    <>
      <LayoutHeader>
        <InputSelect
          value={match(pathname)
            .with(
              P.when((path) => path.includes("open-layers")),
              () => "open-layers"
            )
            .otherwise(() => "")}
          onChange={onChange}
        >
          <option value="" disabled>
            Select a mapping library
          </option>
          <option value="open-layers">Open Layers</option>
        </InputSelect>
      </LayoutHeader>
      <main style={{ gridArea: "main" }}>
        <Outlet />
      </main>
      <LayoutFooter />
    </>
  );
}
