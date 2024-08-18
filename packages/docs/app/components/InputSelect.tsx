import { css } from "@linaria/core";
import clsx from "clsx";
import { forwardRef } from "react";

export type InputSelectPropsNative = JSX.IntrinsicElements["select"];
export type InputSelectProps = InputSelectPropsNative;

const styleClassName = css`
  padding: 0.5rem 1rem 0.5rem 1rem;

  /* Remove the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Remove background image, which is the arrow icon */
  background-image: none;

  border-radius: 0.5rem;
  font-family: var(--font-family);
`;

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  function InputSelect({ children, className, ...restProps }, ref) {
    return (
      <select
        {...restProps}
        className={clsx(className, styleClassName)}
        ref={ref}
      >
        {children}
      </select>
    );
  }
);
