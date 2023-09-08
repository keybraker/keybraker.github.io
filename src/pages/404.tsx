import React from "react"
import Image from "next/image";
import Header from "@/abilities/header";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <h1 className="
        text-center mt-24
        text-5xl italic text-tsiakkas-dark dark:text-tsiakkas-light
      ">
        Page not found
      </h1>
      <Image src="/assets/14.svg" width={1600} height={1600} alt="404 error" />
    </div>
  )
}

export default NotFoundPage
