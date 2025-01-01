import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/shared/header";
import SupabaseProvider from "@/components/providers/supabase-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Where To Meet",
  description: "Find the perfect meeting spot between two locations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <Header />
          {children}
          <Toaster />
        </SupabaseProvider>
      </body>
    </html>
  );
}
