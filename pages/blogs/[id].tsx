import Link from 'next/link'
import { Layout } from '../../components'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default ({ postData }) => {
  return (
    <Layout>
      <div className="grow">
        <h1>{postData.title}</h1>
        <p>{postData.id}</p>
        <p>{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Link href="/blogs/all">Go back to list</Link>
      </div>
    </Layout>
  )
}
