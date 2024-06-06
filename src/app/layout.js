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
        <main>
          <header>
            <Header />
          </header>
          {children}
          <footer className="bg-[#F4F1FD]">
            <div className="2xl:container  xl:container lg:container md:container sm:container container relative px-4 pt-[120px] pb-[40px] mx-auto">
              <Footer />
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
