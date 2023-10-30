/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function General() {
  const currentTime = new Date();
  const currentHour = parseInt(
    currentTime.toLocaleTimeString([], { hour: 'numeric', hour12: false })
  );
  let greeting = '';

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Good morning, early bird!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'Good afternoon, friend!';
  } else {
    greeting = 'Good evening, night owl!';
  }

  return (
    <div className='bg-gradient-to-b from-black to-slate-950 text-white px-16 pb-32 -mb-12 border-t-2 border shadow-2xl shadow-white -rotate-3 justify-center -mx-16'>
      <div className='flex flex-col md:flex-row w-full rotate-3'>
        <div className='md:w-1/2 w-full pt-20 md:px-16 px-8'>
          <div className='text-3xl text-left'>{greeting}</div>
          <div className=' text-left pt-6'>
            My name is Severi. I'm a sinewy savonian fellow with a danish sense
            of humour and a desire to learn, create and implement. My roots and
            heart lies in the culture scene and performing arts with a an
            advanced degree in street dance arts. Alongside dancing, I have a
            degree in music with a specialization in studio production.
            Furthermore, my freetime includes a variety of nerdy stuff,
            including organizing <b>LARP</b> <i>(Live Action RolePlay)</i>{' '}
            events and boffering <i>(padded melee weapons combat)</i>.
          </div>
          <div className=' text-left pt-6'>
            This portfolio website is divided into categories depending on what
            you might be looking for, were it music production, event
            organization or code development. Feel free to take a look around
            and shoot a message if my skillset piques your interest!
          </div>
          <div className='text-left py-16 text-lg'>
            <div className='mb-6'>
              Email:{' '}
              <span className='text-rose-700 hover:text-rose-500 transition-all duration-500'>
                augustboesen@gmail.com
              </span>
            </div>
            <div>
              Discord:{' '}
              <span className=' text-sky-700 hover:text-sky-500 transition-all duration-500'>
                sevu_
              </span>
            </div>
          </div>
        </div>

        <div className='md:w-1/3 w-full flex flex-col justify-end md:ml-32 ml-0'>
          <Image
            className='w-2/3 pt-8 md:pt-0 md:w-full border-tl-full rounded-tl-full rounded-tr-full rounded-bl-full self-center'
            src='/pfp.jpg'
            alt='Profile Picture'
            width={600}
            height={1200}
          />
          <div className=''>© Milla Asikainen</div>
        </div>
      </div>
    </div>
  );
}
