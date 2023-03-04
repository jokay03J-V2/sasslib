import React, { type ButtonHTMLAttributes } from "react";

export interface ButtonInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button background color
   */
  color?:
    | "red"
    | "orange"
    | "purple"
    | "black"
    | "primary"
    | "secondary"
    | "info"
    | "error"
    | "blue"
    | "yellow"
    | "green"
    | "gray"
    | "white";
}

export function Button({ children, color, ...props }: ButtonInterface): JSX.Element {
  return (
    <button
      {...props}
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`${color !== null ? `btn--${color}` : "btn"} ${
        props.className != null ? props.className : ""
      }`}
    >
      {children}
    </button>
  );
}
