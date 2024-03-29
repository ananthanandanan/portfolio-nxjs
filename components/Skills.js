/* eslint-disable prettier/prettier */
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  // SiTailwindcss,
  SiGit,
  SiDjango,
  SiGraphql,
  SiPython,
  SiDocker,
  SiLinux,
  SiMongodb,
} from 'react-icons/si'

import { motion } from 'framer-motion'
import { showHoverAnimation, removeHoverAnimation } from '../lib/windowAnimation'
import { FadeContainer, popUp } from '../lib/FramerMotionVariants'

const skills = [
  {
    name: 'Python',
    logo: SiPython,
  },
  {
    name: 'Django',
    logo: SiDjango,
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
  },
  {
    name: 'Node.js',
    logo: SiNodedotjs,
  },
  {
    name: 'GraphQL',
    logo: SiGraphql,
  },
  {
    name: 'Git',
    logo: SiGit,
  },
  {
    name: 'Docker',
    logo: SiDocker,
  },
  {
    name: 'Linux',
    logo: SiLinux,
  },
  {
    name: 'React',
    logo: SiReact,
  },
  // {
  //   name: 'Tailwind CSS',
  //   logo: SiTailwindcss,
  // },
  {
    name: 'Nextjs',
    logo: SiNextdotjs,
  },

  {
    name: 'PostgreSQL',
    logo: SiPostgresql,
  },
  {
    name: 'MongoDB',
    logo: SiMongodb,
  },
]

const Skills = () => {
  return (
    <>
      <span className="font-poppins title-font text-3xl font-bold">My Top Skills</span>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="my-10 grid grid-cols-3 gap-4"
      >
        {skills.map((skill, index) => {
          return (
            <motion.div
              title={skill.name}
              variants={popUp}
              key={skill.name}
              onMouseMove={(e) => showHoverAnimation(e)}
              onMouseLeave={(e) => removeHoverAnimation(e)}
              className="dark:bg-darkPrimary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
            >
              <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
                <skill.logo className="h-8 w-8" />
              </div>
              <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </>
  )
}

export default Skills
