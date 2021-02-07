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

      <section className='pb-28'>
        <div className='container-homepage text-center'>
          <p className='mt-20 sm:mt-24 xl:mt-28 gradient-text from-blue-400 to-purple-500 text-sm sm:text-base md:text-lg lg:text-xl'>
            The Refactor Project
          </p>
          <h1 className='mt-6 max-w-4xl mx-auto heading-text'>
            Volunteer-made websites, for businesses and nonprofits.
          </h1>
          <p className='mt-16 max-w-lg mx-auto showcase-text'>
            We transform the web by crafting responsive and performant websites
            to users on all devices.
          </p>
          <a
            href='#LINK'
            className='mt-36 sm:mt-80 xl:mt-72 btn-primary max-w-xs sm:max-w-sm md:max-w-md'
          >
            Request a website
          </a>
        </div>
      </section>

      <main className='pt-28 border-t-4 border-gray-50'>
        <section>
          <div className='container-homepage'>
            <div className='max-w-3xl'>
              <p className='gradient-text from-blue-400 to-blue-600 text-sm sm:text-base lg:text-lg'>
                Design
              </p>
              <h2 className='text-4xl md:text-5xl mt-6'>
                Ideation and wireframing
              </h2>
              <p className='mt-12 showcase-text'>
                Our design team will create a mockup of your organization's
                website using web design software such as{' '}
                <a
                  href='https://www.figma.com'
                  target='_blank'
                  className='text-blue-500'
                >
                  Figma
                </a>
                ,{' '}
                <a
                  href='https://www.sketch.com'
                  target='_blank'
                  className='text-blue-500'
                >
                  Sketch
                </a>
                , and{' '}
                <a
                  href='https://www.adobe.com/products/xd'
                  target='_blank'
                  className='text-blue-500'
                >
                  Adobe XD
                </a>
                . Review our work and offer any improvements. Do not settle
                until you're satisfied.
              </p>
            </div>
          </div>
          <div className='mt-20 max-w-6xl mx-auto shadow-2xl leading-0 rounded-2xl'>
            <Image
              src='/images/style-guide.svg'
              alt='Style guide'
              width={3300}
              height={2050}
            />
          </div>
        </section>

        <section className='mt-36'>
          <div className='container-homepage'>
            <div className='max-w-3xl'>
              <p className='gradient-text from-purple-500 to-purple-600 text-sm sm:text-base lg:text-lg'>
                Code
              </p>
              <h2 className='text-4xl md:text-5xl mt-6'>
                Building and testing
              </h2>
              <p className='mt-12 showcase-text'>
                Our programming team will make your design a reality. Using
                cutting-edge technologies such as Next.js and TailwindCSS, your
                website will be optimized with world-class performance, best
                practices, and SEO.
              </p>
            </div>
          </div>
          <div className='mt-20 max-w-6xl mx-auto shadow-2xl leading-0 rounded-2xl'>
            <Image
              src='/images/style-guide.svg'
              alt='Style guide'
              width={3300}
              height={2050}
            />
          </div>
        </section>

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
