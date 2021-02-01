import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container-homepage mx-auto px-6'>
        <section className='mt-24 text-center'>
          <span className='bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-sm sm:text-base md:text-lg lg:text-xl uppercase'>
            The Refactor Project
          </span>
          <h1 className='max-w-4xl mx-auto mt-6 text-4xl md:text-5xl xl:text-6xl tracking-tight leading-normal md:leading-snug lg:leading-tight xl:leading-tight'>
            Volunteer-made websites, for businesses and nonprofits.
          </h1>
          <p className='mt-20 max-w-lg mx-auto text-base sm:text-lg md:text-xl leading-loose sm:leading-loose md:leading-loose'>
            We transform the web by crafting responsive and performant websites
            to users on all devices.
          </p>
          <a
            href='#LINK'
            className='block mt-8 text-center uppercase font-semibold text-white bg-blue-400 max-w-lg mx-auto rounded-md py-3'
          >
            Request a website
          </a>
        </section>
      </div>
    </Layout>
  );
}
