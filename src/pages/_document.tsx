import { Head, Html, Main, NextScript } from "next/document";

// function getRandomColor() {
//   const colorsArray = Object.values(TailwindColorEnum);
//   const randomColorIndex = Math.floor(Math.random() * colorsArray.length);

//   return colorsArray[randomColorIndex];
// }

export default function Document() {
  return (
    <Html className="bg-gray-100" lang="en">
      <Head />
      <body className="bg-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
