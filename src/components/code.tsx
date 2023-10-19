import CodeTimeline from './subcomponents/codeTimeline';
export default function Code() {
  return (
    <div className='bg-slate-700 text-white relative z-30 py-16 px-16 flex flex-col md:flex-row justify-between shadow-2xl shadow-white min-h-[50em]'>
      <div className='md:max-w-[50%]'>
        <div className='text-left text-7xl border-l-2 border-t-2 rounded'>
          CODE
        </div>
        <div className='text-left pt-6'>
          My strengths currently lie in frontend design and implementation. I am
          currently using Javascript/TypeScript on all my projects. Regarding
          frameworks, I have experience using React, NextJS, Angular, Svelte,
          Tailwind CSS and Bootstrap. I also know how to use component libraries
          such as Flowbite to my advantage.{' '}
        </div>
        <div className='text-left pt-6'>
          I like learning new things regarding coding, especially ways to
          optimize and clean up code. Currently I am hoping to also learn
          fundamentals of backend development and perhaps beyond. In the future,
          I will strive to learn different languages in order to further develop
          my skillset.{' '}
        </div>
        <div className='text-left pt-6'>
          This particular site is made with NextJS using Flowbite React for
          components and Tailwind CSS for styling.{' '}
        </div>
      </div>
      <div className=''>
        <CodeTimeline />
      </div>
    </div>
  );
}
