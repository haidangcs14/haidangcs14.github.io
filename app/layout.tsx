import type { Metadata } from "next";
import { Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import { content } from "@/data/profile";
import { LangProvider } from "@/lib/i18n";
import Loader from "@/components/Loader";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: content.vi.siteTitle,
  description: content.vi.about[0],
};

// Chạy trước khi trang hiển thị để không bị nháy sáng/tối.
const themeScript = `try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{".loader{display:none!important}"}</style>
        </noscript>
      </head>
      <body>
        <Loader />
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
