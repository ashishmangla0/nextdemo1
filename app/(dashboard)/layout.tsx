import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default DashboardLayout;
