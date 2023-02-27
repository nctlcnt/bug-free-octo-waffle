import { useEffect, useState } from 'react'
import { Layout } from '../../components'
import BlogsListItem from '../../components/BlogsListItem'
import { getSortedPostsData } from '../../lib/posts'
import useWindowDimensions from '../../lib/useWindowDimensions'
import { BlogItemDataType } from '../../types'

export async function getStaticProps({ params }) {
  const data = getSortedPostsData()
  return {
    props: {
      data,
    },
  }
}

export default ({ data }: { data: BlogItemDataType[] }) => {
  const { height, width } = useWindowDimensions()

  const itemWidth = width && (width * 0.79) / 3
  console.log(itemWidth)
  return (
    <Layout className="bg-stone-200">
      <div className="flex grow w-4/5 m-auto justify-between my-3 flex-wrap">
        {data.map((post) => (
          <BlogsListItem {...post} key={post.id} width={itemWidth} />
        ))}
      </div>
    </Layout>
  )
}
