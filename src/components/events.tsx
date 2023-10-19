import EventsCarousel from './subcomponents/eventsCarousel';

export default function Events() {
  return (
    <div className='bg-slate-800 text-white relative py-16 px-16 flex flex-col-reverse md:flex-row justify-between shadow-2xl shadow-white min-h-[50em]'>
      <div className='w-full md:mr-8 h-96 mt-8 md:mt-0'>
        <EventsCarousel />
      </div>

      <div className='md:max-w-[50%]'>
        <div className='text-left text-7xl border-l-2 border-t-2 rounded'>
          Events
        </div>
        <div className='text-left pt-6'>
          Since 2016, I have organized or been a part of organizing all kinds of
          events in different circumstances, usually regarding either my field
          of interests or work in general. In terms of participant sizes, I have
          done 50+ events for 5-40 participants, 10+ events for 40-80
          participants and around 5 events with 80+ participants. These events
          vary from weekend camps to week-long bandcamps, festivals to
          conventions and more.
        </div>
        <div className='text-left pt-6'>
          I enjoy organizing project structures and coordinating progress, but
          have also done budgeting, communications, merchandising, technical
          practices (sound, lighting), recruitment and HR.
        </div>
      </div>
    </div>
  );
}
