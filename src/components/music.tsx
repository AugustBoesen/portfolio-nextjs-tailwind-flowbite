/* eslint-disable react/no-unescaped-entities */
import MusicCards from './subcomponents/musicCards';
export default function Music() {
  return (
    <div className=' bg-gradient-to-b from-slate-950 to-slate-900 text-white relative py-16 md:px-16 px-8 flex flex-col md:flex-row justify-between shadow-2xl min-h-[50em]'>
      <div className='md:max-w-[50%]'>
        <div className='text-left text-7xl border-l-2 border-t-2 rounded'>
          Music
        </div>
        <div className='text-left pt-6'>
          I've played piano since 2015 with drums as a secondary instrument.
          I've also gotten classes for tenor saxophone, violin and acoustic
          guitar.
        </div>
        <div className='text-left pt-6'>
          I've done music production since 2012 with an extensive portfolio of a
          wide variety of different genres delved into and produced. My initial
          experience came from producing video game soundtracks and sound
          effects, and have since released an EDM EP and multiple solo
          productions on various fields, including classical, folk metal, jazz
          and modern folk.
        </div>
        <div className='text-left pt-6 pb-6'>
          I have experience implementing soundscapes for all kinds of
          situations, from horror to sci-fi spaceship ambience. I enjoy creating
          these scapes and always look forward to hearing them in action.
        </div>
      </div>
      <MusicCards />
    </div>
  );
}
