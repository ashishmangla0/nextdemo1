import { Nunito } from "next/font/google";

const nunito = Nunito({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "My Website",
  description: "A modern Next.js 16 website",
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
}
