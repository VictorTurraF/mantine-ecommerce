import React from "react";
import { Inter } from 'next/font/google'
import Header from "./Header";
import Footer from "./Footer";
const inter = Inter({ subsets: ['latin'] })

function Layout({ children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <main className={inter.className}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
