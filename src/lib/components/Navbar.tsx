import React, { LiHTMLAttributes, MenuHTMLAttributes } from "react";

export interface NavbarProps extends MenuHTMLAttributes<HTMLMenuElement> {
  /**
   * Nabar colors
   */
  color:
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
  /**
   * Navbar title
   */
  navbarTitle: string | React.ReactNode;
  /**
   * Children for mobile menu
   */
  menuBtnChildren: React.ReactNode;
}

/**
 * Navbar container
 */
function NavbarRoot({
  color = "blue",
  children,
  navbarTitle,
  menuBtnChildren,
  ...props
}: NavbarProps) {
  return (
    <nav
      {...props}
      className={`navbar--${color} ${props.className && props.className}`}
    >
      <div className="container">
        <h2 className="site--title">{navbarTitle}</h2>
        <label className="navbar--mobile--btn" htmlFor="navbar--input">
          {menuBtnChildren}
        </label>
        <input
          type="checkbox"
          name="navbar--input"
          id="navbar--input"
          className="navbar--mobile--checked"
        />
        <ul className="items">{children}</ul>
      </div>
    </nav>
  );
}

export interface NavbarItemProps extends LiHTMLAttributes<HTMLLIElement> {}

/**
 * Navbar item
 */
function Item({ children, ...props }: NavbarItemProps) {
  return <li {...props}>{children}</li>;
}

export let Navbar = Object.assign(NavbarRoot, {
  Item,
});
