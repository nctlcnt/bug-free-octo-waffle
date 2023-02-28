import { useEffect, useState } from 'react'
import { Layout } from '../../components'
import BlogsListItem from '../../components/BlogsListItem'
import { getSortedPostsData } from '../../lib/posts'
import useWindowDimensions from '../../lib/useWindowDimensions'
import { BlogItemDataType } from '../../types'

export async function getStaticProps({ params }) {
  const data = getSortedPostsData()
  const sortedIdMapping = data.map((item) => item.id)
  return {
    props: {
      data,
      sortedIdMapping,
    },
  }
}

export default ({
  data,
  sortedIdMapping,
}: {
  data: BlogItemDataType[]
  sortedIdMapping: string[]
}) => {
  const { height, width } = useWindowDimensions()
  const [itemWidths, setItemWidths] = useState({})
  const [pageHeight, setPageHeight] = useState(0)

  const itemWidth = width && (width * 0.79) / 3

  // console.log(itemWidth)
  return (
    <Layout className="bg-stone-200">
      <div
        className="flex grow w-4/5 m-auto justify-between my-3 relative"
        style={{ height: pageHeight }}
      >
        {data.map((post, index) => (
          <BlogsListItem
            {...post}
            key={post.id}
            width={itemWidth}
            index={index}
            setItemWidths={setItemWidths}
            itemWidths={itemWidths}
            sortedIdMapping={sortedIdMapping}
            setPageHeight={setPageHeight}
          />
        ))}
      </div>
    </Layout>
  )
}
