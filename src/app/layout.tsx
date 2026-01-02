import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "음식 가계부 & 레시피 관리",
  description: "재료 가격 관리, 레시피, 가계부 및 식사 계획을 위한 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
