import { cva } from 'class-variance-authority';

export const iconLinkRootStyles = cva([
  'inline-flex',
  'justify-center',
  'items-center',
  'select-none',
  'overflow-hidden',
  'cursor-default',
  'rounded',

  'size-8',
  'bg-transparent',
  'text-default-11',

  'hover:bg-default-3',
  'active:bg-default-4',

  'motion-safe:transition',
  'motion-safe:duration-100',

  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-focus',

  'disabled:opacity-60',
  'disabled:cursor-not-allowed',
]);
