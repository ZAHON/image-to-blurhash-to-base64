import { NavbarContent } from './navbar-content';
import { NavbarLinks } from './navbar-links';
import { NavbarGitHubLink } from './navbar-github-link';
import { NavbarThemeChanger } from './navbar-theme-changer';
import { navbarStyles } from './navbar.styles';

export function Navbar() {
  return (
    <nav className={navbarStyles()}>
      <NavbarContent>
        <div></div>
        <NavbarLinks>
          <NavbarGitHubLink />
          <NavbarThemeChanger />
        </NavbarLinks>
      </NavbarContent>
    </nav>
  );
}
