import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>The Refactor Project</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>I'm some content!!</div>
    </Layout>
  );
}
