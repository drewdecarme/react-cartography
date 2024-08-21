import { css } from "@linaria/core";
import { ReactNode } from "react";

const sectionStyle = css`
  max-width: 1024px;
  margin: 5rem auto;
  h1,
  h2 {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    text-align: center;
  }
  h1 {
    font-size: 54px;
    line-height: 1;
  }
  h2 {
    font-size: 18px;
    line-height: 1.4;
    font-weight: 400;
  }
  .content {
    margin-top: 2rem;
  }

  & + .shiki {
    width: 50%;
    margin: 0 auto;
  }
`;

export function PageSection(props: {
  title: string;
  subTitle: string;
  children: ReactNode;
}) {
  return (
    <section className={sectionStyle}>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
      <div className="content">{props.children}</div>
    </section>
  );
}
