import Link from 'next/link'
import Image from 'next/image'
import { BlogItemDataType } from '../../lib/types'

export default ({ img, id, title, width }: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + id} className="w-full inline-block">
      {/* <Image
        src={'/images/' + img}
        alt={title}
        width={width ? width : 100}
        height={width ? 2 * width : 200}
      /> */}
      <img src={'/images/' + img} alt={title} width={width ? width : 100} />
    </Link>
  )
}
