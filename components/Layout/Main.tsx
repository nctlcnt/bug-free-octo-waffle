export default ({ left, right, isHome }) => {
  return (
    <div className="grow flex">
      {isHome ? (
        <>
          <div className="w-2/3 h-full flex-auto">{left}</div>
          <div className="w-1/3 h-full flex-auto">{right}</div>
        </>
      ) : null}
    </div>
  )
}
