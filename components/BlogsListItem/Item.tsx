import { BlogItemDataType } from '../../types'
import ItemOnlyPics from './ItemOnlyPics'
import ItemWithDescription from './ItemWithDescription'
import ItemWithPics from '../BlogsListItem/ItemWithPics'
import TitleItem from './TitleItem'

export default (props: BlogItemDataType) => {
  if (props.img) {
    if (props.description) {
      return <ItemWithPics {...props} />
    } else {
      return <ItemOnlyPics {...props} />
    }
  } else {
    if (props.description) {
      return <ItemWithDescription {...props} />
    } else {
      return <TitleItem {...props} />
    }
  }
}
