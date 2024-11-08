import React from 'react';
import { AppProps } from 'next/app';
import Link from 'next/link';
import '../styles/global.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: { Component: React.ElementType; pageProps: any }) => {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/settings">Settings</Link> | 
          <Link href="/chat">Chat</Link> | 
          <Link href="/profile">Profile</Link>
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
