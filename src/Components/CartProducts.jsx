import useShop from "../ShopContext"

const CartProducts = () => {

    const { products, removeFromCart, total } = useShop();
  return (
    <div className="cart-products">
        <h1>Cart Products</h1>

        {products.map((product) => (
            <div className="cart-product">
                <div className="cart-title-img">
                    <img src={product.urlImage} alt="" />
                    <span>{product.name}</span>
                </div>
                <h5>${product.price}</h5>

                <span className="delete" onClick={() => removeFromCart(product)}>
                    delete
                </span>
            </div>
        ))}

        <div className="total-price">
            <h2>Total Price : ${total}</h2>
        </div>
    </div>
  )
}

export default CartProducts