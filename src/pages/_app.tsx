import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/abilities/header";
import Footer from "@/abilities/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <div className="flex flex-1 h-full w-full flex-col items-center justify-center">
        <div className="
          flex w-full max-w-[820px] flex-wrap justify-center gap-8
          px-4 sm:px-8 eq:px-2 my-8 eq:max-w-[1320px]
          text-tsiakkas-dark dark:text-tsiakkas-light eq:mx-auto
        ">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
