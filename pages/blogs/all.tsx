import { useEffect, useState } from 'react'
import BlogsListItem from '../../components/BlogsListItem'
import { getSortedPostsData } from '../../lib/posts'
import { BlogItemDataType } from '../../lib/types'
import useWindowDimensions from '../../lib/useWindowDimensions'

export async function getStaticProps({ params }) {
  const data = getSortedPostsData()
  const sortedIdMapping = data.map((item) => item.id)
  return {
    props: {
      data,
      sortedIdMapping,
      bgColor: 'bg-stone-200',
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
    <>
      <div style={{ minHeight: '150px' }} className="relative">
        <h1 className="text-6xl absolute bottom-1 font-bold text-stone-700">
          Blog
        </h1>
      </div>
      <div
        className="flex grow justify-between my-3 relative"
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
    </>
  )
}
