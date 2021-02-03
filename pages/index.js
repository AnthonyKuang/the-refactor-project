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
        <p className='mt-20 sm:mt-28 xl:mt-32 gradient-text text-sm sm:text-base md:text-lg lg:text-xl'>
          The Refactor Project
        </p>
        <h1 className='mt-6 max-w-4xl mx-auto heading-text'>
          Volunteer-made websites, for businesses and nonprofits.
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

      <main className='mt-60'>
        <div className='container-homepage'>
          <p className='gradient-text text-xs sm:text-sm lg:text-base'>
            Design
          </p>
          <h2 className='text-3xl md:text-4xl mt-4'>
            Ideation and wireframing
          </h2>
          <p className='showcase-text mt-8'>
            Our design team will create a mockup of your organization's website
            using web design software such as Figma and Adobe XD. Review our
            work and offer improvements. Do not settle until you're satisfied.
          </p>
          <div className='shadow-xl inline-block'>
            <Image
              src='/style-guide.svg'
              alt='Style Guide'
              width={1202}
              height={1390}
            />
          </div>
        </div>
        <div className='container-homepage mt-24'>
          <p className='gradient-text text-xs sm:text-sm lg:text-base'>Code</p>
          <h2 className='text-3xl md:text-4xl mt-4'>Building and testing</h2>
          <p className='showcase-text mt-8'>
            Our programming team will make your design a reality. Using
            cutting-edge technologies such as Next.js and TailwindCSS, your
            website will be optimized with world-class performance, best
            practices, and SEO.
          </p>
          <Image
            src='/code-showcase.svg'
            alt='Code Showcase'
            width={1698}
            height={1336}
          />
        </div>
        <div className='container-homepage mt-24'>
          <p className='gradient-text text-xs sm:text-sm lg:text-base'>
            Deploy
          </p>
          <h2 className='text-3xl md:text-4xl mt-4'>
            Enjoy your Refactored website!
          </h2>
          <p className='showcase-text mt-8'>
            We will deploy the website to the web through Vercel, allowing you
            to see the final result. We guarantee that your web metric scores
            will improve. In the end, it is all up to your choice whether or not
            you wish to replace your current website.
          </p>
        </div>
      </main>
    </Layout>
  );
}
