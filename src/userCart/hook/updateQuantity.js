import axios from "axios";
import { useEffect } from "react";
import { useGetUserCart } from "./useGetUserCart";

export const updateQuantity = () => {
    const {individualCart} = useGetUserCart();

    const increaseButton = async (change, id) => {
        // alert('update in quantity')
        try {
            const update = await axios.patch(`http://localhost:2000/api/v2/quantity/${id}`, { change, id },
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