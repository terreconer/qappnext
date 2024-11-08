import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const InputText: React.FC<InputProps> = ({ value, placeholder, name }) => {
  return (
    <>
      <div className="input">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </>
  );
};
