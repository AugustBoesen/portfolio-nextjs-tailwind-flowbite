import CodeTimeline from "./codeTimeline";
export default function Code() {
  return (
    <div className="bg-slate-600 text-white relative py-16 px-16 flex flex-col md:flex-row justify-between shadow-2xl shadow-white">
      <div className="md:max-w-[50%]">
        <div className="text-left text-7xl border-l-2 border-t-2 rounded">
          CODE
        </div>
        <div className="text-left pt-6">
          Pellentesque sollicitudin, lectus eu ultrices imperdiet, nulla leo
          scelerisque enim, ut mattis nisi sapien vitae nunc. Proin consequat,
          neque a finibus commodo, nisl ligula elementum purus, a volutpat quam
          eros in ligula. Phasellus eget tortor turpis. In eget fringilla eros.
          Praesent imperdiet id odio volutpat commodo. Nulla mollis nisi diam,
          nec volutpat nisl vestibulum eu. Aliquam vulputate porttitor purus nec
          ornare. Aenean blandit blandit justo, quis elementum libero lobortis
          in. Sed imperdiet gravida purus. Ut eleifend nisi eu dolor lobortis,
          ut pretium purus fermentum.{" "}
        </div>
      </div>
      <div className="">
        <CodeTimeline />
      </div>
    </div>
  );
}
