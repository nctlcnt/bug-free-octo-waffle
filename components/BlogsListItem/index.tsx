import Link from 'next/link'
import styles from './Item.module.scss'

type BlogsListItemProps = {
  id: string
}

export default (props: BlogsListItemProps) => {
  return (
    <div className={styles.ItemContainer}>
      <Link href={'/blogs/' + props.id} className="w-full h-full">
        <div>{props.id}</div>
      </Link>
    </div>
  )
}
