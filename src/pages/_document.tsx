import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-tsiakkas-light dark:bg-tsiakkas-dark">
        <Main />
        <NextScript />
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
      </body>
    </Html>
  );
}
