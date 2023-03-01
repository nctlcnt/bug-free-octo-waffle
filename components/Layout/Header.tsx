import Link from 'next/link'
import styles from './Layout.module.scss'

export default ({ className = '' }) => {
  return (
    <header
      className={
        className +
        ' w-screen h-auto border-b-stone-300 list-none border-b py-3 ' +
        styles.header
      }
    >
      <div className="w-4/5 m-auto flex text-sm ">
        <li className="mr-4">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="mr-4">
          <Link href={'/blogs/all'}>Blog</Link>
        </li>
        <li className="mr-4">
          <Link href={'/Other'}>Other</Link>
        </li>
      </div>
    </header>
  )
}
