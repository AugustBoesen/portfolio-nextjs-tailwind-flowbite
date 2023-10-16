import EventsCarousel from "./eventsCarousel";

export default function Events() {
  return (
    <div className="bg-slate-800 text-white relative py-16 px-16 flex flex-col-reverse md:flex-row justify-between shadow-2xl shadow-white">
      <div className="w-full md:mr-8 h-96 mt-8 md:mt-0">
        <EventsCarousel />
      </div>

      <div className="md:max-w-[50%]">
        <div className="text-left text-7xl border-l-2 border-t-2 rounded">
          Events
        </div>
        <div className="text-left pt-6">
          Proin eu tempor eros. Maecenas eget sapien ex. Phasellus sit amet
          purus lobortis, blandit odio eget, viverra quam. Aliquam efficitur leo
          quis pellentesque consectetur. Praesent pharetra vehicula nulla a
          volutpat. Sed sit amet quam et sapien malesuada ullamcorper. Integer
          quis ipsum et lorem laoreet luctus. Nam varius metus ac diam
          vestibulum tempus ut et nisl.{" "}
        </div>
      </div>
    </div>
  );
}
