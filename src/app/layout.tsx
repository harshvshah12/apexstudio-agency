import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "ApexStudio Digital Agency — Award-winning Swiss editorial digital design & AI engineering",
  description: "Strategic brand design and software engineering studio crafting venture-backed digital artifacts, WebGL experiences, and spatial interfaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
