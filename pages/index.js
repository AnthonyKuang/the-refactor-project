import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container-homepage mx-auto px-4'>
        <section className='mt-24 text-center'>
          <span className='bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-base xs:text-lg sm:text-xl md:text-2xl'>
            The Refactor Project
          </span>
          <h1 className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mt-6 max-w-3xl mx-auto'>
            Volunteer-made websites, for clubs and nonprofits.
          </h1>
          <p className='mt-20'>
            We transform the web by crafting responsive and performant websites
            to users on all devices.
          </p>
        </section>
      </div>
    </Layout>
  );
}
