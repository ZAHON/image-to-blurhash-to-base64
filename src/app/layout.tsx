import type { RootLayoutProps } from './layout.types';
import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Image to BlurHash to Base64',
  description: 'Convert an image into a much smaller, blurred image to display as placeholder for an image.',
};

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
