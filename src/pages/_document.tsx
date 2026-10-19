import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="#f6f1eb"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#131313"
          media="(prefers-color-scheme: dark)"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (localStorage.theme === 'dark' ||
                    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              })()
            `,
          }}
        />
      </Head>
      <body className="bg-tsiakkas-light dark:bg-tsiakkas-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
