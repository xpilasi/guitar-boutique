import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "<gboutique>/components/NavBar";
import Footer from "<gboutique>/components/Footer";
import { WixClienteContextProvider } from "<gboutique>/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tonerelics - Guitar & Bass boutique",
  description: "Find exquisite Guitar and Bass relics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WixClienteContextProvider>
          <NavBar/>
          {children}
          <Footer/>
        </WixClienteContextProvider>
        </body>
    </html>
  );
}
