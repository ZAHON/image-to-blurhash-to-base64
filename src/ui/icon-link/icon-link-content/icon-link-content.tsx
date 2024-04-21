import type { IconLinkContentProps } from './icon-link-content.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Primitive } from '@/ui/primitive';
import { iconLinkContentStyles } from './icon-link-content.styles';

export const IconLinkContent = forwardRef<HTMLSpanElement, IconLinkContentProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Primitive.span ref={ref} className={twMerge(iconLinkContentStyles(), className)} {...others}>
      {children}
    </Primitive.span>
  );
});

IconLinkContent.displayName = 'IconLink.Content';
