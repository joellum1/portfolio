export default function AboutSection() {
  return (
    <section 
      id='about'
      className='flex flex-col items-center rounded-2xl bg-blue-700 text-[#fefefe] scroll-mt-4'
    >
      <div className='w-full p-24 flex flex-row'>
        <ul className='list-style-none max-w-lg flex flex-col gap-8'>
          <li>
            <h1 className='text-[2rem] -ml-[0.15rem] flex items-center gap-4'>
              Degree
              <span>🎓</span>
            </h1>
            <p className='text-[1rem] opacity-75'>Bachelor of Engineering (Honours)</p>
          </li>
          <li>
            <h1 className='text-[2rem] -ml-[0.15rem] flex items-center gap-4'>
              Major
              <span>💻</span>
            </h1>
            <p className='text-[1rem] opacity-75'>Software</p>
          </li>
          <li>
            <h1 className='text-[2rem] -ml-[0.15rem] flex items-center gap-4'>
              University
              <span>🏛️</span>
            </h1>
            <p className='text-[1rem] opacity-75'>University of New South Wales</p>
          </li>
          <li>
            <h1 className='text-[2rem] -ml-[0.15rem] flex items-center gap-4'>
              Current Year
            </h1>
            <p className='text-[1rem] opacity-75'>4th Year</p>
          </li>
          <li>
            <h1 className='text-[2rem] -ml-[0.15rem] flex items-center gap-4'>
              Graduation Date
            </h1>
            <p className='text-[1rem] opacity-75'>December 2026</p>
          </li>
        </ul>
      </div>
    </section>
  );
}