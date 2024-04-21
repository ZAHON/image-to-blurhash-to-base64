import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface IconLinkRootProps extends ComponentPropsWithRef<'a'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The all the parts of a icon link - `IconLink.Content`.
   */
  children: ReactNode;

  /**
   * If you `true`, the icon link will have the `target="_blank"` and `rel="noopener noreferrer"` attributes.
   * @default false
   */
  external?: boolean;

  /**
   * The URL that the icon link points to.
   */
  href?: string;
}
