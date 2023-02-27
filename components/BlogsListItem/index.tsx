import { BlogItemDataType } from '../../types'
import Item from './Item'

export default (props: BlogItemDataType) => {
  return (
    <div
      className={'bg-yellow-400 my-3 w-1/3 h-fit flex'}
      style={{
        width: props.width,
        minHeight: props.width ? props.width / 2 : 100,
      }}
    >
      <Item {...props} />
    </div>
  )
}
