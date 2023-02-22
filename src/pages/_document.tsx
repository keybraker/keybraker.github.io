import { Head, Html, Main, NextScript } from "next/document";

// function getRandomColor() {
//   const colorsArray = Object.values(TailwindColorEnum);
//   const randomColorIndex = Math.floor(Math.random() * colorsArray.length);

//   return colorsArray[randomColorIndex];
// }

function getBackgroundColor() {
  return `bg-sky-300`;
}

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={getBackgroundColor()}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
