import type { NavbarContentProps } from './navbar-content.types';
import { navbarContentStyles } from './navbar-content.styles';

export function NavbarContent(props: NavbarContentProps) {
  const { children } = props;

  return <div className={navbarContentStyles()}>{children}</div>;
}
