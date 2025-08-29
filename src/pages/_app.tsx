import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/abilities/header";
import Footer from "@/abilities/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <div className="flex-1 w-full flex flex-col items-center"> <div className="flex h-full w-full flex-col items-center justify-center place-self-center">
        <div className="my-8 flex w-full max-w-[560px] flex-row flex-wrap justify-center gap-8 px-4 text-tsiakkas-dark dark:text-tsiakkas-light sm:px-6 eq:mx-auto eq:max-w-[1320px] eq:px-0">
          <Component {...pageProps} />
        </div>
      </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}
