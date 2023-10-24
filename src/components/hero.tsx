import Image from 'next/image';
export default function Hero() {
  return (
    <div className='font-bold text-5xl md:text-7xl bg-transparent text-white md:text-left pl-0 md:pl-16 pt-40 pb-14 text-center flex flex-col md:flex-row justify-center'>
      <div className='min-w-[100vw] left-0 absolute'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
      <div className=' text-transparent bg-clip-text bg-gradient-to-l from-teal-100 to-purple-100'>
        Severi Boesen
      </div>
      <div className='text-center mt-7 md:ml-16'>
        <div className='font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200'>
          Producer of{' '}
          <span className='text-teal-300 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden'>
            <ul className='block animate-text-slide-3 text-left leading-tight [&_li]:block'>
              <li className='text-teal-300'>Music</li>
              <li className='text-teal-300'>Events</li>
              <li className='text-teal-300'>Code</li>
              <li aria-hidden='true'>Music</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}
