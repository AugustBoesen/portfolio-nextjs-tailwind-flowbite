import EventsCarousel from './subcomponents/eventsCarousel';

export default function Events() {
  return (
    <div className='bg-gradient-to-b from-slate-900 to-slate-800 text-white relative py-16 md:px-16 px-8 flex flex-col-reverse md:flex-row justify-between  min-h-[50em]'>
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
          worked on:
          <ul className='pl-16 py-2'>
            <li className='py-2'>
              <b>50+ events for 5-40 participants</b>
            </li>
            <li className='py-2'>
              <b>10+ events for 40-80 participants</b>
            </li>
            <li className='py-2'>
              <b>5+ events with 80+ participants</b>
            </li>
          </ul>{' '}
          These events vary from weekend camps to week-long bandcamps, festivals
          to conventions, concerts to LARPs and more.
        </div>
        <div className='text-left pt-6'>
          I enjoy organizing project structures and coordinate progression, but
          have also done budgeting, communications, merchandising, technical
          practices (sound, lighting), recruitment and HR. Over the years, I
          have gathered a personal bank of resources, including contacts,
          templates, roadmaps and much more, ready for use in any project!
        </div>
      </div>
    </div>
  );
}
