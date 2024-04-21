import type { IconProps } from './icon.types';
import { forwardRef } from 'react';

export const IconMoon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
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
      <path d="M12 3h.393a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z"></path>
    </svg>
  );
});

IconMoon.displayName = 'Icon.Moon';
