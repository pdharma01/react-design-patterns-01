const ProductInfoForm =({ product, onChangeProduct, onSaveProduct, onResetProduct }) => {
    const { name, price, rating } = product || {};

    return product ? (
        <div>
            <h3>Product Info Form with Editable Resource</h3>
            <label>
                Screen Name:
                <input
                    value={name}
                    type="text"
                    onChange={e => onChangeProduct({ name: e.target.value })} />
            </label>
            <label>
                Price: $
                <input
                    value={price}
                    type="number"
                    onChange={e => onChangeProduct({ price: Number(e.target.value) })} />
            </label>
            <label>
                Rating:
                <input
                    value={rating}
                    type="number"
                    onChange={e => onChangeProduct({ rating: Number(e.target.value) })} />
            </label>
            <button onClick={onResetProduct}>Reset</button>
            <button onClick={onSaveProduct}>Save</button>

        </div>
    ) : <p>...Loading</p>






}

export default ProductInfoForm