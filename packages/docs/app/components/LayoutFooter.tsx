import { css } from "@linaria/core";
import { Link } from "@remix-run/react";

const footerStyle = css`
  padding: 2rem 3rem;
  background: rgb(0, 99, 117);
  color: white;
  grid-area: footer;

  & > div {
    max-width: 1280px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: minmax(auto, 2fr) repeat(3, 1fr);
    gap: 3rem;
  }

  .title {
    font-size: 14px;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    position: relative;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 600;
    letter-spacing: 1px;

    &:after {
      content: "";
      position: absolute;
      width: 25%;
      height: 2px;
      background-color: rgb(0, 161, 189);
      left: 0;
      bottom: 0;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 14px;
  }

  p {
    font-size: 14px;

    a {
      font-weight: 700;
      text-decoration: underline;
    }
  }
`;

export function LayoutFooter() {
  return (
    <footer className={footerStyle}>
      <div>
        <div>
          <div className="title">React Cartography</div>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
            magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.
          </p>
          <p>
            Designed and developed by{" "}
            <a href="https://github.com/drewdecarme">Drew DeCarme</a>
          </p>
        </div>
        <div>
          <div className="title">Quick Links</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/open-layers">Open Layers</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="title">Resources</div>
          <ul>
            <li>
              <Link to="/">Open Layers Documentation</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="title">Usage</div>
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
