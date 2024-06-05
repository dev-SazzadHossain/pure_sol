import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PureSol",
  description: "puresol description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
          <Header />
        </div>
        {children}
        <div className="bg-[#F4F1FD]">
          <div className="2xl:w-[1920px] xl:w-[1320px] lg:w-[1320px] md:w-full sm:w-full w-full mx-auto 2xl:px-0 xl:px-0 lg:px-0 px-5">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
