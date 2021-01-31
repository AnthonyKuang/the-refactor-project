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
          <div className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700'>
            The Refactor Project
          </div>
          <h1 className='text-5xl font-semibold text-gray-700'>
            Volunteer-made websites, for clubs and nonprofits.
          </h1>
          <p>
            We transform the web by crafting responsive and performant websites
            to users on all devices.
          </p>
        </section>
      </div>
    </Layout>
  );
}
