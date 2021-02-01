import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container-homepage mx-auto px-6 text-center'>
        <p className='mt-20 sm:mt-28 xl:mt-32 inline-block bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-blue-600 uppercase text-sm sm:text-base md:text-lg lg:text-xl font-medium'>
          The Refactor Project
        </p>
        <h1 className='mt-6 max-w-4xl mx-auto text-3xl md:text-5xl xl:text-6xl tracking-tight leading-normal md:leading-snug lg:leading-tight xl:leading-tight'>
          Volunteer-made websites, for businesses and nonprofits.
        </h1>
        <p className='mt-16 max-w-lg mx-auto text-base sm:text-lg md:text-xl leading-loose sm:leading-loose md:leading-loose'>
          We transform the web by crafting responsive and performant websites to
          users on all devices.
        </p>
        <a
          href='#LINK'
          className='mt-36 sm:mt-72 block max-w-xs sm:max-w-sm md:max-w-md mx-auto border-blue-400 border-2 bg-blue-400 text-white font-medium uppercase rounded-md py-3 transition duration-200 hover:bg-white hover:text-blue-400'
        >
          Request a website
        </a>
      </section>

      <section className='mt-36 container-homepage mx-auto px-6'>asasa</section>
    </Layout>
  );
}
