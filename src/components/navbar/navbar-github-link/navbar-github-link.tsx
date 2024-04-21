import { IconBrandGithub } from '@/icons/icon-brand-github';
import * as IconLink from '@/ui/icon-link';

export function NavbarGitHubLink() {
  return (
    <IconLink.Root href="https://github.com/ZAHON/image-to-blurhash-to-base64" external>
      <IconLink.Content>
        <IconBrandGithub className="size-4" />
        <span className="sr-only">GitHub</span>
      </IconLink.Content>
    </IconLink.Root>
  );
}
