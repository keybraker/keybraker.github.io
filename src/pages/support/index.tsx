import MyWords from "@/components/myWords";
import { FaHandHoldingHeart } from "@react-icons/all-files/fa/FaHandHoldingHeart";
import { FaPaypal } from "@react-icons/all-files/fa/FaPaypal";
import Head from "next/head";
import type { ReactNode } from "react";

const title = "Support — Ioannis Tsiakkas";
const description =
  "Support my open source work, side projects and photography. Every contribution keeps me building, learning and sharing.";

type SupportOption = {
  id: string;
  label: string;
  href: string;
  handle: string;
  blurb: string;
  icon: ReactNode;
  colour: string;
};

const supportOptions: SupportOption[] = [
  {
    id: "paypal",
    label: "PayPal",
    href: "https://www.paypal.com/paypalme/tsiakkas",
    handle: "paypal.com/paypalme/tsiakkas",
    blurb:
      "A one-off tip or a recurring contribution, whatever suits you. Ideal if you want to leave a note to go with it.",
    icon: <FaPaypal size="28px" />,
    colour: "bg-verge-cyan/50 dark:bg-verge-cyan/75",
  },
  {
    id: "revolut",
    label: "Revolut",
    href: "https://revolut.me/keybraker",
    handle: "revolut.me/keybraker",
    blurb:
      "Send an instant transfer straight from the Revolut app. Quick, fee-free and it lands almost immediately.",
    icon: <FaHandHoldingHeart size="28px" />,
    colour: "bg-verge-pink/50 dark:bg-verge-pink/75",
  },
];

function SupportCard({ option }: { option: SupportOption }) {
  return (
    <a
      href={option.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Support me via ${option.label}`}
      className={`
        group w-full rounded-xl
        border-[3px] border-tsiakkas-light/20 dark:border-tsiakkas-dark/20
        hover:border-tsiakkas-dark/20 hover:dark:border-tsiakkas-light/100
        transition-colors duration-500
        ${option.colour}
      `}
    >
      <div className="flex w-full flex-col gap-4 px-8 py-10 text-tsiakkas-dark">
        <div className="flex flex-row items-center justify-between gap-4">
          <span className="leading-100 brief-title break-all text-xl font-extrabold text-center sm:text-start">
            {option.label}
          </span>
          <span className="shrink-0 transition-transform duration-300 ease-out group-hover:scale-110">
            {option.icon}
          </span>
        </div>
        <div className="border-b-2 border-b-tsiakkas-dark/25"></div>
        <p className="text-lg font-extrabold">{option.blurb}</p>
        <span className="text-md font-semibold underline-offset-4 group-hover:underline">
          {option.handle}
        </span>
      </div>
    </a>
  );
}

export default function Support() {
  return (
    <div className="mx-auto w-full">
      <Head>
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsiakkas.com/support" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://itsiakkas.com/support" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/23459466?v=4"
        />
      </Head>

      <main className="flex w-full flex-col items-center gap-12 sm:gap-16">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <MyWords text="If anything I have made has helped you" />
          <h1 className="text-3xl font-extrabold leading-tight text-tsiakkas-dark dark:text-tsiakkas-light sm:text-4xl">
            Support my endeavours
          </h1>
          <p className="max-w-[65ch] text-lg font-semibold text-tsiakkas-dark dark:text-tsiakkas-light">
            Everything I build — the open source projects, the tools I write to
            solve my own problems, and the photography on this site — is a labour
            of love. It stays free and open, and it is made in the margins of my
            own time. If my work has been useful to you, or you simply like where
            it is heading, a contribution goes a long way towards keeping me
            building, learning and sharing.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 eq:flex-row eq:gap-8">
          {supportOptions.map((option) => (
            <SupportCard key={option.id} option={option} />
          ))}
        </div>

        <p className="max-w-[65ch] text-center text-lg font-serif italic font-extralight tracking-wide text-tsiakkas-dark dark:text-tsiakkas-light">
          Thank you — whether you contribute or simply drop by, it genuinely
          means a lot.
        </p>
      </main>
    </div>
  );
}
