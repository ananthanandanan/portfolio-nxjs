import Image from 'next/image'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/social-icons'
import portraitImage from '../public/static/images/ANK_passportsize.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className="flex">
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  const { author, email, linkedin, github } = siteMetadata
  return (
    <>
      <Head>
        <title>{`About - ${author}`}</title>
        <meta
          name="description"
          content="Hi, I'm K N Anantha nandanan. I'm a software engineer and a lifelong learner. I'm passionate about building great software and sharing what I learn along the way."
        />
      </Head>
      <Container className="mt-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="portrait of K N Anantha nandanan"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm K N Anantha nandanan.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have always been a guy who had a mind of a vagabond, the mind wanders to find
                answers to questions which excites me and I always try to reach the root of those
                questions. What is life, when you don't question it? and now I am currently in the
                midst of pursuing my B.Tech in Computer Science. As a software engineer, I have
                always been drawn to the challenge of problem-solving and the rewarding feeling of
                finding a solution. It's this love of problem-solving that has driven me to become a
                better programmer and team player.
              </p>
              <p>
                When I'm not working, I like to unwind by reading web novels or hitting the gym.
                I've always been a fitness junkie and enjoy the sense of accomplishment that comes
                with pushing myself to be the best version of myself.
              </p>
              <p>
                But despite my love of reading and staying active, my true passion lies in the world
                of technology. I am a driven and focused individual who is always looking for new
                challenges and opportunities to grow and improve. I am excited to see where my
                career in tech takes me and am confident that my skills and determination will lead
                me to success.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${email}`}
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ananthanandanan@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
