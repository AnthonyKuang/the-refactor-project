import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container-homepage text-center'>
        <p className='mt-20 sm:mt-24 xl:mt-28 gradient-text from-blue-400 to-purple-500 text-sm sm:text-base md:text-lg lg:text-xl'>
          The Refactor Project
        </p>
        <h1 className='mt-6 max-w-4xl mx-auto heading-text'>
          Intern-made websites, for businesses and nonprofits.
        </h1>
        <p className='mt-16 max-w-lg mx-auto showcase-text'>
          We transform the web by crafting responsive and performant websites to
          users on all devices.
        </p>
        <a
          href='#LINK'
          className='mt-36 sm:mt-80 xl:mt-72 btn-primary max-w-xs sm:max-w-sm md:max-w-md'
        >
          Request a website
        </a>
      </section>

      <main className='mt-64 container-homepage'>
        <section>
          <div className='flex justify-between items-end'>
            <div className='max-w-3xl'>
              <p className='gradient-text from-blue-400 to-blue-600 text-sm sm:text-base lg:text-lg'>
                Design
              </p>
              <h2 className='text-4xl md:text-5xl mt-6'>
                Ideation and wireframing
              </h2>
              <p className='mt-12 showcase-text'>
                Our design team will create a mockup of your organization's
                website using web design software such as Figma and Adobe XD.
                Review our work and offer any improvements. Do not settle until
                you're satisfied.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='bg-blue-50 border border-blue-200 p-3 w-16 h-16 rounded-full grid place-items-center shadow-inner'>
                <Image
                  src='/images/adobe-xd.svg'
                  alt='Adobe XD'
                  width={46}
                  height={46}
                />
              </div>
              <div className='bg-blue-50 border border-blue-200 p-2 w-16 h-16 rounded-full grid place-items-center shadow-inner'>
                <Image
                  src='/images/figma.svg'
                  alt='Figma'
                  width={27}
                  height={41}
                />
              </div>
              <div className='bg-blue-50 border border-blue-200 p-2 w-16 h-16 rounded-full grid place-items-center shadow-inner'>
                <Image
                  src='/images/sketch.svg'
                  alt='Sketch'
                  width={45}
                  height={41}
                />
              </div>
            </div>
          </div>
          <div className='mt-20 transform scale-90'>
            <Image
              src='/images/mockups.svg'
              alt='Mockup wireframes'
              width={2117}
              height={1158}
            />
          </div>
        </section>
        <div className='mt-24'>
          <p className='gradient-text from-blue-400 to-blue-600 text-sm sm:text-base lg:text-lg'>
            Code
          </p>
          <h2 className='text-4xl md:text-5xl mt-6'>Building and testing</h2>
          <p className='mt-12 showcase-text max-w-3xl'>
            Our programming team will make your design a reality. Using
            cutting-edge technologies such as Next.js and TailwindCSS, your
            website will be optimized with world-class performance, best
            practices, and SEO.
          </p>
        </div>
        <div className='mt-72 container-homepage flex items-center'>
          <div className='max-w-md'>
            <div>
              <p className='gradient-text from-blue-400 to-blue-600 text-xs sm:text-sm lg:text-base'>
                Deploy
              </p>
              <h2 className='text-3xl md:text-4xl mt-4'>
                Enjoy your Refactored website!
              </h2>
              <p className='leading-loose mt-12'>
                We will deploy the website to the web, allowing you to see the
                final result. We guarantee that your web metric scores will
                improve. In the end, it is all up to your choice whether or not
                you wish to replace your current website.
              </p>
            </div>
            <div className='mt-16 flex items-center gap-8'>
              <Image
                src='/images/vercel.svg'
                alt='Vercel'
                width={51}
                height={45}
              />
              <Image
                src='/images/netlify.svg'
                alt='Netlify'
                width={55}
                height={55}
              />
              <Image
                src='/images/heroku.svg'
                alt='Heroku'
                width={40}
                height={63}
              />
            </div>
          </div>
          <div className='relative left-60 transform scale-150 shadow-xl'>
            <Image
              src='/images/website.png'
              alt='Website'
              width={1905}
              height={1007}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
