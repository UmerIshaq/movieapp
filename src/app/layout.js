import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movies Web App",
  description: "This is a Website for the Movies. You can search here for top trending movies. you can also see here the Similar movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        <Header/>
       <main>{children}</main>
      </body>
    </html>
  );
}
