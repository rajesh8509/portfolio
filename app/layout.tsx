import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Rajesh E — AI & Data Science', description: 'Portfolio of Rajesh E, AI & Data Science undergraduate.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className="dark"><body>{children}</body></html>);
}
