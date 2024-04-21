import type { IconLinkRootProps } from './icon-link-root.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/ui/primitive';
import { iconLinkRootStyles } from './icon-link-root.styles';

export const IconLinkRoot = forwardRef<HTMLAnchorElement, IconLinkRootProps>((props, ref) => {
  const { external, className, children, ...others } = props;

  const externalAttributes = {
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined,
  };

  return (
    <Primitive.a ref={ref} className={twMerge(iconLinkRootStyles(), className)} {...externalAttributes} {...others}>
      {children}
    </Primitive.a>
  );
});

IconLinkRoot.displayName = 'IconLink.Root';
