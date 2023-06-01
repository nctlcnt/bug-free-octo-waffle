import { useEffect, useRef, useState } from 'react'
import { BlogItemDataType } from '../../lib/types'
import Item from './Item'
import styles from './Item.module.scss'

export default ({
  index,
  setItemWidths,
  itemWidths,
  sortedIdMapping,
  setPageHeight,
  setLoaded,
  transform,
  loaded,
  ...props
}: BlogItemDataType & {
  index: number
  setItemWidths: Function
  itemWidths: { [key: string]: number }
  sortedIdMapping: string[]
  setPageHeight: Function
  setLoaded: Function
  transform: string
  loaded: string
}) => {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    setHeight(ref.current.clientHeight)
    setItemWidths((prev) => ({
      ...prev,
      [props.id]: ref.current.clientHeight,
    }))
  }, [props.width, loaded])

  return (
    <div
      ref={ref}
      className={'my-3 h-fit flex absolute bg-stone-50 ' + styles.postItem}
      style={{
        width: props.width,
        transform: transform,
      }}
    >
      <Item {...props} setLoaded={setLoaded} />
    </div>
  )
}
