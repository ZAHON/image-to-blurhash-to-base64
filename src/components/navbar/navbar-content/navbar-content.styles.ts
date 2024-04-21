import { cva } from 'class-variance-authority';

export const navbarContentStyles = cva([
  'h-full',
  'flex',
  'items-center',
  'justify-between',
  'px-4',
  'mx-auto',
  'max-w-8xl',

  'md:px-8',
]);
