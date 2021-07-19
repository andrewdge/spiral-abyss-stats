import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

// .spiralvideo {
//   object-fit: cover;
// width: 100vw;
// height: 100vh;
// position: fixed;
// top: 0;
// left: 0;
//   z-index: -1;
// }

//https://spiralabyss.s3.amazonaws.com/SpiralAbyssMP4.mp4

const Index = () => {
  return (
    <Layout className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div>
        <video className='object-cover w-screen h-screen fixed inset-0 -z-1' autoPlay loop muted>
          <source src="https://spiralabyss.s3.amazonaws.com/SpiralAbyssMP4.mp4" type="video/mp4"></source>
        </video>;
      </div>
      <section className="section">
        <div></div>
      </section>
    </Layout>
  )
} 

export default Index;
