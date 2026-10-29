import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Components/Common/Header";
import { Footer } from "./Components/Common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce manager",
  description: "Loja virtual de artigos em prata e ouro",
  icons:{icon:"/favicon.ico"}
};

export default function RootLayout({ children }: LayoutProps<"/">) {
return (
<html
lang="en"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
<body className="min-h-full flex flex-col">
<main>{children}</main>
<script src="https://jsuites.net/v4/jsuites.js"></script>
<Footer/>
</body>
</html>
);
}
