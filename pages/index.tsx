
import Head from 'next/head'
import Layout from '../components/layout'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Image from 'next/image'

const Index = ({ twitter }) => {
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
    <>
      
      <Layout twitter={twitter}>
        {!largerThanPhone ? 
          image
          :
          video
        }
        <section className="section">
          <div></div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps(ctx) {
  const twitterRes = await fetch('https://publish.twitter.com/oembed?url=https://twitter.com/GenshinImpact&&limit=5&&dnt=true&&maxheight=400')
  console.log(twitterRes)
  const twitter = await twitterRes.json()
  console.log(twitter)
  return {
      props: { twitter: twitter.html }
  }
}


export default Index;
