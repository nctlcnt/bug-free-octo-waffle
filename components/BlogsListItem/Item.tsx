import ItemOnlyPics from './ItemOnlyPics'
import TitleImageItem from './TitleImageItem'
import CustomItem from './CustomItem'
import TitleItem from './TitleItem'
import { BlogItemDataType } from '../../lib/types'

export default (props: BlogItemDataType & { setLoaded: Function }) => {
  if (props.img) {
    if (props.title) {
      return <TitleImageItem {...props} />
    } else {
      return <ItemOnlyPics {...props} />
    }
  } else {
    if (props.title) {
      return <TitleItem {...props} />
    } else {
      return <CustomItem {...props} />
    }
  }
}
