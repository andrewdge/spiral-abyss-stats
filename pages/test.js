import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Test() {
  
  return (
    <>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="GenshinImpact"
        theme="dark"
        noHeader
        noFooter
        options={{tweetLimit: 1, height:'300'}}
      />
    </>
  )
}
