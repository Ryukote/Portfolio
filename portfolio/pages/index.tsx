import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className='dark:bg-slate-800 text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Antonio's portfolio</title>
      </Head>

      {/* <h1 className='text-red-500'>
        My portfolio
      </h1> */}

      <Header />

      <section id="banner" className='snap-center'>
        <Banner />
      </section>
    </div>
  )
}

export default Home
