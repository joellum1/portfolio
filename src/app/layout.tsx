import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio for Joel Lum",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          type="text/css" 
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" 
        />
      </head>
      <body
        className={`${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
