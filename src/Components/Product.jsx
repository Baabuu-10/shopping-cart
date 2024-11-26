import { useEffect, useState } from 'react';
import useShop from '../ShopContext';

const Product = ({ product }) => {
  const { addToCart, removeFromCart, products } = useShop(true);

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    // Check if the product is in the cart and set `isInCart` accordingly
    const isCart = products.some((pro) => pro.id === product.id);
    setIsInCart(isCart);
  }, [products, product.id]);

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }

    // Toggle `isInCart` immediately to update button text
    setIsInCart(!isInCart);
  };

  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${product.urlImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className={`btn ${isInCart ? "btn-secondary" : "btn-primary"}`}
      >
        {isInCart ? "-" : "+"}
      </button>
    </div>
  );
};

export default Product;
