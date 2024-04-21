'use client';
import type { ThemeProviderProps } from './theme-provider.types';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  );
}
