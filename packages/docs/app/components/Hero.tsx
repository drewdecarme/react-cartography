import { css } from "@linaria/core";

const heroClassName = css`
  width: 100%;
  position: relative;
  height: min-content;
  background: rgb(0, 149, 175);
  display: grid;
  grid-template-columns: 60% 1fr;

  &:after {
    content: "";
    top: calc(100% - 0.5rem);
    height: 1rem;
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    background: white;
  }

  img {
    bottom: 0;
    width: 100%;
    left: 0;
    align-self: end;
    object-fit: contain;
  }

  .title {
    padding: 4rem 4rem 4rem 0;
    text-align: left;
    align-content: left;
    color: white;

    h1 {
      font-size: 64px;
      line-height: 1;
      position: relative;

      margin-bottom: 2rem;
      padding-bottom: 2rem;

      span {
        color: rgb(1, 116, 137);
        text-decoration: underline;

        &.alt {
          color: rgb(0, 85, 100);
        }

        &.alt-2 {
          color: rgb(0, 48, 57);
        }
      }
    }
    p {
      font-size: 20px;
      line-height: 1.4;

      & + div {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }
    }

    button {
      background: rgb(0, 48, 57);
      border: none;
      height: 44px;
      padding: 0 2rem;
      font-family: var(--font-family);
      border-radius: 1rem;
      font-size: 16px;
      color: white;

      &.secondary {
        border: 1px solid rgb(0, 48, 57);
        background-color: rgba(255, 255, 255, 1);
        color: rgb(0, 48, 57);
      }
    }
  }
`;

export function Hero() {
  return (
    <div className={heroClassName}>
      <img src="/react-cartography-hero.webp" alt="hero-img" />
      <div className="title">
        <h1>
          <span className="alt-2">Do less.</span> Add maps the{" "}
          <span>smart</span> way, not the&nbsp;
          <span className="alt">hard</span> way.
        </h1>
        <p>
          Easily add complex, interactive, and experience rich maps to your
          React application using simple hook primitives.
        </p>
        <div>
          <button>Get started</button>
          <button className="secondary">View the docs</button>
        </div>
      </div>
    </div>
  );
}
