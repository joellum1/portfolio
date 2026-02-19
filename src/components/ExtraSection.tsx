import Image from 'next/image';

import Card from '@/components/ui/Card';

export default function ExtraSection() {
  const extracurriculars = [
    {
      name: 'UNSW Engineering Society',
      description: '',
      image: '',
    }
  ];
  return (
    <section 
      id='extra'
      className='flex flex-col scroll-mt-4'
    >
      <h2 className='px-24 py-12 text-[3rem]'>
        Extracurriculars
      </h2>

      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-4'> {/* originally h-64 */}
          <div className='w-full px-24 py-8 bg-blue-700 rounded-2xl'>
            <p className='text-sm text-[#fefefe]'>
              As the lead coordinator for some of the society&apos;s flagship events, I transformed ideas scribbled on paper into reality, drawing in 300+ students and managing a $10k budget.
              Turns out coordinating at that scale is harder than any coding problem I&apos;ve tackled so far 😅
              <br/><br/>
              Through the sea of spreadsheets and last-minute chaos, I aligned my team around concrete timelines and deliverables that actually worked around busy exam schedules and personal commitments.
              <br/><br/>
              I get why people like working alone now, but honestly, without an incredible team, we couldn&apos;t have possibly pulled off events this successful. Some problems are worth the extra hassle 😊
            </p>        
          </div>
          <div className='w-2xl bg-[#efefef] rounded-2xl flex items-center justify-center gap-2 p-2'>
            <Image 
              src='/images/engsoc-logo.png'
              alt='UNSW Engineering Society logo'
              width={64}
              height={64}
            />
            <div>
              <p className='text-2xl'>UNSW Engineering Society</p>
              <p className='text-gray-500'>Director of Programs Portfolio</p>
            </div>
          </div>
        </div>

        {/* <div className='h-64 flex flex-row gap-4'>
          <div className='w-2xl bg-[#efefef] rounded-2xl flex items-center justify-center gap-2'>
            <p className='text-2xl'>Personal Hobbies</p>
          </div>
          <div className='w-full px-24 py-12 bg-blue-700 rounded-2xl'>
            <p className='text-sm text-[#fefefe]'>
              
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}