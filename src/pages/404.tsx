import React from "react"
import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";

const NotFoundPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found — Ioannis Tsiakkas"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
        canonical={false}
      />
      <div className="flex flex-col items-center">
        <h1 className="
        text-center mt-24
        text-5xl italic text-tsiakkas-dark dark:text-tsiakkas-light
      ">
          Page not found
        </h1>
        <Image src="/assets/14.svg" width={1600} height={1600} alt="" />
        <Link
          href="/"
          className="mt-6 text-lg font-bold text-tsiakkas-dark underline underline-offset-4 hover:opacity-80 dark:text-tsiakkas-light"
        >
          Back to home
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
