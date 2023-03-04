import React, { HtmlHTMLAttributes } from "react";

export interface CardRootProps extends HtmlHTMLAttributes<HTMLElement> {}

/**
 * Card Root
 */
function CardRoot({ children, ...props }: CardRootProps) {
  return (
    <div {...props} className={`card ${props.className && props.className}`}>
      {children && children}
    </div>
  );
}

export interface CardTitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  /**
   * html element container
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Card Title
 */
function Title({ children, as = "h1", ...props }: CardTitleProps) {
  switch (as) {
    case "h1":
      return (
        <h1
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h1>
      );
      break;

    case "h2":
      return (
        <h2
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h2>
      );
      break;

    case "h3":
      return (
        <h3
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h3>
      );
      break;

    case "h4":
      return (
        <h4
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h4>
      );
      break;

    case "h5":
      return (
        <h5
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h5>
      );
      break;

    case "h6":
      return (
        <h6
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h6>
      );
      break;

    default:
      return (
        <h1
          {...props}
          className={`card--title ${props.className && props.className}`}
        >
          {children && children}
        </h1>
      );
      break;
  }
}

export interface CardBodyProps extends HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Card Body
 */
function Body({ children, ...props }: CardBodyProps) {
  return (
    <div
      {...props}
      className={`card--body ${props.className && props.className}`}
    >
      {children}
    </div>
  );
}

export let Card = Object.assign(CardRoot, { Title, Body });
