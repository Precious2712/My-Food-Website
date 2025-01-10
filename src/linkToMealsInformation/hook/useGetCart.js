
import axios from "axios";
import { useEffect } from "react";

export const useGetCart = () => {

    const addToCartBtn = async (id, model = "moreMeals", quantity = 1) => {
        console.log('id', id);
        alert('product added to cart')
        try {
            const createUser = await axios.post('http://localhost:2000/api/v4/createUserCart', { productId: id, quantity, model }, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            console.log(createUser, 'user created');

        } catch (error) {
            console.log('error:', error);
        }
    };

    useEffect(() => {
        // hanleAddToCart()
    }, [])

    return {
        addToCartBtn
    }
};