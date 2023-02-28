import Link from 'next/link'
import { BlogItemDataType } from '../../lib/types'
import DateLeftBottom from './DateLeftBottom'
import styles from './Item.module.scss'

export default ({ id, title, date, category }: BlogItemDataType) => {
  return (
    <Link
      href={'/blogs/' + id}
      className="w-full p-5 bg-yellow-400 flex flex-col"
    >
      {category && <div className="mb-5 text-sm">{category}</div>}
      <h2 className="text-xl mb-10  text-neutral-600 font-light">{title}</h2>
      <DateLeftBottom date={date} />
    </Link>
  )
}
