import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

const Index = () => {
  return (
    <Layout className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div>
        <video className='object-cover w-screen h-screen fixed inset-0 -z-10' autoPlay loop muted>
          <source src="/SpiralAbyssMP4.mp4" type="video/mp4"></source>
        </video>
      </div>
      <section className="section">
        <div></div>
      </section>
    </Layout>
  )
} 

export default Index;
