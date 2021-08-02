import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function Test() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

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
