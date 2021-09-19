import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean | '';
  isLink?: boolean | '';
  color?: 'purple' | 'red' | '';
  size?: 'sm' | 'md' | 'lg';
};