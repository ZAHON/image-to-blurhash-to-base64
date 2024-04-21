import type { RootLayoutProps } from './layout.types';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Main } from '@/components/main';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Image to BlurHash to Base64',
  description: 'Convert an image into a much smaller, blurred image to display as placeholder for an image.',
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <Main>{children}</Main>
        </ThemeProvider>
      </body>
    </html>
  );
}
