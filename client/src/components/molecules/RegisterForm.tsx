import React, { useState } from 'react';
import { Button, Label, InputEmail, InputPassword, InputText } from '@/components/atoms';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isFormValid = name !== '' && lastname !== '' && email !== '' && password !== '';

  return (
    <div className="registerform registerform-wrapper">
      <div className="registerform-name">
        <Label text="First Name" htmlFor="name" />
        <InputText
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div className="registerform-lastname">
        <Label text="Last Name" htmlFor="lastname" />
        <InputText
          id="lastname"
          value={lastname}
          onChange={handleLastnameChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      <div className="registerform-email">
        <Label text="Email Address" htmlFor="email" />
        <InputEmail
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="registerform-password">
        <Label text="Password" htmlFor="password" />
        <InputPassword
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          required
        />
      </div>

      <Button
        variant="primary"
        value="Register"
        onClick={() => alert("Form submitted")}
        disabled={!isFormValid}
      />
    </div>
  );
};

export default RegisterForm;
