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
        <Nav/>
        {children}

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        By Brad - created with Next.js, Typescript, & Tailwind
      </footer>
      </body>
    </html>
  );
}
