import Link from 'next/link'
import Image from 'next/image'
import { BlogItemDataType } from '../../lib/types'

export default ({ img, id, title, width, setLoaded }: BlogItemDataType) => {
  const onLoad = () => {
    setLoaded(id)
  }
  return (
    <Link href={'/blogs/' + id} className="w-full inline-block">
      {width && (
        <img
          src={'/images/' + img}
          alt={title || 'image'}
          width={width ? width : 100}
          onLoad={onLoad}
        />
      )}
    </Link>
  )
}
