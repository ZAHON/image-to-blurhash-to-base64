import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface IconButtonRootProps extends ComponentPropsWithRef<'button'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   * @default false
   */
  asChild?: boolean;

  /**
   * The content of the icon button.
   */
  children: ReactNode;

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the icon button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The type of the icon button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';
}
