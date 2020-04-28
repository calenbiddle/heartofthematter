/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import useSiteMetadata from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
        {` `}
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <div>
        <Link to="/episodes">Episodes</Link>
        {` `}
        <Link to="/about">About</Link>
        {` `}
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  )
}

export default Footer