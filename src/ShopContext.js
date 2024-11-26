import { createContext, useContext, useReducer } from 'react';
import shopReducer, { initialState } from './shopReducer';

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (product) => {
        const updatedProducts = state.products.concat(product);
        calculateTotal(updatedProducts);

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProducts,
            },
        });
    };

    const removeFromCart = (product) => {
        const updatedProducts = state.products.filter(p => p.id !== product.id);
        calculateTotal(updatedProducts);

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedProducts,
            },
        });
    };

    const calculateTotal = (products) => {
        let total = 0;
        products.forEach((pro) => {
            total += pro.price;
        });

        // Dispatch the total here to update the state
        dispatch({
            type: "CALCULATE_TOTAL_PRICE",
            payload: total,
        });
    };

    const clearCart = (product) => {
        dispatch({
            type: "CLEAR_CART",
            payload: initialState
        })
    }

    const values = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
    };

    return <ShopContext.Provider value={values}>{children}</ShopContext.Provider>;
};

const useShop = () => {
    const context = useContext(ShopContext);

    if (context === undefined) {
        throw new Error("Context must be used inside ShopProvider");
    }
    return context;
};

export default useShop;
