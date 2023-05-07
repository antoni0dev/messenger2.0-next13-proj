import "./globals.css";
import { Roboto } from "next/font/google";

// the function returns an object with a className prop and when used, the font is applied
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Messenger Clone",
  description: "A Clone of Facebook's popular Messenger App!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
