import React, { type HtmlHTMLAttributes } from "react";

export interface CardRootProps extends HtmlHTMLAttributes<HTMLElement> {}

/**
 * Card Root
 */
function CardRoot({ children, ...props }: CardRootProps): JSX.Element {
  return (
    <div {...props} className={`card ${(props.className != null) ? props.className : "" }`}>
      {children !== null && children}
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
function Title({ children, as = "h1", ...props }: CardTitleProps): JSX.Element {
  switch (as) {
    case "h1":
      return (
        <h1
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h1>
      );

    case "h2":
      return (
        <h2
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h2>
      );

    case "h3":
      return (
        <h3
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h3>
      );

    case "h4":
      return (
        <h4
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h4>
      );

    case "h5":
      return (
        <h5
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h5>
      );

    case "h6":
      return (
        <h6
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h6>
      );

    default:
      return (
        <h1
          {...props}
          className={`card--title ${(props.className != null) ? props.className : "" }`}
        >
          {children !== null && children}
        </h1>
      );
  }
}

export interface CardBodyProps extends HtmlHTMLAttributes<HTMLDivElement> {}

/**
 * Card Body
 */
function Body({ children, ...props }: CardBodyProps): JSX.Element {
  return (
    <div
      {...props}
      className={`card--body ${(props.className != null) ? props.className : "" }`}
    >
      {children}
    </div>
  );
}

export const Card = Object.assign(CardRoot, { Title, Body });
