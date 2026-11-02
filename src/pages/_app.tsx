import Footer from "@/abilities/footer";
import Header from "@/abilities/header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

function ScreenFlagFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-20">
      <div className="absolute inset-x-0 top-0 flex h-1">
        <div
          className="w-1/2"
          style={{ background: "linear-gradient(90deg, #DD0000 0 50%, #000000 50% 100%)" }}
        />
        <div
          className="w-1/2"
          style={{ background: "linear-gradient(90deg, #0D5EAF 0 50%, #FFFFFF 50% 100%)" }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-1">
        <div
          className="w-1/2"
          style={{ background: "linear-gradient(90deg, #FFFFFF 0 50%, #0055A4 50% 100%)" }}
        />
        <div
          className="w-1/2"
          style={{ background: "linear-gradient(90deg, #FFFFFF 0 50%, #D57800 50% 100%)" }}
        />
      </div>
      <div className="absolute inset-y-1 left-0 flex w-1 flex-col">
        <div
          className="flex-1"
          style={{ background: "linear-gradient(180deg, #DD0000 0 50%, #FFCC00 50% 100%)" }}
        />
        <div
          className="flex-1"
          style={{ background: "linear-gradient(180deg, #EF4135 0 50%, #FFFFFF 50% 100%)" }}
        />
      </div>
      <div className="absolute inset-y-1 right-0 flex w-1 flex-col">
        <div
          className="flex-1"
          style={{ background: "linear-gradient(180deg, #FFFFFF 0 50%, #0D5EAF 50% 100%)" }}
        />
        <div
          className="flex-1"
          style={{ background: "linear-gradient(180deg, #FFFFFF 0 50%, #D57800 50% 100%)" }}
        />
      </div>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <Header />
      <div className="flex flex-1 h-full w-full flex-col items-center justify-center">
        <div className="
          flex h-full w-full eq:max-w-[1320px]
          flex-wrap justify-center gap-8
          px-4 sm:px-8 eq:px-2 my-8
          text-tsiakkas-dark dark:text-tsiakkas-light eq:mx-auto
        ">
          <Component {...pageProps} />
        </div>
      </div>
      <Footer />
      <ScreenFlagFrame />
      <ScrollToTopButton />
    </div>
  );
}
