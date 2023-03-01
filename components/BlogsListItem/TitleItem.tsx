import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'

import Link from 'next/link'
import { BlogItemDataType } from '../../lib/types'
import DateLeftBottom from './DateLeftBottom'
import styles from './Item.module.scss'

export default ({ id, title, date, category }: BlogItemDataType) => {
  return (
    <div className="w-full p-5 bg-yellow-400 flex flex-col pb-8">
      {category && (
        <div className="mb-10 font-medium text-sm inline-block text-stone-600">
          {category}
        </div>
      )}
      <h2 className="text-xl mb-10  text-neutral-600 font-light">
        <Link href={'/blogs/' + id}>{title}</Link>
      </h2>
      <div className="flex justify-between items-center">
        <DateLeftBottom date={date} />
        <span className="inline-block w-8 h-8">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="text-stone-600"
          />
        </span>
      </div>
    </div>
  )
}
