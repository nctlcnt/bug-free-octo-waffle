import { useEffect, useRef, useState } from 'react'
import { BlogItemDataType } from '../../lib/types'
import { getMyPosition } from '../../lib/untils'
import Item from './Item'
import styles from './Item.module.scss'

const pageBottomPadding = 20

export default ({
  index,
  setItemWidths,
  itemWidths,
  sortedIdMapping,
  setPageHeight,
  ...props
}: BlogItemDataType & {
  index: number
  setItemWidths: Function
  itemWidths: { [key: string]: number }
  sortedIdMapping: string[]
  setPageHeight: Function
}) => {
  const [height, setHeight] = useState(0)
  const [transform, setTransform] = useState({})
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setItemWidths((prev) => ({
      ...prev,
      [props.id]: ref.current.clientHeight,
    }))
  }, [props.width])

  useEffect(() => {
    if (index < 3 || itemWidths[sortedIdMapping[index - 3]]) {
      const x = (props.width + 10) * (index % 3)
      const y = getMyPosition(sortedIdMapping, itemWidths, index)
      setTransform({
        transform: `translate(${x}px, ${y}px)`,
      })
      setPageHeight((prev) =>
        Math.max(prev, y + ref.current.clientHeight + pageBottomPadding)
      )
    }
  }, [itemWidths, props.width])

  return (
    <div
      ref={ref}
      className={
        'my-3 w-1/3 h-fit flex absolute bg-neutral-50 ' + styles.postItem
      }
      style={{
        width: props.width,
        ...transform,
      }}
    >
      <Item {...props} />
    </div>
  )
}
