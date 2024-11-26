import CartProducts from "../Components/CartProducts"
import Payment from "../Components/Payment"
import useShop from "../ShopContext"


function Cart() {

  const {products} = useShop();

  if(products.length <= 0) return <h1>Cart is Empty</h1>
    
  return (
    <div className="cart-container">
      <CartProducts/>
      <Payment/>
    </div>
  )
}

export default Cart