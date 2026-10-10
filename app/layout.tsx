import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lure — Personal OS",
  description: "A calm command centre for your life.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
