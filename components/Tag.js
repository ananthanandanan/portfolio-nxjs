import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mx-1 text-sm font-medium uppercase hover:text-primary-600"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
