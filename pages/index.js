import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='relative container-homepage mx-auto px-6 h-screen text-center'>
        <p className='mt-32 inline-block bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-blue-600 uppercase text-sm sm:text-base md:text-lg lg:text-xl'>
          The Refactor Project
        </p>
        <h1 className='mt-6 max-w-4xl mx-auto text-4xl md:text-5xl xl:text-6xl tracking-tight leading-normal md:leading-snug lg:leading-tight xl:leading-tight'>
          Volunteer-made websites, for businesses and nonprofits.
        </h1>
        <p className='mt-16 max-w-lg mx-auto text-base sm:text-lg md:text-xl leading-loose sm:leading-loose md:leading-loose'>
          We transform the web by crafting responsive and performant websites to
          users on all devices.
        </p>
        <a
          href='#LINK'
          className='mt-72 block max-w-xs sm:max-w-sm md:max-w-md mx-auto bg-blue-400 text-white font-semibold uppercase rounded-md py-3 transition duration-200 hover:bg-gray-800'
        >
          Request a website
        </a>
      </section>
    </Layout>
  );
}
