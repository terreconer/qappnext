import React, { useState } from 'react';
import { Button, Label, InputEmail, InputPassword } from '@/components/atoms';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const isFormValid = email !== '' && password !== '';

  return (
    <div className="loginform loginform-wrapper">
      <div className="loginform-email">
        <Label text="Email Address" htmlFor="email" />
        <InputEmail
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="loginform-password">
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
        value="Login"
        onClick={() => alert("Form submitted")}
        disabled={!isFormValid}
      />
    </div>
  );
};

export default LoginForm;
