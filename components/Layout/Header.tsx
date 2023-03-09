import Link from 'next/link'
import styles from './Layout.module.scss'

export default () => {
  const blogListUrl = '/blogs/all'
  const homeUrl = '/'
  const otherUrl = '/other'
  return (
    <header
      className={
        'w-screen h-auto border-b-stone-300 list-none border-b py-3 ' +
        styles.header
      }
    >
      <div className={'w-4/5 flex text-sm m-auto'}>
        <li className="mr-4">
          <Link href={homeUrl}>Home</Link>
        </li>
        <li className="mr-4">
          <Link href={blogListUrl}>Blog</Link>
        </li>
        <li className="mr-4">
          <Link href={otherUrl}>Other</Link>
        </li>
      </div>
    </header>
  )
}
