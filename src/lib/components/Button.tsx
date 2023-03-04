import React, { ButtonHTMLAttributes } from "react";

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

export function Button({ children, color, ...props }: ButtonInterface) {
  return (
    <button
      {...props}
      className={`${color ? `btn--${color}` : `btn`} ${
        props.className && props.className
      }`}
    >
      {children}
    </button>
  );
}
