import Link from 'next/link'

const CustomLink = ({ href, onClick, children, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (!children) {
    return null
  }

  if (isInternalLink) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a onClick={onClick} {...rest}>
          {children}
        </a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a target="_blank" rel="noopener noreferrer" href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
