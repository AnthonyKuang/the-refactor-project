import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container bg-yellow-50 dark:bg-yellow-900'>
        <h1 className='text-4xl font-light dark:text-white'>
          The Refactor Project
        </h1>
      </div>
    </div>
  );
}
