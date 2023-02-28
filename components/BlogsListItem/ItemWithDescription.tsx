import Link from 'next/link'
import { BlogItemDataType } from '../../types'

export default ({ id, description, date, title }: BlogItemDataType) => {
  return (
    <Link href={'/blogs/' + id} className="w-full h-full inline-block p-4">
      <h2 className="font-xl font-bold">{title}</h2>
      <p className="font-light">{date}</p>
      <p className="font-light">{description}</p>
    </Link>
  )
}
