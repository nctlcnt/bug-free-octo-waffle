import { useEffect, useState } from 'react'
import BlogsListItem from '../../components/BlogsListItem'
import { getSortedPostsData } from '../../lib/posts'
import { BlogItemDataType } from '../../lib/types'
import { getMyPosition } from '../../lib/untils'
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
  const [loaded, setLoaded] = useState('')
  const [transform, setTransform] = useState([])
  const pageBottomPadding = 60
  const colNum = width > 900 ? 3 : 2

  const itemWidth = width && (width * 0.79) / colNum

  const findMaxPageHeight = (itemWidths, sortedIdMapping) => {
    let max = 0 // max height of the page
    for (let i = 0; i < colNum; i++) {
      let sum = 0
      for (let j = i; j < sortedIdMapping.length; j += colNum) {
        sum += itemWidths[sortedIdMapping[j]]
      }
      max = Math.max(max, sum)
    }
    return max
  }

  useEffect(() => {
    setTransform(
      sortedIdMapping.map((id, index) => {
        const x = (itemWidth + 10) * (index % colNum)
        const y = getMyPosition(sortedIdMapping, itemWidths, index, colNum)
        return `translate(${x}px, ${y}px)`
      })
    )
    setPageHeight(
      findMaxPageHeight(itemWidths, sortedIdMapping) + pageBottomPadding
    )
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 300) // temporary fix for the bug that the layout is not correct when the page is loaded
  }, [itemWidths, loaded])

  return (
    <>
      <div style={{ minHeight: '150px' }} className="relative">
        <div className=" absolute bottom-1 font-bold text-stone-700">
          <h1 className="text-6xl">Blog (with AI generated gibberish)</h1>
          <p className="text-xl text-stone-400 pt-2">
            And cute pics I have collected.
          </p>
        </div>
      </div>
      <div
        className="flex grow justify-between my-3 relative"
        style={{ height: pageHeight ? pageHeight : 0 }}
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
            setLoaded={setLoaded}
            transform={transform[index]}
          />
        ))}
      </div>
    </>
  )
}
