import type { ReactNode } from 'react';

export interface IconButtonContextValue {
  /**
   * The disabled state of the icon button.
   */
  disabled?: boolean;

  /**
   * The loading state of the icon button.
   */
  loading?: boolean;
}

export type IconButtonContextProviderProps = {
  value: IconButtonContextValue;
  children: ReactNode;
};
