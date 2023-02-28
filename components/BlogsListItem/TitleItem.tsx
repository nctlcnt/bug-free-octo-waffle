import Link from 'next/link'
import { BlogItemDataType } from '../../types'
import styles from './Item.module.scss'

export default ({ id, title, date }: BlogItemDataType) => {
  return (
    <Link
      href={'/blogs/' + id}
      className="w-full inline-block px-5 m-auto py-10"
    >
      <h2 className="font-xl font-bold">{title}</h2>
      <p className="font-light">{date}</p>
    </Link>
  )
}
