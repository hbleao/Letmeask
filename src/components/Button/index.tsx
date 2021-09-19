import './styles.scss';

import { ButtonProps } from './types';

export const Button = ({
  type,
  className = '',
  onClick,
  children,
  color = '',
  size = 'md',
  isOutline = '',
  isLink = ''
}: ButtonProps) => {

  return (
    <button
      className={`
        btn ${className} ${color} 
        ${size} ${isLink && 'link'} ${isOutline && 'outline'}
      `}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
};