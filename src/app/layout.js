"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "../index.css";
import Hero from "@/components/Hero";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";


export default function RootLayout({ children }) {
  useEffect(() => {
    // Function to initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element",
        
      );
      
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center justify-center">
          <div className="content w-[100%] ">
           
            <Header />
            {children}
            <Footer />
          </div>
        </main>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
