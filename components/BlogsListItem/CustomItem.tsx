import Link from 'next/link'
import Image from 'next/image'
import { BlogItemDataType } from '../../lib/types'

export default (props: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + props.id} className="w-full inline-block h-fit">
      <div
        className="bg-gray-300 flex"
        style={{
          width: props.width ? props.width : 100,
          height: props.width ? props.width : 100,
        }}
      >
        <div className="bg-stone-200 h-8 leading-8 w-2/3 text-center m-auto">
          View Detail
        </div>
      </div>
    </Link>
  )
}
