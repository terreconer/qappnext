import React from 'react';
import classNames from 'classnames';

type InputEmailProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

export const InputEmail: React.FC<InputEmailProps> = ({
  value,
  onChange,
  placeholder = "Enter your email",
  className,
  required = false,
  disabled = false
}) => {

  const inputClass = classNames(
    "input-email",
    { "input-disabled": disabled },
    className
  );

  return (
    <input
      type="email"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={inputClass}
      required={required}
      disabled={disabled}
    />
  );
};

