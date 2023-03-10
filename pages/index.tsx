
import Head from 'next/head'
import Layout from '../components/layout'
import { useTheme } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'
import FileNames from '../data/fileNames.json'
import PhaseDataContent from '../components/phaseDataContent'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import Image from 'next/image'
import FloorTab from '../components/floorTab'
import useSWR from 'swr'
import { fileState, phaseNameState } from '../data/recoil/atoms'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

const Index = () => {
  const [file, setFile] = useRecoilState(fileState);
  const [phaseName, setPhaseName] = useRecoilState(phaseNameState);
  useEffect(()=>{
    setPhaseName(FileNames[0])
  },[])

  const fetcher = async (url)=>  await fetch(url).then(res=>res.json());
  const {data: fileData, error: fileError} = useSWR(`https://spiralabyss.s3.amazonaws.com/${FileNames[0]}.json`, fetcher);
  
  fileData && setFile(fileData);
  
  
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
    <div className='w-screen h-screen -z-10 fixed block'> 
      <Image className='z-0 h-full' src='/images/spiralabyss.png' alt='spiralabyss' height="100" width="100" style={{width:"100%", objectFit:"cover"}}/>
    </div>;

  return (
    <>
      <Head>
          <meta name="description" content="Data on the most recent iteration of Genshin Impact's Spiral Abyss" />
      </Head>
      <Layout >
        {!largerThanPhone ? 
          image
          :
          video
        }
        <section className="section">
          <FloorTab/>
            {/* <PhaseDataContent />
          </FloorTab> */}
        </section>
      </Layout>
    </>
  )
}

// export async function getStaticProps(ctx) {
//   const res = await fetch(`https://spiralabyss.s3.amazonaws.com/${FileNames[0]}.json`)
//   const file = await res.json()
//   const twitterRes = await fetch('https://publish.twitter.com/oembed?url=https://twitter.com/GenshinImpact&&limit=5&&dnt=true&&maxheight=400')
//   // console.log(twitterRes)
//   const twitter = await twitterRes.json()
//   // console.log(twitter)
//   return {
//       props: { file: file, twitter: twitter.html, phaseName: FileNames[0]}
//   }
// }


export default Index;
