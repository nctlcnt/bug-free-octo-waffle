import Link from 'next/link'
import Image from 'next/image'
import { BlogItemDataType } from '../../lib/types'
import DateLeftBottom from './DateLeftBottom'

export default (props: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + props.id} className="w-full inline-block h-fit">
      <div style={{ height: props.width, overflow: 'hidden' }}>
        <Image
          src={'/images/' + props.img}
          alt={props.title}
          width={props.width ? props.width : 100}
          height={props.width ? 2 * props.width : 200}
          onLoad={() => props.setLoaded(props.id)}
        />
      </div>
      <div className="p-4">
        <h2 className="font-xl font-bold mb-10">{props.title}</h2>
        <DateLeftBottom date={props.date} />
        <p className="font-light">{props.description}</p>
      </div>
    </Link>
  )
}
