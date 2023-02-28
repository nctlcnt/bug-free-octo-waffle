import Link from 'next/link'
import { BlogItemDataType } from '../../types'
import Image from 'next/image'

export default ({ img, id, title, width }: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + id} className="w-full inline-block">
      <Image
        src={'/images/' + img}
        alt={title}
        width={width ? width : 100}
        height={width ? 2 * width : 200}
      />
    </Link>
  )
}
