import useResource from "../useResource";
// import useDataSource from "../useDataSource";

const LargeProductListItem = ({productId}) => {
    const product = useResource(`/products/${productId}`)


  const { name, price, description } = product || {};

  return (

    product ? (
      <div className="container">
        <h3>{name}</h3>
        <p>Price: ${price} </p>
        <p>{description}</p>
      </div>
    ) : null

  )
}

export default LargeProductListItem