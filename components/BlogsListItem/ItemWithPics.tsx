import Link from 'next/link'
import { BlogItemDataType } from '../../types'
import Image from 'next/image'

export default (props: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + props.id} className="w-full inline-block h-fit">
      <div style={{ height: props.width, overflow: 'hidden' }}>
        <Image
          src={'/images/' + props.img}
          alt={props.title}
          width={props.width ? props.width : 100}
          height={props.width ? 2 * props.width : 200}
        />
      </div>
      <div className="p-4">
        <h2 className="font-xl font-bold">{props.title}</h2>
        <p className="font-light">{props.date}</p>
        <p className="font-light">{props.description}</p>
      </div>
    </Link>
  )
}
