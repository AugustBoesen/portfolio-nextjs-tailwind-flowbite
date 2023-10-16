import MusicCards from "./musicCards";
export default function Music() {
  return (
    <div className="bg-slate-900 text-white relative py-16 px-16 flex flex-col md:flex-row justify-between shadow-2xl shadow-white">
      <div className="md:max-w-[50%]">
        <div className="text-left text-7xl border-l-2 border-t-2 rounded">
          Music
        </div>
        <div className="text-left pt-6">
          Proin et sollicitudin nulla, blandit dictum nisi. Sed posuere ex at
          euismod sollicitudin. Praesent tincidunt mollis vulputate. Fusce et
          urna sit amet massa malesuada bibendum a eu dolor. Vivamus auctor
          consectetur est. Vestibulum fringilla consectetur orci, eu ornare
          tortor vestibulum ut. Integer risus libero, vehicula eget neque et,
          mollis dapibus lectus. Ut arcu sem, molestie nec nisl non, aliquet
          dignissim lorem.{" "}
        </div>
      </div>
      <MusicCards />
    </div>
  );
}
