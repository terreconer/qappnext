import React from 'react';
import '../styles/global.scss';
import { LoginPage } from '@/containers';

// login page check if user is logged in so if it is show profile pagem if not - login form

const Home: React.FC = () => (
  <div>
    <h1>Logigin here</h1>
    <LoginPage />
  </div>
);

export default Home;
