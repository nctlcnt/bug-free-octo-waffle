import Link from 'next/link'

export default () => {
  return (
    <header className="w-screen h-auto border-b-cyan-800 list-none border-b py-3">
      <div className="w-4/5 m-auto flex">
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
