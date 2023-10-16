import Image from "next/image";
export default function Hero() {
  return (
    <div className="font-bold text-5xl md:text-7xl bg-transparent text-white md:text-left pl-0 md:pl-16 pt-40 pb-14 text-center ">
      <div>BOESEN.DEV</div>
      <div className="text-center md:text-right md:mr-16 mr-0">
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          Producer of{" "}
          <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
            <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
              <li>Music</li>
              <li>Events</li>
              <li>Code</li>
              <li aria-hidden="true">Music</li>
            </ul>
          </span>
        </div>
      </div>
      <Image
        className="-z-10"
        alt="Hero BG"
        src={"/spacebg.jpg"}
        layout="fill"
      />
    </div>
  );
}
