import axios from "axios";
import { useEffect } from "react";
import { useGetUserCart } from "./useGetUserCart";

export const updateQuantity = () => {
    const {individualCart} = useGetUserCart();

    const increaseButton = async (change, id) => {
        // alert('update in quantity')
        try {
            const update = await axios.patch(`https://food-webbackened.onrender.com/quantity/${id}`, { change, id },
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                }
            )
            individualCart();
        } catch (error) {
            console.log('error:', error);
        }
    };

    useEffect(() => {
        increaseButton()
    },[])

    return {
        increaseButton
    }
};