import localFont from "next/font/local";

const myFont = localFont({
  src: "../public/fonts/SAKURATA.otf",
  display: "swap",
});

function HomePage() {
  return (
    <div className={myFont.className}>
      <h1 className="flex items-center justify-center h-[95vh] lg:text-6xl text-center text-3xl">Luth Template Website</h1>;
    </div>
  );
}

export default HomePage;
