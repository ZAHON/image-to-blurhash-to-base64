import type { IconProps } from './icon.types';
import { forwardRef } from 'react';

export const IconSun = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M8 12a4 4 0 108 0 4 4 0 10-8 0M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7l-.7.7m0 11.4l.7.7m-12.1-.7l-.7.7"></path>
    </svg>
  );
});

IconSun.displayName = 'Icon.Sun';
