import React from 'react';
import classNames from 'classnames';
import './styles/Button.scss';

type ButtonVariant = 'success' | 'error' | 'disabled' | 'primary' | 'secondary';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  value: string;
};

export const Button: React.FC<ButtonProps> = ({ variant, value, className, ...props }) => {
  const buttonClass = classNames(
    `btn-${variant}`,
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {value}
    </button>
  );
};
