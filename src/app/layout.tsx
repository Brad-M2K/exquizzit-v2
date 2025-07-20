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
      </body>
    </html>
  );
}
