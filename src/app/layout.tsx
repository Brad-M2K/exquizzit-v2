import { Toaster } from 'sonner';
import "@/styles/globals.css";
import Nav from '@/components/navigation/Nav';



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[linear-gradient(to_bottom,_#3b0764_0%,_#312e81_40%,_#581c87_75%,_#1e1b4b_100%)]"
      >
        <Toaster richColors position="top-center" />
        <Nav/>
        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center bg-transparent backdrop-blur-xl border p-4">
        By Brad - created with Next.js, Typescript, Tailwind, and a little API friend Open Trivia Database
      </footer>
      </body>
    </html>
  );
}
