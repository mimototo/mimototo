import type { Metadata } from "next";
import Toolbar from "~/app/components/Toolbar";
import { ThemeProvider } from "~/components/theme-provider";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "mimototo",
  description: "my website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <div className="flex min-h-screen flex-col">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="container my-5 mx-auto max-w-screen-sm flex-1 px-2">
              <Header />
              {children}
              <Toolbar />
            </main>
          </ThemeProvider>
        </body>
      </div>
    </html>
  );
}
