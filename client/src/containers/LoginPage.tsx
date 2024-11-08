import React from 'react';
import { LoginForm, RegisterForm } from '@/components/molecules';

const LoginPage: React.FC = () => {
  return (
    <>
    <div>Hello from Profile Component! <LoginForm /></div>
    <RegisterForm />
    </>
  );
};

export default LoginPage;
