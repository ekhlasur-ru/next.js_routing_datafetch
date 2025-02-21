import React from "react";
import localFont from "next/font/local";

const algerFont = (a = Alger({
  subsets: [latin],
  weight: "400",
}));
const geistMonoFont = localFont({
  src: "./fonts/ALGER.woff2",
});

export default function listimages() {
  return (
    <>
      <div className={`${algerFont.className}`} >Ekhlsaur Rahman</div>
      <h1 className={`${geistMonoFont.className}`}>Mukhlesur Rahman</h1>
    </>
  );
}
