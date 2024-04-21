'use client';
import type { IconButtonRootProps } from './icon-button-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '../../primitive';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { IconButtonContextProvider } from '../icon-button-context';
import { iconButtonRootStyles } from './icon-button-root.styles';

const defaultProps: Partial<IconButtonRootProps> = {
  size: '2',
  type: 'button',
};

export const IconButtonRoot = forwardRef<HTMLButtonElement, IconButtonRootProps>((props, ref) => {
  const { disabled, loading, size, className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <IconButtonContextProvider value={{ disabled, loading, size }}>
      <Primitive.button
        ref={ref}
        disabled={disabled || loading}
        data-disabled={disabled ? '' : undefined}
        data-loading={loading ? '' : undefined}
        className={twMerge(iconButtonRootStyles({ size }), className)}
        {...others}
      >
        {children}
      </Primitive.button>
    </IconButtonContextProvider>
  );
});

IconButtonRoot.displayName = 'IconButton.Root';
