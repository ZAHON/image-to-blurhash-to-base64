import type { MainProps } from './main.types';
import { mainStyles } from './main.styles';

export function Main(props: MainProps) {
  const { children } = props;

  return <main className={mainStyles()}>{children}</main>;
}
