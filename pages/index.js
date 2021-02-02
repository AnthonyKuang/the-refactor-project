import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container-homepage text-center'>
        <p className='mt-20 sm:mt-28 xl:mt-32 gradient-text'>
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

      <main className='mt-36 container-homepage'>
        <h2 className='uppercase'>A refactored website</h2>
        <div></div>
      </main>
    </Layout>
  );
}
