import React from "react";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/SAKURATA.otf",
  display: "swap",
});

function HomePage() {
  return (
    <div className={myFont.className}>
      <h1 className="flex justify-center items-center h-[60vh] text-6xl relative">Luth Template Website</h1>;
    </div>
  );
}

export default HomePage;
