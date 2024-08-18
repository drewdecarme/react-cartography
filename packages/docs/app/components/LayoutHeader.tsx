import { css } from "@linaria/core";
import { Link } from "@remix-run/react";
import { ReactNode } from "react";

const className = css`
  grid-area: header;
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  gap: 1rem;
  height: 100%;
  border-bottom: 1px solid #eceaea;
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  padding: 0 2rem;

  a {
    text-decoration: none;

    &:visited {
      color: unset;
    }
  }

  .icon {
    height: 32px;
    width: 32px;
  }

  a:first-child {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1rem;

    & > img {
      height: 2rem;
      width: auto;
      object-fit: contain;
    }

    h1 {
      margin: 0;
      font-size: 1rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  div:last-child {
    display: flex;
    justify-content: end;
  }
`;

export function LayoutHeader({ children }: { children: ReactNode }) {
  return (
    <header className={className}>
      <Link to="/">
        <img
          src="/react-cartography-logo-transparent.png"
          alt="react-cartography-logo"
        />
        <h1>React Cartography</h1>
      </Link>
      <div>{children}</div>
      <div>
        <a
          href="https://github.com/drewdecarme/react-cartography"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/icons/github-circle-solid-rounded.svg"
            alt="github"
            className="icon"
          />
        </a>
      </div>
    </header>
  );
}
