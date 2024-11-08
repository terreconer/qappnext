import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  text: string,
};

export const Label: React.FC<LabelProps> = ({ htmlFor, text }) => {
  return (
    <>
      <div>
        <label htmlFor={htmlFor}>
          {text}
        </label>
      </div>
    </>
  );
};
