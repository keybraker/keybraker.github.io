import { Head, Html, Main, NextScript } from "next/document";

// function getRandomColor() {
//   const colorsArray = Object.values(TailwindColorEnum);
//   const randomColorIndex = Math.floor(Math.random() * colorsArray.length);

//   return colorsArray[randomColorIndex];
// }

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-tsiakkas-light dark:bg-tsiakkas-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
