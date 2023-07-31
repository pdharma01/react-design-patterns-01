const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
  return (
    <>
    {items.map((item, index)=> (
        <ItemComponent key={index+ "regListKey"} {...{[resourceName] : item}}/>
    ))}
    </>
  )
}

export default RegularList