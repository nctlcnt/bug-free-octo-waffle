import Link from 'next/link'
import { Layout } from '../../components'
import BlogsListItem from '../../components/BlogsListItem'
import { getAllPostIds } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const paths = getAllPostIds()
  return {
    props: {
      paths,
    },
  }
}

export default ({ paths }) => {
  return (
    <Layout>
      <div className="flex grow w-4/5 m-auto">
        {paths.map(({ params }) => (
          <BlogsListItem {...params} key={params.id} />
        ))}
      </div>
    </Layout>
  )
}
