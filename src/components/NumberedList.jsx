const NumberedList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
  return (
    <>
    {items.map((item, index)=> (
        <div key={index + "numListKey"}>
        <h3>{index + 1}</h3>
        <ItemComponent  {...{[resourceName] : item}}/>
        </div>
    ))}
    </>
  )
}

export default NumberedList