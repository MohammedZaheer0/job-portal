'use client';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Navbar from './components/Navbar';
import './globals.css';
import Footer from "../app/components/Footer";


const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <Head>
          {/* Move your metadata settings inside Head here */}
          <meta name="description" content="Generated by create next app" />
          <title>Create Next App</title>
        </Head>
        <body className={inter.className}>
          <div className='flex md:grid md:grid-cols-[3fr_1fr] gap-0 justify-between items-center container py-10 text-white'>
            <div className='w-[100%]'>
            <Navbar />
            </div>
            <div className='flex items-center justify-end'>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>


          
          <main>{children}</main>
          {/* Uncomment this if you want to include a footer */}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}