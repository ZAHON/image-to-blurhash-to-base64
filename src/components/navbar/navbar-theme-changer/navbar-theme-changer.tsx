'use client';
import { useTheme } from 'next-themes';
import { IconMoon } from '@/icons/icon-moon';
import { IconSun } from '@/icons/icon-sun';
import * as IconButton from '@/ui/icon-button';

export function NavbarThemeChanger() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleClick() {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <IconButton.Root onClick={handleClick}>
      <IconButton.Content>
        <IconSun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <IconMoon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </IconButton.Content>
    </IconButton.Root>
  );
}
