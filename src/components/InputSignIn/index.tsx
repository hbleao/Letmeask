import './styles.scss';

import { InputSigninProps } from './types';

export const InputSignIn = ({ 
    className, 
    type = 'text',
    placeholder,
    value,
    onChange,
    ...rest
  }: InputSigninProps) => {
  
  return (
    <input
      className={`${className} input-signin`}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      {...rest}
    />
  )
}