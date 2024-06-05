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
        <div className="main_section">
          <main>
            <header className="container mx-auto lg:px-0 md:px-5 px-5">
              <Header />
            </header>
            {children}
            <footer className="bg-[#F4F1FD]">
              <div className="container mx-auto lg:px-0 px-5 pt-[120px]">
                <Footer />
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
