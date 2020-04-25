/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Listing from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import useMinimalBlogConfig from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import SEO from "../../../../node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/seo"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      <SEO title="Episodes" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Styled.h2>Episodes</Styled.h2>
        <Styled.a as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          View all tags
        </Styled.a>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog