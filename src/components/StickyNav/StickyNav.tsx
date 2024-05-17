import { Link } from "react-router-dom";
import styles from "./StickyNav.module.css";
import { ReactNode } from "react";

export type Link = {
  name: string;
  href: string;
};

export type StickyNavProps = {
  links: Link[];
} & ({ logoSrc: string; logoDescription: string } | { logo: ReactNode; logoDescription: string });

export function StickyNav({ links, logoSrc, logo, logoDescription }: StickyNavProps) {
  const logoElement = logoSrc !== undefined ? <img src={logoSrc} alt={logoDescription} /> : logo;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        {logoElement}
        <p>{logoDescription}</p>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          {links.length > 0 &&
            links.map((link) => (
              <li key={link.href}>
                <Link className={styles.link} to={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}
