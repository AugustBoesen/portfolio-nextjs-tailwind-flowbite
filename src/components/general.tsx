import Image from 'next/image';
export default function General() {
  return (
    <div className='bg-black text-white px-16 pb-32 -mb-12 border-t-2 border-double shadow-2xl shadow-white -rotate-3 justify-center -mx-16'>
      <div className='flex flex-col md:flex-row w-full rotate-3'>
        <div className='md:w-1/2 w-full pt-20 pl-16'>
          <div className='text-3xl text-left'>Greeting here</div>
          <div className=' text-left pt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            tellus ac turpis tempor vestibulum. Ut ullamcorper elementum
            tincidunt. Sed et elit enim. Etiam lobortis dolor congue lorem
            convallis porta. Sed sed augue ornare diam porttitor ornare.
            Vestibulum auctor libero vel posuere pulvinar. In sem neque, posuere
            vel eros ac, mattis fermentum justo. Quisque efficitur lacus vitae
            libero tincidunt rutrum. Nullam vehicula eu metus id consectetur.
            Cras tincidunt mi vel augue fringilla rhoncus. Nunc nisi nisl,
            mollis at elit at, ullamcorper imperdiet nisl. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;{' '}
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
          <div className=''>c Milla Asikainen</div>
        </div>
      </div>
    </div>
  );
}
