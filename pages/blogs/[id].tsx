import Link from 'next/link'
import { Layout } from '../../components'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from '../../styles/Post.module.scss'

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
    <>
      <div className="grow h-auto">
        <h1 className="text-xl">{postData.title}</h1>
        <p className=" text-stone-300 pb-3">{postData.date}</p>
        <div
          className={styles.postBody}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <Link href="/blogs/all">Go back to list</Link>
      </div>
    </>
  )
}
