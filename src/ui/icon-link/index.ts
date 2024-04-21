import type { IconLinkRootProps } from './icon-link-root';
import type { IconLinkContentProps } from './icon-link-content';

import { IconLinkRoot } from './icon-link-root';
import { IconLinkContent } from './icon-link-content';

export type { IconLinkRootProps as RootProps, IconLinkContentProps as ContentProps };

export {
  /** Contains all the parts of a icon link. This component is based on the `a` element. */
  IconLinkRoot as Root,
  /** The content part of the icon link. This component is based on the `span` element. */
  IconLinkContent as Content,
};
