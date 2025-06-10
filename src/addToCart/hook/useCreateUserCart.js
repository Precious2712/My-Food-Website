import axios from "axios";
import { useEffect } from "react";

export const useCreateUserCart = () => {

    const hanleAddToCart = async (id, model = "Menutable", quantity = 1) => {
        console.log('id', id);
        alert('product added to cart')
        try {
            const createUser = await axios.post('https://food-webbackened.onrender.com/createUserCart', { productId: id, quantity, model }, {
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
        hanleAddToCart
    }
};