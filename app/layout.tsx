import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Toolbar from "~/app/components/Toolbar";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";
import { cn } from "~/lib/utils";
import Breadcrumbs from "./components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mimototo",
  description: "my website",
};

const date = new Date();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-dvh")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container my-5 mx-auto max-w-screen-sm flex-1 px-2">
            <header className="mb-5">
              <Breadcrumbs />
            </header>
            {children}
          </main>

          <Toolbar />

          <footer className="h-16 px-6 sticky top-full  flex justify-center text-sm font-thin items-center ">
            &copy; {date.getFullYear()} mimoto
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
