import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const amiri = Amiri({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alattas.vercel.app/"),

  title: {
    template: "%s | Alattas",
    default: "Alattas",
  },
  authors: {
    name: "Mohannad",
  },

  description:
    " وقف السيد مهند احمد محسن عبدالله العطاس رضي الله عنه في الحفاظ على ممتلكات السادة آل البيت سنه",
  openGraph: {
    title: "Alattas",
    description:
      " وقف السيد مهند احمد محسن عبدالله العطاس رضي الله عنه في الحفاظ على ممتلكات السادة آل البيت سنه.",
    url: "https://alattas.vercel.app/",
    siteName: "Alattas",
    images: "/og.png",
    type: "website",
  },
  keywords: ["Mohannad Alattas", "Mohannad", "Alattas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={amiri.className}>
        <main className="flex flex-col max-w-7xl mx-auto min-h-screen space-y-3 p-5">
          <div className="">
            <Nav />
          </div>
          <div className="border-t-[0.5px] py-10"></div>
          <div className="w-full flex-1 ">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
