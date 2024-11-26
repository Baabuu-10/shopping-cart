import Product from "./Product";
const products = [

    {
    
    id: 1,
    name: "Pizza",
    urlImage: "https://images.pexels.com/photos/2180875/pexels-photo-2180875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 0.01
    
    },
    
    {
    
    id: 2,
    name: "Vegan Salad  Below",
    urlImage: "https://images.pexels.com/photos/27400770/pexels-photo-27400770/free-photo-of-organic-salad-with-strawberries-blueberries-herbs-and-edible-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 0.01
    
    },
    
    
    {
    
    id: 3,
    name: "Pesto Past",
    urlImage: "https://images.pexels.com/photos/8668600/pexels-photo-8668600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 0.01
    
    },
    
    
    {
    
    id: 4,
    name: "Udon Salad",
    urlImage: "https://images.pexels.com/photos/15656549/pexels-photo-15656549/free-photo-of-woman-putting-a-meat-dish-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 0.01
    
    },
    
    
    {
    
    id: 5,
    name: "Premium Food",
    urlImage: "https://images.pexels.com/photos/6466303/pexels-photo-6466303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 0.01
    
    },
    {
        id: 6,
    name: "Cool Drink",
    urlImage: "https://images.pexels.com/photos/28893434/pexels-photo-28893434/free-photo-of-refreshing-tropical-cocktail-with-strawberry-garnish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 0.01
 },

];


const Products = () => {
    return (
         <div className="grid">
        {products.map(product => (
            <Product key={product.id} product={product}/>
        ))}
        </div>
    );
  };
  
export default Products;
  
      