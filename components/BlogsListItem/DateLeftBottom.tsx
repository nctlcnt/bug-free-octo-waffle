export default ({ date, className = '' }) => {
  return (
    <p className={'font-light text-xs text-neutral-600 ' + className}>{date}</p>
  )
}
