import React, { useState } from 'react';
import classNames from 'classnames';

type InputPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

export const InputPassword: React.FC<InputPasswordProps> = ({
  value,
  onChange,
  placeholder = "Enter your password",
  className,
  required = false,
  disabled = false,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputClass = classNames(
    "input-password",
    { "input-disabled": disabled },
    className 
  );

  return (
    <div className="input-password-container">
      <input
        type={isPasswordVisible ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
        required={required}
        disabled={disabled}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="password-toggle-btn"
        disabled={disabled}
      >
        {isPasswordVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};
