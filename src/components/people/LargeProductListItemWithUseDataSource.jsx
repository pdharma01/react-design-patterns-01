import useResource from "../useResource";
import useDataSource from "../useDataSource";
import { products } from '../data.js'

const LargeProductListItemWithUseDataSource = ({ productId }) => {

//  Choose Data Source Function 
    const fetchFromServer = async () => {
        let url = `http://localhost:5000/products/${productId}`
        let response = await fetch(url)
        if (!response.ok) return console.log("fetch not ok!");
        let data = await response.json()
        return data
    }

    const localStorage = () => {
        return products[productId]
    }



    const product = useDataSource(localStorage)


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

export default LargeProductListItemWithUseDataSource