import Link from 'next/link'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLogoTwitter } from 'react-icons/io5'
import Notification from './Notification'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="-m-1 p-1 " {...props} legacyBehavior>
      <Icon className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200" />
    </Link>
  )
}

function CopyToClipboard({ icon: Icon, text, ...props }) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(text.contact)
    setShow(!show)

    setTimeout(() => {
      setShow(false)
    }, 3000)
  }

  return (
    <div className="-m-1 p-1 " {...props}>
      <Icon
        className="h-6 w-6 cursor-pointer fill-gray-500 transition hover:fill-gray-200"
        onClick={handleClick}
      />
      <Notification show={show} setShow={setShow} text={text} />
    </div>
  )
}

export default function Hero() {
  return (
    <div className="mb-5 max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        Web developer, techie and, fitness junkie.
      </h1>
      <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
        I'm K N Anantha nandanan based in Kerala, India. I am a web developer and ML Researcher and
        currently pursuing my B.Tech in Computer Science and Engineering. I enjoy working with a
        team to solve problems and build solutions. On this website, you will find a collection of
        my past projects and experiences as well as my thoughts and insights on the tech industry.
      </p>
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://github.com/ananthanandanan"
          aria-label="Check out my Github"
          icon={IoLogoGithub}
        />
        <SocialLink
          href="https://www.linkedin.com/in/de-blank/"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoLinkedin}
        />
        <SocialLink
          href="https://twitter.com/Ananthan2k"
          aria-label="Connect with me on LinkedIn"
          icon={IoLogoTwitter}
        />
        <CopyToClipboard
          text={{ contact: 'ananthanandanan@gmail.com', type: 'Email' }}
          aria-label="Send me an email"
          icon={IoMail}
        />

        {/* <CopyToClipboard
          text={{ contact: '+91 8921397828', type: 'Phone number' }}
          aria-label="Give me a call"
          icon={IoCall}
        /> */}
      </div>
    </div>
  )
}
// <div className="flex flex-col w-full">
//   <div className="pb-4 space-y-2 text-center md:space-y-5 md:text-left">
//     <PageTitle>Web Developer, Tech Enthusiast, and Fitness Junkie</PageTitle>
//     <p className="pb-4 text-lg leading-7 prose text-gray-400 max-w-none">
//       Technology enthusiast experienced in consumer electronics industry. I believe the optimal
//       code is achieved when the user and development experience is frictionless and intuitive.{' '}
//       <Link href={`mailto:${siteMetadata.email}`}>
//         <a
//           className="font-medium leading-6 "
//           aria-label={`Email to ${siteMetadata.email}`}
//           title={`Email to ${siteMetadata.email}`}
//         >
//           Get in touch &rarr;
//         </a>
//       </Link>
//     </p>
//   </div>
// </div>
