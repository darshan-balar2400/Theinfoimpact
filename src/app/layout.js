"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import "../index.css";
import Hero from "@/components/Hero";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";
import Meta from "@/components/Meta";
import { useRouter } from "next/navigation";
export default function RootLayout({ children }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    // Function to initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/final_logo_icon.png" />
        <Meta
          title="TheInfoImpact - Short News Provider"
          description="our ultimate news source delivering concise and impactful updates, akin to Inshorts. Stay informed with our curated snippets, providing essential news in a nutshell. We prioritize brevity and relevance, ensuring every read leaves a lasting impression. Join us for a streamlined news experience, where every byte makes an impact. Experience news redefined at TheInfoImpact."
          url={router.location}
          type="webiste"
          image="/images/final_logo_icon.png"
          keywords="News
          Updates
          Inshorts
          Concise
          Impactful
          Snippets
          Curated
          Brevity
          Relevance
          Streamlined
          Informative
          Clarity
          Trends
          Bite-sized
          Insightful"
        />
      </head>
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
        {currentUrl && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "TheInfoImpact",
              "url": currentUrl, // Dynamically retrieve current page URL
              "description": "Stay informed with concise and impactful news updates from TheInfoImpact."
            })}
          </script>
        )}
      </body>
    </html>
  );
}
