export default ({ item: { title, description } }) => {
  return (
    <div className="h-72 mt-6 rounded overflow-hidden">
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
    </div>
  )
}
