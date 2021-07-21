
import Head from 'next/head'
import Layout from '../components/layout'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import Image from 'next/image'

const Index = () => {
  // TODO: make these environment variables
  const theme = useTheme();
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('sm'));

  // Background video for > mobile
  const video = 
    <video className='object-cover w-screen h-screen fixed inset-0 -z-10' autoPlay loop muted>
      <source src="/SpiralAbyssMP4.mp4" type="video/mp4"></source>
    </video>;

  // Background image for mobile
  const image = 
    <div className='object-cover w-screen-h-screen'> 
      <Image className='-z-10' src='/images/spiralabyss.png' alt='spiralabyss' layout='fill' />
    </div>;


  return (
    <Layout>
      {!largerThanPhone ? 
        image
        :
        video
      }     
      <section className="section">
        <div></div>
      </section>
    </Layout>
  )
} 

export default Index;
