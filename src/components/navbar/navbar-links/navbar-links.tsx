import type { NavbarLinksProps } from './navbar-links.types';
import { navbarLinksStyles } from './navbar-links.styles';

export function NavbarLinks(props: NavbarLinksProps) {
  const { children } = props;

  return <div className={navbarLinksStyles()}>{children}</div>;
}
